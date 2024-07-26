using GamerHub_Backend.Entities;
using GamerHub_Backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace GamerHub_Backend.Controllers
{
<<<<<<< Updated upstream
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
        public async Task<ActionResult<Categoria>> ObtenerCategoria(int id)
        {
            var categoria = await _categoriasRepository.ObtenerCategoriaPorIdAsync(id);

=======
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriaController : ControllerBase
    {
        private readonly ICategoriaRepository _categoriaRepository;

        public CategoriaController(ICategoriaRepository categoriaRepository)
        {
            _categoriaRepository = categoriaRepository;
        }

        [HttpPost]
        public async Task<IActionResult> AgregarCategoria([Bind("Id,NombreCategoria,Descripcion,Productos")] Categoria categoria)
        {
            if (categoria == null)
            {
                return BadRequest("Categoria es null");
            }

            var productosFiltrados = categoria.Productos?.Select(p => new Producto
            {
                NombreProducto = p.NombreProducto
            }).ToList();

            var nuevaCategoria = new Categoria
            {
                Id = categoria.Id,
                NombreCategoria = categoria.NombreCategoria,
                Descripcion = categoria.Descripcion,
                Productos = productosFiltrados
            };

            var result = await _categoriaRepository.CrearCategoria(nuevaCategoria);
            if (result != null && result.Id > 0)
            {
                return CreatedAtAction(nameof(ObtenerCategoria), new { id = result.Id }, nuevaCategoria);
            }
            return BadRequest("Failed to create category.");
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerCategoria(int id)
        {
            var categoria = await _categoriaRepository.ObtenerCategoria(id);
>>>>>>> Stashed changes
            if (categoria == null)
            {
                return NotFound();
            }
<<<<<<< Updated upstream

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
=======
            return Ok(categoria);
        }

        [HttpPut]
        public async Task<IActionResult> ModificarCategoria([FromBody] Categoria categoria)
        {
            if (categoria == null)
            {
                return BadRequest("Categoria is null.");
            }

            await _categoriaRepository.ModificarCategoria(categoria);
>>>>>>> Stashed changes
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> EliminarCategoria(int id)
        {
<<<<<<< Updated upstream
            await _categoriasRepository.EliminarCategoriaAsync(id);
            return NoContent();
        }
    }
    
=======
            await _categoriaRepository.EliminarCategoria(id);
            return NoContent();
        }
    }
>>>>>>> Stashed changes
}
