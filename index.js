document.addEventListener('DOMContentLoaded', function () {
    const turnoForm = document.getElementById('turno-form');
    const nombreInput = document.getElementById('nombre');
    const turnoDate = document.getElementById('turno-date');
    const turnoTime = document.getElementById('turno-time');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    turnoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = nombreInput.value;
        const fecha = turnoDate.value;
        const hora = turnoTime.value;


        if (!fecha || !hora || !nombre) {
            alert("Por favor, completa todos los campos.");
            return;
        }


        const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        mensajeConfirmacion.textContent = `Hola ${nombre}, tenés turno para el día ${fechaFormateada} a las ${hora} hrs.`;
        mensajeConfirmacion.style.display = 'block';


        turnoForm.reset();
    });
});
