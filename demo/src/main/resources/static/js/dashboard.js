document.addEventListener('DOMContentLoaded', function() {
    // --- LÓGICA DE MODALES ---
    const modal = document.getElementById('modal-evento');
    const btnNuevoEvento = document.getElementById('btn-nuevo-evento');
    const closeButton = document.querySelector('.close-button');
    const formEvento = document.getElementById('form-evento');
    const modalTitulo = document.getElementById('modal-titulo');
    const idEventoInput = document.getElementById('id-evento');

    // Función para abrir el modal
    function abrirModal() {
        modal.style.display = 'flex';
    }

    // Función para cerrar el modal
    function cerrarModal() {
        modal.style.display = 'none';
        formEvento.reset(); // Limpia el formulario
        idEventoInput.value = ''; // Limpia el ID oculto
    }

    // Abrir modal para crear un nuevo evento
    btnNuevoEvento.addEventListener('click', () => {
        modalTitulo.textContent = 'Crear Nuevo Evento';
        abrirModal();
    });

    // Cerrar el modal con el botón X
    closeButton.addEventListener('click', cerrarModal);

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            cerrarModal();
        }
    });

    // --- LÓGICA DE CRUD (SIMULADA) ---

    // Manejar el envío del formulario del modal (Crear y Editar)
    formEvento.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue

        const formData = {
            id: idEventoInput.value,
            titulo: document.getElementById('titulo').value,
            descripcion: document.getElementById('descripcion').value,
            fecha: document.getElementById('fecha').value,
            lugar: document.getElementById('lugar').value,
            precio: document.getElementById('precio').value,
        };

        if (formData.id) {
            // --- LÓGICA PARA EDITAR ---
            console.log('Editando evento:', formData);
            // COMENTARIO PARA BACKEND:
            // Aquí se realizaría una petición PUT o PATCH al endpoint /api/eventos/{id}
            // con `formData` en el body.
            // Si tiene éxito, el backend devuelve el evento actualizado.
            alert('Evento actualizado con éxito (simulación)');

        } else {
            // --- LÓGICA PARA CREAR ---
            console.log('Creando nuevo evento:', formData);
            // COMENTARIO PARA BACKEND:
            // Aquí se realizaría una petición POST al endpoint /api/eventos
            // con `formData` en el body.
            // Si tiene éxito, el backend devuelve el nuevo evento creado.
            alert('Evento creado con éxito (simulación)');
        }

        cerrarModal();
        // COMENTARIO PARA BACKEND:
        // Después de una operación exitosa, se debería recargar la tabla de eventos
        // haciendo una nueva petición GET a /api/eventos.
    });

    // Lógica para botones de Editar y Eliminar en la tabla
    const tabla = document.getElementById('tabla-eventos');
    tabla.addEventListener('click', function(event) {
        const target = event.target;
        const fila = target.closest('tr');

        if (target.classList.contains('btn-editar-evento')) {
            // --- LÓGICA PARA CARGAR DATOS EN EL MODAL DE EDICIÓN ---
            modalTitulo.textContent = 'Editar Evento';
            
            // Simulación de datos obtenidos de la fila
            idEventoInput.value = '1'; // El ID vendría de un atributo data-id en la fila
            document.getElementById('titulo').value = fila.cells[0].textContent;
            document.getElementById('fecha').value = "2025-10-25"; // El formato debe ser YYYY-MM-DD
            document.getElementById('lugar').value = fila.cells[2].textContent;
            document.getElementById('precio').value = parseFloat(fila.cells[3].textContent.replace('$', '').replace(',', ''));
            
            abrirModal();
        }

        if (target.classList.contains('btn-eliminar-evento')) {
            // --- LÓGICA PARA ELIMINAR ---
            if (confirm('¿Estás seguro de que deseas eliminar este evento?')) {
                const eventoId = '1'; // El ID vendría de un atributo data-id en la fila
                console.log('Eliminando evento con ID:', eventoId);
                
                // COMENTARIO PARA BACKEND:
                // Aquí se realizaría una petición DELETE al endpoint /api/eventos/{id}.
                // Si tiene éxito, se elimina la fila de la tabla.
                
                fila.remove(); // Simulación de eliminación en el frontend
                alert('Evento eliminado con éxito (simulación)');
            }
        }
    });

});