using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GamerHub_Backend.Migrations
{
    /// <inheritdoc />
    public partial class V02 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DetallesCompra_OrdenCompra_OrdenCompraId",
                table: "DetallesCompra");

            migrationBuilder.DropForeignKey(
                name: "FK_DetallesCompra_Producto_ProductoId",
                table: "DetallesCompra");

            migrationBuilder.DropForeignKey(
                name: "FK_Devolucion_OrdenCompra_OrdenCompraId",
                table: "Devolucion");

            migrationBuilder.DropForeignKey(
                name: "FK_Devolucion_Producto_ProductoId",
                table: "Devolucion");

            migrationBuilder.DropForeignKey(
                name: "FK_HistorialVenta_OrdenCompra_OrdenCompraId",
                table: "HistorialVenta");

            migrationBuilder.DropForeignKey(
                name: "FK_HistorialVenta_Usuarios_UsuarioId",
                table: "HistorialVenta");

            migrationBuilder.DropForeignKey(
                name: "FK_OrdenCompra_Usuarios_UsuarioId",
                table: "OrdenCompra");

            migrationBuilder.DropForeignKey(
                name: "FK_Producto_Categoria_CategoriaId",
                table: "Producto");

            migrationBuilder.DropForeignKey(
                name: "FK_Sesion_Usuarios_UsuarioId",
                table: "Sesion");

            migrationBuilder.DropForeignKey(
                name: "FK_VerificacionEnvio_OrdenCompra_OrdenCompraId",
                table: "VerificacionEnvio");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VerificacionEnvio",
                table: "VerificacionEnvio");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Sesion",
                table: "Sesion");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Producto",
                table: "Producto");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrdenCompra",
                table: "OrdenCompra");

            migrationBuilder.DropPrimaryKey(
                name: "PK_HistorialVenta",
                table: "HistorialVenta");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Devolucion",
                table: "Devolucion");

            migrationBuilder.DropPrimaryKey(
                name: "PK_DetallesCompra",
                table: "DetallesCompra");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categoria",
                table: "Categoria");

            migrationBuilder.RenameTable(
                name: "VerificacionEnvio",
                newName: "VerificacionesEnvio");

            migrationBuilder.RenameTable(
                name: "Sesion",
                newName: "Sesiones");

            migrationBuilder.RenameTable(
                name: "Producto",
                newName: "Productos");

            migrationBuilder.RenameTable(
                name: "OrdenCompra",
                newName: "OrdenCompras");

            migrationBuilder.RenameTable(
                name: "HistorialVenta",
                newName: "HistorialVentas");

            migrationBuilder.RenameTable(
                name: "Devolucion",
                newName: "Devolucions");

            migrationBuilder.RenameTable(
                name: "DetallesCompra",
                newName: "DetallesCompras");

            migrationBuilder.RenameTable(
                name: "Categoria",
                newName: "Categorias");

            migrationBuilder.RenameIndex(
                name: "IX_VerificacionEnvio_OrdenCompraId",
                table: "VerificacionesEnvio",
                newName: "IX_VerificacionesEnvio_OrdenCompraId");

            migrationBuilder.RenameIndex(
                name: "IX_Sesion_UsuarioId",
                table: "Sesiones",
                newName: "IX_Sesiones_UsuarioId");

            migrationBuilder.RenameIndex(
                name: "IX_Producto_CategoriaId",
                table: "Productos",
                newName: "IX_Productos_CategoriaId");

            migrationBuilder.RenameIndex(
                name: "IX_OrdenCompra_UsuarioId",
                table: "OrdenCompras",
                newName: "IX_OrdenCompras_UsuarioId");

            migrationBuilder.RenameIndex(
                name: "IX_HistorialVenta_UsuarioId",
                table: "HistorialVentas",
                newName: "IX_HistorialVentas_UsuarioId");

            migrationBuilder.RenameIndex(
                name: "IX_HistorialVenta_OrdenCompraId",
                table: "HistorialVentas",
                newName: "IX_HistorialVentas_OrdenCompraId");

            migrationBuilder.RenameIndex(
                name: "IX_Devolucion_ProductoId",
                table: "Devolucions",
                newName: "IX_Devolucions_ProductoId");

            migrationBuilder.RenameIndex(
                name: "IX_Devolucion_OrdenCompraId",
                table: "Devolucions",
                newName: "IX_Devolucions_OrdenCompraId");

            migrationBuilder.RenameIndex(
                name: "IX_DetallesCompra_ProductoId",
                table: "DetallesCompras",
                newName: "IX_DetallesCompras_ProductoId");

            migrationBuilder.RenameIndex(
                name: "IX_DetallesCompra_OrdenCompraId",
                table: "DetallesCompras",
                newName: "IX_DetallesCompras_OrdenCompraId");

            migrationBuilder.AlterColumn<DateTime>(
                name: "FechaFinal",
                table: "VerificacionesEnvio",
                type: "Date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<DateTime>(
                name: "FechaEnvio",
                table: "VerificacionesEnvio",
                type: "Date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InicioSesion",
                table: "Sesiones",
                type: "Date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CierreSesion",
                table: "Sesiones",
                type: "Date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<DateTime>(
                name: "FechaOrden",
                table: "OrdenCompras",
                type: "Date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VerificacionesEnvio",
                table: "VerificacionesEnvio",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Sesiones",
                table: "Sesiones",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Productos",
                table: "Productos",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrdenCompras",
                table: "OrdenCompras",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_HistorialVentas",
                table: "HistorialVentas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Devolucions",
                table: "Devolucions",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DetallesCompras",
                table: "DetallesCompras",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categorias",
                table: "Categorias",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DetallesCompras_OrdenCompras_OrdenCompraId",
                table: "DetallesCompras",
                column: "OrdenCompraId",
                principalTable: "OrdenCompras",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DetallesCompras_Productos_ProductoId",
                table: "DetallesCompras",
                column: "ProductoId",
                principalTable: "Productos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Devolucions_OrdenCompras_OrdenCompraId",
                table: "Devolucions",
                column: "OrdenCompraId",
                principalTable: "OrdenCompras",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Devolucions_Productos_ProductoId",
                table: "Devolucions",
                column: "ProductoId",
                principalTable: "Productos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_HistorialVentas_OrdenCompras_OrdenCompraId",
                table: "HistorialVentas",
                column: "OrdenCompraId",
                principalTable: "OrdenCompras",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_HistorialVentas_Usuarios_UsuarioId",
                table: "HistorialVentas",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_OrdenCompras_Usuarios_UsuarioId",
                table: "OrdenCompras",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Productos_Categorias_CategoriaId",
                table: "Productos",
                column: "CategoriaId",
                principalTable: "Categorias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Sesiones_Usuarios_UsuarioId",
                table: "Sesiones",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_VerificacionesEnvio_OrdenCompras_OrdenCompraId",
                table: "VerificacionesEnvio",
                column: "OrdenCompraId",
                principalTable: "OrdenCompras",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DetallesCompras_OrdenCompras_OrdenCompraId",
                table: "DetallesCompras");

            migrationBuilder.DropForeignKey(
                name: "FK_DetallesCompras_Productos_ProductoId",
                table: "DetallesCompras");

            migrationBuilder.DropForeignKey(
                name: "FK_Devolucions_OrdenCompras_OrdenCompraId",
                table: "Devolucions");

            migrationBuilder.DropForeignKey(
                name: "FK_Devolucions_Productos_ProductoId",
                table: "Devolucions");

            migrationBuilder.DropForeignKey(
                name: "FK_HistorialVentas_OrdenCompras_OrdenCompraId",
                table: "HistorialVentas");

            migrationBuilder.DropForeignKey(
                name: "FK_HistorialVentas_Usuarios_UsuarioId",
                table: "HistorialVentas");

            migrationBuilder.DropForeignKey(
                name: "FK_OrdenCompras_Usuarios_UsuarioId",
                table: "OrdenCompras");

            migrationBuilder.DropForeignKey(
                name: "FK_Productos_Categorias_CategoriaId",
                table: "Productos");

            migrationBuilder.DropForeignKey(
                name: "FK_Sesiones_Usuarios_UsuarioId",
                table: "Sesiones");

            migrationBuilder.DropForeignKey(
                name: "FK_VerificacionesEnvio_OrdenCompras_OrdenCompraId",
                table: "VerificacionesEnvio");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VerificacionesEnvio",
                table: "VerificacionesEnvio");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Sesiones",
                table: "Sesiones");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Productos",
                table: "Productos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrdenCompras",
                table: "OrdenCompras");

            migrationBuilder.DropPrimaryKey(
                name: "PK_HistorialVentas",
                table: "HistorialVentas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Devolucions",
                table: "Devolucions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_DetallesCompras",
                table: "DetallesCompras");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categorias",
                table: "Categorias");

            migrationBuilder.RenameTable(
                name: "VerificacionesEnvio",
                newName: "VerificacionEnvio");

            migrationBuilder.RenameTable(
                name: "Sesiones",
                newName: "Sesion");

            migrationBuilder.RenameTable(
                name: "Productos",
                newName: "Producto");

            migrationBuilder.RenameTable(
                name: "OrdenCompras",
                newName: "OrdenCompra");

            migrationBuilder.RenameTable(
                name: "HistorialVentas",
                newName: "HistorialVenta");

            migrationBuilder.RenameTable(
                name: "Devolucions",
                newName: "Devolucion");

            migrationBuilder.RenameTable(
                name: "DetallesCompras",
                newName: "DetallesCompra");

            migrationBuilder.RenameTable(
                name: "Categorias",
                newName: "Categoria");

            migrationBuilder.RenameIndex(
                name: "IX_VerificacionesEnvio_OrdenCompraId",
                table: "VerificacionEnvio",
                newName: "IX_VerificacionEnvio_OrdenCompraId");

            migrationBuilder.RenameIndex(
                name: "IX_Sesiones_UsuarioId",
                table: "Sesion",
                newName: "IX_Sesion_UsuarioId");

            migrationBuilder.RenameIndex(
                name: "IX_Productos_CategoriaId",
                table: "Producto",
                newName: "IX_Producto_CategoriaId");

            migrationBuilder.RenameIndex(
                name: "IX_OrdenCompras_UsuarioId",
                table: "OrdenCompra",
                newName: "IX_OrdenCompra_UsuarioId");

            migrationBuilder.RenameIndex(
                name: "IX_HistorialVentas_UsuarioId",
                table: "HistorialVenta",
                newName: "IX_HistorialVenta_UsuarioId");

            migrationBuilder.RenameIndex(
                name: "IX_HistorialVentas_OrdenCompraId",
                table: "HistorialVenta",
                newName: "IX_HistorialVenta_OrdenCompraId");

            migrationBuilder.RenameIndex(
                name: "IX_Devolucions_ProductoId",
                table: "Devolucion",
                newName: "IX_Devolucion_ProductoId");

            migrationBuilder.RenameIndex(
                name: "IX_Devolucions_OrdenCompraId",
                table: "Devolucion",
                newName: "IX_Devolucion_OrdenCompraId");

            migrationBuilder.RenameIndex(
                name: "IX_DetallesCompras_ProductoId",
                table: "DetallesCompra",
                newName: "IX_DetallesCompra_ProductoId");

            migrationBuilder.RenameIndex(
                name: "IX_DetallesCompras_OrdenCompraId",
                table: "DetallesCompra",
                newName: "IX_DetallesCompra_OrdenCompraId");

            migrationBuilder.AlterColumn<DateTime>(
                name: "FechaFinal",
                table: "VerificacionEnvio",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "Date");

            migrationBuilder.AlterColumn<DateTime>(
                name: "FechaEnvio",
                table: "VerificacionEnvio",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "Date");

            migrationBuilder.AlterColumn<DateTime>(
                name: "InicioSesion",
                table: "Sesion",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "Date");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CierreSesion",
                table: "Sesion",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "Date");

            migrationBuilder.AlterColumn<DateTime>(
                name: "FechaOrden",
                table: "OrdenCompra",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "Date");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VerificacionEnvio",
                table: "VerificacionEnvio",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Sesion",
                table: "Sesion",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Producto",
                table: "Producto",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrdenCompra",
                table: "OrdenCompra",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_HistorialVenta",
                table: "HistorialVenta",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Devolucion",
                table: "Devolucion",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DetallesCompra",
                table: "DetallesCompra",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categoria",
                table: "Categoria",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DetallesCompra_OrdenCompra_OrdenCompraId",
                table: "DetallesCompra",
                column: "OrdenCompraId",
                principalTable: "OrdenCompra",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DetallesCompra_Producto_ProductoId",
                table: "DetallesCompra",
                column: "ProductoId",
                principalTable: "Producto",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Devolucion_OrdenCompra_OrdenCompraId",
                table: "Devolucion",
                column: "OrdenCompraId",
                principalTable: "OrdenCompra",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Devolucion_Producto_ProductoId",
                table: "Devolucion",
                column: "ProductoId",
                principalTable: "Producto",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_HistorialVenta_OrdenCompra_OrdenCompraId",
                table: "HistorialVenta",
                column: "OrdenCompraId",
                principalTable: "OrdenCompra",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_HistorialVenta_Usuarios_UsuarioId",
                table: "HistorialVenta",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_OrdenCompra_Usuarios_UsuarioId",
                table: "OrdenCompra",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Producto_Categoria_CategoriaId",
                table: "Producto",
                column: "CategoriaId",
                principalTable: "Categoria",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Sesion_Usuarios_UsuarioId",
                table: "Sesion",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_VerificacionEnvio_OrdenCompra_OrdenCompraId",
                table: "VerificacionEnvio",
                column: "OrdenCompraId",
                principalTable: "OrdenCompra",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
