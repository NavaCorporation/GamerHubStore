using GamerHub_Backend.Entities;
using GamerHub_Backend.Repository;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.CodeAnalysis.Scripting;
using System.Security.Claims;
using System.Text;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using NuGet.Protocol.Plugins;
using Microsoft.EntityFrameworkCore;

namespace GamerHub_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;
        private readonly IConfiguration _configuration;


        public UsuarioController(IUsuarioRepository usuarioRepository, IConfiguration configuration)
        {
            _usuarioRepository = usuarioRepository;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromForm] Usuario usuario, [FromForm] IFormFile? profilePicture)
        {
            try
            {
                var existingUsuario = await _usuarioRepository.GetByEmailAsync(usuario.Correo);
                if (existingUsuario != null)
                {
                    return BadRequest(new { message = "El correo ya está registrado." });
                }

                var rol = await _usuarioRepository.VerificarRol(usuario.RolId);
                if (rol == null)
                {
                    return BadRequest(new { message = "Rol no válido." });
                }

                if (profilePicture != null && profilePicture.Length > 0)
                {
                    using (var memoryStream = new MemoryStream())
                    {
                        await profilePicture.CopyToAsync(memoryStream);
                        usuario.FotoPerfil = memoryStream.ToArray();
                    }
                }

                usuario.Rol = null;
                await _usuarioRepository.AddAsync(usuario);

                return Ok(new { message = "Usuario registrado exitosamente." });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.InnerException?.Message ?? ex.Message);
                return StatusCode(500, new { message = "Error al registrar el usuario.", details = ex.InnerException?.Message ?? ex.Message });
            }
        }

        [HttpGet]
        public async Task<ActionResult<Usuario>> ObtenerUsuarioPorId(int id)
        {
            var usuario = await _usuarioRepository.ObtenerPorId(id);
            if (usuario == null) {
                return NotFound();
            }
            return usuario;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel login)
        {
            var user = await _usuarioRepository.GetByEmailAsync(login.Correo);
            if (user == null || user.Contrasena != login.Contrasena)
            {
                return Unauthorized(new { message = "Correo o contraseña inválidos" });
            }
            return Ok(user);
        }

        

        public class LoginModel
        {
        public string Correo { get; set; } = null!;
        public string Contrasena { get; set; } = null!;
        }
    }

    

}

