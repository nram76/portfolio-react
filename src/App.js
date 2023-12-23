// import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout'
//@ts-ignore
import Home from './components/Home/home' 
import About from './components/About/about';
import Contact from './components/Contact/contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
