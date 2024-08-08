using GamerHub_Backend.Entities;

namespace GamerHub_Backend.Repository
{
    public class IRepositorioHistorial
    {
        public interface IHistorialVentaRepository
        {
            Task<List<HistorialVenta>> ObtenerTodos();
            Task<HistorialVenta?> ObtenerPorFecha(DateTime fecha);
            Task<HistorialVenta?> ObtenerPorOrdenCompra(int idOrdenCompra);
            Task<bool> EliminarPorOrdenCompra(int idOrdenCompra);
        }
    }
}
