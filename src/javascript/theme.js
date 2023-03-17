const themeSwitcher = () => {  

  window.addEventListener('load', function(){  
    document.querySelector('body').classList.add("lightMode");
  });

  document.querySelector('#setMode').addEventListener('change', function(event){
      if(event.target.checked){
        document.querySelector('body').classList.add("darkMode");        
      } else {
        document.querySelector('body').classList.add("lightMode");
      }
  })
}

export default themeSwitcher
