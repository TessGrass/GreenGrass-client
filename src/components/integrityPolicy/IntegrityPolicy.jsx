import React from 'react'
import { BiCookie } from 'react-icons/bi';
import './IntegrityPolicy.css'

/**
 * Represents an IntegrityPolicy component.
 *
 * @returns {*} - Returns the integrity policy.
 */
function IntegrityPolicy() {
  return (
    <div>
      <div className="integrity-article-container">
        <div className="integrity-article-box">
          <h1 className="integrity-article-headline-h1">Integritetspolicy</h1>
          <h2 className="integrity-article-headline-h2">gdpr</h2>
          <p className="integrity-article-text-first">
            I samband med att du skapar ditt konto hos oss så godkänner du att vi lagrar och använder dina uppgifter i vår verksamhet för att fullfölja och tillhandahålla den service som du kan förvänta dig av oss.
            All personuppgiftsbehandling sker i enlighet med dataskyddsförordningen (GDPR). Ändamålet med vår behandling av insamlade personuppgifter är att använda dessa för att du ska kunna skapa ett konto hos oss och sedan logga in och använda tjänsten.
            Inga uppgifter kommer att säljas vidare till tredje part eller skickas vidare till tredje land.
            Om uppgifter skulle vara ofullständiga, felaktiga eller irrelevanta har du rätt att begära att de rättas eller raderas. Du har också rätt att begära skadestånd om behandlingen av dina personuppgifter efter rättslig prövning inte visats sig följa lagen.
            Vill du begära vilka uppgifter vi har registrerade om dig eller har du andra frågor, använd vårt kontaktformulär nedan.
          </p>
        </div>
        <div className="integrity-article-box">
          <h2 className="integrity-article-headline-h2">Cookies <BiCookie /></h2>
          <p className="integrity-article-text-second">
            Cookies är små bitar av text som din webbläsare skickar via den webbplats du besöker.
            En cookie-fil lagras i din webbläsare och tillåter Tjänsten eller en tredjepart att känna igen dig för att ditt nästa besök ska förenklas och göra
            Tjänsten mer tillgänglig.
          </p>
        </div>
        <div className="integrity-article-box">
          <h2 className="integrity-article-headline-h2">Kontakta oss</h2>
        </div>
        <div className="integrity-article-box">
          <h2 className="integrity-article-headline-h2">Rödsvingel - Festuca rubra</h2>
          <p className="integrity-article-text-second">
            Rödsvingel är en tätvuxen och tålig grässort som trivs bäst i soliga lägen, men som även klarar av skugga, kyla, värme samt torka.
            Rödsvingel är en dominerande sort i hela Norden tack vare dess förmåga att etablera sig på många olika sorters platser, låga krav på bevattning,
            goda övervintringsförmåga och höga motståndskraft mot sjukdomar. Rödsvingel delas in i tre huvudgrupper, tätväxande, sorter med korta sidoskott och sorter med långa sidoskott.
          </p>
        </div>
      </div>
    </div>
  )
}

export default IntegrityPolicy
