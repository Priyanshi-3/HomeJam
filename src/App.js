import logo from './logo.jpg';
import benny from './benny.jpg';
import vijay from './vijay.jpg';
import andrea from './andrea.jpg';
import shilpa from './shilpa.jpg';
import './App.css';
// import { navbar } from "./components/navbar/navbar";
function App() {
  return (
    <div className="App">
      
      <title>HomeJam</title>
<div className="bg">
  {/* <img src={background}> */}
  
      <div className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
      <a  href="#home"> Home</a> 
  <a href="#">Search</a> 
  <a href="#contact">Contact</a> 
  <a href="#">Login</a>
  {/* <img src="blood.jpg"/> */}
  <a class="active1" href="#home"> About Us</a> 
  <a class="active1"  href="#">Policy</a> 
  <a class="active1" href="#">Search</a> 
  <a class="active1"href="#">Settings</a>
      </div>
      {/* </img> */}

      <div className="txt">
        Cari Cari
        </div>
        <div className="inner">
          Live from their sofa to yours. Get closer to your favourite<br></br>
          artists, and never miss out.
        </div>

        {/* label circle */}
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <span className="dot"><div className="lbl"><div class="heart">&#9825;</div>0 <br></br> Label</div></span>
        <span className="dot"><div className="lbl"><div class="star">&#10032;</div>0 <br></br> Label</div></span>
        <span className="dot"><div className="lbl"><div class="star">&#10032;</div>0 <br></br> Label</div></span>
        <span className="dot"><div className="lbl"><div class="star">&#10032;</div>0 <br></br> Label</div></span>





        {/* <!-- Container (Other Products Section) --> */}
      <div  className="container-fluid">
        <h2>Upcoming Shows</h2><br></br>
        
        <div class="row text-center">
          <div class="col-sm-3">
            <div class="thumbnail1" >
              <img src={benny} alt="BENNY DAYAL" />
              
              <ul class="text-left"><br></br>
              <div>Folk</div>
                <p>Benny Dayal</p>
                <a href="#">More Info&rarr;</a>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail2" >
              <img src={vijay} alt="VIJAY YESUDAS" />
              {/* <p><strong>DECON APP</strong></p> */}
              <ul class="text-left"><br></br>
              <div>Bollywood</div>
              <p>Vijay Yesudas</p>
              <a href="#">More Info&rarr;</a>
               </ul>
              
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail3" >
              <img src={andrea} alt="ANDREA JEREMIAH" />
              {/* <p><strong>RECAD</strong></p> */}
              <ul class="text-left"><br></br>
              <div>Folk</div>
              <p>Andrea Jeremiah</p>
              <a href="#">More Info&rarr;</a>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail4" >
              <img src={shilpa} alt="SHILPA RAO" />
              {/* <p><strong>RECAD</strong></p> */}
              <ul class="text-left"><br></br>
              <div>Folk</div>
              <p>Shilpa Rao</p>
              <a href="#">More Info&rarr;</a>
              </ul>
            </div>
          </div>
        </div>
        
      </div>




      <div  className="container-fluid">
        <h2>Reviews</h2><br></br>
        
        <div class="row text-center">
          <div class="col-sm-3 separate">
            <div class="thumbnailrev1" >
              
              <div className="name">
              
                Hellen Jummy
                <img src={benny} alt="BENNY DAYAL" />
                
                  <div className="loc">
                  <span class="flag-icon flag-icon-us"/>
                    PALO ALTO, CA</div>
              
              </div>
              {/* <ul class="text-left"><br></br><br></br>
                <p>Benny Dayal</p>
              </ul> */}
            </div>
          </div>
          <div class="col-sm-3 separate">
            <div class="thumbnailrev2" >
            <div className="name">
              
              Hellen Jummy
              <img src={benny} alt="BENNY DAYAL" />
            <div className="loc">
            <span class="flag-icon flag-icon-ae"/>
              PALO ALTO, DUBAI</div>
            
            </div>
              
              
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnailrev3" >
            <div className="name">
              
              Hellen Jummy
              <img src={benny} alt="BENNY DAYAL" />
            <div className="loc">
            <span class="flag-icon flag-icon-mm"/>
            PALO ALTO, BURMA</div>
            
            </div>
              
            </div>
          </div>
        </div>
      </div>



      </div>
    {/* </div> */}
   
    </div>
  );
}

export default App;
