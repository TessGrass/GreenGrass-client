import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Irrigation.css'

/**
 * Represents a Irrigation component.
 *
 * @returns {*} returns the Irrigation component.
 */
function Irrigation() {
  return (
    <>
      <div className="irrigation-cover-container">
        <div className="irrigation-cover-text-box">
          <p className="irrigation-cover-text">Bevattning</p>
        </div>
      </div>
      <div className="irrigation-nav-container">
        <div className="irrigation-nav-box" id="irrigation-nav-box_first"><div className="irrigation-nav-text-box"><p className="irrigation-nav-text"><Link to="/seasonal" id="irrigation-link">Säsongsprogram</Link></p></div></div>
        <div className="irrigation-nav-box" id="irrigation-nav-box_second"><p className="irrigation-nav-text"><Link to="/seasonal/irrigation" id="irrigation-link">Bevattning</Link></p></div>
        <div className="irrigation-nav-box" id="irrigation-nav-box_third"><p className="irrigation-nav-text"><Link to="/seasonal/grass-seeds" id="irrigation-link">Gräsfrö</Link></p></div>
        <div className="irrigation-nav-box" id="irrigation-nav-box_forth"><p className="irrigation-nav-text"><Link to="/seasonal/grass-fertilizer" id="irrigation-link">Gräsgödsel</Link></p></div>
        <Outlet />
      </div>
      <div className="irrigation-article-container">
        <div className="irrigation-article-box">
          <h1 className="irrigation-article-headline">Viktigt att vattna gräsmattan rätt</h1>
          <p className="irrigation-article-text-first">
            Vatten är en mycket viktig del i skötsel av gräs. Lagom är bäst heter det och kom ihåg att vissa gräsarter kräver mer vatten än andra.
            I de flesta fall så kan man utgå från att plantan behöver ca 25 mm vatten i veckan under växtsäsongen.
            Har man regnmätare så har man ju lite koll på hur mycket som kommer via regn och hur mycket man behöver tillföra via bevattning.
            Man kan också ganska enkelt ta upp ett prov från marken med en kniv eller jordprovsborr för att känna efter om det finns fukt eller inte i marken.
            Går den ner ca 10 cm utan bekymmer? Då kan du avvakta med att vattna.
            Gräs klarar lång tid utan vatten och generellt kan man säga att det är bättre med för torr än för blöt gräsmatta.
            På våren kan ofta markens förråd täcka behovet av vatten så börja inte vattna för tidigt på säsongen.
            Låter man markens förråd med vatten täcka den första tiden så stimulerar man rötternas utveckling på djupet.
          </p>
        </div>
        <div className="irrigation-article-box">
          <h1 className="irrigation-article-headline">Hur ska man vattna?</h1>
          <p className="irrigation-article-text-second">
            Var 4-5 dag bör man sikta på att vattna sin gräsmatta.
            Blir det oftare än det så leder det till ytliga rötter, med anledningen av att vattnet inte hinner ner i jorden och uppmana rötterna att söka sig dit.
            Blir det för mycket vattning så kan konsekvenserna bli att den står emot ogräs och torka betydligt mycket sämre även om den kan fortfarande kan vara grön och fin.
            Undvik att vattna gräsmattan i sol, dock om det verkligen behövs så skall man aldrig avstå från det. Fördelaktigt är att vattna på morgonen istället för mitt på dagen.
            Däremot är bevattning mitt på dagen bättre än att vattna på kvällen/natten.
          </p>
        </div>
        <div className="irrigation-article-box">
          <h1 className="irrigation-article-headline">Hur länge skall man vattna?</h1>
          <p className="irrigation-article-text-third">
            Detta beror självklart på vad man vattnar sin gräsmatta med.
            Använder du en sprinkler kan den gå i 2-3 timmar utan problem.
            Vatten och syre konkurrerar om samma plats i marken och vill man ha en fin gräsmatta krävs en balans av bägge.
            För rötternas utveckling så är det bättre att vattna mer och sällan än ofta och lite. Har man anlagt en ny gräsmatta eller har hjälpsamt sin befintliga så är det tvärtom,
            viktigt att vattna med mindre mängd och ofta. Detta gör man fram tills de nya plantornas rötter är utvecklade och kan suga vatten från ett större djup.
          </p>
        </div>
        <div className="irrigation-bottom-container">
          <div className="irrigation-bottom-box"><p className="irrigation-bottom-box-text">Rädda humlor och bin!</p></div>
          <p className="irrigation-bottom-text">
            Humlor och bin är pyttesmå superhjältar! Men de blir färre, så vi måste hjälpas åt att rädda dem! Läs mer om vad du kan göra på <a href="https://www.pandaplanet.se/radda-humlor-och-bin" target="_blank" rel="noopener noreferrer" className="panda-link">Panda Planet</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Irrigation
