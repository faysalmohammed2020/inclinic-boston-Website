
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';


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
        <Route exact path ="/Login"> 
        <Login></Login>
        </Route>
        <Route exact path ="/Register"> 
        <Register></Register>
        </Route>
      </Switch>
      
     </BrowserRouter>
    </div>
  );
}

export default App;
