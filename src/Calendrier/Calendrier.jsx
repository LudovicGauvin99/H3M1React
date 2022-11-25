import React from 'react';

export const Calendrier = ({ moisSuivant, moisPrecedent,anneeSuivante, anneePrecedente, mois, annee }) => {
  return(
    <div id="header">
      
    
      <div>
        <button onClick={moisPrecedent} id="BtnPrecedent"> ⬅️ </button>
          <span id="mois">{mois}</span>
        <button onClick={moisSuivant} id="BtnSuivant"> ➡️ </button>
        </div>
     
      
      <div>
        
        <button onClick={anneePrecedente} id="BtnPrecedent">⬅️</button>
        <span id="annee">{annee}</span>
        <button onClick={anneeSuivante} id="BtnSuivant">➡️</button>
      </div>
    </div>
  );
};
