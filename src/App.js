import logo from './logo.svg';
import './App.css';
import Routering from './component/Routes';
import Navbar from './component/Navbar';
import Footerpage from './footer/footer';
import {CartProvider} from "react-use-cart"

function App() {


  return (
    <div className="App"  >
<CartProvider> 
      <Navbar/>
    <Routering/>
  <Footerpage/>
  </CartProvider>
    </div>
  );
}

export default App;
