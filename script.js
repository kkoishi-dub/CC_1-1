(function(){
  "use strict"


  const form = document.getElementById('convert');
  const converter = 1.60934;

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const element = document.querySelector('#answer').querySelector('h2'); 
    const distance = document.getElementById('distance').value
    element.classList.remove('invisible');
    element.innerHTML = `${distance} miles converts to ${distance * converter} kilometers`;

  });


})();