const navSlide = () => {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");
    const navLinks = document.getElementById('links')
  
    menuButton.addEventListener('click', () => {
      console.log('click')
      menu.classList.toggle('nav-active')
    })
    navLinks.addEventListener('click', () => {
      menu.classList.toggle('nav-active')
    })
  };
  
  const navChangeColor = () => {
      const nav = document.getElementById('navbar')
      const navText = document.getElementById('nav-text')
      console.log('zmiana')
      if(window.scrollY >=95){
        nav.classList.remove('top-10')
          nav.classList.add('top-0')
          
      }else{
          nav.classList.remove('top-0')
          nav.classList.add('top-10')
          
      }
  }
  
  window.addEventListener('scroll', navChangeColor)
  
  navSlide()