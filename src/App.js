import logo from './logo.svg';
import './App.css';

import { CardMd, CardSm, CardLg } from './components/ui/card'
import Nav from './components/section/nav'
import Footer from './components/section/footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <CardSm />
      <Footer />
    </div>
  );
}

export default App;
