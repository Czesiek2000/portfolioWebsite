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
        liveCode: [...document.querySelectorAll('.card-button')],
        cards: {
            title: [...document.querySelectorAll('.card-title')],
            description: [...document.querySelectorAll('.project-description')],
            tech: [...document.querySelectorAll('.technology')],
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
            contact: '<a href="#social"/>Kontakt</a>',
        },
        skills: {
            basic: 'Umiejętności',
            subheader: 'Poznałem, ale niewiele używałem',
            base: 'Znam podstawy',
            tools: 'Narzędzia, których używam do tworzenia stron',
        },
        projects: {
            header: 'Moje projekty',
            live: 'Live',
            code: 'Kod',
            cards: [{
                    title: 'Licznik czasu',
                    description: 'Proste odliczanie czasu do konkretnej daty',
                    tech: 'Użyte technologie w tym projekcie: <b>HTML</b>, <b>CSS</b>, <b>JS</b>',
                },
                {
                    title: 'Formularz',
                    description: 'Formularz stworzony z szablonu strony z grupy na Facebooku Weekly Web Dev Challenge',
                    tech: 'Użyte technologie w tym projekcie: <b>HTML</b>, <b>CSS</b>, <b>JS</b>',
                },
                {
                    title: 'Strona z szablonu',
                    description: 'Strona stworzona z szablonu strony na Facebooku Weekly Web Dev Challenge z wykorzystaniem Bootstrap',
                    tech: 'Użyte technologie w tym projekcie: <b>HTML</b>, <b>CSS</b>, <b>JS</b>',
                },
                {
                    title: 'Numbers api',
                    description: 'Strona pobierająca i wyświetlająca dane z api',
                    tech: 'Użyte technologie w tym projekcie: <b>HTML</b>, <b>CSS</b>, <b>JS</b>, <a href="http://numbersapi.com/">Numbers api',
                },
                {
                    title: 'Strona materialize.css',
                    description: 'Strona z użyciem materialize css',
                    tech: 'Użyte technologie: <b>HTML</b>, <b>CSS</b>, <b>Materialize.css</b>',
                },
                {
                    title: 'Przykladowy blog',
                    description: 'Blog w Vuejs wyswietlający posty z API JSONPlaceholder',
                    tech: 'Użyte technologie: <b>HTML</b>, <b>CSS</b>, <b>Vuejs</b>',
                },
            ],
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
            description: `<p>Hi, Welcome on my personal website. My name is Micheal. </p>
            <p style="margin-top: 10px">Currently I am studying third year of IT at PJATK in Warsaw. I am looking for job or intership to develop my skills. </p>
            <p style="margin-top: 5px">I have started learning front-end since February 2018 when I was in second class of highschool. I am spending my free time on learning new things related to front-end or playing video games or watching movies or tvseries.
            <p style="margin-top: 5px">I like to learn new topics related to front-end. I like to try out new gained skills in real projects under the guidence of experience developers.</p>
            <p style="margin-top: 5px">During college I learned languages like: <b>JAVA(language basics, swing library and javafx framework)</b>, <b>C++</b>, <b>C</b>, <b>SQL(TSQL, PL\\SQL)</b>, <b>BASH</b>.`,
            contact: '<a href="#social"/>Contact</a>',
        },
        skills: {
            basic: 'Skills',
            subheader: 'I know but I did not use much',
            base: 'I know the basics',
            tools: 'Tools that I use to create websites',
        },
        projects: {
            header: 'My projects',
            live: 'Live',
            code: 'Code',
            cards: [{
                    title: 'Countdown',
                    description: 'Simple website with countdown script',
                    tech: 'Used Technologies: <b>HTML</b>, <b>CSS</b>, <b>JS</b>',
                },
                {
                    title: 'Form',
                    description: 'Form created from template from Weekly Web Dev Challenge Facebook group',
                    tech: 'Used Technologies: <b>HTML</b>, <b>CSS</b>, <b>JS</b>',
                },
                {
                    title: 'Template website',
                    description: 'Website created from template from Weekly Web Dev Challenge Facebook group with use of Bootstrap',
                    tech: 'Used Technologies: <b>HTML</b>, <b>CSS</b>, <b>Bootstrap</b>',
                },
                {
                    title: 'Numbers api',
                    description: 'Website that use numbers api to display number facts',
                    tech: 'Used Technologies: <b>HTML</b>, <b>CSS</b>, <b>JS</b>, <a href="http://numbersapi.com/">Numbers api',
                },
                {
                    title: 'Materialize.css website',
                    description: 'Website made with materialize.css',
                    tech: 'Used tech: <b>HTML</b>, <b>CSS</b>, <b>Materialize.css</b>',
                },
                {
                    title: 'Vuejs dummy blog',
                    description: 'Blog in Vuejs that loads dummy posts from JSONPlaceholder API',
                    tech: 'Used tech: <b>HTML</b>, <b>CSS</b>, <b>Vuejs</b>',
                },
            ],
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
        values.about.contact.innerHTML = translation[lang].about.contact;

        values.skills.basic.innerText = translation[lang].skills.basic;
        values.skills.subheader.innerText = translation[lang].skills.subheader;
        values.skills.base.innerText = translation[lang].skills.base;
        values.skills.tools.innerText = translation[lang].skills.tools;

        values.projects.header.innerText = translation[lang].projects.header;

        for (let index = 0; index < values.projects.liveCode.length; index += 2) {
            values.projects.liveCode[index].innerHTML = translation[lang].projects.live;
        }

        for (let index = 1; index < values.projects.liveCode.length; index += 2) {
            values.projects.liveCode[index].innerHTML = translation[lang].projects.code;
        }


        for (const i in values.projects.cards) {
            values.projects.cards[i].forEach((c, index) => {
                c.innerHTML = translation[lang].projects.cards[index][i];
            })
        }

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
    values.about.contact.innerHTML = translation['pl'].about.contact;

    values.skills.basic.innerText = translation['pl'].skills.basic;
    values.skills.subheader.innerText = translation['pl'].skills.subheader;
    values.skills.base.innerText = translation['pl'].skills.base;
    values.skills.tools.innerText = translation['pl'].skills.tools;

    values.projects.header.innerText = translation['pl'].projects.header;

    for (let index = 0; index < values.projects.liveCode.length; index += 2) {
        values.projects.liveCode[index].innerHTML = translation['pl'].projects.live;
    }

    for (let index = 1; index < values.projects.liveCode.length; index += 2) {
        values.projects.liveCode[index].innerHTML = translation['pl'].projects.code;
    }

    for (const i in values.projects.cards) {
        values.projects.cards[i].forEach((c, index) => {
            c.innerHTML = translation['pl'].projects.cards[index][i];
        })
    }
    values.projects.more.innerText = translation['pl'].projects.more;

    values.footer.innerHTML = translation['pl'].footer;
})