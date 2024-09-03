<?php 
require_once __DIR__ . '/../includes/app.php';


use MVC\Router;
use Controllers\AppController;
use Controllers\OperacionController;
use Controllers\UsuarioController;
use Controllers\RolController;

$router = new Router();
$router->setBaseURL('/' . $_ENV['APP_NAME']);

$router->get('/', [AppController::class,'index']);

// USUARIOS
$router->get('/usuarios', [UsuarioController::class, 'index']);
$router->post('/API/usuario/guardar', [UsuarioController::class, 'guardarAPI']);
$router->get('/API/usuario/buscar', [UsuarioController::class, 'buscarAPI']);
$router->post('/API/usuario/modificar', [UsuarioController::class, 'modificarAPI']);
$router->post('/API/usuario/eliminar', [UsuarioController::class, 'eliminarAPI']);

// OPERACIONES
$router->get('/operaciones', [OperacionController::class, 'index']);
$router->post('/API/operaciones/guardar', [OperacionController::class, 'guardarAPI']);
$router->get('/API/operaciones/buscar', [OperacionController::class, 'buscarAPI']);
$router->post('/API/operaciones/modificar', [OperacionController::class, 'modificarAPI']);
$router->post('/API/operaciones/eliminar', [OperacionController::class, 'eliminarAPI']);

// ROL
$router->get('/rol', [RolController::class, 'index']);
$router->post('/API/rol/guardar', [RolController::class, 'guardarAPI']);
$router->get('/API/rol/buscar', [RolController::class, 'buscarAPI']);
$router->post('/API/rol/modificar', [RolController::class, 'modificarAPI']);
$router->post('/API/rol/eliminar', [RolController::class, 'eliminarAPI']);

// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();
