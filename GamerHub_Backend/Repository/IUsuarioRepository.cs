using GamerHub_Backend.Entities;

namespace GamerHub_Backend.Repository
{
    public interface IUsuarioRepository
    {
        Task<Usuario?> GetByEmailAsync(string email);
        Task<Usuario?> LlamarPorNombre(string nombreUsuario);
        Task AddAsync(Usuario usuario);
    }
}
