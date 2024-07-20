using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GamerHub_Backend.Migrations
{
    /// <inheritdoc />
    public partial class V06 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comentarios_Productos_ProductoId",
                table: "Comentarios");

            migrationBuilder.DropForeignKey(
                name: "FK_Comentarios_Usuarios_UsuarioId",
                table: "Comentarios");

            migrationBuilder.DropForeignKey(
                name: "FK_DetallesCompras_OrdenCompras_OrdenCompraId",
                table: "DetallesCompras");

            migrationBuilder.DropForeignKey(
                name: "FK_DetallesCompras_Productos_ProductoId",
                table: "DetallesCompras");

            migrationBuilder.DropForeignKey(
                name: "FK_VerificacionesEnvio_OrdenCompras_OrdenCompraId",
                table: "VerificacionesEnvio");

            migrationBuilder.AlterColumn<int>(
                name: "OrdenCompraId",
                table: "VerificacionesEnvio",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ProductoId",
                table: "DetallesCompras",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "OrdenCompraId",
                table: "DetallesCompras",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "UsuarioId",
                table: "Comentarios",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ProductoId",
                table: "Comentarios",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Comentarios_Productos_ProductoId",
                table: "Comentarios",
                column: "ProductoId",
                principalTable: "Productos",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Comentarios_Usuarios_UsuarioId",
                table: "Comentarios",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DetallesCompras_OrdenCompras_OrdenCompraId",
                table: "DetallesCompras",
                column: "OrdenCompraId",
                principalTable: "OrdenCompras",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DetallesCompras_Productos_ProductoId",
                table: "DetallesCompras",
                column: "ProductoId",
                principalTable: "Productos",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_VerificacionesEnvio_OrdenCompras_OrdenCompraId",
                table: "VerificacionesEnvio",
                column: "OrdenCompraId",
                principalTable: "OrdenCompras",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comentarios_Productos_ProductoId",
                table: "Comentarios");

            migrationBuilder.DropForeignKey(
                name: "FK_Comentarios_Usuarios_UsuarioId",
                table: "Comentarios");

            migrationBuilder.DropForeignKey(
                name: "FK_DetallesCompras_OrdenCompras_OrdenCompraId",
                table: "DetallesCompras");

            migrationBuilder.DropForeignKey(
                name: "FK_DetallesCompras_Productos_ProductoId",
                table: "DetallesCompras");

            migrationBuilder.DropForeignKey(
                name: "FK_VerificacionesEnvio_OrdenCompras_OrdenCompraId",
                table: "VerificacionesEnvio");

            migrationBuilder.AlterColumn<int>(
                name: "OrdenCompraId",
                table: "VerificacionesEnvio",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ProductoId",
                table: "DetallesCompras",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "OrdenCompraId",
                table: "DetallesCompras",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UsuarioId",
                table: "Comentarios",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ProductoId",
                table: "Comentarios",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Comentarios_Productos_ProductoId",
                table: "Comentarios",
                column: "ProductoId",
                principalTable: "Productos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Comentarios_Usuarios_UsuarioId",
                table: "Comentarios",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

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
                name: "FK_VerificacionesEnvio_OrdenCompras_OrdenCompraId",
                table: "VerificacionesEnvio",
                column: "OrdenCompraId",
                principalTable: "OrdenCompras",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
