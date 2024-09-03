<?php

namespace Controllers;

use Exception;
use Model\Operacion;
use MVC\Router;

class OperacionController
{
    // public static function index(Router $router)
    // {
    //     isAuth();
    //     hasPermission(['TIENDA_ADMIN', 'TIENDA_USER']);
    //     $router->render('aplicacion/index', [], 'layouts/menu');
    // }

    public static function index(Router $router)
    {
        $operaciones = Operacion::find(2);
        $router->render('operaciones/index', [
            'operaciones' => $operaciones
        ]);
    }

    public static function guardarAPI()
    {
        $_POST['op_nombre'] = htmlspecialchars($_POST['op_nombre']);
        $_POST['op_estado'] = htmlspecialchars($_POST['op_estado']);
        $_POST['op_fecha'] = str_replace('T', ' ', $_POST['op_fecha']);
        $_POST['op_comando'] = htmlspecialchars($_POST['op_comando']);

        try {
            $producto = new Operacion($_POST);
            $resultado = $producto->crear();
            http_response_code(200);
            echo json_encode([
                'codigo' => 1,
                'mensaje' => 'Registro Guardado Correctamente'
            ]);
        } catch (Exception $error) {
            http_response_code(500);
            echo json_encode([
                'codigo' => 0,
                'mensaje' => 'Error al Guardar Registro',
                'detalle' => $error->getMessage()
            ]);
        }
    }

    public static function BuscarAPI()
    {
        try {

            $sql = "SELECT * FROM operacion where op_situacion = 1";

            $resultado = Operacion::fetchArray($sql);
            http_response_code(200);
            echo json_encode($resultado);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'codigo' => 0,
                'mensaje' => 'Error al buscar productos',
                'detalle' => $e->getMessage(),
            ]);
        }
    }

    public static function modificarAPI()
    {
        $_POST['op_nombre'] = htmlspecialchars($_POST['op_nombre']);
        $_POST['op_estado'] = htmlspecialchars($_POST['op_estado']);
        $_POST['op_fecha'] = str_replace('T', ' ', $_POST['op_fecha']);
        $_POST['op_comando'] = htmlspecialchars($_POST['op_comando']);
        $id = filter_var($_POST['op_id'], FILTER_SANITIZE_NUMBER_INT);
        try {

            $resultado = Operacion::find($id);
            $resultado->sincronizar($_POST);
            $resultado->actualizar();
            http_response_code(200);
            echo json_encode([
                'codigo' => 3,
                'mensaje' => 'Operación modificado exitosamente',
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'codigo' => 0,
                'mensaje' => 'Error al modificar producto',
                'detalle' => $e->getMessage(),
            ]);
        }
    }

    public static function eliminarAPI()
    {

        $id = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);
        try {

            $app = Operacion::find($id);
            $app->sincronizar([
                'op_situacion' => 0
            ]);
            // echo json_encode($app);
            // exit;
            $app->actualizar();
            http_response_code(200);
            echo json_encode([
                'codigo' => 4,
                'mensaje' => 'Operación eliminado exitosamente',
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'codigo' => 0,
                'mensaje' => 'Error al eliminar la Operación',
                'detalle' => $e->getMessage(),
            ]);
        }
    }
}
