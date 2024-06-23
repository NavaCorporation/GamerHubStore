using Microsoft.AspNetCore.Authorization.Infrastructure;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GamerHub_Backend.Entities
{
    public class Usuario
    {
        public int Id { get; set; }
        [Required, MaxLength(50)]
        public string Nombre { get; set; } = null!;
        [Required, MaxLength(50)]
        public string Apellido { get; set; } = null!;
        [Required, MaxLength(50)]
        public string Correo { get; set; } = null!;
        [Required, MaxLength(50)]
        public string NombreUsuario { get; set; } = null!;
        [Required, MaxLength(50)]
        public string Contrasena { get; set; } = null!;
        [Required, MaxLength(10)]
        public string? Telefono {  get; set; }
        [Required, MaxLength(7)]
        public string Estado { get; set; } = null!;
        public byte[]? FotoPerfil { get; set; }
        public int RolId { get; set; }
        public Rol Rol { get; set; } = null!; 
        public ICollection<HistorialVenta> HistorialVenta { get; set; } = new List<HistorialVenta>();
        public ICollection<OrdenCompra> ordenCompras { get; set; } = new List<OrdenCompra>();
        public ICollection<Sesion> Sesiones { get; set; } = new List<Sesion>();
        public ICollection<Comentario> Comentarios { get; set; } = new List<Comentario>();

    }
}
