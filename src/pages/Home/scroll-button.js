export const initScrollButton = () => {
  const scrollButton = document.querySelector('.circle-text');

  if (scrollButton) {
    scrollButton.addEventListener('click', function (e) {
      e.preventDefault(); // Previene el comportamiento por defecto del enlace
      const section = document.querySelector('#about');

      if (section) {
        // Implementación del scroll suave
        section.scrollIntoView({ behavior: 'smooth' });

        // Ocultar el círculo después del clic
        document.getElementById('scroll-button').classList.add('hidden');
      }
    });

    window.addEventListener('scroll', function () {
      const sectionAbout = document.querySelector('#about');
      const scrollButtonContainer = document.getElementById('scroll-button');
      const sectionTop = sectionAbout.getBoundingClientRect().top + window.scrollY;

      // Obtener la posición de desplazamiento actual
      const currentScroll = window.scrollY;

      // Mostrar el botón si estamos en la sección "home" o si estamos por encima de la sección "about"
      if (currentScroll === 0 || currentScroll < sectionTop) {
        scrollButtonContainer.classList.remove('hidden');
      } else {
        scrollButtonContainer.classList.add('hidden');
      }
    });
  }
};
