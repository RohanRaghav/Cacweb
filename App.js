import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <div className="image-container" id='home'>
          <img className="team" src="/Backimg.jpeg" alt="Background" />
          <div className="overlay">
            <div className="content">
              <p className='clubname'>
                CAC Club- Chandigarh University</p>
              <h1>Welcome to Our <br />Comunity</h1>
              <p>Join us to be part of something great</p>
              <button className='joining' >Join us</button>
              <button className='contacting' >Contact us</button>
            </div>
          </div>
          <svg className="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#333" fillOpacity="1" d="M0,192L48,165.3C96,139,192,85,288,64C384,43,480,53,576,85.3C672,117,768,171,864,170.7C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </header>
      <div className='content' id='aboutus'><h1><b>About us</b></h1>
      <p className='brief'>
      Chandigarh Academic Competitions is a vibrant community dedicated to igniting creativity and encouraging exploration among students. Our mission is to provide opportunities for students to discover and pursue their passions across various domains. At CAC Club, we believe in the power of community, creativity, and collaboration, We aim to bring together individuals from diverse backgrounds to share knowledge, skills, and experiences that foster growth and innovation.
      </p>
      <ul className='ulist'>
                <li><b>1000+</b><br />Total Participation</li>
                <li><b>500+</b><br />Acheiments</li>
                <li><b>9000+</b><br />National Participation</li>
                <li><b>1000+</b><br />International Participation</li>
            </ul>
      </div>
      <div className='acheivers' id='acheivers'>
      <h1><b>Acheivers</b></h1>
      <p>Here are some of our outstanding achievers who have excelled in their respective domains.<br />We proudly regard these students as the icons of our Club.</p>
      <div className='card-container'>
      <div className="card my-3">
          <img src="/50.jpg" alt="Placeholder 1" />
          </div>
        <div className="card my-3">
          <img src="/49.png" alt="Placeholder 2" />
        </div>
        <div className="card my-3">
          <img src="/48.jpg" alt="Placeholder 3" />
        </div>
      </div>
      </div>
      <div className='events' id='events'>
      <h1><b>Events</b></h1>
      <button className='joining' >Past Events</button>
              <button className='recent'>Recent Events</button>
              <div className='card-container'>
      <div className="cards my-3">
          <img src="/e1.jpeg" alt="Placeholder 1" />
          <button className='closed'>Registration Closed</button>
          </div>
        <div className="cards my-3">
          <img src="/e2.png" alt="Placeholder 2" />
          <button className='open'>Registration Open</button>
        </div>
        <div className="cards my-3">
          <img src="/e3.png" alt="Placeholder 3" />
          <button className='open'>Registration Open</button>
        </div>
      </div>
      </div>
      <center>
      <hr style={{width:800}} /></center>
      <footer>
<center>
<a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className='Accounts'
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href='/'>
<svg fill="#000000" width="24" height="24" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" className='Accounts'>
  <g opacity="0.2">
    <path d="M226.58887,71.81348A15.91692,15.91692,0,0,0,216.95605,60.919C183.479,48.0542,128,48.40747,128,48.40747S72.52148,48.0542,39.044,60.919a15.91766,15.91766,0,0,0-9.63282,10.89428C27.07422,80.78613,24,98.24438,24,128c0,29.75537,3.07422,47.21387,5.41113,56.18652A15.91692,15.91692,0,0,0,39.044,195.08105C72.521,207.9458,128,207.59253,128,207.59253s55.47852.35327,88.95605-12.51148a15.91655,15.91655,0,0,0,9.63282-10.89428C228.92578,175.21387,232,157.75562,232,128,232,98.24463,228.92578,80.78613,226.58887,71.81348ZM112,160V96l48,32Z"/>
  </g>
  <path d="M164.4375,121.34375l-48-32A8,8,0,0,0,104,96v64a7.99975,7.99975,0,0,0,12.4375,6.65625l48-32a7.99959,7.99959,0,0,0,0-13.3125ZM120,145.05176V110.94824L145.57813,128Zm114.33057-75.2544a23.96369,23.96369,0,0,0-14.50489-16.34619C185.55615,40.28223,130.98291,40.39209,128,40.40771c-2.98145-.02392-57.55518-.126-91.8252,13.04346A23.96415,23.96415,0,0,0,21.66992,69.79639C19.083,79.72705,16,97.88574,16,128c0,30.11377,3.083,48.27246,5.66943,58.20264a23.96369,23.96369,0,0,0,14.50489,16.34619c32.80615,12.60693,84.22168,13.04541,91.167,13.04541.6206.00049.69726.00049,1.31738,0,6.95069-.00049,58.36231-.43945,91.16651-13.04541a23.96415,23.96415,0,0,0,14.50488-16.34522C236.917,176.273,240,158.11426,240,128,240,97.88623,236.917,79.72754,234.33057,69.79736ZM218.84668,182.1709a7.92972,7.92972,0,0,1-4.76074,5.44238c-31.6543,12.16406-85.50586,11.99121-86.13574,11.979-.53516.022-54.38184.186-86.03711-11.979a7.93108,7.93108,0,0,1-4.76026-5.44287C34.80225,173.14453,32,156.41992,32,128c0-28.42041,2.80225-45.145,5.15332-54.1709a7.92972,7.92972,0,0,1,4.76074-5.44238c31.6543-12.16455,85.49707-11.99658,86.13574-11.979.53809-.01709,54.38184-.18554,86.03711,11.979a7.93108,7.93108,0,0,1,4.76026,5.44287C221.19775,82.85547,224,99.58008,224,128,224,156.42041,221.19775,173.145,218.84668,182.1709Z"/>
</svg></a>
<a href="/">
<svg fill="#000000" width="24" height="24" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" className='Accounts'>
  <path d="M220,44V212a7.99993,7.99993,0,0,1-8,8H44a7.99993,7.99993,0,0,1-8-8V44a7.99993,7.99993,0,0,1,8-8H212A7.99993,7.99993,0,0,1,220,44Z" opacity="0.2"/>
  <path d="M96,112.001v64a8,8,0,1,1-16,0v-64a8,8,0,0,1,16,0ZM88,68a12,12,0,1,0,12,12A12,12,0,0,0,88,68ZM228,44V212a16.01833,16.01833,0,0,1-16,16H44a16.01833,16.01833,0,0,1-16-16V44A16.01817,16.01817,0,0,1,44,28H212A16.01817,16.01817,0,0,1,228,44ZM212.00977,211.99951,212,44H44V212H212ZM148,104.001a35.79157,35.79157,0,0,0-20.20508,6.22143A7.99729,7.99729,0,0,0,112,112.001v64a8,8,0,1,0,16,0v-36a20,20,0,0,1,40,0v36a8,8,0,1,0,16,0v-36A36.04061,36.04061,0,0,0,148,104.001Z"/>
</svg>
          </a>
</center>
      </footer>
      <center>
      <div className='copyright'>&copy; 2024 Copyright: Chandigarh University</div></center>
    </div>
  );
}

export default App;
