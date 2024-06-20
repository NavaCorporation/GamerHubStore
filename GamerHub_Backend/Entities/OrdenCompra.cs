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
        
        public ICollection<VerificacionEnvio> VerificacionEnvios { get; set; } = new List<VerificacionEnvio>();
        public ICollection<DetallesCompra> DetallesCompras { get; set; } = new List<DetallesCompra>();
        public ICollection<HistorialVenta> HistorialVenta { get; set; } = new List<HistorialVenta>();
        public ICollection<Devolucion> Devoluciones { get; set; } = new List<Devolucion>();
        
    }
}
