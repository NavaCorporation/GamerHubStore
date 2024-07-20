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
        public List<DetallesCompra>? DetallesCompras { get; set; }
        public List<Devolucion>? Devoluciones { get; set; }
        public List<Comentario>? Comentarios { get; set; }
    }   
}
