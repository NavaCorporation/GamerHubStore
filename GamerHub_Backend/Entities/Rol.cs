using System.ComponentModel.DataAnnotations;

namespace GamerHub_Backend.Entities
{
    public class Rol
    {
        public int Id { get; set; }
        [Required]
        public string TipoRol {  get; set; } = null!;
        public ICollection<Usuario> Usuarios { get; set; } = new List<Usuario>();

    }
}
