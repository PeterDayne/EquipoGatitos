document.getElementById('productImage').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById('imagePreview');
        img.src = reader.result;
        img.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Control del menú de opciones
document.getElementById('menuOpciones').addEventListener('change', function() {
    let opcion = this.value;

    // Ocultar todas las secciones
    document.getElementById('seccionAgregar').style.display = 'none';
    document.getElementById('seccionActualizar').style.display = 'none';
    document.getElementById('seccionEliminar').style.display = 'none';
    document.getElementById('seccionVer').style.display = 'none';

    // Mostrar la sección correspondiente
    if (opcion === "agregar") {
        document.getElementById('seccionAgregar').style.display = 'block';
    } else if (opcion === "actualizar") {
        document.getElementById('seccionActualizar').style.display = 'block';
    } else if (opcion === "eliminar") {
        document.getElementById('seccionEliminar').style.display = 'block';
    } else if (opcion === "ver") {
        document.getElementById('seccionVer').style.display = 'block';
    }
});
