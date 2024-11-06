//funci[on para activar el darkmode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

// seccion de las funciones para las animaciones y transiciones del carrusel
  const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
        updateCarouselPosition();
    }

    function updateCarouselPosition() {
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    }

    setInterval(changeImage, 7000); // Cambiar imagen cada 3 segundos

    

/*Mostrar u ocultar el botón "Volver al Top"*/
window.onscroll = function() {
    const button = document.getElementById("scrollToTopBtnDestinos");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none"; 
    }
};

/* Función para volver al top de la página*/
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


/*funcion del formulario para enviar correo si se quiere realizar uan consulta*/ 
function sendEmail() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const comentario = document.getElementById('comentario').value;

    const mailtoLink = `mailto:${email}?subject=Consulta de ${nombre}&body=Teléfono: ${telefono}%0D%0AComentario: ${comentario}`;
    
    // Muestra el modal de confirmación
    document.getElementById('myModal').style.display = 'block';

    // Redirige al enlace mailto después de mostrar el modal
    /*setTimeout(function() {
        window.location.href = mailtoLink;
    }, 2000);*/
}

// Se cierra el modal
document.getElementById('closeModal').onclick = function() {
    document.getElementById('myModal').style.display = 'none';
};

