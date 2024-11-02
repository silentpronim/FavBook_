import logo from './logo.svg';
import './App.css';
import Loginsignup from './Components/Assests/Loginsignup';
import Navbar from './Components/Assests/Navbar/Navbar';
import Hero from './Components/Assests/Hero/Hero';
import Programs from './Components/Assests/Programs/Programs';
import Title from './Components/Assests/Title/Title';

function App() {
  return (
    <div>
      <Loginsignup/>
      <Navbar/>  
      <div className='container'>
        <Title subTitle='Explore The World Of Books' title='You Can Get'/>
        <Programs/>      
      </div>
          
      <Hero/>
    </div>
  );
}

export default App;
