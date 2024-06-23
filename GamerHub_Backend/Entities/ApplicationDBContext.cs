using Microsoft.EntityFrameworkCore;
namespace GamerHub_Backend.Entities
{
    public class ApplicationDBContext: DbContext
    {
        public IConfiguration _config {  get; set; }
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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //Datos de roles
            modelBuilder.Entity<Rol>().HasData(
                    new Rol { Id = 1, TipoRol = "cliente"},
                    new Rol { Id = 2, TipoRol = "gestor"},
                    new Rol { Id = 3, TipoRol = "administrador"}
                );
            //Tabla de Usuario
            modelBuilder.Entity<Usuario>()
                .HasOne(u => u.Rol)
                .WithMany(r => r.Usuarios)
                .HasForeignKey(u => u.RolId);

            //Tabla de Categoria
            modelBuilder.Entity<Categoria>();

            //Tabla de Devolucion
            modelBuilder.Entity<Devolucion>()
                .Property(d  => d.FechaDevolucion)
                .HasColumnType("Date");
            //Tabla DetalleCompra
            modelBuilder.Entity<DetallesCompra>();

            //Tabla Historia Venta
            modelBuilder.Entity<HistorialVenta>()
                .Property(h => h.FechaVenta)
                .HasColumnType("Date");

            //Tabla Orden Compra
            modelBuilder.Entity<OrdenCompra>()
                .Property(o => o.FechaOrden)
                .HasColumnType("Date");
            
            //Tabla Producto
            modelBuilder.Entity<Producto>();

            //Tabla Sesion
            modelBuilder.Entity<Sesion>();

            //Tabla VerificacionEnvio
            modelBuilder.Entity<VerificacionEnvio>();

            // Nueva tabla de comentarios
            modelBuilder.Entity<Comentario>();

        }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Rol>Roles { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<DetallesCompra> DetallesCompras { get; set; }
        public DbSet<Devolucion> Devolucions { get; set; }
        public DbSet<HistorialVenta> HistorialVentas { get; set; }
        public DbSet<OrdenCompra> OrdenCompras { get; set; }
        public DbSet<Producto> Productos { get; set; }
        public DbSet<Sesion> Sesiones {  get; set; }
        public DbSet<VerificacionEnvio> VerificacionesEnvio { get; set; }
        public DbSet<Comentario> Comentarios { get; set; }
        
    }

}
