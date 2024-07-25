using GamerHub_Backend.Entities;

namespace GamerHub_Backend.Repository
{
    public interface IProductoRepository
    {
        Task<IEnumerable<Producto>> ObtenerTodosLosProductosAsync();
        Task<Producto> ObtenerProductoPorIdAsync(int id);
        Task<Producto> AgregarProductoAsync(Producto producto);
        Task ActualizarProductoAsync(Producto producto);
        Task EliminarProductoAsync(int id);
    }
}
