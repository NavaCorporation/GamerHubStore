using GamerHub_Backend.Entities;
using GamerHub_Backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace GamerHub_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : Controller
    {
        private readonly IProductoRepository _productoRepository;
        public ProductosController(IProductoRepository productoRepository)
        {
            _productoRepository = productoRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> ObtenerProductos()
        {
            var productos = await _productoRepository.ObtenerTodosLosProductosAsync();
            return Ok(productos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Producto>> ObtenerProducto(int id)
        {
            var producto = await _productoRepository.ObtenerProductoPorIdAsync(id);

            if (producto == null)
            {
                return NotFound();
            }

            return Ok(producto);
        }

        [HttpPost]
        public async Task<ActionResult<Producto>> AgregarProducto(Producto producto)
        {
            await _productoRepository.AgregarProductoAsync(producto);
            return CreatedAtAction(nameof(ObtenerProducto), new { id = producto.Id }, producto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ActualizarProducto(int id, Producto producto)
        {
            if (id != producto.Id)
            {
                return BadRequest();
            }

            await _productoRepository.ActualizarProductoAsync(producto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> EliminarProducto(int id)
        {
            await _productoRepository.EliminarProductoAsync(id);
            return NoContent();
        }
    }
}
