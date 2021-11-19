import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './ContextApi/Stateprovider';
import Payment from './Pages/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Pages/Orders';
import Search from './Pages/Search';
import Footer from './Components/Footer';

function App() {
  //const promise = loadStripe('pk_test_51JuY1pSEyeWTTVHU82xiyeyJUMW3IptVuVLHrzCSTHo7XEvdEmcfmKlqdbYPi5NzZiWVF1KpHuwlrEVSKCMFo08X00OdI0BaRA')
  const [{cart},dispatch] = useStateValue()

  //will run when app component loads
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log("User is ",authUser)

      if(authUser){
        //If user has just logged in / or is already logged
        dispatch({
          type:"SET_USER",
          user: authUser
        })  
      }

      else{
        //If user logs out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])
  
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/checkout'>
            <Checkout/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/payment'>
              <Payment/>
          </Route>
          <Route path="/orders">
              <Orders/>
          </Route>
          <Route path="/search/:search">
              <Search/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
