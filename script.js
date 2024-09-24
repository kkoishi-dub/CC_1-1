(function(){
  "use strict"


  const form = document.getElementById('convert');
  const converter = 1.60934;
  const checkIfNumber = /^[-]?([1-9]\d*|0)(\.\d+)?$/;
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const element = document.querySelector('#answer').querySelector('h2'); 
    const distance = document.getElementById('distance').value;
    element.classList.remove('invisible');

    if(checkIfNumber.test(distance)){
      element.innerHTML = `${distance} miles converts to ${Math.round(distance * converter * 10000)/10000} kilometers`;
    }else{
      element.innerHTML = "(Error) Please input the correct Number";
    }
      
    
  });


})();
