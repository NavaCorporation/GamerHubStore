﻿// <auto-generated />
using System;
using GamerHub_Backend.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace GamerHub_Backend.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    partial class ApplicationDBContexModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("GamerHub_Backend.Entities.Categoria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NombreCategoria")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Categorias");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Comentario", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ComentarioUsuario")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IdProducto")
                        .HasColumnType("int");

                    b.Property<int>("IdUsuario")
                        .HasColumnType("int");

                    b.Property<int?>("ProductoId")
                        .HasColumnType("int");

                    b.Property<int?>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ProductoId");

                    b.HasIndex("UsuarioId");

                    b.ToTable("Comentarios");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.DetallesCompra", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Cantidad")
                        .HasColumnType("int");

                    b.Property<int>("IdOrden")
                        .HasColumnType("int");

                    b.Property<int>("IdProducto")
                        .HasColumnType("int");

                    b.Property<int?>("OrdenCompraId")
                        .HasColumnType("int");

                    b.Property<decimal>("Precio")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int?>("ProductoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OrdenCompraId");

                    b.HasIndex("ProductoId");

                    b.ToTable("DetallesCompras");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Devolucion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Estado")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("FechaDevolucion")
                        .HasColumnType("Date");

                    b.Property<int>("IdOreden")
                        .HasColumnType("int");

                    b.Property<int>("IdProducto")
                        .HasColumnType("int");

                    b.Property<int>("OrdenCompraId")
                        .HasColumnType("int");

                    b.Property<int>("ProductoId")
                        .HasColumnType("int");

                    b.Property<string>("Razon")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("OrdenCompraId");

                    b.HasIndex("ProductoId");

                    b.ToTable("Devolucions");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.HistorialVenta", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("FechaVenta")
                        .HasColumnType("Date");

                    b.Property<int>("IdOrden")
                        .HasColumnType("int");

                    b.Property<int>("IdUsuario")
                        .HasColumnType("int");

                    b.Property<decimal?>("MontoTotal")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int?>("OrdenCompraId")
                        .HasColumnType("int");

                    b.Property<int?>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OrdenCompraId");

                    b.HasIndex("UsuarioId");

                    b.ToTable("HistorialVentas");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.OrdenCompra", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Estado")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("FechaOrden")
                        .HasColumnType("Date");

                    b.Property<int>("IdUsuario")
                        .HasColumnType("int");

                    b.Property<decimal>("MontoTotal")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("TipoPaga")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UsuarioId");

                    b.ToTable("OrdenCompras");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Producto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Caracteristicas")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CategoriaId")
                        .HasColumnType("int");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IdCategoria")
                        .HasColumnType("int");

                    b.Property<string>("NombreProducto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Precio")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("stock")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CategoriaId");

                    b.ToTable("Productos");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Rol", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("TipoRol")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Roles");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            TipoRol = "cliente"
                        },
                        new
                        {
                            Id = 2,
                            TipoRol = "gestor"
                        },
                        new
                        {
                            Id = 3,
                            TipoRol = "administrador"
                        });
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Sesion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CierreSesion")
                        .HasColumnType("Date");

                    b.Property<string>("Estado")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IdUsuario")
                        .HasColumnType("int");

                    b.Property<DateTime>("InicioSesion")
                        .HasColumnType("Date");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UsuarioId");

                    b.ToTable("Sesiones");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Usuario", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Apellido")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Contrasena")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Correo")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Estado")
                        .IsRequired()
                        .HasMaxLength(7)
                        .HasColumnType("nvarchar(7)");

                    b.Property<byte[]>("FotoPerfil")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("NombreUsuario")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("RolId")
                        .HasColumnType("int");

                    b.Property<string>("Telefono")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.HasKey("Id");

                    b.HasIndex("RolId");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.VerificacionEnvio", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Estado")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("FechaEnvio")
                        .HasColumnType("Date");

                    b.Property<DateTime>("FechaFinal")
                        .HasColumnType("Date");

                    b.Property<int>("IdOrden")
                        .HasColumnType("int");

                    b.Property<int>("NumeroSeguimiento")
                        .HasColumnType("int");

                    b.Property<int?>("OrdenCompraId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OrdenCompraId");

                    b.ToTable("VerificacionesEnvio");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Comentario", b =>
                {
                    b.HasOne("GamerHub_Backend.Entities.Producto", "Producto")
                        .WithMany("Comentarios")
                        .HasForeignKey("ProductoId");

                    b.HasOne("GamerHub_Backend.Entities.Usuario", "Usuario")
                        .WithMany("Comentarios")
                        .HasForeignKey("UsuarioId");

                    b.Navigation("Producto");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.DetallesCompra", b =>
                {
                    b.HasOne("GamerHub_Backend.Entities.OrdenCompra", "OrdenCompra")
                        .WithMany("DetallesCompras")
                        .HasForeignKey("OrdenCompraId");

                    b.HasOne("GamerHub_Backend.Entities.Producto", "Producto")
                        .WithMany("DetallesCompras")
                        .HasForeignKey("ProductoId");

                    b.Navigation("OrdenCompra");

                    b.Navigation("Producto");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Devolucion", b =>
                {
                    b.HasOne("GamerHub_Backend.Entities.OrdenCompra", "OrdenCompra")
                        .WithMany("Devoluciones")
                        .HasForeignKey("OrdenCompraId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GamerHub_Backend.Entities.Producto", "Producto")
                        .WithMany("Devoluciones")
                        .HasForeignKey("ProductoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("OrdenCompra");

                    b.Navigation("Producto");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.HistorialVenta", b =>
                {
                    b.HasOne("GamerHub_Backend.Entities.OrdenCompra", "OrdenCompra")
                        .WithMany("HistorialVenta")
                        .HasForeignKey("OrdenCompraId");

                    b.HasOne("GamerHub_Backend.Entities.Usuario", "Usuario")
                        .WithMany("HistorialVenta")
                        .HasForeignKey("UsuarioId");

                    b.Navigation("OrdenCompra");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.OrdenCompra", b =>
                {
                    b.HasOne("GamerHub_Backend.Entities.Usuario", "Usuario")
                        .WithMany("ordenCompras")
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Producto", b =>
                {
                    b.HasOne("GamerHub_Backend.Entities.Categoria", "Categoria")
                        .WithMany("Productos")
                        .HasForeignKey("CategoriaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Categoria");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Sesion", b =>
                {
                    b.HasOne("GamerHub_Backend.Entities.Usuario", "Usuario")
                        .WithMany("Sesiones")
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Usuario", b =>
                {
                    b.HasOne("GamerHub_Backend.Entities.Rol", "Rol")
                        .WithMany("Usuarios")
                        .HasForeignKey("RolId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Rol");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.VerificacionEnvio", b =>
                {
                    b.HasOne("GamerHub_Backend.Entities.OrdenCompra", "OrdenCompra")
                        .WithMany("VerificacionEnvios")
                        .HasForeignKey("OrdenCompraId");

                    b.Navigation("OrdenCompra");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Categoria", b =>
                {
                    b.Navigation("Productos");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.OrdenCompra", b =>
                {
                    b.Navigation("DetallesCompras");

                    b.Navigation("Devoluciones");

                    b.Navigation("HistorialVenta");

                    b.Navigation("VerificacionEnvios");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Producto", b =>
                {
                    b.Navigation("Comentarios");

                    b.Navigation("DetallesCompras");

                    b.Navigation("Devoluciones");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Rol", b =>
                {
                    b.Navigation("Usuarios");
                });

            modelBuilder.Entity("GamerHub_Backend.Entities.Usuario", b =>
                {
                    b.Navigation("Comentarios");

                    b.Navigation("HistorialVenta");

                    b.Navigation("Sesiones");

                    b.Navigation("ordenCompras");
                });
#pragma warning restore 612, 618
        }
    }
}
