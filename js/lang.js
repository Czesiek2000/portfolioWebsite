const values = {
    nav: {
        home: document.querySelector('.home'),
        about: document.querySelector('.about'),
        skills: document.querySelector('.skills'),
        projects: document.querySelector('.projects'),
        socials: document.querySelector('.socials'),
        contact: document.querySelector('.contact')
    },
    hero: document.querySelector('.hero-text'),
    themeSwitcher: {
        text: document.querySelector('.switcher-title'),
        light: document.querySelectorAll('.theme')[0],
        dark: document.querySelectorAll('.theme')[1],
    },
    about: {
        header: document.querySelector('.about-header'),
        description: document.querySelector('.about-description'),
        contact: document.querySelector('.about-contact'),
    },
    skills: {
        basic: document.querySelector('.skills-basic-header'),
        subheader: document.querySelector('.skills-subheader'),
        base: document.querySelector('.skills-base-header'),
        tools: document.querySelector('.skills-tools-header'),
    },
    projects: {
        header: document.querySelector('.projects-header'),
        card1: {
            title: document.querySelectorAll('.card-title')[0],
            description: document.querySelectorAll('.project-description')[0],
            tech: document.querySelectorAll('.technology')[0],
            live: document.querySelectorAll('.card-button')[0],
            code: document.querySelectorAll('.card-button')[1],
        },
        card2: {
            title: document.querySelectorAll('.card-title')[1],
            description: document.querySelectorAll('.project-description')[1],
            tech: document.querySelectorAll('.technology')[1],
            live: document.querySelectorAll('.card-button')[2],
            code: document.querySelectorAll('.card-button')[3],
        },
        card3: {
            title: document.querySelectorAll('.card-title')[2],
            description: document.querySelectorAll('.project-description')[2],
            tech: document.querySelectorAll('.technology')[2],
            live: document.querySelectorAll('.card-button')[4],
            code: document.querySelectorAll('.card-button')[5],
        },
        card4: {
            title: document.querySelectorAll('.card-title')[3],
            description: document.querySelectorAll('.project-description')[3],
            tech: document.querySelectorAll('.technology')[3],
            live: document.querySelectorAll('.card-button')[6],
            code: document.querySelectorAll('.card-button')[7],
        },
        more: document.querySelector('.more'),
    },

    footer: document.querySelector('.footer')
}
const translation = {
    pl: {
        nav: {
            home: 'Home',
            about: 'O mnie',
            skills: 'Umiejętności',
            projects: 'Projekty',
            socials: 'Sociale',
            contact: 'Kontakt'
        },
        hero: 'Witaj na mojej stronie portfolio',
        themeSwitcher: {
            text: 'Jeżeli chcesz zmienić kolory na stronie lub jezyk mozesz to zrobić poniższymi przyciskami',
            light: 'Jasny',
            dark: 'Ciemny'
        },
        about: {
            header: 'O mnie',
            description: `<p>Cześć, Dzień dobry. Witam serdecznie na mojej stronie. Nazywam sie Michał.</p>
            <p style="margin-top: 10px">Aktualnie studiuje informatyke na trzecim roku na PJATK w Warszawie. Poszukuje pracy lub stażu jako front-end developer, 
            aby doskonalic poznane umiejętności. </p>
            <p style="margin-top: 5px">Nauke front-endu zacząłem w lutym 2018, bedąc w drugiej klasie liceum. Wolne chwile spędzam nad nauką i 
            zgłębianiu tajników front-endu, oraz graniu w gry komputerowe lub ogladaniu filmów i seriali. 
            Lubię poznawać nowe zagadnienia zwiazane z front-endem. </p>
            <p style="margin-top: 5px">Chciałbym sprobować swoich sił przy prawdziwych projektach oraz 
            doskonalić swoje umiejetosci pod okiem doswiadczonych osób.</p>
            <p style="margin-top: 5px">Podczas studiów poznałem dodatkowo poznałem języki takie jak: 
            <b>JAVA(podstawy języka, biblioteke swing oraz javafx framework)<b>, <b>C++</b>, <b>C</b>, <b>C#(asp.net,entity framework core i praca z baza danych MSSQL)</b>, <b>SQL(SQL, TSQL, PL\\SQL)</b>, <b>BASH</b>.</p>`,
            contact: 'Kontakt',
        },
        skills: {
            basic: 'Umiejętności',
            subheader: 'Poznałem, ale niewiele używałem',
            base: 'Znam podstawy',
            tools: 'Narzędzia, których używam do tworzenia stron',
        },
        projects: {
            header: 'Moje projekty',
            card1: {
                title: 'Licznik czasu',
                description: 'Proste odliczanie czasu do konkretnej daty',
                tech: 'Użyte technologie w tym projekcie: <b>HTML</b>, <b>CSS</b>, <b>JS</b>',
                live: 'Live',
                code: 'Kod',
            },
            card2: {
                title: 'Formularz',
                description: 'Formularz stworzony z szablonu strony z grupy na Facebooku Weekly Web Dev Challenge',
                tech: 'Użyte technologie w tym projekcie: <b>HTML</b>, <b>CSS</b>, <b>JS</b>',
                live: 'Live',
                code: 'Kod',
            },
            card3: {
                title: 'Strona z szablonu',
                description: 'Strona stworzona z szablonu strony na Facebooku Weekly Web Dev Challenge z wykorzystaniem Bootstrap',
                tech: 'Użyte technologie w tym projekcie: <b>HTML</b>, <b>CSS</b>, <b>JS</b>',
                live: 'Live',
                code: 'Kod',
            },
            card4: {
                title: 'Numbers api',
                description: 'Strona pobierająca i wyświetlająca dane z api',
                tech: 'Użyte technologie w tym projekcie: <b>HTML</b>, <b>CSS</b>, <b>JS</b>, <a href="http://numbersapi.com/">Numbers api',
                live: 'Live',
                code: 'Kod',
            },
            more: 'Pokaż więcej',
        },
    
        footer: '\u00A9 Michał Czech, 2019. Wszelkie prawa zastrzeżone.'
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            socials: 'Socials',
            contact: 'Contact'
        },
        hero: 'Welcome on my portfolio website',
        themeSwitcher: {
            text: 'If you want to change language or theme use buttons below',
            light: 'Light',
            dark: 'Dark'
        },
        about: {
            header: 'About me',
            description: `Hi, Welcome on my personal website. My name is Micheal. Currently I am studying third year of IT at PJATK in Warsaw.
            I am looking for job or intership to develop my skills. I have started learning front-end since February 2018 when I was in second class of highschool. I am spending my free time on learning front-end or playing video games or watching movies or tvseries.
            I like to learn new topics related to front-end. I like to try out new gained skills in real projects under the guidence of experience developers.
            During college I learned languages like: JAVA(language basics, swing library and javafx framework), C++, C, SQL(TSQL, PL\\SQL), BASH.`,
            contact: 'Contact',
        },
        skills: {
            basic: 'Skills',
            subheader: 'I know but I did not use much',
            base: 'I know the basics',
            tools: 'Tools that I use to create websites',
        },
        projects: {
            header: 'My projects',
            card1: {
                title: 'Countdown',
                description: 'Simple website with countdown script',
                tech: 'Used Technologies: <b>HTML</b>, <b>CSS</b>, <b>JS</b>',
                live: 'Live',
                code: 'Code',
            },
            card2: {
                title: 'Form',
                description: 'Form created from template from Weekly Web Dev Challenge Facebook group',
                tech: 'Used Technologies: <b>HTML</b>, <b>CSS</b>, <b>JS</b>',
                live: 'Live',
                code: 'Code',
            },
            card3: {
                title: 'Template website',
                description: 'Website created from template from Weekly Web Dev Challenge Facebook group with use of Bootstrap',
                tech: 'Used Technologies: <b>HTML</b>, <b>CSS</b>, <b>Bootstrap</b>',
                live: 'Live',
                code: 'Code',
            },
            card4: {
                title: 'Numbers api',
                description: 'Website that use numbers api to display number facts',
                tech: 'Used Technologies: <b>HTML</b>, <b>CSS</b>, <b>JS</b>, <a href="http://numbersapi.com/">Numbers api',
                live: 'Live',
                code: 'Code',
            },
            more: 'Show more',
        },
    
        footer: '\u00A9 Michał Czech, 2019. All rights reserved.'
    }
}

document.querySelectorAll('.language').forEach(l => {
    let lang = l.getAttribute('data-language');
    l.addEventListener('click', () => {
        values.nav.home.innerText = translation[lang].nav.home;
        values.nav.about.innerText = translation[lang].nav.about;
        values.nav.skills.innerText = translation[lang].nav.skills;
        values.nav.projects.innerText = translation[lang].nav.projects;
        values.nav.socials.innerText = translation[lang].nav.socials;
        values.nav.contact.innerText = translation[lang].nav.contact;
        
        values.hero.innerText = translation[lang].hero;
        
        values.themeSwitcher.text.innerText = translation[lang].themeSwitcher.text;
        values.themeSwitcher.light.innerText = translation[lang].themeSwitcher.light;
        values.themeSwitcher.dark.innerText = translation[lang].themeSwitcher.dark;
        
        values.about.header.innerText = translation[lang].about.header;
        values.about.description.innerHTML = translation[lang].about.description;
        values.about.contact.innerText = translation[lang].about.contact;
        
        values.skills.basic.innerText = translation[lang].skills.basic;
        values.skills.subheader.innerText = translation[lang].skills.subheader;
        values.skills.base.innerText = translation[lang].skills.base;
        values.skills.tools.innerText = translation[lang].skills.tools;
        
        values.projects.header.innerText = translation[lang].projects.header;
        
        values.projects.card1.title.innerHTML = translation[lang].projects.card1.title;
        values.projects.card1.description.innerHTML = translation[lang].projects.card1.description;
        values.projects.card1.tech.innerHTML = translation[lang].projects.card1.tech;
        values.projects.card1.live.innerHTML = translation[lang].projects.card1.live;
        values.projects.card1.code.innerHTML = translation[lang].projects.card1.code;
        
        values.projects.card2.title.innerHTML = translation[lang].projects.card2.title;
        values.projects.card2.description.innerHTML = translation[lang].projects.card2.description;
        values.projects.card2.tech.innerHTML = translation[lang].projects.card2.tech;
        values.projects.card2.live.innerHTML = translation[lang].projects.card2.live;
        values.projects.card2.code.innerHTML = translation[lang].projects.card2.code;
        
        values.projects.card3.title.innerHTML = translation[lang].projects.card3.title;
        values.projects.card3.description.innerHTML = translation[lang].projects.card3.description;
        values.projects.card3.tech.innerHTML = translation[lang].projects.card3.tech;
        values.projects.card3.live.innerHTML = translation[lang].projects.card3.live;
        values.projects.card3.code.innerHTML = translation[lang].projects.card3.code;
        
        values.projects.card4.title.innerHTML = translation[lang].projects.card4.title;
        values.projects.card4.description.innerHTML = translation[lang].projects.card4.description;
        values.projects.card4.tech.innerHTML = translation[lang].projects.card4.tech;
        values.projects.card4.live.innerHTML = translation[lang].projects.card4.live;
        values.projects.card4.code.innerHTML = translation[lang].projects.card4.code;
        
        values.projects.more.innerText = translation[lang].projects.more;

        values.footer.innerHTML = translation[lang].footer;
    })
})

window.addEventListener('DOMContentLoaded', () => {
    values.nav.home.innerText = translation['pl'].nav.home;
    values.nav.about.innerText = translation['pl'].nav.about;
    values.nav.skills.innerText = translation['pl'].nav.skills;
    values.nav.projects.innerText = translation['pl'].nav.projects;
    values.nav.socials.innerText = translation['pl'].nav.socials;
    values.nav.contact.innerText = translation['pl'].nav.contact;
    
    values.hero.innerText = translation['pl'].hero;
    
    values.themeSwitcher.text.innerText = translation['pl'].themeSwitcher.text;
    values.themeSwitcher.light.innerText = translation['pl'].themeSwitcher.light;
    values.themeSwitcher.dark.innerText = translation['pl'].themeSwitcher.dark;
    
    values.about.header.innerText = translation['pl'].about.header;
    values.about.description.innerHTML = translation['pl'].about.description;
    values.about.contact.innerText = translation['pl'].about.contact;
    
    values.skills.basic.innerText = translation['pl'].skills.basic;
    values.skills.subheader.innerText = translation['pl'].skills.subheader;
    values.skills.base.innerText = translation['pl'].skills.base;
    values.skills.tools.innerText = translation['pl'].skills.tools;
    
    values.projects.header.innerText = translation['pl'].projects.header;
    
    values.projects.card1.title.innerHTML = translation['pl'].projects.card1.title;
    values.projects.card1.description.innerHTML = translation['pl'].projects.card1.description;
    values.projects.card1.tech.innerHTML = translation['pl'].projects.card1.tech;
    values.projects.card1.live.innerHTML = translation['pl'].projects.card1.live;
    values.projects.card1.code.innerHTML = translation['pl'].projects.card1.code;
    
    values.projects.card2.title.innerHTML = translation['pl'].projects.card2.title;
    values.projects.card2.description.innerHTML = translation['pl'].projects.card2.description;
    values.projects.card2.tech.innerHTML = translation['pl'].projects.card2.tech;
    values.projects.card2.live.innerHTML = translation['pl'].projects.card2.live;
    values.projects.card2.code.innerHTML = translation['pl'].projects.card2.code;
    
    values.projects.card3.title.innerHTML = translation['pl'].projects.card3.title;
    values.projects.card3.description.innerHTML = translation['pl'].projects.card3.description;
    values.projects.card3.tech.innerHTML = translation['pl'].projects.card3.tech;
    values.projects.card3.live.innerHTML = translation['pl'].projects.card3.live;
    values.projects.card3.code.innerHTML = translation['pl'].projects.card3.code;
    
    values.projects.card4.title.innerHTML = translation['pl'].projects.card4.title;
    values.projects.card4.description.innerHTML = translation['pl'].projects.card4.description;
    values.projects.card4.tech.innerHTML = translation['pl'].projects.card4.tech;
    values.projects.card4.live.innerHTML = translation['pl'].projects.card4.live;
    values.projects.card4.code.innerHTML = translation['pl'].projects.card4.code;
    
    values.projects.more.innerText = translation['pl'].projects.more;

    values.footer.innerHTML = translation['pl'].footer;
})