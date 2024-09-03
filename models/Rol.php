<?php
namespace Model;

class Rol extends ActiveRecord
{
    protected static $tabla = 'rol';
    protected static $idTabla = 'rol_id';

    protected static $columnasDB = ['rol_nombre', 'rol_nombre_ct','rol_op','rol_situacion'];

    public $rol_id;
    public $rol_nombre;
    public $rol_nombre_ct;
    public $rol_op;
    public $rol_situacion;

    public function __construct($args = [])
    {
        $this->rol_id = $args['rol_id'] ?? null;
        $this->rol_nombre = $args['rol_nombre'] ?? '';
        $this->rol_nombre_ct = $args['rol_nombre_ct'] ?? '';
        $this->rol_op = $args['rol_op'] ?? null ;
        $this->rol_situacion = $args['rol_situacion'] ?? 1;
    }


}