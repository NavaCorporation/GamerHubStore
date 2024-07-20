using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using GamerHub_Backend.Entities;
using Microsoft.Identity.Client;

namespace GamerHub_Backend.Repository
{
    public class UsuarioRepository: IUsuarioRepository
    {
        private readonly ApplicationDBContext _dbContext;

        public UsuarioRepository(ApplicationDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task <Usuario?> GetByEmailAsync(string email)
        {
            return await _dbContext.Usuarios.SingleOrDefaultAsync(u => u.Correo == email);
        }

        public async Task AddAsync (Usuario usuario)
        {
            await _dbContext.Usuarios.AddAsync(usuario);
            await _dbContext.SaveChangesAsync();
        }
        public async Task <Usuario?> LlamarPorNombre(string nombreUsuario)
        {
            return await _dbContext.Usuarios.SingleOrDefaultAsync(u => u.NombreUsuario == nombreUsuario);

        }
    }
}

