import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

/**
 * Represents a Home component.
 *
 * @returns {JSX} returns the component.
 */
function Home() {
  const article = 'I slutet av maj eller början av juni bör du vertikalskära, (1-2 cm djup) och stödså döda partier. Dressa gräsmattan med Rölunda, Hasselfors eller Weibulls gräsmattedress. Att vertikalskära gräsmattanmattan är inte nödvändigt varje år men däremot är det viktigt att dressa och stödså för att bland annat hålla ogräset borta. '
  + ' Beroende på vilket gödsel du har valt så kan det vara lämpligt med en ny giva.'

  const period = 'MAJ - JUNI'

  return (
    <div className="home-wrapper">
      <div className="home" />
      <div>
        <p className="headline">Greengrass</p>
        <p className="headline-bottom-text">Din gräsmatteplanerare</p>
      </div>
      <div className="startpage-bottom">
        <div className="sidebar">
          <h1>{period}</h1>
          <p>{article}</p>
        </div>
        <div className="content1">
          <img src="https://i.imgur.com/vzhig7H.jpg" alt="cutter" />
          <Link to="/seasonal" id="home-link-headline">
            SÄSONGSPLANERING
          </Link>
          <p className="home-link-text">Allt du behöver veta om skötsel. Allt från tidig vår fram till sen höst.</p>
        </div>
        <div className="content2">
          <img src="https://i.imgur.com/Hs7fvb7.jpg" alt="irrigation" />
          <Link to="/seasonal/irrigation" id="home-link-headline">
            BEVATTNING
          </Link>
          <p className="home-link-text">Lär dig att vattna rätt. Vad ska man tänka på? Hur ofta? Hur mycket?</p>
        </div>
        <div className="content3">
          <img src="https://i.imgur.com/omOJrrJ.jpg" alt="lawnfertilization" />
          <Link to="/seasonal/grass-fertilizer" id="home-link-headline">
            GRÄSGÖDSEL
          </Link>
          <p className="home-link-text">Här kan du läsa mer om gräsgödsel.</p>
        </div>
        <div className="content4">
          <img src="https://i.imgur.com/nnjDx4j.jpg" alt="grass seeds" />
          <Link to="/seasonal/grass-seeds" id="home-link-headline">
            GRÄSFRÖ
          </Link>
          <p className="home-link-text">Allt du behöver veta om gräsfrön.</p>
        </div>
      </div>
    </div>
  );
}

export default Home
