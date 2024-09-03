<div class="row justify-content-center">
    <h3 class="text-center mb-3">Asignacion de roles</h3>
    <form class="border bg-dark bg-gradient text-center text-white shadow rounded p-4 col-lg-6" id="formularioRoles">
        <input type="hidden" name="rol_id" id="rol_id">
        <div class="row mb-3">
            <div class="col">
                <label for="rol_nombre">Nombre del Rol</label>
                <input type="text" name="rol_nombre" id="rol_nombre" class="form-control">
            </div>
            <div class="col">
                <label for="rol_nombre_ct">Nombre rol CT</label>
                <input type="text" name="rol_nombre_ct" id="rol_nombre_ct" class="form-control">
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                <label for="rol_op">Operacion</label>
                <select name="rol_op" id="rol_op" class="form-select">
                    <option value="#">Seleccione...</option>
                    <?php foreach ($operaciones as $op) : ?>
                        <option value="<?= $op['op_id'] ?>"> <?= $op['op_nombre'] ?></option>';
                    <?php endforeach ?>
                </select>
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
        <div class="col-lg-8 table-wrapper">
            <h2 class="text-center mb-4">Roles Ingresadas</h2>
            <div class="table-responsive">
                <table class="table table-bordered table-hover" id="RolesIngresadas">
                    <thead class="table-dark">
                        <tr>
                            <th>No.</th>
                            <th>Nombre del Rol</th>
                            <th>Nombre del Rol CT</th>
                            <th>Operación</th>
                            <th>Modificar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="6" class="text-center">No hay roles registrados</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<script src="<?= asset('./build/js/rol/index.js') ?>"></script>