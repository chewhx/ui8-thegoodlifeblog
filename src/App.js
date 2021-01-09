import logo from './logo.svg';
import './App.css';

import { CardMd, CardSm, CardLg } from './components/ui/card'
import Nav from './components/section/nav'
import Footer from './components/section/footer'
import HomeOne from './pages/home_one'
import HomeTwo from './pages/home_two'
import PostOne from './pages/post_one'

import Modal from './components/ui/modal'
import Post from './components/section/post'


function App() {
  return (
    <>
      <Nav />
      <PostOne />
      <Footer />
    </>
  );
}

export default App;
