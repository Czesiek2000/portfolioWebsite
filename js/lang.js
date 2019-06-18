const polish = document.getElementById('polish');
const english = document.getElementById('english');
const footer = document.querySelector('footer');
english.addEventListener('click', function() {
    console.log('clicked');
    a[1].innerText = 'About me';
    a[2].innerText = 'Skills';
    a[3].innerText = 'Projects';
    a[4].innerText = 'Social media';
    a[5].innerText = 'Contact';
    heroText.innerText = 'Welcome on my portfolio website';
    switcherTitle.innerText = 'If you want to change text or language you can do it here';
    light.innerText = 'Light Theme';
    dark.innerText = 'Dark Theme';
    aboutHeader.innerText = 'About me';
    aboutDescription.innerText = 'Hey, My name is Michał. Recently I finished high school,' +
    'currently I have vacations and I am looking for a job or practice as front end developer.' +
    ' I have been learning front end since February 2018, when I was in second high school class. '+
    ' I have been learning in my free time after school but sometimes I have not enought time to learn' + 
    ' because of the school duty that I had, but I tried to find some time to learn some new stuff of front end.'+
    ' Learning new stuff of programming and front end makes me really happy and I enjoy it very much.'+
    ' For my summer holidays that I am currently having I am looking for a job that will teach more stuff, '+
    ' I can practice my knowledge in a real life projects and learning from more experienced developers';
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
    a[4].innerText = 'Media społecznościowe';
    a[5].innerText = 'Kontakt';
    heroText.innerText = 'Witaj na mojej stronie portfolio';
    switcherTitle.innerText = 'Jeżeli chcesz zmienić kolory na stronie lub jezyk mozesz to zrobic tutaj ';
    light.innerText = 'Jasny';
    dark.innerText = 'Ciemny';
    aboutHeader.innerText = 'O mnie';
    aboutDescription.innerText = 'Witaj, Nazywam się Michał. Ukończyłem liceum ogolnokształcące, aktualnie mam wakacje i na ich czas poszukuję pracy lub stażu jako junior front - end developer.Front endu uczę sie od lutego 2018, kiedy byłem w drugiej klasie liceum. Ucze sie w wolnych chwilach jednak w trakcie szkoły nie miałem duzo czasu jednak udawało mi sie znaleźć czas na nauke front endu oprocz nauki do szkoły.Chciałbym sprobować swoich sił przy prawdziwych projektach oraz doskonalić swoje umiejetności pod okiem doświadczonych osób.';
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

// polish.onclick = function() {
//     console.log('clicked');
// };
