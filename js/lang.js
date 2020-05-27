const polish = document.getElementById('polish');
const english = document.getElementById('english');
const footer = document.querySelector('footer');
english.addEventListener('click', function() {
    console.log('clicked');
    a[1].innerText = 'About';
    a[2].innerText = 'Skills';
    a[3].innerText = 'Projects';
    a[4].innerText = 'Socials';
    a[5].innerText = 'Contact';
    heroText.innerText = 'Welcome on my portfolio website';
    switcherTitle.innerText = 'If you want to change text or language you can do it here';
    light.innerText = 'Light Theme';
    dark.innerText = 'Dark Theme';
    aboutHeader.innerText = 'About me';
    aboutDescription.innerText = 'Hi, Welcome. I am warmly welcome You on my website. My name is Micheal. Currently I am studying first year of IT at PJAIT in Warsaw.'+
    'I am looking for a job or intership holidays. I have started learning front-end since February 2018. ' +
    'I spend my free time on learning front-end developer unfortunetly in the school year I have not much free time for learning, hovever I '+
    'found time for learning front-end because it makes me happy. I wanna to try myself in real projects under the guidance of experience people.' +
    'This year at collage I have learned languages like: JAVA (laguage basics, swing library and javafx framework), C++, C, SQL, BASH';
    aboutContact.innerText = 'Contact';
    skillsBasicHeader.innerText = 'Skills';
    skillsSubHeader.innerText = 'I know but I did not use much';
    skillsBaseHeader.innerText = 'I know basics';
    skillsToolsHeader.innerText = 'Tools that I use to create websites';
    projectsHeader.innerText = 'My Projects';
    cardTitle[0].innerText = 'Project Title 1'
    cardTitle[1].innerText = 'Project Title 2'
    cardTitle[2].innerText = 'Project Title 3'
    cardTitle[3].innerText = 'Project Title 4';
    projectDescription[0].innerText = 'First project description. First website that I create myself'
    projectDescription[1].innerText = 'Second project description. Second website that I create myself'
    projectDescription[2].innerText = 'Third project description. Third website that I create myself'
    projectDescription[3].innerText = 'Fourth project description. Fourth website that I create myself';
    cardButton[0].innerText = 'Live';
    cardButton[1].innerText = 'Code';
    cardButton[2].innerText = 'Live';
    cardButton[3].innerText = 'Code';
    cardButton[4].innerText = 'Live';
    cardButton[5].innerText = 'Code';
    cardButton[6].innerText = 'Live';
    cardButton[7].innerText = 'Code';
    footer.innerText = '\u00A9 Michał Czech 2019. All rights reserved.'
});

polish.addEventListener('click', function() {
    console.log('clicked');
    a[1].innerText = 'O mnie';
    a[2].innerText = 'Umiejętności';
    a[3].innerText = 'Projekty';
    a[4].innerText = 'Społeczności';
    a[5].innerText = 'Kontakt';
    heroText.innerText = 'Witaj na mojej stronie portfolio';
    switcherTitle.innerText = 'Jeżeli chcesz zmienić kolory na stronie lub jezyk mozesz to zrobic tutaj ';
    light.innerText = 'Jasny';
    dark.innerText = 'Ciemny';
    aboutHeader.innerText = 'O mnie';
    aboutDescription.innerText = 'Cześć, Dzień dobry. Witam serdecznie na mojej stronie. Nazywam sie Michał. Aktualnie studiuje informatyke na pierwszym roku na PJATK w Warszawie,' +
    'na czas wakacji poszukuje pracy lub stażu jako front-end developer. Nauke front-endu zacząłem w lutym 2018, bedąc w drugiej klasie liceum.' + 
    'Wolne chwile spędzam nad nauką i zgłębianiu tajników front-endu, niestety podczas roku szkolnego nie mam za dużo czasu,' +
    'ale jakos znajduje czas na nauke. Poznawanie nowych zagadnień zwiazanych z front-endem sprawia mi przyjemność. ' +
    'Chciałbym sprobować swoich sił przy prawdziwych projektach oraz doskonalić swoje umiejetosci pod okiem doswiadczonych osób.' +
    'W tym roku na uczelni dodatkowo poznałem języki takie jak: JAVA(podstawy języka, biblioteke swing oraz javafx framework), C++, C, SQL, BASH.';
    aboutContact.innerText = 'Kontakt';
    skillsBasicHeader.innerText = 'Umiejętności';
    skillsSubHeader.innerText = 'Poznałem ale niewiele używałem';
    skillsBaseHeader.innerText = 'Znam podstawy';
    skillsToolsHeader.innerText = 'Narzędzia których używam do tworzenia stron';
    projectsHeader.innerText = 'Moje projekty';
    cardTitle[0].innerText = 'Tytuł projektu 1'
    cardTitle[1].innerText = 'Tytuł projektu 2'
    cardTitle[2].innerText = 'Tytuł projektu 3'
    cardTitle[3].innerText = 'Tytuł projektu 4';
    projectDescription[0].innerText = 'Opis pierwszego projektu. Pierwsza strona stworzona przeze mnie'
    projectDescription[1].innerText = 'Opis drugiego projektu. Druga strona stworzona przeze mnie '
    projectDescription[2].innerText = 'Opis trzeciego projektu. Trzecia strona stworzona przeze mnie'
    projectDescription[3].innerText = 'Opis czwartego projektu. Czwarta strona stworzona przeze mnie';
    cardButton[0].innerText = 'Live';
    cardButton[1].innerText = 'Kod';
    cardButton[2].innerText = 'Live';
    cardButton[3].innerText = 'Kod';
    cardButton[4].innerText = 'Live';
    cardButton[5].innerText = 'Kod';
    cardButton[6].innerText = 'Live';
    cardButton[7].innerText = 'Kod';
    footer.innerText = '\u00A9 Michał Czech 2019. Wszystkie prawa zastrzeżone '
    
});

