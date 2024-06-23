using System.ComponentModel.DataAnnotations;

namespace GamerHub_Backend.Entities
{
    public class Producto
    {
        public int Id { get; set; }
        [Required]
        public string NombreProducto { get; set; } = null!;
        [Required]
        public decimal Precio { get; set; }
        [Required]
        public string? Caracteristicas { get; set; }
        [Required]
        public string? Descripcion { get; set; }
        [Required]
        public int stock { get; set; }
        public int IdCategoria { get; set; }
        public Categoria Categoria { get; set; }=null!;
        public ICollection<DetallesCompra> DetallesCompras { get; set; } = new List<DetallesCompra>();
        public ICollection<Devolucion> Devoluciones { get; set; } = new List<Devolucion>();
        public ICollection<Comentario > Comentarios { get; set; } = new List<Comentario>();
    }   
}
