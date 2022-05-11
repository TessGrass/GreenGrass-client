import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Fertilizer.css'

/**
 * Represents a Fertilizer component.
 *
 * @returns {*} - Returns a Fertilizer component.
 */
function Fertilizer() {
  return (
    <>
      <div className="fertilizer-cover-container">
        <div className="fertilizer-cover-text-box">
          <p className="fertilizer-cover-text">Gräsgödsel</p>
        </div>
      </div>
      <div className="fertilizer-nav-container">
        <div className="fertilizer-nav-box" id="fertilizer-nav-box_first"><div className="fertilizer-nav-text-box"><p className="fertilizer-nav-text"><Link to="/seasonal" id="fertilizer-link">Säsongsprogram</Link></p></div></div>
        <div className="fertilizer-nav-box" id="fertilizer-nav-box_second"><p className="fertilizer-nav-text"><Link to="/seasonal/irrigation" id="fertilizer-link">Bevattning</Link></p></div>
        <div className="fertilizer-nav-box" id="fertilizer-nav-box_third"><p className="fertilizer-nav-text"><Link to="/seasonal/grass-seeds" id="fertilizer-link">Gräsfrö</Link></p></div>
        <div className="fertilizer-nav-box" id="fertilizer-nav-box_forth"><p className="fertilizer-nav-text"><Link to="/seasonal/grass-fertilizer" id="fertilizer-link">Gräsgödsel</Link></p></div>
        <Outlet />
      </div>
      <div className="fertilizer-article-container">
        <div className="fertilizer-article-box">
          <h1 className="fertilizer-article-headline-h1">Vilket gräsgödsel ska jag välja?</h1>
          <p className="fertilizer-article-text-first">
            En grön och inbjudande gräsmatta vill vi gärna ha. Men vilka gräsfrön passar till just din trädgård och vad har du för ambitioner? Det finns nämligen hundratals olika grässorter att välja på och när du
            köper gräsfrön köper du inte bara en sort utan en blandning av flera olika. De olika sorterna är utvalda för att ge varje gräsmatta rätt egenskaper för en viss växtplats och användningsområde.
            Därför är det väldigt viktigt att du köper rätt grässorter utifrån dina förutsättningar.
          </p>
        </div>
        <div className="fertilizer-article-box">
          <h1 className="fertilizer-article-headline-h1">Olika typer av gräsgödsel</h1>
          <h2 className="fertilizer-article-headline-h2">Impact PROTECT 4-0-14 + 10% Fe - Mossa / Vår</h2>
          <p className="fertilizer-article-text-second">
            Stärker gräset så det motverkar mossan på ett naturligt sätt. Kombinationen av mangan, järn och kalium gör
            detta till en idealisk produkt för våren. 10% långtidsverkande organiskt järn gör att gräset
            orkar konkurrera ut mossan i gräsmattan och ger en utmärkt vacker grön färg utan att ge en överdriven tillväxt.
            Impact Protect erbjuder överlägsen och tillförlitlig näringstillgång för förbättrad prestanda vid lägre temperaturer
            för att erbjuda försäsongstillväxt och ökad slitstyrka. Används under perioden mars - maj.
          </p>
          <div className="fertilizer_box">
            <img src="https://i.postimg.cc/Zn09T8w3/GG-PROTECT-20kg-540x.webp" alt="Vårgödsel" id="fertilizer-image" />
          </div>
          <table>
            <tr>
              <th>Analys:</th>
            </tr>
            <tr>
              <td>Totalt Kväve(N)</td>
              <td>11.6%</td>
            </tr>
            <tr>
              <td>- Svavel(s)</td>
              <td>4.9%</td>
            </tr>
            <tr>
              <td>- Järn(Fe)</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>- Kalium</td>
              <td>11.6%</td>
            </tr>
          </table>
        </div>
        <div className="fertilizer-article-box">
          <h2 className="fertilizer-article-headline-h2">Impact CGF PRO - Ultimate</h2>
          <p className="fertilizer-article-text-second">
            Långtidsverkande professionell fullgödsel för din gräsmatta.
            Perfekt att användas som tidig vårstart och under sommaren.
            Produkten aktiveras av regn eller bevattning successivt och tillför därmed näring när gräsmattan behöver det som mest.
            Tillsatsen av 2% MgO bidrar till ökad grönska och därmed förbättrad fotosyntes.
            Tekniken med coatat kväve gör detta till ett miljövänligt alternativ tack vare minskat kväveläckage till miljön. Används under perioden mars - september.
          </p>
          <div className="fertilizer-box">
            <img src="https://i.ibb.co/1QnD49T/GG-CGFPRO9-540x.webp" alt="Pro" id="fertilizer-image" />
          </div>
          <table>
            <tr>
              <th>Analys:</th>
            </tr>
            <tr>
              <td>Totalt Kväve(N)</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>- Fosfor(P)</td>
              <td>2.2%</td>
            </tr>
            <tr>
              <td>- Kalium</td>
              <td>8.3%</td>
            </tr>
            <tr>
              <td>- Magnesium (Mg)</td>
              <td>1.2%</td>
            </tr>
          </table>
        </div>
        <div className="fertilizer-article-box">
          <h2 className="fertilizer-article-headline-h2">Impact SHIELD 5-5-15</h2>
          <p className="fertilizer-article-text-second">
            En väl avvägd NPK gödsel för användning under hösten.
            Tång är tillsatt i produkten vilket ger extra stärkande egenskaper till gräset under perioder av ostadigt väder.
            Kombinationen av magnesium, järn och kalium ger en gräsmatta som står emot vinterskador på ett fantastiskt sätt. Gödslet har ett förbättrat näringsupptag i svalare
            temperaturer och innehåller MgO & Fe för bättre utseende utan överdriven tillväxt.
          </p>
          <div className="fertilizer-box">
            <img src="https://i.postimg.cc/SQ5LnRcq/GG-SHIELD-20kg-df66d25f-dc4e-476c-9a70-04db6d524bdb-540x.webp" alt="Rödsvingel" id="fertilizer-image" />
          </div>
          <table>
            <tr>
              <th>Analys:</th>
            </tr>
            <tr>
              <td>Totalt Kväve(N)</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>- Fosfor(P)</td>
              <td>2.2%</td>
            </tr>
            <tr>
              <td>Kalium</td>
              <td>12.5%</td>
            </tr>
            <tr>
              <td>- Magnesium(Mg)</td>
              <td>1.2%</td>
            </tr>
            <tr>
              <td>- Järn(Fe)</td>
              <td>4.0%</td>
            </tr>
          </table>
        </div>
        <div className="fertilizer-bottom-container">
          <div className="fertilizer-bottom-box"><p className="fertilizer-bottom-box-text">Rädda humlor och bin!</p></div>
          <p className="fertilizer-bottom-text">
            Humlor och bin är pyttesmå superhjältar! Men de blir färre, så vi måste hjälpas åt att rädda dem! Läs mer om vad du kan göra på <a href="https://www.pandaplanet.se/radda-humlor-och-bin" target="_blank" rel="noopener noreferrer" className="panda-link">Panda Planet</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Fertilizer
