import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Season.css'

/**
 * Represents a Season component.
 *
 * @returns {*} Returns the component.
 */
function Season() {
  return (
    <>
      <div className="season-cover-container">
        <div className="season-cover-text-box">
          <p className="season-cover-text">Säsongsprogram</p>
        </div>
      </div>
      <div className="season-nav-container">
        <div className="season-nav-box" id="nav-box_left"><div className="season-nav-text-box"><p className="item-nav-text"><Link to="/seasonal/irrigation" id="season-link">Bevattning</Link></p></div></div>
        <div className="season-nav-box" id="nav-box_middle"><p className="item-nav-text"><Link to="/seasonal/grass-seeds" id="season-link">Gräsfrö</Link></p></div>
        <div className="season-nav-box" id="nav-box_right"><p className="item-nav-text"><Link to="/seasonal/grass-seeds" id="season-link">Gräsgödsel</Link></p></div>
        <Outlet />
      </div>
      <div className="season-article-container">
        <div className="season-article-box">
          <h1 className="season-article-headline">April - Maj </h1>
          <p className="season-article-text-first">
            Om du har mossa i gräsmattan går det bra att använda näringstillskottet Järnsulfat FerroGent (1-2 dl. i 10 liter vatten på 50 kvm).
            Använd alltid en spridarramp till vattenkannan. Kombigödsel som Stroller Mossa eller Florovit Masterlawn Mossa
            är också effektivt och en klar fördel är att du ger näring till gräsmattan samtidigt.
            Att du får mossa i din gräsmatta beror till 85 % på att gräsmattan inte har fått tillräckligt med näring.
            Därför är regelbunden gödsling väldigt viktigt. Ett gott råd är att aldrig använda mossrivare eftersom du då riskerar mer mossa påföljande år.
            Vårstäda gärna, men absolut ingen hårdkrattning.
          </p>
        </div>
        <div className="season-article-box">
          <h1 className="season-article-headline">Maj-Juni</h1>
          <p className="season-article-text-second">
            I slutet av maj eller början av juni bör du vertikalskära, (1-2 cm djup) och stödså döda partier.
            Dressa gräsmattan med Rölunda, Hasselfors eller Weibulls gräsmattedress.
            Att vertikalskära gräsmattanmattan är inte nödvändigt varje år men däremot är det viktigt att dressa och stödså för att bland annat hålla ogräset borta.
            Beroende på vilket gödsel du har valt så kan det vara lämpligt med en ny giva. Vid eventuell torka måste man vattna. Se till att det blir en riktig ”rotblöta” (25-30 mm).
            Hellre mycket men sällan.
          </p>
        </div>
        <div className="season-article-box">
          <h1 className="season-article-headline">Juli-Augusti</h1>
          <p className="season-article-text-third">
            Sprid ut Super Gramino, Stroller Gräsgödsel eller Florovit Gräsgödning 3kg per 100 kvm i slutet av juli.
            Vattna gräsmattan vid behov (25-30 mm). Gräsmattan ska under växtsäsongen klippas 1-2 gånger i veckan.
            Tänk på att absolut inte klippa ner gräsets höjd mer än en tredjedel åt gången.
            En lämplig höjd är 30-40 mm med rotorklippare och 20-25 mm. med cyliderklippare.
            Använd alltid uppsamlare, även vid användning av rotorklippare.
          </p>
        </div>
        <div className="season-bottom-container">
          <div className="season-bottom-box"><p className="season-bottom-box-text">Rädda humlor och bin!</p></div>
          <p className="season-bottom-text">
            Humlor och bin är pyttesmå superhjältar! Men de blir färre, så vi måste hjälpas åt att rädda dem! Läs mer om vad du kan göra på <a href="https://www.pandaplanet.se/radda-humlor-och-bin" className="panda-link">Panda Planet</a>
          </p>
        </div>
      </div>
    </>
  )
}
export default Season
