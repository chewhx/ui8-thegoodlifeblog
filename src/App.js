import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/section/nav'
import Footer from './components/section/footer'
import Home from './pages/home'
import Post from './pages/post'



function App() {
  return (
    <BrowserRouter>
      
      <Nav /> 

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/post"><Post /></Route>
        <Route path="/post/:id" component={Post} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;