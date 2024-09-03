<?php

namespace Controllers;

use Exception;
use Model\Operacion;
use MVC\Router;

class DetalleController
{

    public static function index(Router $router)
    {
        $router->render('estadisticas/index', []);
    }


    public static function detalleOperacionesAPI()
    {
        try {

            $sql = 'SELECT COUNT(*) AS total_operaciones FROM OPERACION;';

            $datos = Operacion::fetchArray($sql);

            echo json_encode($datos);
        } catch (Exception $e) {
            echo json_encode([
                'detalle' => $e->getMessage(),
                'mensaje' => 'Ocurrió un error',
                'codigo' => 0
            ]);
        }
    }
}
