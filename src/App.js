import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/section/nav'
import Footer from './components/section/footer'
import Recipes from './pages/recipes'
import About from './pages/about'
import Post from './pages/post'
import Home from './pages/home'

import ScrollToTop from './components/utils/scollToTop'

function App() {
  return (
    <BrowserRouter>
      
      <Nav /> 
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/recipes" component={Recipes} />
        <Route path="/post/:id" component={Post} />
      </Switch>


      <Footer />
    </BrowserRouter>
  );
}

export default App;