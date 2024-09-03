<div class="row justify-content-center">
    <h3 class="text-center mb-3">Registro de Operaciones</h3>
    <form class="border bg-light shadow rounded p-4 col-lg-5 bg-dark bg-gradient text-white text-center" id="formularioOperaciones">
        <input type="hidden" name="op_id" id="op_id">
        <div class="row mb-3">
            <div class="col">
                <label for="op_nombre">Nombre de la Operación</label>
                <input type="text" name="op_nombre" id="op_nombre" class="form-control">
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                <label for="op_estado">Estado de la Operación</label>
                <select class="form-select" name="op_estado" id="op_estado">
                    <option selected>Seleccione...</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="En Proceso">En proceso</option>
                    <option value="Finalizada">Finalizada</option>
                </select>
            </div>
            <div class="col">
                <label for="op_fecha">Fecha de la Operación</label>
                <input type="datetime-local" name="op_fecha" id="op_fecha" class="form-control">
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                <label for="op_comando">Nombre del Comando</label>
                <input type="text" name="op_comando" id="op_comando" class="form-control">
            </div>
        </div>

        <div class="row mb-3 justify-content-center text-center ">
            <div class="col-lg-3">
                <button type="submit" id="BtnGuardar" class="btn btn-warning w-100">Guardar <i class="bi bi-floppy-fill"></i></button>
            </div>
            <div class="col-lg-4">
                <button type="button" id="BtnModificar" class="btn btn-success w-100 text-uppercase shadow border-0">Modificar <i class="bi bi-pencil"></i></button>
            </div>
            <div class="col-lg-4">
                <button type="button" id="BtnCancelar" class="btn btn-primary w-100 text-uppercase shadow border-0">Cancelar <i class="bi bi-x-circle-fill"></i></button>
            </div>
        </div>

    </form>

    <div class="row justify-content-center mt-5">
        <div class="col-lg-10 table-wrapper">
            <h2 class="text-center mb-4">Operaciones Ingresadas</h2>
            <div class="table-responsive">
                <table class="table table-bordered table-hover" id="OperacionesIngresadas">
                    <thead class="table-dark">
                        <tr>
                            <th>No.</th>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Fecha</th>
                            <th>Comando</th>
                            <th>Modificar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="7" class="text-center">No existen registros</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>




<script src="<?= asset('./build/js/operaciones/index.js') ?>"></script>