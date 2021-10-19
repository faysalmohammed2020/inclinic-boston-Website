
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Notfound from './Components/Notfound/Notfound';
import About from './Components/About/About';



function App() {
  return (
    <div>
     
      <BrowserRouter>
          <Header></Header>
      <Switch>
        <Route exact path ="/">
        <Home></Home>
        </Route>
        <Route path = "/Home">
         <Home></Home>
        </Route>
        <Route path = "/About">
         <About></About>
        </Route>
        <Route exact path ="/Contact"> 
        <Contact></Contact>
        </Route>
        <Route exact path ="/Register"> 
        <Register></Register>
        </Route>
        <Route exact path ="*"> 
        <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
