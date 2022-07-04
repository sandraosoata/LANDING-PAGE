

//Global variable 
const documentSections = document.querySelectorAll('section');// Global varaible for section
const mainHero = document.getElementsByClassName('main-hero');
const navbarMenu = document.getElementsByClassName('navbar__menu');
const pageFooter = document.getElementsByClassName('page__footer');
const landingContainer = document.getElementsByClassName('landing__container');
const nav = document.getElementById('navbar__list'); // Global variable for navigation 


// building the navigation
// the nav bar is built dynamically to automatically show any sections added to it.
let  buildNav = () => {

    let navigationUI = '';
 
    // using a forEach function to loop through the section node list for easier acess
    documentSections.forEach(section => {

        let idSection = section.id;
        let navSection =section.dataset.nav;

        navigationUI += `<li><a class="menu__link" href="#${idSection}">${navSection}</a></li>`

    });
    // All elements are appended  to the nav 

    nav.innerHTML = navigationUI;

};

buildNav();


// the largest value that is lesser than or equal to the number is gotten by this function.
 let settingValue = (section) =>{
    return Math.floor(section.getBoundingClientRect().top);
 };

 // the class 'your-active-class' that was changed in the HTML and CSS  file is being applied here. 
 //this function is to remove the active class when a section is not in view
 let myActiveClassRemove = (section) =>{
    section.classList.remove('active');
    const id = section.id
     const link = document.querySelector(`a[href="#${id}"]`)
    link.classList.remove('active')
    
    
    // this function replace the suppose active color with the default color when the section is not active.
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%) ;"
 };
//this function is to add the active class when a section is in view
 let myActiveClassAdd = (conditional, section) => {
    if(conditional){
        section.classList.add('active');
const id = section.id
console.log(id)
 const link = document.querySelector(`a[href="#${id}"]`)
link.classList.add('active')


        //adding styles to indicate the active section(the section that is viewed).
        section.style.cssText = "background-color: green;"

    };
 };

 //the sections are activated here

 let activatingMySection = () => {
    // using a forEach function to loop through the sections  for easier acess
    documentSections.forEach(section => {
        //calculating the sections position compared to the view port.
        let elementSettingValue = settingValue(section);
        inviewport = () => elementSettingValue < 200 && elementSettingValue >= -200;


        myActiveClassRemove(section);
        myActiveClassAdd(inviewport(),section);
    });
 };

 window.addEventListener('scroll' ,  activatingMySection);

//References
//http://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
//http://www.w3schools.com/js/js_window.asp


// working on the scroll using eventListener
let scrollDocument = () => {

    let linkItems = document.querySelectorAll('.navbar__menu a');
    
};

scrollDocument();
