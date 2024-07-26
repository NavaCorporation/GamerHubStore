using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace GamerHub_Backend.Entities
{
    public class Producto
    {
        public int Id { get; set; }
        [Required]
        public string NombreProducto { get; set; } = null!;
        public byte[]? Imagen { get; set; }
        [Required]
        public decimal Precio { get; set; }
        [Required]
        public string? Caracteristicas { get; set; }
        [Required]
        public string? Descripcion { get; set; }
        [Required]
        public int stock { get; set; }
        public int IdCategoria { get; set; }
        public Categoria Categoria { get; set; } = null!;
        [JsonIgnore]
        public List<DetallesCompra>? DetallesCompras { get; set; }
        [JsonIgnore]
        public List<Devolucion>? Devoluciones { get; set; }
        [JsonIgnore]
        public List<Comentario>? Comentarios { get; set; }
    }
}
