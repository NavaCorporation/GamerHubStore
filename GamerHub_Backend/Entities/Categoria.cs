using Microsoft.Build.Framework;

namespace GamerHub_Backend.Entities
{
    public class Categoria
    {
        public int Id { get; set; }
        [Required]
        public string NombreCategoria { get; set; } = null!;

        public string Descripcion { get; set; } = null!;

        public ICollection<Producto> Productos { get; set; } = new List<Producto>();

    }
}
