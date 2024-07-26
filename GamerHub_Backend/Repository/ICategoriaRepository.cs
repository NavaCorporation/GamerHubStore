using GamerHub_Backend.Entities;

namespace GamerHub_Backend.Repository
{
    public interface ICategoriaRepository
    {
<<<<<<< Updated upstream
        Task<IEnumerable<Categoria>> ObtenerTodasLasCategoriasAsync();
        Task<Categoria> ObtenerCategoriaPorIdAsync(int id);
        Task<Categoria> AgregarCategoriaAsync(Categoria categoria);
        Task ActualizarCategoriaAsync(Categoria categoria);
        Task EliminarCategoriaAsync(int id);
    }

=======
        //crear
        Task<Categoria> CrearCategoria(Categoria categoria);
        //leer
        Task<Categoria> ObtenerCategoria(int id);
        //editar
        Task<Categoria> ModificarCategoria(Categoria categoria);
        //eliminar
        Task EliminarCategoria(int id);

    }
>>>>>>> Stashed changes
}
