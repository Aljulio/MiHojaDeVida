document.addEventListener('DOMContentLoaded', () => {
    // 1. Desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Validación de formulario simple para la sección de Contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío por defecto del formulario

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos del formulario.');
                return; // Detiene la función si hay campos vacíos
            }

            // Validación básica de formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, introduce una dirección de correo electrónico válida.');
                return;
            }

            // Simulación de envío con tu correo específico
            alert('¡Mensaje enviado a julioalbertoh79@gmail.com con éxito! (Esto es solo una simulación. En un proyecto real, aquí se enviaría la información a un servidor.)');
            contactForm.reset(); // Limpia el formulario después de un envío simulado
        });
    }

    // 3. Animación de aparición de secciones al hacer scroll (Intersection Observer)
    const sections = document.querySelectorAll('main section'); // Selecciona todas las secciones dentro de <main>

    const options = {
        threshold: 0.3 // La sección será "visible" cuando el 30% de ella esté en el viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Añade la clase que activa la animación
                observer.unobserve(entry.target); // Deja de observar una vez que la sección es visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Empieza a observar cada sección
    });
});