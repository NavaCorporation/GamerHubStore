using GamerHub_Backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace GamerHub_Backend.Repository
{
    public class ProductoRepository : IProductoRepository
    {
        private readonly ApplicationDBContext _dbContext;

        public ProductoRepository(ApplicationDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Producto>> ObtenerTodos()
        {
            return await _dbContext.Productos
                .Include(p => p.Categoria)
                .ToListAsync();
        }

        public async Task<Producto?> ObtenerPorId(int id)
        {
            return await _dbContext.Productos
                .Include(p => p.Categoria)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Producto> AgregarProductoAsync(Producto producto)
        {
            _dbContext.Productos.Add(producto);
            await _dbContext.SaveChangesAsync();
            return producto;
        }

        public async Task ActualizarProductoAsync(Producto producto)
        {
            _dbContext.Entry(producto).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task EliminarProductoAsync(int id)
        {
            var producto = await _dbContext.Productos.FindAsync(id);
            _dbContext.Productos.Remove(producto);
            await _dbContext.SaveChangesAsync();
        }

    }
}
