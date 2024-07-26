using Microsoft.EntityFrameworkCore;
namespace GamerHub_Backend.Entities
{
    public class ApplicationDBContext : DbContext
    {
        public IConfiguration _config { get; set; }
        public ApplicationDBContext(IConfiguration config)
        {
            _config = config;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_config.GetConnectionString("Connection"));
            }
        }
        ///////////////

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.Property(e => e.FotoPerfil).HasColumnType("varbinary(max)");
            });
            // Datos de roles
            modelBuilder.Entity<Rol>().HasData(
                new Rol { Id = 1, TipoRol = "cliente" },
                new Rol { Id = 2, TipoRol = "gestor" },
                new Rol { Id = 3, TipoRol = "administrador" }
            );

            // Tabla de Usuario
            modelBuilder.Entity<Usuario>()
                .HasOne(u => u.Rol)
                .WithMany(r => r.Usuarios)
                .HasForeignKey(u => u.RolId);

            // Tabla de Categoria
            modelBuilder.Entity<Categoria>();

            // Tabla de Devolucion
            modelBuilder.Entity<Devolucion>()
                .Property(d => d.FechaDevolucion)
                .HasColumnType("Date");

            // Tabla DetallesCompra
            modelBuilder.Entity<DetallesCompra>()
                .Property(d => d.Precio)
                .HasColumnType("decimal(18,2)");

            // Tabla HistorialVenta
            modelBuilder.Entity<HistorialVenta>()
                .Property(h => h.FechaVenta)
                .HasColumnType("Date");

            modelBuilder.Entity<HistorialVenta>()
                .Property(h => h.MontoTotal)
                .HasColumnType("decimal(18,2)");

            // Tabla OrdenCompra
            modelBuilder.Entity<OrdenCompra>()
                .Property(o => o.FechaOrden)
                .HasColumnType("Date");

            modelBuilder.Entity<OrdenCompra>()
                .Property(o => o.MontoTotal)
                .HasColumnType("decimal(18,2)");

            // Tabla Producto
            modelBuilder.Entity<Producto>()
                .Property(p => p.Precio)
                .HasColumnType("decimal(18,2)");

            // Tabla Sesion
            modelBuilder.Entity<Sesion>();

            // Tabla VerificacionEnvio
            modelBuilder.Entity<VerificacionEnvio>();

            // Nueva tabla de comentarios
            modelBuilder.Entity<Comentario>();
        }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Rol> Roles { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<DetallesCompra> DetallesCompras { get; set; }
        public DbSet<Devolucion> Devolucions { get; set; }
        public DbSet<HistorialVenta> HistorialVentas { get; set; }
        public DbSet<OrdenCompra> OrdenCompras { get; set; }
        public DbSet<Producto> Productos { get; set; }
        public DbSet<Sesion> Sesiones { get; set; }
        public DbSet<VerificacionEnvio> VerificacionesEnvio { get; set; }
        public DbSet<Comentario> Comentarios { get; set; }

    }

}
