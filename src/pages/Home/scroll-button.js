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
  }
};
