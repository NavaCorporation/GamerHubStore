using Microsoft.AspNetCore.Mvc;
using GamerHub_Backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace GamerHub_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PurchaseHistoryController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public PurchaseHistoryController(ApplicationDBContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<IActionResult> GetPurchaseHistory()
        {
            var purchaseHistory = await _context.HistorialVentas
                .Include(hv => hv.OrdenCompra)
                .ThenInclude(o => o.DetallesCompras)
                .ThenInclude(dc => dc.Producto)
                .Include(hv => hv.Usuario)
                .Select(hv => new
                {
                    hv.OrdenCompra.Id,
                    hv.OrdenCompra.FechaOrden,
                    hv.OrdenCompra.Estado,
                    Detalles = hv.OrdenCompra.DetallesCompras.Select(dc => new
                    {
                        dc.Producto.NombreProducto,
                        dc.Precio,
                        dc.Cantidad,
                        Total = dc.Precio * dc.Cantidad
                    })
                })
                .ToListAsync();

            return Ok(purchaseHistory);
        }
    }
}