import { Dropdown } from "bootstrap";
import { validarFormulario } from "../funciones";
import Swal from "sweetalert2";


const formulario = document.getElementById('formularioRoles');
const TablaRoles = document.getElementById('RolesIngresadas');
const BtnGuardar = document.getElementById('BtnGuardar');
const BtnModificar = document.getElementById('BtnModificar');
const BtnCancelar = document.getElementById('BtnCancelar');

TablaRoles.parentElement.parentElement.classList.add('d-none');
BtnModificar.parentElement.classList.add('d-none');
BtnCancelar.parentElement.classList.add('d-none');

const guardar = async (e) => {
    e.preventDefault();

    BtnGuardar.disabled = true;

    if (!validarFormulario(formulario, ['rol_id'])) {
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
        const url = '/IS3_CASTELLANOS_RONALDD/API/rol/guardar';

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

    const url = '/IS3_CASTELLANOS_RONALDD/API/rol/buscar';

    const config = {
        method: 'GET'
    }

    const respuesta = await fetch(url, config);
    const data = await respuesta.json();
    // console.log(data);
    TablaRoles.tBodies[0].innerHTML = '';
    const fragment = document.createDocumentFragment();
    let contador = 1;

    if (data.length > 0) {
        TablaRoles.parentElement.parentElement.classList.remove('d-none');
        data.forEach(roles => {
            const tr = document.createElement('tr');
            const celda1 = document.createElement('td');
            const celda2 = document.createElement('td');
            const celda3 = document.createElement('td');
            const celda4 = document.createElement('td');
            const celda5 = document.createElement('td');
            const celda6 = document.createElement('td');

            const BtnModificar = document.createElement('button');
            const BtnEliminar = document.createElement('button');

            BtnModificar.innerHTML = '<i class="bi bi-pencil"></i>';
            BtnModificar.classList.add('btn', 'btn-warning', 'w-100', 'text-uppercase', 'fw-bold', 'shadow', 'border-0');

            BtnEliminar.innerHTML = '<i class="bi bi-trash3"></i>';
            BtnEliminar.classList.add('btn', 'btn-danger', 'w-100', 'text-uppercase', 'fw-bold', 'shadow', 'border-0');

            BtnModificar.addEventListener('click', () => llenarDatos(roles));
            BtnEliminar.addEventListener('click', () => Eliminar(roles))

            celda1.innerText = contador;
            celda2.innerText = roles.rol_nombre;
            celda3.innerText = roles.rol_nombre_ct;
            celda4.innerText = roles.op_nombre;
            celda5.appendChild(BtnModificar)
            celda6.appendChild(BtnEliminar)

            tr.appendChild(celda1);
            tr.appendChild(celda2);
            tr.appendChild(celda3);
            tr.appendChild(celda4);
            tr.appendChild(celda5);
            tr.appendChild(celda6);
            fragment.appendChild(tr);
            contador++;

        })

    } else {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerText = 'No hay app Registrados ';
        tr.classList.add('text-center');
        td.colSpan = 4;

        tr.appendChild(td);
        fragment.appendChild(tr);
    }
    TablaRoles.tBodies[0].appendChild(fragment);
}

const llenarDatos = (rol) => {

    TablaRoles.parentElement.parentElement.classList.add('d-none');
    BtnGuardar.parentElement.classList.add('d-none');
    BtnModificar.parentElement.classList.remove('d-none');
    BtnCancelar.parentElement.classList.remove('d-none');

    formulario.rol_id.value = rol.rol_id;
    formulario.rol_nombre.value = rol.rol_nombre;
    formulario.rol_nombre_ct.value = rol.rol_nombre_ct;
    formulario.rol_app.value = rol.rol_op;
}

const Cancelar = () => {

    TablaRoles.parentElement.parentElement.classList.remove('d-none');
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
        const url = '/IS3_CASTELLANOS_RONALDD/API/rol/modificar';

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


const Eliminar = async (rol) => {
    let confirmacion = await Swal.fire({
        title: '¿Está seguro de que desea eliminar este rol?',
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
            body.append('id', rol.rol_id)

            const url = '/IS3_CASTELLANOS_RONALDD/API/rol/eliminar';
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