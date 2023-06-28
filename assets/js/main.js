
  function cambiarIdioma(idioma) {
    var url = window.location.href;
    var urlNueva = '';

    if (idioma === 'es') {
      // Reemplaza "index-en.html" por "index.html" para cambiar a la versión en español
      urlNueva = url.replace('english.html', 'index.html');
    } else if (idioma === 'en') {
      // Reemplaza "index.html" por "index-en.html" para cambiar a la versión en inglés
      urlNueva = url.replace('index.html', 'english.html');
    }

    // Redirige a la nueva URL
    window.location.href = urlNueva;
  }


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
sections
console.log(sections.item(4));

function scrollActive(){
    const scrollY = window.pageYOffset


    sections.forEach(actual =>{
        const sectionHeight = actual.offsetHeight,
              sectionTop = actual.offsetTop - 58,
              sectionId = actual.getAttribute('id')
             console.log("La sección es "+actual.getAttribute('id'));

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const root = document.querySelector(":root")
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
const mountain = ''
let imgBlanca = 'url(../img/decor-section-bottom.webp)'
let imgNegra = 'url(../img/Untitled.png)'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
  getCurrentTheme() === 'dark' ? root.style.setProperty("--mountains", imgNegra) : root.style.setProperty("--mountains", imgBlanca)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

 
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

    getCurrentTheme() === 'dark' ? root.style.setProperty("--mountains", imgNegra) : root.style.setProperty("--mountains", imgBlanca)

})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})



  function submitForm(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    console.log("Entré al submitForm");

    // Obtener los datos del formulario
    const form = event.target;
    const formData = new FormData(form);

    // Realizar la solicitud AJAX utilizando fetch
    fetch('contact_form.php', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          // Aquí puedes manejar la respuesta del servidor después de enviar el formulario
          console.log('Formulario enviado correctamente');
          // Por ejemplo, mostrar un mensaje de éxito en el DOM o realizar otras acciones

          // Opcionalmente, puedes restablecer el formulario después de enviarlo
          form.reset();
        } else {
          // Manejar los errores si la respuesta del servidor no es exitosa
          console.error('Error en la solicitud. Código de estado:', response.status);
        }
      })
      .catch(error => {
        // Manejar los errores si ocurrieron durante la solicitud AJAX
        console.error('Error en la solicitud:', error);
      });
  }







  

sr.reveal(`.header`,{origin: 'top'})
sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.about__img, .contact__box`,{origin: 'left'},{delay: 300})
sr.reveal(`.about__data, .contact__form`,{origin: 'right'})
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`,{interval: 100})
sr.reveal(`.img__welcome`, {delay: 500})
sr.reveal(`.titulo__story`,{origin: 'left'})
sr.reveal(`.p__story`,{origin: 'right'})
sr.reveal(`.image_vina_2`,{origin: 'left'})
sr.reveal(`.image_vina`,{origin: 'right'})
sr.reveal(`.text_banner_p, .text_title_h2`,{origin: 'left'})
sr.reveal(`.title_banner_h2`,{origin: 'right'})
sr.reveal(`.story_title_container`,{origin: 'top'})
sr.reveal(`.story_text`,{origin: 'bottom'})
sr.reveal(`.text_mza_title`,{origin: 'left'})
sr.reveal(`.text_mza_p`,{origin: 'right'})
sr.reveal(`.right_text_title`,{origin: 'left'})
sr.reveal(`.bodega_back`,{origin: 'right'})
sr.reveal(`.worker_h`,{origin: 'left'})
sr.reveal(`.worker_f`,{origin: 'right'})
sr.reveal(`.worker_mza`,{origin: 'top'})
sr.reveal(`.wide__title`,{origin: 'left'})
sr.reveal(`.wide__text`, {delay: 700})
sr.reveal(`.autumn_title`,{origin: 'left'})
sr.reveal(`.autumn_p`, {delay: 700})