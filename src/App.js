
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
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div>
     
      <AuthProvider>
      <BrowserRouter>
          <Header></Header>
      <Switch>
        <Route exact path ="/">
        <Home></Home>
        </Route>
        <Route path = "/Home">
         <Home></Home>
        </Route>
        <PrivateRoute path = "/About">
         <About></About>
        </PrivateRoute>
        <PrivateRoute exact path ="/Contact"> 
        <Contact></Contact>
        </PrivateRoute>
        <Route exact path ="/Register"> 
        <Register></Register>
        </Route>
        <Route exact path ="*"> 
        <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
     </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
