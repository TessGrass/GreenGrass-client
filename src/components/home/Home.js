import Navbar from '../navbar/Navbar'
import cutter from './images/cutter.jpg';
import irrigation from './images/irrigation.jpeg';
import seeds from './images/seeds.jpg';
import lawn from './images/lawnfert.jpg';

import './Home.css';

function Home() {

  const article = 'I slutet av maj eller början av juni bör du vertikalskära, (1-2 cm djup) och stödså döda partier. Dressa gräsmattan med Rölunda, Hasselfors eller Weibulls gräsmattedress. Att vertikalskära gräsmattanmattan är inte nödvändigt varje år men däremot är det viktigt att dressa och stödså för att bland annat hålla ogräset borta. ' +
  ' Beroende på vilket gödsel du har valt så kan det vara lämpligt med en ny giva. Vid eventuell torka måste man vattna. Se till att det blir en riktig ”rotblöta” (25-30 mm). Hellre mycket men sällan.'

  const period = 'MAJ - JUNI'

  return (
    <div className="test">
    <div className="home">
     </div>
     <div>
       <p className="headline">GREENGRASS</p>
       <p className="headline-bottom-text">Din gräsmatteplanerare</p>
     </div>
    <div className="startpage-bottom">
      <div className="sidebar"><h1>{period}</h1><p>{article}</p></div>
      <div className="content1"> <img src={cutter} alt="cutter"></img><p>SÄSONGSPLANERING</p></div> 
      <div className="content2"><img src={irrigation} alt="irrigation"></img><p>BEVATTNING</p></div> 
      <div className="content3"><img src={lawn} alt="lawnfertilization"></img><p>GRÄSGÖDSEL</p></div> 
      <div className="content4"><img src={seeds} alt="grass seeds"></img><p>GRÄSFRÖ</p></div> 
    </div>
    </div>
  );
}

export default Home;


/* <Block className={"one"} />
    <Block className={"two"} />
    <Block className={"three"} />
    <Block className={"four"} />
    <Block className={"five"} /> */