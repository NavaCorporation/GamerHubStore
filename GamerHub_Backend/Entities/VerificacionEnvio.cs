using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GamerHub_Backend.Entities
{
    public class VerificacionEnvio
    {
        public int Id { get; set; }
        [Column(TypeName = "Date")]
        public DateTime FechaEnvio { get; set; }
        [Column(TypeName = "Date")]
        public DateTime FechaFinal {  get; set; }
        [Required]
        public int NumeroSeguimiento { get; set; }
        [Required]
        public string Estado { get; set; } = null!;
        public int IdOrden { get; set; }
        public OrdenCompra OrdenCompra { get; set; } = null!;
    }
}
