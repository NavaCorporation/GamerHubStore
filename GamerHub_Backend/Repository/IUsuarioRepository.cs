using GamerHub_Backend.Entities;

namespace GamerHub_Backend.Repository
{
    public interface IUsuarioRepository
    {
        Task<Usuario?> GetByEmailAsync(string email);
        Task<Usuario?> LlamarPorNombre(string nombreUsuario);
        Task<Usuario?> ObtenerPorId(int id);
        Task<int?> Crear(Usuario usuario);
        Task<Rol?> VerificarRol(int rolId);
        Task AddAsync(Usuario usuario);
    }
}
