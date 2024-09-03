<?php

namespace Model;

class Operacion extends ActiveRecord
{
    public static $tabla = 'operacion';
    public static $idTabla = 'op_id';
    public static $columnasDB = ['op_nombre', 'op_estado', 'op_fecha', 'op_comando', 'op_situacion',];

    public $op_id;
    public $op_nombre;
    public $op_estado;
    public $op_fecha;
    public $op_comando;
    public $op_situacion;
    
    public function __construct($args =[])
    {
        $this->op_id = $args['op_id'] ?? null;
        $this->op_nombre = $args['op_nombre'] ?? '';
        $this->op_estado = $args['op_estado'] ?? '';
        $this->op_fecha = $args['op_fecha'] ?? '';
        $this->op_comando = $args['op_comando'] ?? '';
        $this->op_situacion = $args['op_situacion'] ?? 1 ;
    }

}