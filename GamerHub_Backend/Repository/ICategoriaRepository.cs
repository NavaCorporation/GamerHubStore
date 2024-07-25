using GamerHub_Backend.Entities;

namespace GamerHub_Backend.Repository
{
    public interface ICategoriaRepository
    {
        Task<IEnumerable<Categoria>> ObtenerTodasLasCategoriasAsync();
        Task<Categoria> ObtenerCategoriaPorIdAsync(int id);
        Task<Categoria> AgregarCategoriaAsync(Categoria categoria);
        Task ActualizarCategoriaAsync(Categoria categoria);
        Task EliminarCategoriaAsync(int id);
    }

}
