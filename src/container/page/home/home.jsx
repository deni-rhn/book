import React,{Component} from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Formulir from '../../Formulir/Formulir';
import Registered from "../registered/Registered";

class Home extends Component{
    render(){
        return(
            <Router>
                <Route path="/" exact component={Formulir} />
                <Route path="/registered" exact component={Registered}  />
                <Route path="/registered/:id" component={Formulir}  />
            </Router>
        )
    }
}

export default Home;