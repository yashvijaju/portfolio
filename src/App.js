import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route exact path="/" component={Home}/>
             <Route component={Home}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;

