import { Dropdown } from "bootstrap";
import Swal from "sweetalert2";
import { validarFormulario } from "../funciones";
import { FALSE } from "sass";


const formulario = document.getElementById('formularioOperaciones');
const TablaOperaciones = document.getElementById('OperacionesIngresadas');
const BtnGuardar = document.getElementById('BtnGuardar');
const BtnModificar = document.getElementById('BtnModificar');
const BtnCancelar = document.getElementById('BtnCancelar');

TablaOperaciones.parentElement.parentElement.classList.add('d-none');
BtnModificar.parentElement.classList.add('d-none');
BtnCancelar.parentElement.classList.add('d-none');

const guardar = async (e) => {
    e.preventDefault();

    BtnGuardar.disabled = true;

    if (!validarFormulario(formulario, ['op_id'])) {
        Swal.fire({
            title: "Campos vacios",
            text: "Debe llenar todos los campos",
            icon: "info"
        })
        BtnGuardar.disabled = false;
        return
    }

    try {
        const body = new FormData(formulario)
        const url = '/IS3_CASTELLANOS_RONALDD/API/operaciones/guardar';

        const config = {
            method: 'POST',
            body
        }

        const respuesta = await fetch(url, config);
        const data = await respuesta.json();
        const { codigo, mensaje, detalle } = data

        if (codigo == 1) {

            Swal.fire({
                title: '¡Éxito!',
                text: mensaje,
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                background: '#e0f7fa',
                customClass: {
                    title: 'custom-title-class',
                    text: 'custom-text-class'
                }

            });
            formulario.reset();
            Buscar();
        } else {
            Swal.fire({
                title: '¡Error!',
                text: mensaje,
                icon: 'danger',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                background: '#e0f7fa',
                customClass: {
                    title: 'custom-title-class',
                    text: 'custom-text-class'
                }

            });
        }

    } catch (error) {
        console.log(error)
    }
    BtnGuardar.disabled = false;
}

const Buscar = async () => {

    const url = '/IS3_CASTELLANOS_RONALDD/API/operaciones/buscar';

    const config = {
        method: 'GET'
    }

    const respuesta = await fetch(url, config);
    const data = await respuesta.json();
    TablaOperaciones.tBodies[0].innerHTML = '';
    const fragment = document.createDocumentFragment();
    let contador = 1;

    if (data.length > 0) {
        TablaOperaciones.parentElement.parentElement.classList.remove('d-none');
        data.forEach(op => {
            const tr = document.createElement('tr');
            const celda1 = document.createElement('td');
            const celda2 = document.createElement('td');
            const celda3 = document.createElement('td');
            const celda4 = document.createElement('td');
            const celda5 = document.createElement('td');
            const celda6 = document.createElement('td');
            const celda7 = document.createElement('td');

            const BtnModificar = document.createElement('button');
            const BtnEliminar = document.createElement('button');

            BtnModificar.innerHTML = '<i class="bi bi-pencil"></i>';
            BtnModificar.classList.add('btn', 'btn-warning', 'w-100', 'text-uppercase', 'fw-bold', 'shadow', 'border-0');

            BtnEliminar.innerHTML = '<i class="bi bi-trash3"></i>';
            BtnEliminar.classList.add('btn', 'btn-danger', 'w-100', 'text-uppercase', 'fw-bold', 'shadow', 'border-0');

            BtnModificar.addEventListener('click', () => llenarDatos(op));
            BtnEliminar.addEventListener('click', () => Eliminar(op))

            celda1.innerText = contador;
            celda2.innerText = op.op_nombre;
            celda3.innerText = op.op_estado;
            celda4.innerText = op.op_fecha
            celda5.innerText = op.op_comando;
            celda6.appendChild(BtnModificar)
            celda7.appendChild(BtnEliminar)

            tr.appendChild(celda1);
            tr.appendChild(celda2);
            tr.appendChild(celda3);
            tr.appendChild(celda4);
            tr.appendChild(celda5);
            tr.appendChild(celda6);
            tr.appendChild(celda7);
            fragment.appendChild(tr);
            contador++;

        })

    } else {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerText = 'No hay Operacines Registrados ';
        tr.classList.add('text-center');
        td.colSpan = 7;

        tr.appendChild(td);
        fragment.appendChild(tr);
    }
    TablaOperaciones.tBodies[0].appendChild(fragment);
}

const llenarDatos = (op) => {

    TablaOperaciones.parentElement.parentElement.classList.add('d-none');
    BtnGuardar.parentElement.classList.add('d-none');
    BtnModificar.parentElement.classList.remove('d-none');
    BtnCancelar.parentElement.classList.remove('d-none');

    formulario.op_id.value = op.op_id;
    formulario.op_nombre.value = op.op_nombre;
}

const Cancelar = () => {

    TablaOperaciones.parentElement.parentElement.classList.remove('d-none');
    BtnGuardar.parentElement.classList.remove('d-none');
    BtnModificar.parentElement.classList.add('d-none');
    BtnCancelar.parentElement.classList.add('d-none');

    formulario.reset();
    Buscar();
}


const Modificar = async (e) => {
    e.preventDefault()

    if (!validarFormulario(formulario)) {
        Swal.fire({
            title: "Campos vacios",
            text: "Debe llenar todos los campos",
            icon: "info"
        })
        return
    }

    try {
        const body = new FormData(formulario)
        const url = '/IS3_CASTELLANOS_RONALDD/API/operaciones/modificar';

        const config = {
            method: 'POST',
            body
        }

        const respuesta = await fetch(url, config);
        const data = await respuesta.json();
        const { codigo, mensaje, detalle } = data

        if (codigo == 3) {

            Swal.fire({
                title: '¡Éxito!',
                text: mensaje,
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                background: '#e0f7fa',
                customClass: {
                    title: 'custom-title-class',
                    text: 'custom-text-class'
                }

            });
            formulario.reset();
            Cancelar();
            Buscar();
        } else {
            Swal.fire({
                title: '¡Error!',
                text: mensaje,
                icon: 'danger',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                background: '#e0f7fa',
                customClass: {
                    title: 'custom-title-class',
                    text: 'custom-text-class'
                }

            });
        }
    } catch (error) {
        console.log(error);
    }
}

const Eliminar = async (operacion) => {
    let confirmacion = await Swal.fire({
        title: '¿Está seguro de que desea eliminar esta operacion?',
        text: "Esta acción es irreversible.",
        icon: 'warning',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Sí, eliminar',
        denyButtonText: 'No, cancelar',
        confirmButtonColor: '#3085d6',
        denyButtonColor: '#d33',
        background: '#fff3e0',
        customClass: {
            title: 'custom-title-class',
            text: 'custom-text-class',
            confirmButton: 'custom-confirm-button',
            denyButton: 'custom-deny-button'
        }
    });
    if (confirmacion.isConfirmed) {

        try {

            const body = new FormData()
            body.append('id', operacion.op_id)

            const url = '/IS3_CASTELLANOS_RONALDD/API/operaciones/eliminar';
            const config = {
                method: 'POST',
                body
            }

            const respuesta = await fetch(url, config);
            const data = await respuesta.json();
            const { codigo, mensaje, detalle } = data

            if (codigo == 4) {

                Swal.fire({
                    title: '¡Éxito!',
                    text: mensaje,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    background: '#e0f7fa',
                    customClass: {
                        title: 'custom-title-class',
                        text: 'custom-text-class'
                    }

                });
                formulario.reset();
                Buscar();
            } else {
                Swal.fire({
                    title: '¡Error!',
                    text: mensaje,
                    icon: 'danger',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    background: '#e0f7fa',
                    customClass: {
                        title: 'custom-title-class',
                        text: 'custom-text-class'
                    }

                });
            }
        } catch (error) {
            console.log(error)
        }
    }
}

Buscar();
formulario.addEventListener('submit', guardar)
BtnCancelar.addEventListener('click', Cancelar)
BtnModificar.addEventListener('click', Modificar)