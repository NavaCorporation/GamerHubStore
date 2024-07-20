using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations.Schema;

namespace GamerHub_Backend.Entities
{
    public class OrdenCompra
    {
        public int Id { get; set; }
        public int IdUsuario { get; set; }
        public Usuario Usuario { get; set; } = null!;
        [Column(TypeName = "Date")]
        public DateTime FechaOrden { get; set; }
        [Required]
        public decimal MontoTotal { get; set; }
        public string Estado { get; set; } = null!;
        public string? TipoPaga {  get; set; }
        
        public List<VerificacionEnvio>? VerificacionEnvios { get; set; }
        public List<DetallesCompra>? DetallesCompras { get; set; } 
        public List<HistorialVenta>? HistorialVenta { get; set; } 
        public List<Devolucion>? Devoluciones { get; set; }
        
    }
}
