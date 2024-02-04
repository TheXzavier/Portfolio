const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")


/*=============== SHOW MENU ===============*/
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add("show-menu")
    })
}
/*============== MENU HIDDEN ===============*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("show-menu")
    })
}
/*=============== REMOVE MENU MOBILE AND ACTIVE LINK BUTTON ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
function changeActiveLink(){
    
} 

navLinks.forEach(n => n.addEventListener('click',linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById("header")
    if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll",scrollHeader)
/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PORTFOLIO ITEM FILTER ===============*/

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span')
const colorPalette = document.querySelectorAll('.choose-color span');
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");


//open menu
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
//close menu
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }
}
theme.addEventListener("click",openThemeModal);
themeModal.addEventListener("click",closeThemeModal);


/*===== FONTS =====*/
//removes active from other spans
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}
fontSizes.forEach(size =>{
    size.addEventListener('click',()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");
        if(size.classList.contains('font-size-1')){
            fontSize = '12px';
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '14px';
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '18px';
        }
        //change font size of the root html ele 
        document.querySelector('html').style.fontSize = fontSize;


    })
})  
/*===== PRIMARY COLORS =====*/
const colorchange = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        colorchange();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add("active");
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})

/*===== THEME BACKGROUNDS =====*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//chgn background color

const changeBG = () => {
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
    root.style.setProperty('--light-color-lightness',lightColorLightness);
}

Bg1.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    //removes all the changes 
    window.location.reload();

})


Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})


Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})

// CHANGE ACTIVE LINKS
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Remove 'active-link' class from all links
        navLinks.forEach(link => link.classList.remove('active-link'));

        // Add 'active-link' class to the clicked link
        this.classList.add('active-link');

        const targetId = this.getAttribute('href').substring(1);

                // Scroll to the target section smoothly
        document.getElementById(targetId).scrollIntoView({
                    behavior: 'smooth'
        });


   });
});

const sections = document.querySelectorAll('.section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust as needed
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry.target.id, entry.isIntersecting);
        const index = Array.from(sections).indexOf(entry.target);
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active-link'));
            navLinks[index].classList.add('active-link');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

//CHANGE THEME BUTTON ANIMATION
const themeButton = document.getElementById("theme-button");
const homeSection = document.getElementById("home");
    const togglePulsating = () => {
        const rect = homeSection.getBoundingClientRect();
        const isInView = true;//rect.top <= window.innerHeight && rect.bottom >= 0;
        themeButton.classList.toggle("pulsating", isInView);
    };
    window.addEventListener("scroll", togglePulsating);

    // Initial check to set the class on page load
    togglePulsating();
//CONTACT US 
const inputs = document.querySelectorAll('.contact-input');
inputs.forEach((input) => {
    input.addEventListener('input', function () {
      if (input.value.trim() !== '') {
        input.classList.add('input-filled');
      } else {
        input.classList.remove('input-filled');
      }
    });
});