
using GamerHub_Backend.Entities;
using GamerHub_Backend.Repository;
using Microsoft.AspNetCore.Mvc;
namespace GamerHub_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
  
        public class DevolucionController : ControllerBase
        {
            private readonly IDevolucionRepository _devolucionRepository;
            

        public DevolucionController(IDevolucionRepository devolucionRepository)
            {
                _devolucionRepository = devolucionRepository;
            }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var devolucion = await _devolucionRepository.ObtenerPorId(id);
            if (devolucion == null)
            {
                return NotFound();
            }
            return Ok(devolucion);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Devolucion devolucion)
        {
            if (devolucion == null)
            {
                return BadRequest();
            }

            var id = await _devolucionRepository.Crear(devolucion);
            if (id == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error al crear la devolución.");
            }

            return CreatedAtAction(nameof(Get), new { id = id }, devolucion);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Devolucion devolucion)
        {
            if (id != devolucion.Id)
            {
                return BadRequest();
            }

            var result = await _devolucionRepository.Actualizar(devolucion);
            if (!result)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error al actualizar la devolución.");
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _devolucionRepository.Eliminar(id);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}