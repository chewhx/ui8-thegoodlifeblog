import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { CardMd, CardSm, CardLg } from './components/ui/card'
import Nav from './components/section/nav'
import Footer from './components/section/footer'
import Home from './pages/home'
import Post from './pages/post_one'

import Modal from './components/ui/modal'


function App() {
  return (
    <BrowserRouter>
      
      <Nav /> 

      <Switch>

        <Route exact path="/"><Home /></Route>
        <Route path="/post"><Post /></Route>

      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;