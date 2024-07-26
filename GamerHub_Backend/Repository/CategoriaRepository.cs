using GamerHub_Backend.Entities;
<<<<<<< Updated upstream
using Microsoft.EntityFrameworkCore;
=======
>>>>>>> Stashed changes

namespace GamerHub_Backend.Repository
{
    public class CategoriaRepository : ICategoriaRepository
    {
<<<<<<< Updated upstream
        private readonly ApplicationDBContext _dbContext;

        public CategoriaRepository(ApplicationDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Categoria>> ObtenerTodasLasCategoriasAsync()
        {
            return await _dbContext.Categorias.Include(c => c.Productos).ToListAsync();
        }

        public async Task<Categoria> ObtenerCategoriaPorIdAsync(int id)
        {
            return await _dbContext.Categorias.Include(c => c.Productos).FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<Categoria> AgregarCategoriaAsync(Categoria categoria)
        {
            _dbContext.Categorias.Add(categoria);
            await _dbContext.SaveChangesAsync();
            return categoria;
        }

        public async Task ActualizarCategoriaAsync(Categoria categoria)
        {
            _dbContext.Entry(categoria).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task EliminarCategoriaAsync(int id)
        {
            var categoria = await _dbContext.Categorias.FindAsync(id);
            _dbContext.Categorias.Remove(categoria);
            await _dbContext.SaveChangesAsync();
        }

=======
        private readonly ApplicationDBContext _dBContext;
        public CategoriaRepository(ApplicationDBContext dBContext) {
            _dBContext = dBContext;
        }

        public async Task<Categoria> ObtenerCategoria(int id) {
            return await _dBContext.Categorias.FindAsync(id);
        }

        public async Task<Categoria> CrearCategoria(Categoria categoria)
        {
            _dBContext.Categorias.Add(categoria);
            await _dBContext.SaveChangesAsync();
            return categoria;
        }

        public async Task<Categoria> ModificarCategoria(Categoria categoria)
        {
            _dBContext.Categorias.Update(categoria);
            await _dBContext.SaveChangesAsync();
            return categoria;
        }

        public async Task EliminarCategoria(int id)
        {
            var categoria = await _dBContext.Categorias.FindAsync(id);
            _dBContext.Categorias.Remove(categoria);
            await _dBContext.SaveChangesAsync();
        }
>>>>>>> Stashed changes
    }
}
