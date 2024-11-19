function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (translations[lang][element.dataset.lang]) {
            element.innerText = translations[lang][element.dataset.lang];
        }
    });
}


const translations = {
    'en': {
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_services': 'Services',
        'nav_studies': 'Studies',
        'nav_portfolio': 'My Projects',
        'header_title': 'Hi!',
        'header_subtitle': 'I am Salah Eddine Maimouni',
        'header_subtitle2': 'Engineering Student',
        'github_btn': 'Visit my GitHub',
        'linkedin_btn': 'Visit my LinkedIn',
        'about_me': 'About Me',
        'about_description': 'Who am I?',
        'about_text': 'I am a student engineer at ENSAM METZ in the second year of PGE (Grande Ecole program). I also have passed two years of electromechanical engineering et ENSAM CASABLANCA after i got a Higher Technician Diploma in Electrotechnics, and now I am looking for an entrenship opertoonitie.',
        'about_cv_btn': 'Download CV',
        'services_title': 'Services',
        'service_electrical_title': 'Electrical',
        'service_electrical_desc': 'Design, simulation, maintenance, and construction of automatic electrical and electronic systems',
        'service_mechanical_title': 'Mechanical',
        'service_mechanical_desc': 'Design, simulation, maintenance, and construction of mechanical systems and 3D modeling',
        'service_embedded_title': 'Embedded Systems',
        'service_embedded_desc': 'Programming, construction, and maintenance of embedded systems using C, C++, Python, and assembly language',
        'service_dev_title': 'Development',
        'service_dev_desc': 'Graphical user interfaces, object-oriented programming, computer vision, front and back-end web development',
        'studies_title': 'Studies',
        'study1_name': 'Professional Baccalaureate',
        'study1_description': 'Professional Baccalaureate in Industrial Maintenance, obtained in 2020 at Jerada Zeraktouni High School and OFPPT',
        'study2_name': 'BTS in Electrotechnics',
        'study2_description': 'Higher Technician Diploma in Electrotechnics, obtained in 2022 at Mehdi Ben Berka Technical High School in Oujda',
        'study3_name': 'ENSAM CASABLANCA',
        'study3_description': 'Electromechanical Engineering Diploma started in 2022 at ENSAM Casablanca',
        'internship_title': 'Internships',
        'internship1_title': 'Digital Resources Maintenance 15 days/2021',
        'internship1_desc': 'Maintenance of PCs, printers, LCD screens at the National Laboratory of Digital Resources in Rabat',
        'internship2_title': 'Machine Tool Maintenance 1 month/2022',
        'internship2_desc': 'Maintenance of electrical installations of machine tools at Mehdi Ben Berka Technical High School in Oujda',
        'internship3_title': 'Water Pump Maintenance 1 month + 15 days/2023',
        'internship3_desc': 'Maintenance of water distribution circuits and their electrical installations at ONEE-BO Jerada',
        'portfolio_title': 'My Projects',
        'portfolio_project1_title': 'Tkinter Projects',
        'portfolio_project1_desc1': 'Graph theory',
        'portfolio_project1_desc2': 'Flowshop scheduling',
        'portfolio_project1_desc3': 'Subnetting VLSM',
        'portfolio_project2_title': 'Smart House',
        'portfolio_project2_desc1': 'Construction of a smart house using Raspberry Pi / Linux server',
        'portfolio_project2_desc2': 'electrical and mechanical systems',
        'portfolio_project2_desc3': '',
        'portfolio_project3_title': 'Sensor System',
        'portfolio_project3_desc1': 'Construction of a mini-project of sensors for learning',
        'portfolio_project3_desc2': 'using Arduino and Python',
        'portfolio_project3_desc3': '',
        'portfolio_project4_title': 'Web Design',
        'portfolio_project4_desc1': 'Creation of static and dynamic websites',
        'portfolio_project4_desc2': 'using html, css',
        'portfolio_project4_desc3': 'javascript, bootstrap, and mySQL',
        'portfolio_project4_desc4': 'also using wordpress',
        'portfolio_project4_desc5': '',
        'contact_title': 'Contact Me'
    },
    'fr': {
        'nav_home': 'Accueil',
        'nav_about': 'À propos',
        'nav_services': 'Services',
        'nav_studies': 'Études',
        'nav_portfolio': 'Mes Projets',
        'header_title': 'Salut!',
        'header_subtitle': 'Je suis Salah Eddine Maimouni',
        'header_subtitle2': 'Étudiant ingénieur en électromécanique',
        'github_btn': 'Visitez mon GitHub',
        'linkedin_btn': 'Visitez mon LinkedIn',
        'about_me': 'À propos de moi',
        'about_description': 'Qui suis-je?',
        'about_text': 'Je suis élève ingénieur à l'ENSAM METZ en deuxième année de PGE (programme Grande Ecole). J'ai également passé deux années d'ingénieur électromécanique à l'ENSAM CASABLANCA après avoir obtenu un DTS en électrotechnique, et je suis maintenant à la recherche d'une opportunité de stage.',
        'about_cv_btn': 'Télécharger CV',
        'services_title': 'Services',
        'service_electrical_title': 'Électrique',
        'service_electrical_desc': 'Conception, simulation, maintenance et construction de systèmes électriques et électroniques automatiques',
        'service_mechanical_title': 'Mécanique',
        'service_mechanical_desc': 'Conception, simulation, maintenance et construction de systèmes mécaniques et modélisation 3D',
        'service_embedded_title': 'Systèmes Embarqués',
        'service_embedded_desc': 'Programmation, construction et maintenance de systèmes embarqués utilisant C, C++, Python et l\'assembleur',
        'service_dev_title': 'Développement',
        'service_dev_desc': 'Interfaces utilisateur graphiques, programmation orientée objet, vision par ordinateur, développement web front et back-end',
        'studies_title': 'Études',
        'study1_name': 'Baccalauréat Professionnel',
        'study1_description': 'Baccalauréat Professionnel en Maintenance Industrielle, obtenu en 2020 au Lycée Jerada Zeraktouni et à l\'OFPPT',
        'study2_name': 'BTS en Électrotechnique',
        'study2_description': 'Diplôme de Technicien Supérieur en Électrotechnique, obtenu en 2022 au Lycée Technique Mehdi Ben Berka à Oujda',
        'study3_name': 'ENSAM CASABLANCA',
        'study3_description': 'Diplôme d\'Ingénieur en Électromécanique entamé en 2022 à l\'ENSAM Casablanca',
        'internship_title': 'Stages',
        'internship1_title': 'Maintenance des Ressources Numériques 15 jours/2021',
        'internship1_desc': 'Maintenance des PC, imprimantes, écrans LCD au Laboratoire National des Ressources Numériques à Rabat',
        'internship2_title': 'Maintenance des Machines-Outils 1 mois/2022',
        'internship2_desc': 'Maintenance des installations électriques des machines-outils au Lycée Technique Mehdi Ben Berka à Oujda',
        'internship3_title': 'Maintenance des Pompes de Distribution d\'Eau 1 mois + 15 jours/2023',
        'internship3_desc': 'Maintenance des circuits de distribution d\'eau et de leurs installations électriques à l\'ONEE-BO Jerada',
        'portfolio_title': 'Mes Projets',
        'portfolio_project1_title': 'Projets Tkinter',
        'portfolio_project1_desc1': 'Théorie des graphes',
        'portfolio_project1_desc2': 'Ordonnancement flowshop',
        'portfolio_project1_desc3': 'Subnetting VLSM',
        'portfolio_project2_title': 'Maison Intelligente',
        'portfolio_project2_desc1': 'Construction d\'une maison intelligente à l\'aide de Raspberry Pi / serveur Linux',
        'portfolio_project2_desc2': 'systèmes électriques et mécaniques',
        'portfolio_project2_desc3': '',
        'portfolio_project3_title': 'Système de Capteurs',
        'portfolio_project3_desc1': 'Construction d\'un mini-projet de capteurs pour l\'apprentissage',
        'portfolio_project3_desc2': 'en utilisant Arduino et Python',
        'portfolio_project3_desc3': '',
        'portfolio_project4_title': 'Conception Web',
        'portfolio_project4_desc1': 'Création de sites web statiques et dynamiques',
        'portfolio_project4_desc2': 'en utilisant html, css',
        'portfolio_project4_desc3': 'javascript, bootstrap, et mySQL',
        'portfolio_project4_desc4': 'également en utilisant wordpress',
        'portfolio_project4_desc5': '',
        'contact_title': 'Contactez-Moi'
    }
};

// On page load, set the initial language to English
document.addEventListener('DOMContentLoaded', function () {
    switchLanguage('en');
});
