using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using GamerHub_Backend.Entities;

namespace GamerHub_Backend.Repository
{
    public class UsuarioRepository
    {
        private readonly ApplicationDBContext _context;

        public UsuarioRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Usuario>> GetAll()
        {
            return await _context.Usuarios.ToListAsync();
        }

        public async Task<Usuario> GetById(int id)
        {
            return await _context.Usuarios.FindAsync(id);
        }
        public async Task Add(Usuario entity)
        {
            await _context.Usuarios.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Update(Usuario entity)
        {
            _context.Usuarios.Update(entity);
            await _context.SaveChangesAsync();
        }
        public async Task Delete(int id)
        {
            var entity = await _context.Usuarios.FindAsync(id);
            _context.Usuarios.Remove(entity);
            await _context.SaveChangesAsync();
        }
    }
}
