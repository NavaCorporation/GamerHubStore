using GamerHub_Backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace GamerHub_Backend.Repository
{
    public class DevolucionRepository : IDevolucionRepository
    {
        private readonly ApplicationDBContext _dbContext;
        public DevolucionRepository(ApplicationDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Devolucion?> ObtenerPorId(int id)
        {
            return await _dbContext.Devolucions.FindAsync(id);
        }

        public async Task<int?> Crear(Devolucion devolucion)
        {
            _dbContext.Devolucions.Add(devolucion);
            await _dbContext.SaveChangesAsync();
            return devolucion.Id;
        }

        public async Task<bool> Actualizar(Devolucion devolucion)
        {
            _dbContext.Devolucions.Update(devolucion);
            var result = await _dbContext.SaveChangesAsync();
            return result > 0;
        }

        public async Task<bool> Eliminar(int id)
        {
            var devolucion = await ObtenerPorId(id);
            if (devolucion == null)
            {
                return false;
            }

            _dbContext.Devolucions.Remove(devolucion);
            var result = await _dbContext.SaveChangesAsync();
            return result > 0;
        }
    }
}
