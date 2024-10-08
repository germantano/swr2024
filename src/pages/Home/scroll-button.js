export const initScrollButton = () => {
  const scrollButton = document.querySelector('.circle-text');
  const scrollContainer = document.querySelector('#scroll-button');

  if (scrollButton && scrollContainer) {
    // Evento de click para hacer scroll suave
    scrollButton.addEventListener('click', function (e) {
      e.preventDefault(); // Previene el comportamiento por defecto del enlace
      const section = document.querySelector('#about');

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        scrollContainer.classList.add('hidden');
      }
    });

    // Evento de scroll para mostrar/ocultar el botón
    window.addEventListener('scroll', function () {
      const scrollPosition = document.documentElement.scrollTop; // Obtiene la posición de desplazamiento vertical
      console.log(scrollPosition)
      if (scrollPosition > 10) {
        scrollContainer.classList.add('hidden'); // Oculta el botón cuando bajas más de 50px
      } else {
        scrollContainer.classList.remove('hidden'); // Muestra el botón cuando estás cerca de la parte superior
      }
    });
  }
};
