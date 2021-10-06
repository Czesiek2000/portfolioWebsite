// Colors
const black = "#000";
const white = "#fff";
const lightBlack = "#1a1f25";
const lighterBlack = "#2D3540";
const whiteBlack = "#596A80";
const orange = "#f2915a";
const lightGray = "#ebebeb";
const gray = "#333";

// Buttons to change theme
const light = document.getElementById('lightTheme');
const dark = document.getElementById('darkTheme');

const lightTheme = {
    container: {
        grey: lightGray,
        white: white
    },
    heroText: white,
    text: black,
    button: {
        bg: orange,
        text: black
    }
}

const darkTheme = {
    container: {
        primary: lighterBlack,
        secondary: lightBlack
    },
    heroText: lightBlack,
    text: white,
    button: {
        bg: lightBlack,
        text: orange
    }
}

const elements = {
    header: {
        header: document.querySelector('.header'),
        a: document.querySelectorAll('.main-nav a'),
        heroText: document.querySelector(".hero-text"),
        menu: document.querySelector(".menu-toggle i")
    },
    themeSwitcher: {
        title: document.querySelector(".switcher-title"),
        container: document.querySelector(".theme-container")
    },
    about: {
        section: document.querySelector(".about-section"),
        header: document.querySelector(".about-header"),
        description: document.querySelector(".about-description"),
        contact: {
            button: document.querySelector(".about-contact"),
            a: document.querySelector('.about-contact a')
        },
        cv: {
            button: document.querySelector(".about-cv"),
            a: document.querySelector(".about-cv a")
        }
    },
    skills: {
        section: document.querySelector(".skills-section"),
        basic: document.querySelector(".skills-basic-header"),
        sub: document.querySelector(".skills-subheader"),
        base: document.querySelector(".skills-base-header"),
        tools: document.querySelector(".skills-tools-header"),
    },
    project: {
        section: document.getElementById("projects"),
        header: document.querySelector(".projects-header"),
        projectCard: document.querySelectorAll(".project-card"),
        cardTitle: document.querySelectorAll(".card-title"),
        cardButton: document.querySelectorAll(".card-button"),
        projectDescription: document.querySelectorAll(".project-description"),
        technology: document.querySelectorAll(".technology"),
    },
    social: document.querySelector(".social-container"),
    scroll: document.querySelector('.scrollTop'),
    more: document.querySelector('.more'),
    footer: document.querySelector('.footer')
}

light.addEventListener('click', () => {
    elements.header.header.style.backgroundColor = lightTheme.container.grey;
    elements.header.a.forEach(a => a.style.color = lightTheme.text);
    elements.header.heroText.style.color = lightTheme.heroText;
    elements.header.menu.style.color = lightTheme.text;
    
    console.log(elements.themeSwitcher);
    elements.themeSwitcher.title.style.color = lightTheme.text;
    elements.themeSwitcher.container.style.backgroundColor = lightTheme.container.white;
    
    elements.about.section.style.backgroundColor = lightTheme.container.grey;
    elements.about.header.style.color = lightTheme.text;
    elements.about.description.style.color = lightTheme.text;
    elements.about.contact.button.style.backgroundColor = lightTheme.button.bg;
    document.querySelector('.about-contact a').style.color = lightTheme.button.text;
    // elements.about.contact.a.style.color = lightTheme.button.text;

    elements.about.cv.button.style.backgroundColor = lightTheme.button.bg;
    elements.about.cv.a.style.color = lightTheme.button.text;

    elements.skills.section.style.backgroundColor = lightTheme.container.grey;
    elements.skills.basic.style.color = lightTheme.text;
    elements.skills.sub.style.color = lightTheme.text;
    elements.skills.base.style.color = lightTheme.text;
    elements.skills.tools.style.color = lightTheme.text;
    
    elements.project.section.style.backgroundColor = lightTheme.container.grey;
    elements.project.header.style.color = lightTheme.text;
    elements.project.projectCard.forEach(t => t.style.backgroundColor = lightTheme.container.grey)
    elements.project.cardTitle.forEach(t => t.style.color = lightTheme.text)
    elements.project.cardButton.forEach(t => t.style.color = lightTheme.button.text)
    elements.project.cardButton.forEach(t => t.style.backgroundColor = lightTheme.button.bg)
    elements.project.projectDescription.forEach(t => t.style.color = lightTheme.text)
    elements.project.technology.forEach(t => t.style.color = lightTheme.text)

    elements.social.style.backgroundColor = lightTheme.container.lighther;
    
    elements.more.style.backgroundColor = lightTheme.button.bg;
    elements.more.style.color = lightTheme.button.text;
    elements.footer.style.backgroundColor = darkTheme.container.secondary;
})

dark.addEventListener('click', () => {
    elements.header.header.style.backgroundColor = darkTheme.container.primary;
    elements.header.a.forEach(a => a.style.color = darkTheme.text);
    elements.header.heroText.style.color = darkTheme.heroText;
    elements.header.menu.style.color = darkTheme.text;
    
    console.log(elements.themeSwitcher.title);
    elements.themeSwitcher.title.style.color = darkTheme.text;
    elements.themeSwitcher.container.style.backgroundColor = darkTheme.container.secondary
    
    elements.about.section.style.backgroundColor = darkTheme.container.primary;
    elements.about.section.style.color = darkTheme.text;
    
    elements.about.contact.button.style.backgroundColor = darkTheme.button.bg;
    // elements.about.contact.a.style.color = darkTheme.button.text;
    document.querySelector('.about-contact a').style.color = darkTheme.button.text;

    elements.about.cv.button.style.backgroundColor = darkTheme.button.bg;
    elements.about.cv.a.style.color = darkTheme.button.text;
    
    elements.skills.section.style.backgroundColor = darkTheme.container.secondary;
    elements.skills.section.style.color = darkTheme.text;
    
    elements.project.section.style.backgroundColor = darkTheme.container.primary;
    elements.project.header.style.color = darkTheme.text;
    elements.project.projectCard.forEach(t => t.style.backgroundColor = lightBlack)
    elements.project.cardTitle.forEach(t => t.style.color = darkTheme.text)
    elements.project.cardButton.forEach(t => t.style.color = darkTheme.button.text)
    elements.project.cardButton.forEach(t => t.style.backgroundColor = lighterBlack)
    elements.project.projectDescription.forEach(t => t.style.color = darkTheme.text)
    elements.project.technology.forEach(t => t.style.color = darkTheme.text)

    elements.more.style.backgroundColor = darkTheme.button.bg;
    elements.more.style.color = darkTheme.button.text;

    elements.social.style.backgroundColor = darkTheme.container.secondary;
    
    elements.scroll.style.backgroundColor = white;
    elements.scroll.style.color = lightBlack;

    elements.footer.style.backgroundColor = darkTheme.container.primary;
})
