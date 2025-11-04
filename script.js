// Language switcher
function switchLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(el => {
    const key = el.dataset.lang;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerText = translations[lang][key];
    }
  });
  // Save choice
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
}

// Filters
function setupPortfolioFilters() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', e => {
      const f = e.currentTarget.getAttribute('data-filter');
      document.querySelectorAll('.portfolio-card').forEach(card => {
        const cats = (card.getAttribute('data-cat') || '').split(',').map(x => x.trim());
        card.parentElement.style.display = (f === 'all' || cats.includes(f)) ? '' : 'none';
      });
    });
  });
}

// Translations
const translations = {
  en: {
    navbar_brand: "Salah Eddine Maimouni",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_studies: "Studies",
    nav_portfolio: "My Projects",
    nav_contact: "Contact",
    header_title: "Hi!",
    header_subtitle: "I am Salah Eddine Maimouni",
    header_subtitle2: "Versatile Engineering Student",
    github_btn: "Visit my GitHub",
    linkedin_btn: "Visit my LinkedIn",
    cv_fr_btn: "CV FR",
    cv_en_btn: "CV EN",
    availability_text: "Availability: \n • Apprenticeship from Nov 2025 4/3 rhythm then full-time. \n • Internship from Jan or Feb 2026.  ",
    about_me: "About Me",
    about_description: "Who am I?",
    about_text:
      "I am an engineering student at Arts et Métiers Metz in my third year. I also completed two years of electromechanical engineering at ENSAM Casablanca after earning a Higher Technician Diploma (BTS) in Electrical Engineering, and I am currently looking for an apprenticeship or internship in electrical engineering \n — particularly in power and electrotechnics, electromechanics, and embedded systems \n — as well as in industrial engineering, including operations and continuous improvement, production systems, and supply chain management.",
    about_cv_btn: "Download CV (FR)",
    about_cv_en_btn: "Download CV (EN)",
    services_title: "Services",
    service_electrical_title: "Electrical",
    service_electrical_desc: "Design, simulation, maintenance, and construction of automatic electrical and electronic systems",
    service_mechanical_title: "Mechanical",
    service_mechanical_desc: "Design, simulation, maintenance, and construction of mechanical systems and 3D modeling",
    service_embedded_title: "Embedded Systems",
    service_embedded_desc: "Programming, construction, and maintenance of embedded systems using C, C++, Python, and assembly language",
    service_dev_title: "Development",
    service_dev_desc: "Graphical user interfaces, object-oriented programming, computer vision, front and back-end web development",
    studies_title: "Studies",
    study1_name: "Professional Baccalaureate",
    study1_description: "Professional Baccalaureate in Industrial Maintenance, obtained in 2020 at Jerada Zeraktouni High School and OFPPT",
    study2_name: "BTS in Electrotechnics",
    study2_description: "Higher Technician Diploma in Electrotechnics, obtained in 2022 at Mehdi Ben Berka Technical High School in Oujda",
    study3_name: "ENSAM CASABLANCA",
    study3_description: "Electromechanical Engineering Diploma started in 2022 at ENSAM Casablanca",
    study4_name: "ENSAM METZ",
    study4_description: "General Engineering Diploma started in 2024 at ENSAM Metz",
    internship_title: "Internships",
    internship1_title: "Digital Resources Maintenance (1 mo / 2021)",
    internship1_desc: "Maintenance of PCs, printers, LCD screens at the National Laboratory of Digital Resources in Rabat",
    internship2_title: "Machine Tool Maintenance (1 mo / 2022)",
    internship2_desc: "Maintenance of electrical installations of machine tools at Mehdi Ben Berka Technical High School in Oujda",
    internship3_title: "Water Pump Maintenance (2 mo / 2023)",
    internship3_desc: "Maintenance of water distribution circuits and their electrical installations at ONEE-BO Jerada",
    internship4_title: "350 MW Thermal Plant Performance (2 mo / 2024)",
    internship4_desc: "According to ASME PTC 46, performance calculations at ONEE-BE Jerada",
    portfolio_title: "My Projects",
    contact_title: "Contact Me",
    contact_mailto_btn: "Email me",

    // Filters
    filter_all: "All",
    filter_electro: "Electrical",
    filter_embedded: "Embedded",
    filter_industry: "Industry/SCM",
    filter_mech: "Mechanical",
    filter_other: "Other",

    // Portfolio cards + impacts
    portfolio_project1_title: "Workshop Electrical Installation",
    portfolio_project1_desc: "Sizing and schematics with Caneco BT (protections, cables, voltage drops).",
    portfolio_project1_impact: "Impact: compliant sizing and safe protections.",
    portfolio_project2_title: "Modeling & Electrical Simulation",
    portfolio_project2_desc: "DC, induction and synchronous machines and solar systems in MATLAB/Simulink/Simscape.",
    portfolio_project2_impact: "Impact: validated models and test benches.",
    portfolio_project3_title: "Siemens PLC & HMI",
    portfolio_project3_desc: "PLC programming for a marking system with HMI in TIA Portal.",
    portfolio_project3_impact: "Impact: stable cycle and operator UX simplified.",
    portfolio_project4_title: "Educational Sensor Prototype",
    portfolio_project4_desc: "ESP32-based teaching prototype for acquisition and display.",
    portfolio_project4_impact: "Impact: faster prototyping and reusable template.",
    portfolio_project5_title: "Smart Home – IoT & Linux",
    portfolio_project5_desc: "Started as BTS capstone then extended at ENSAM: Raspberry Pi, ESP32, Home Assistant, MQTT.",
    portfolio_project5_impact: "Impact: modular automations, monitored energy usage.",
    portfolio_project6_title: "FlowShop Planner",
    portfolio_project6_desc: "Python (Tkinter) scheduling app with solvers and Gantt chart.",
    portfolio_project6_impact: "Impact: reduced makespan in test scenarios.",
    portfolio_project7_title: "Graph Theory Solver",
    portfolio_project7_desc: "Python GUI solving classic graph problems (shortest path, max flow, etc.).",
    portfolio_project7_impact: "Impact: quick exploration of scenarios.",
    portfolio_project8_title: "MRP2 Information System",
    portfolio_project8_desc: "Production management information system in Microsoft Access.",
    portfolio_project8_impact: "Impact: unified data flow and reports.",
    portfolio_project9_title: "Factory Optimization (Washing Machines)",
    portfolio_project9_desc: "AnyLogic multi-agent simulation: flow, inventory, lots and overall profit.",
    portfolio_project9_impact: "Impact: throughput ↑ and WIP ↓ in simulation.",
    portfolio_project10_title: "Optimized Catapult",
    portfolio_project10_desc: "Excel + VBA optimization (kriging, genetic algorithm, analysis).",
    portfolio_project10_impact: "Impact: efficient search of optimal parameters.",
    portfolio_project11_title: "Continuous Improvement – Production Line",
    portfolio_project11_desc: "Lean tools – VSM, 5S, SMED – with QCD tracking.",
    portfolio_project11_impact: "Impact: cycle time and waste reduction.",
    portfolio_project12_title: "Welded Parts Conformity",
    portfolio_project12_desc: "Diagnosis and improvement of conformity in production.",
    portfolio_project12_impact: "Impact: quality deviations reduced.",
    portfolio_project13_title: "Incremental Forming – Trajectory",
    portfolio_project13_desc: "Trajectory for large-size part (CATIA V5 + RobotStudio).",
    portfolio_project13_impact: "Impact: feasible toolpath and coverage.",
    portfolio_project14_title: "V4 90° – Engine Modeling",
    portfolio_project14_desc: "Study, modeling, simulation and balancing in 3DEXPERIENCE.",
    portfolio_project14_impact: "Impact: reduced vibration in model.",
    portfolio_project15_title: "Bolted Assemblies",
    portfolio_project15_desc: "Study and simulation in CATIA V5 (loads and constraints).",
    portfolio_project15_impact: "Impact: validated torque and safety factor.",
    portfolio_project16_title: "Milling CAM Simulation",
    portfolio_project16_desc: "CAM simulation and machining of a prismatic part (CATIA V5).",
    portfolio_project16_impact: "Impact: toolpath verified before machining.",
    portfolio_project17_title: "XR Showroom – Meta Quest 3",
    portfolio_project17_desc: "Interactive XR app in Unity + Blender for Quest 3.",
    portfolio_project17_impact: "Impact: immersive demo and better engagement.",
    portfolio_project18_title: "UNIROSS Environmental Study",
    portfolio_project18_desc: "Life-cycle assessment in SimaPro (use and end-of-life scenarios).",
    portfolio_project18_impact: "Impact: quantified footprint and trade-offs.",
    portfolio_project19_title: "Hydraulic Conveyor Simulation",
    portfolio_project19_desc: "Sorting system simulation with hydraulic cylinders (Automation Studio).",
    portfolio_project19_impact: "Impact: cycle consistency and buffer tuning."
  },

  fr: {
    navbar_brand: "Salah Eddine Maimouni",
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_services: "Services",
    nav_studies: "Études",
    nav_portfolio: "Mes Projets",
    nav_contact: "Contact",
    header_title: "Salut !",
    header_subtitle: "Je suis Salah Eddine Maimouni",
    header_subtitle2: "Élève-ingénieur polyvalent",
    github_btn: "Visitez mon GitHub",
    linkedin_btn: "Visitez mon LinkedIn",
    cv_fr_btn: "CV FR",
    cv_en_btn: "CV EN",
    availability_text: "Disponibilité : \n • Alternance dès nov 2025 Rythme 4/3 puis temps plein. \n • Stage dès janv ou fev 2026.",
    about_me: "À propos de moi",
    about_description: "Qui suis-je ?",
    about_text:
      "Je suis élève-ingénieur en 3ᵉ année à Arts et Métiers Metz. J’ai également effectué deux années d’ingénierie en électromécanique à l’ENSAM Casablanca après l’obtention d’un BTS en électrotechnique, et je recherche actuellement une alternance ou un stage en génie électrique \n — notamment en électrotechnique, électromécanique et systèmes embarqués \n — ainsi qu’en génie industriel, incluant l’exploitation et l’amélioration continue, les systèmes de production et le supply chain management.",
    about_cv_btn: "Télécharger CV (FR)",
    about_cv_en_btn: "Télécharger CV (EN)",
    services_title: "Services",
    service_electrical_title: "Électrique",
    service_electrical_desc: "Conception, simulation, maintenance et construction de systèmes électriques et électroniques automatiques",
    service_mechanical_title: "Mécanique",
    service_mechanical_desc: "Conception, simulation, maintenance et construction de systèmes mécaniques et modélisation 3D",
    service_embedded_title: "Systèmes Embarqués",
    service_embedded_desc: "Programmation, construction et maintenance de systèmes embarqués (C, C++, Python, assembleur)",
    service_dev_title: "Développement",
    service_dev_desc: "Interfaces graphiques, POO, vision par ordinateur, développement web front/back",
    studies_title: "Études",
    study1_name: "Baccalauréat Professionnel",
    study1_description: "Bac Pro Maintenance Industrielle (2020) — Lycée Jerada Zeraktouni & OFPPT",
    study2_name: "BTS en Électrotechnique",
    study2_description: "Diplôme de Technicien Supérieur (2022) — Lycée Technique Mehdi Ben Berka, Oujda",
    study3_name: "ENSAM CASABLANCA",
    study3_description: "Ingénierie Électromécanique débutée en 2022",
    study4_name: "ENSAM METZ",
    study4_description: "Diplôme d’ingénieur généraliste (PGE) débuté en 2024",
    internship_title: "Stages",
    internship1_title: "Maintenance Ressources Numériques (1 mois / 2021)",
    internship1_desc: "PC, imprimantes, écrans LCD — Labo National des Ressources Numériques, Rabat",
    internship2_title: "Maintenance Machines-Outils (1 mois / 2022)",
    internship2_desc: "Installations électriques — Lycée Technique Mehdi Ben Berka, Oujda",
    internship3_title: "Maintenance Pompes d’Eau (2 mois / 2023)",
    internship3_desc: "Circuits de distribution et installations électriques — ONEE-BO Jerada",
    internship4_title: "Performance Centrale 350MW (2 mois / 2024)",
    internship4_desc: "Calculs selon ASME PTC 46 — ONEE-BE Jerada",
    portfolio_title: "Mes Projets",
    contact_title: "Contactez-Moi",
    contact_mailto_btn: "Me contacter",

    // Filtres
    filter_all: "Tous",
    filter_electro: "Électro",
    filter_embedded: "Embarqué",
    filter_industry: "Indus/SCM",
    filter_mech: "Mécanique",
    filter_other: "Autres",

    // Projets + impacts
    portfolio_project1_title: "Installation électrique d’atelier",
    portfolio_project1_desc: "Dimensionnement & schémas Caneco BT (protections, sections, chutes de tension).",
    portfolio_project1_impact: "Impact : dimensionnement conforme et protections sûres.",
    portfolio_project2_title: "Modélisation & simulation électrotech",
    portfolio_project2_desc: "MCC, MAS, MS et systèmes solaires sous MATLAB/Simulink/Simscape.",
    portfolio_project2_impact: "Impact : modèles validés et bancs d’essai.",
    portfolio_project3_title: "API Siemens & IHM",
    portfolio_project3_desc: "Automate pour marquage avec IHM sous TIA Portal.",
    portfolio_project3_impact: "Impact : cycle stable et UX opérateur simplifiée.",
    portfolio_project4_title: "Maquette didactique de capteur",
    portfolio_project4_desc: "Prototype à base d’ESP32 pour acquisition et affichage.",
    portfolio_project4_impact: "Impact : prototypage accéléré et gabarit réutilisable.",
    portfolio_project5_title: "Smart Home — IoT & Linux",
    portfolio_project5_desc: "PFE BTS prolongé à l’ENSAM : Raspberry Pi, ESP32, Home Assistant, MQTT.",
    portfolio_project5_impact: "Impact : automatisations modulaires et suivi énergétique.",
    portfolio_project6_title: "FlowShop Planner",
    portfolio_project6_desc: "Application Python (Tkinter) d’ordonnancement avec solveurs et Gantt.",
    portfolio_project6_impact: "Impact : makespan réduit en scénarios tests.",
    portfolio_project7_title: "Solveur de graphes",
    portfolio_project7_desc: "GUI Python (plus court chemin, flot max, etc.).",
    portfolio_project7_impact: "Impact : exploration rapide de cas.",
    portfolio_project8_title: "Système d’information MRP2",
    portfolio_project8_desc: "Gestion de production sous Microsoft Access.",
    portfolio_project8_impact: "Impact : flux de données unifié et rapports.",
    portfolio_project9_title: "Optimisation d’usine (machines à laver)",
    portfolio_project9_desc: "Simulation AnyLogic : flux, stocks, lots et profit global.",
    portfolio_project9_impact: "Impact : débit ↑ et WIP ↓ (simulation).",
    portfolio_project10_title: "Catapulte Optimisée",
    portfolio_project10_desc: "Excel + VBA (krigeage, algorithme génétique, analyses).",
    portfolio_project10_impact: "Impact : recherche efficace des paramètres optimaux.",
    portfolio_project11_title: "Amélioration continue — Ligne de production",
    portfolio_project11_desc: "Outils Lean — VSM, 5S, SMED — suivi QCD.",
    portfolio_project11_impact: "Impact : réduction temps de cycle & gaspillages.",
    portfolio_project12_title: "Conformité pièces mécano-soudées",
    portfolio_project12_desc: "Diagnostic et plan d’amélioration qualité en production.",
    portfolio_project12_impact: "Impact : non-conformités en baisse.",
    portfolio_project13_title: "Formage incrémental — Trajectoire",
    portfolio_project13_desc: "Trajectoire grande pièce (CATIA V5 + RobotStudio).",
    portfolio_project13_impact: "Impact : parcours outil faisable et couvrant.",
    portfolio_project14_title: "V4 90° — Modélisation moteur",
    portfolio_project14_desc: "Étude, modélisation, simulation & équilibrage (3DEXPERIENCE).",
    portfolio_project14_impact: "Impact : vibrations réduites (modèle).",
    portfolio_project15_title: "Assemblages vissés",
    portfolio_project15_desc: "Étude CATIA V5 (efforts, contraintes, couples).",
    portfolio_project15_impact: "Impact : couple et facteur de sécurité validés.",
    portfolio_project16_title: "Usinage — FAO Fraiseuse",
    portfolio_project16_desc: "Simulation FAO & usinage pièce prismatique (CATIA V5).",
    portfolio_project16_impact: "Impact : trajectoires validées avant usinage.",
    portfolio_project17_title: "XR Showroom — Meta Quest 3",
    portfolio_project17_desc: "App XR interactive (Unity + Blender).",
    portfolio_project17_impact: "Impact : démo immersive et engagement.",
    portfolio_project18_title: "Étude environnementale UNIROSS",
    portfolio_project18_desc: "ACV SimaPro (usage & fin de vie).",
    portfolio_project18_impact: "Impact : empreinte quantifiée et arbitrages.",
    portfolio_project19_title: "Tapis roulant hydraulique",
    portfolio_project19_desc: "Tri par vérins hydrauliques (Automation Studio).",
    portfolio_project19_impact: "Impact : régularité de cycle & buffers ajustés."
  }
};

// Init
document.addEventListener('DOMContentLoaded', () => {
  // language: load saved or default FR
  const saved = localStorage.getItem('lang') || 'fr';
  const select = document.getElementById('langSelect');
  if (select) select.value = saved;
  switchLanguage(saved);

  // filters
  setupPortfolioFilters();
});



