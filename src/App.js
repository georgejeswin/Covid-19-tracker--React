import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch, withRouter}  from 'react-router-dom';
import Header from './components/Header';
import India from './components/India';
import Allworld from './components/Allworld';
import World from './components/World';
import Footer from './components/Footer';



 
export default class App extends Component {




   
  render() {
    return (
      
        <Router baseUrl="/">
          <div className="container-fluid px-0">
            <Header/>
      
            <Switch>
                
                <Route exact path="/" component={withRouter( Allworld)}/>

                <Route path="/covid-19-tracker" component={withRouter( Allworld)}/>

                <Route path="/covid-19-tracker/" component={withRouter( Allworld)}/>        
             
                <Route path="/Allworld" component={withRouter(Allworld)}/>
              
             
                <Route path="/India" component={withRouter( India)}/>
                  
              
                <Route path="/World" component={withRouter(World)}/>
                  
                
            </Switch>
            <Footer/>

        </div>

        </Router>
          
      
    )
  }
}


