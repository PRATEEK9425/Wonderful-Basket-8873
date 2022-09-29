import logo from './logo.svg';
import './App.css';
import Routering from './component/Routes';
import Navbar from './component/Navbar';
import Footerpage from './footer/footer';


function App() {


  return (
    <div className="App"  >

      <Navbar/>
    <Routering/>
  <Footerpage/>
    </div>
  );
}

export default App;
