const themeSwitcher = () => {  

  window.addEventListener('load', function(){  
    document.querySelector('body').classList.add("lightMode");
  });

  document.querySelector('#setMode').addEventListener('change', function(event){
      if(event.target.checked){
        document.querySelector('body').classList.add("darkMode");        
        document.querySelector('body').classList.remove("lightMode");        
      } else {
        document.querySelector('body').classList.add("lightMode");
        document.querySelector('body').classList.remove("darkMode");       
      }
  })
}

export default themeSwitcher
