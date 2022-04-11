
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu.js'
import Recipe from './Pages/Recipe.js'
import About from './Pages/About.js'
import Pricing from './Pages/Pricing.js'
import Contact from './Pages/Contact.js'
import Error from './Pages/Error.js'
function App() {
  return (
    <div className="bg-fixed bg-no-repeat bg-cover sm bg-[url('https://images.unsplash.com/photo-1523145149804-5d8e0c044753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-[#000000c7] bg-blend-multiply">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
