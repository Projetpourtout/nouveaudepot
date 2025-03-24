"use strict";
const monCV = {
    name: "THIERNO ABDOULAYE BARRY",
    title: "Développeur Chez Monimba",
    skills: ["Html", "Css", "TypeScript", "JavaScript", "SCSS", "Git"],
    education: [
        { school: ".Université Barack Obama de Guinée", degree: "Licence en Informatique", year: "2025" },
        { school: ".G.S Abdoul Aziz Diguilline", degree: "BACCALAUREAT UNIQUE(BAC)", year: "2020-2021" },
        { school: ".G.S Hadja Mariama Diallo", degree: "BREVET D'ETUDE DU PREMIER CYCLE(BEPC)", year: " 2017-2018" }
    ],
    COORDONNEES: {
        Email: " barrythiernoabdoulaye177@gmail.com ",
        Telephone: " 625-11-18-30 ",
        Address: " KOUNTIA NORD "
    },
    LANGUES: "Français, Anglais(en apprentissage)"
};
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = `
        <div class="cv">
         <div class="pour__header">
          <h1>${monCV.name}</h1>
          <h2>${monCV.title}</h2>
          </div>
         
          <h3>Competences</h3>
          <ul>${monCV.skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
          <h3>Education</h3>
          <ul>
            ${monCV.education.map(edu => `<p>${edu.degree} - ${edu.school} ${edu.year}</p>`).join('')}
          </ul>
          <div class="pour__lacom">
            <div class="section">
            <h3>LANGUES</h3>
          <p>${monCV.LANGUES}</p>
             </div>
             <div class="section">
          <h3>COORDONNEES</h3>
          <p><span> Email:${monCV.COORDONNEES.Email}</span></p>
          <p>Telephone:${monCV.COORDONNEES.Telephone}</p>
          <p>Address:${monCV.COORDONNEES.Address}</p>
          </div>
          </div>
        </div>
    `;
    }
    ;
});
