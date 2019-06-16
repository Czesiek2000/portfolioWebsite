// Colors
const black = "#000";
const white = "#fff";
const lightBlack = "#1a1f25";
const lighterBlack = "#2D3540";
const whiteBlack = "#596A80";
const orange = "#f2915a";
const lightGray = "#ebebeb";
const gray = "#333";
// Buttons to change language and theme
const lightTheme = $("#lightTheme");
const darkTheme = $("#darkTheme");
const light = document.getElementById("lightTheme");
const dark = document.getElementById("darkTheme");
// Header
const header = document.querySelector(".header");
const a = document.querySelectorAll(".main-nav a");
const logo = document.querySelector(".logo");
const heroText = document.querySelector(".hero-text");
const menu = document.getElementById("nav-toggler");

// Theme switcher section
const switcherTitle = document.querySelector(".switcherTitle");
const themeContainer = document.querySelector(".themeContainer");

// About me section
const aboutSection = document.querySelector(".about-section");
const aboutHeader = document.querySelector(".about-header");
const aboutDescription = document.querySelector(".about-description");
const aboutContact = document.querySelector(".about-contact");
const aboutCv = document.querySelector(".about-cv");

// Skills sections
const skillsSection = document.querySelector(".skills-section");
const skillsBasicHeader = document.querySelector(".skills-basic-header");
const skillsSubHeader = document.querySelector(".skills-subheader");
const skillsBaseHeader = document.querySelector(".skills-base-header");
const skillsToolsHeader = document.querySelector(".skills-tools-header");

// Project section
const projectsHeader = document.querySelector(".projects-header");
const projectsContainer = document.querySelector(".project-container");
const projectCard = document.querySelectorAll(".project-card");
const cardTitle = document.querySelectorAll(".card-title");
const cardButton = document.querySelectorAll(".card-button");
const projectDescription = document.querySelectorAll(".project-description");
const technology = document.querySelectorAll(".technology");

// Social
const socialContainer = document.querySelector(".social-container");

// Remove added styles
lightTheme.click(function() {
  console.log("clicked");
  header.style.backgroundColor = lightGray;
  logo.style.color = black;
  menu.style.color = black;
  heroText.style.backgroundColor = "";
  heroText.remove("padding");
  a[0].style.color = black;
  a[1].style.color = black;
  a[2].style.color = black;
  a[3].style.color = black;
  a[4].style.color = black;
  a[5].style.color = black;
  switcherTitle.style.color = lightBlack;
  themeContainer.style.backgroundColor = lightGray;
  light.style.backgroundColor = orange;
  light.style.color = lightBlack;
  dark.style.backgroundColor = orange;
  dark.style.color = lightBlack;
  aboutSection.style.backgroundColor = white;
  aboutHeader.style.color = black;
  aboutDescription.style.color = black;
  aboutContact.style.color = black;
  aboutContact.style.backgroundColor = orange;
  aboutCv.style.color = black;
  aboutCv.style.backgroundColor = orange;
  skillsSection.style.backgroundColor = lightGray;
  skillsBasicHeader.style.color = black;
  skillsSubHeader.style.color = black;
  skillsBaseHeader.style.color = black;
  skillsToolsHeader.style.color = black;
  projectsHeader.style.color = black;
  projectsContainer.style.backgroundColor = black;
  projectCard.style.color = black;
  cardTitle.style.color = black;
  cardButton.style.color = lightBlack;
  cardButton.style.backgroundColor = orange;
  projectDescription.style.color = black;
  technology.style.color = black;
  socialContainer.style.backgroundColor = lightGray;
});

// Add style when dark button is clicked
darkTheme.click(function() {
  console.log("clicked");
  // header
  header.style.backgroundColor = lightBlack;
  logo.style.color = white;
  menu.style.color = white;
  // hero
  heroText.style.backgroundColor = lightBlack;
  heroText.style.padding = "40px";
  // links in navigation
  a[0].style.color = white;
  a[1].style.color = white;
  a[2].style.color = white;
  a[3].style.color = white;
  a[4].style.color = white;
  a[5].style.color = white;
  // switcher
  switcherTitle.style.color = white;
  themeContainer.style.backgroundColor = lighterBlack;
  themeContainer.style.marginBottom = "-5px";
  light.style.backgroundColor = lightBlack;
  light.style.color = orange;
  dark.style.backgroundColor = lightBlack;
  dark.style.color = orange;
  // about section
  aboutSection.style.backgroundColor = lightBlack;
  aboutSection.style.paddingBottom = "5px";
  aboutSection.style.paddingTop = "5px";
  aboutSection.style.marginTop = "5px";
  aboutHeader.style.color = white;
  aboutDescription.style.color = white;
  aboutContact.style.color = lightBlack;
  aboutContact.style.backgroundColor = orange;
  // aboutContact.style.border = '3px solid white';
  aboutCv.style.color = lightBlack;
  aboutCv.style.backgroundColor = orange;
  // skills section
  skillsSection.style.backgroundColor = lighterBlack;
  skillsBasicHeader.style.color = white;
  skillsSubHeader.style.color = white;
  skillsBaseHeader.style.color = white;
  skillsToolsHeader.style.color = white;
  // projects
  projectsContainer.style.backgroundColor = lightBlack;
  projectsContainer.style.marginTop = "-88px";
  projectsContainer.style.paddingTop = "86px";

  projectsHeader.style.color = white;
  projectCard[0].style.color = white;
  cardTitle[0].style.color = white;
  projectDescription[0].style.color = white;
  technology[0].style.color = white;
  cardButton[0].style.color = lightBlack;
  cardButton[0].style.backgroundColor = orange;

  projectCard[1].style.color = white;
  cardTitle[1].style.color = white;
  projectDescription[1].style.color = white;
  technology[1].style.color = white;
  cardButton[1].style.color = lightBlack;
  cardButton[1].style.backgroundColor = orange;

  projectCard[2].style.color = white;
  cardTitle[2].style.color = white;
  projectDescription[2].style.color = white;
  technology[2].style.color = white;
  cardButton[2].style.color = lightBlack;
  cardButton[2].style.backgroundColor = orange;

  projectCard[3].style.color = white;
  cardTitle[3].style.color = white;
  projectDescription[3].style.color = white;
  technology[3].style.color = white;
  cardButton[3].style.color = lightBlack;
  cardButton[3].style.backgroundColor = orange;

  cardButton[4].style.color = lightBlack;
  cardButton[4].style.backgroundColor = orange;

  cardButton[5].style.color = lightBlack;
  cardButton[5].style.backgroundColor = orange;

  cardButton[6].style.color = lightBlack;
  cardButton[6].style.backgroundColor = orange;

  cardButton[7].style.color = lightBlack;
  cardButton[7].style.backgroundColor = orange;

  // social section
  socialContainer.style.backgroundColor = lighterBlack;
  socialContainer.style.marginTop = '0';
  socialContainer.style.paddingTop = '25px';
  socialContainer.style.paddingBottom = '25px';

});




// // Color main nav to white
// console.log(a);

// // Change anchor styles
// for (let i = 0; i < a.length; i++) {
//     // console.log(a[i]);
//     var href = a[i];
// }

// console.log(a[0]);
// href.style.color = '#fff';
