
  button = document.getElementById('menu-icon');
  sidemenu = document.getElementById('side-menu');

  button.addEventListener('click', controlMenu);

  function controlMenu(){
    if (sidemenu.classList.contains('active')) {
      closeMenu();
    } else{
      openMenu();
    }
  }

  function openMenu(){
    button.querySelector('img').setAttribute('src','assets/images/icon-menu-close.svg')
    sidemenu.setAttribute('class','side-menu active')
    document.querySelector('.overlay').style.display = 'block';
  }
  function closeMenu(){
    button.querySelector('img').setAttribute('src','assets/images/icon-menu.svg')
    sidemenu.setAttribute('class','side-menu')
    document.querySelector('.overlay').style.display = 'none';
  }

  

