import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import RajGrass from './images/rajgrass.png'
import Svingel from './images/svingel_grass.png'
import AngsGroe from './images/angsgroe_grass.png'
import './GrassSeeds.css'

/**
 * Represents the GrassSeeds component.
 *
 * @returns {JSX} - Returns the GrassSeeds component.
 */
function GrassSeeds() {
  return (
    <>
      <div className="seeds-cover-container">
        <div className="seeds-cover-text-box">
          <p className="seeds-cover-text">Gräsfrö</p>
        </div>
      </div>
      <div className="seeds-nav-container">
        <div className="seeds-nav-box" id="seeds-nav-box_first"><div className="seeds-nav-text-box"><p className="seeds-nav-text"><Link to="/seasonal" id="seeds-link">Säsongprogram</Link></p></div></div>
        <div className="seeds-nav-box" id="seeds-nav-box_second"><p className="seeds-nav-text"><Link to="/seasonal/irrigation" id="season-link">Bevattning</Link></p></div>
        <div className="seeds-nav-box" id="seeds-nav-box_third"><p className="seeds-nav-text"><Link to="/seasonal/grass-seeds" id="seeds-link">Gräsfrö</Link></p></div>
        <div className="seeds-nav-box" id="seeds-nav-box_forth"><p className="seeds-nav-text"><Link to="/seasonal/grass-fertilizer" id="seeds-link">Gräsgödsel</Link></p></div>
        <Outlet />
      </div>
      <div className="seeds-article-container">
        <div className="seeds-article-box">
          <h1 className="seeds-article-headline-h1">Vilken grässort ska jag välja?</h1>
          <p className="seeds-article-text-first">
            En grön och inbjudande gräsmatta vill vi gärna ha. Men vilka gräsfrön passar till just din trädgård och vad har du för ambitioner? Det finns nämligen hundratals olika grässorter att välja på och när du
            köper gräsfrön köper du inte bara en sort utan en blandning av flera olika. De olika sorterna är utvalda för att ge varje gräsmatta rätt egenskaper för en viss växtplats och användningsområde.
            Därför är det väldigt viktigt att du köper rätt grässorter utifrån dina förutsättningar.
          </p>
        </div>
        <div className="seeds-article-box">
          <h1 className="seeds-article-headline-h1">Olika typer av grässorter</h1>
          <h2 className="seeds-article-headline-h2">Engelskt rajgräs  - Lolium Perenne</h2>
          <p className="seeds-article-text-second">
            Rajgräs är idag vanligt förekommande i fröblandningar till våra gräsmattor.
            Det är faktiskt det gräs vi använder oss mest av när vi pratar om hjälpsådd/renoveringssådd. Dagens rajgräs är fleråriga med fina tunna blad som är lätta att klippa.
            Arten har en mycket snabb etablering och en god slitstyrka. Dock har Rajgräset en svag övervintringsförmåga och passar därför bättre i södra Sverige.
          </p>
          <div className="raj_grass_box">
            <img src={RajGrass} alt="Eng. Rajgräs" id="grass-image" />
          </div>
        </div>
        <div className="seeds-article-box">
          <h2 className="seeds-article-headline-h2">Ängsgröe - Poa Pratensis</h2>
          <p className="seeds-article-text-second">
            Detta gräsfrö etablerar sig långsamt men växer sig starkt och ger en slittålig gräsmatta som också står sig bra över vintern. Ängsgröen kan användas i alla sorts gräsmattor.
            Den tål mycket slitage och har en bra övervintringsförmåga. Genom sitt växtsätt med underjordiska utlöpare har Ängsgröe bra möjligheter att läka skador och magasinera näring.
            Ängsröe är känslig för torka och kan vara svåretablerad vid stödsådd.
          </p>
          <div className="raj_grass_box">
            <img src={AngsGroe} alt="Ängsgröe" id="grass-image" />
          </div>
        </div>
        <div className="seeds-article-box">
          <h2 className="seeds-article-headline-h2">Rödsvingel - Festuca rubra</h2>
          <p className="seeds-article-text-second">
            Rödsvingel är en tätvuxen och tålig grässort som trivs bäst i soliga lägen, men som även klarar av skugga, kyla, värme samt torka.
            Rödsvingel är en dominerande sort i hela Norden tack vare dess förmåga att etablera sig på många olika sorters platser, låga krav på bevattning,
            goda övervintringsförmåga och höga motståndskraft mot sjukdomar. Rödsvingel delas in i tre huvudgrupper, tätväxande, sorter med korta sidoskott och sorter med långa sidoskott.
          </p>
          <div className="raj_grass_box">
            <img src={Svingel} alt="Rödsvingel" id="grass-image" />
          </div>
        </div>
        <div className="seeds-bottom-container">
          <div className="seeds-bottom-box"><p className="seeds-bottom-box-text">Rädda humlor och bin!</p></div>
          <p className="seeds-bottom-text">
            Humlor och bin är pyttesmå superhjältar! Men de blir färre, så vi måste hjälpas åt att rädda dem! Läs mer om vad du kan göra på <a href="https://www.pandaplanet.se/radda-humlor-och-bin" target="_blank" rel="noopener noreferrer" className="panda-link">Panda Planet</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default GrassSeeds
