import './sass/App.css';
import { About } from './views/about/About';
import { Career } from './views/career/Career';
import { Footer } from './views/footer/Footer';
import { Games } from './views/game/Games';
import { Header } from './views/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Games/>
      <Career/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
