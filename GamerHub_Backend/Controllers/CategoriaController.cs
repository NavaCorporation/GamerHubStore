using GamerHub_Backend.Entities;
using GamerHub_Backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace GamerHub_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private readonly ICategoriaRepository _categoriasRepository;
        private readonly IConfiguration _configuration;

        public CategoriasController(ICategoriaRepository categoriasRepository, IConfiguration configuration)
        {
            _categoriasRepository = categoriasRepository;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Categoria>>> ObtenerCategorias()
        {
            var categorias = await _categoriasRepository.ObtenerTodasLasCategoriasAsync();
            return Ok(categorias);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerCategoria(int id)
        {
            var categoria = await _categoriasRepository.ObtenerCategoriaPorIdAsync(id);
            if (categoria == null)
            {
                return NotFound();
            }

            return Ok(categoria);
        }

        [HttpPost]
        public async Task<ActionResult<Categoria>> AgregarCategoria(Categoria categoria)
        {
            await _categoriasRepository.AgregarCategoriaAsync(categoria);
            return CreatedAtAction(nameof(ObtenerCategoria), new { id = categoria.Id }, categoria);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ActualizarCategoria(int id, Categoria categoria)
        {
            if (id != categoria.Id)
            {
                return BadRequest();
            }

            await _categoriasRepository.ActualizarCategoriaAsync(categoria);
            return Ok(categoria);
        }

        [HttpPut]
        public async Task<IActionResult> ModificarCategoria([FromBody] Categoria categoria)
        {
            if (categoria == null)
            {
                return BadRequest("Categoria is null.");
            }

            await _categoriasRepository.ActualizarCategoriaAsync(categoria);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> EliminarCategoria(int id)
        {
            await _categoriasRepository.EliminarCategoriaAsync(id);
            return NoContent();
        }
    }


}
