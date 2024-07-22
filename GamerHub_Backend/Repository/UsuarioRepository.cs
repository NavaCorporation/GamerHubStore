using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using GamerHub_Backend.Entities;
using Microsoft.Identity.Client;
using Microsoft.Extensions.DependencyModel;

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
        public async Task <int?> Crear(Usuario usuario)
        {
            _dbContext.Usuarios.Add(usuario);
            await _dbContext.SaveChangesAsync();
            return usuario.Id;
        }
        public async Task<Usuario?> ObtenerPorId(int id)
        {
            return _dbContext.Usuarios.Where(usuario => usuario.Id == id).ToList()[0];
        }
        public async Task<Rol?> VerificarRol(int rolId)
        {
            return await _dbContext.Roles.FindAsync(rolId);
        }
    }
}

