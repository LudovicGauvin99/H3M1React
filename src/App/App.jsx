import React, { useState} from 'react';
import { Calendrier } from '../Calendrier';
import { Jour } from '../Jour';
import { useDate } from '../hooks/useDate';

export const App = () => {
    const [navMois, setnavMois] = useState(0);
    const [navAnnee, setnavAnnee] = useState(0);
  
    const { days, mois, annee } = useDate(navMois, navAnnee);
  
    return(
      <>
        <div id="container">
          <Calendrier 
            mois={mois}
            annee={annee}
            moisSuivant={() => setnavMois(navMois + 1)}
            moisPrecedent={() => setnavMois(navMois - 1)}
            anneeSuivante={() => setnavAnnee(navAnnee + 1)}
            anneePrecedente={() => setnavAnnee(navAnnee - 1)}
          />
  
  <div id="semaine">
           
            <div>Lundi</div>
            <div>Mardi</div>
            <div>Mercredi</div>
            <div>Jeudi</div>
            <div>Vendredi</div>
            <div>Samedi</div>
            <div>Dimanche</div>
          </div>
  
          <div id="calendrier">
            {days.map((d, index) => (
              <Jour
                key={index}
                day={d}
              />
            ))}
          </div>
        </div>
      </>
    );
  };