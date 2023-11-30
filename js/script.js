document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('botaoInscricao').addEventListener('click', function() {

        window.open('https://web.dio.me/home', '_blank');

    });

});

document.addEventListener('DOMContentLoaded', function () {

  const triggerElement = document.getElementById('short-circuit-trigger');
  const image = document.querySelector('.short-circuit-image');

  triggerElement.addEventListener('mouseenter', function () {
    image.classList.add('short-circuit');
  });

  triggerElement.addEventListener('mouseleave', function () {
    image.classList.remove('short-circuit');
  });
  
});
