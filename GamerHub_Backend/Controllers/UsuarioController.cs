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


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel login)
        {
            var user = await _usuarioRepository.GetByEmailAsync(login.Correo);
            if (user == null || user.Contrasena != login.Contrasena)
            {
                return Unauthorized(new { message = "Correo o contraseña inválidos" });
            }
            return Ok(new { message = "Login exitoso" });
        }

        

        public class LoginModel
        {
        public string Correo { get; set; } = null!;
        public string Contrasena { get; set; } = null!;
        }
    }

    

}

