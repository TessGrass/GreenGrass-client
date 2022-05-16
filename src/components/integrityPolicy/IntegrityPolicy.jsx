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
            All personuppgiftsbehandling sker i enlighet med dataskyddsförordningen (GDPR). I samband med att du skapar ditt konto hos oss så godkänner du att vi lagrar och använder dina uppgifter i vår verksamhet för att fullfölja och tillhandahålla den service som du kan förvänta dig av oss.
            Personuppgifter som anges i samband med din kommunikation med oss sparas i maximalt sex(6) månader, därefter raderas uppgifterna. Ändamålet med vår behandling av insamlade personuppgifter är följande:
            <ul>
              <li> för att du ska kunna skapa ditt konto på vår webbplats.</li>
              <li> För att vi ska kunna kommuni­cera effek­tivt med dig via vårt kontaktformulär.</li>
            </ul>
            Om uppgifter skulle vara ofullständiga, felaktiga eller irrelevanta har du rätt att begära att de rättas eller raderas. Du har också rätt till skadestånd om behandlingen av dina personuppgifter efter rättslig prövning inte visats sig följa lagen.
            Vill du begära vilka uppgifter vi har registrerade om dig eller har du andra frågor, använd vårt kontaktformulär nedan.
          </p>
        </div>
        <div className="integrity-article-box">
          <h2 className="integrity-article-headline-h2">Cookies</h2>
          <p><BiCookie /></p>
          <p className="integrity-article-text-second">
            Cookies är små bitar av text som din webbläsare skickar via den webbplats du besöker.
            En cookie-fil lagras i din webbläsare och tillåter Tjänsten eller en tredjepart att känna igen dig för att ditt nästa besök ska förenklas och göra
            Tjänsten mer tillgänglig. Vår webbplats använder sig inte av Cookies men detta kan komma att ändras i framtiden. Du som användare kommer då att informeras om detta.
          </p>
        </div>
        <div className="integrity-article-box">
          <h2 className="integrity-article-headline-h2">Kontakta oss</h2>
        </div>
      </div>
    </div>
  )
}

export default IntegrityPolicy
