import React,{Component} from 'react';
import { Switch , Route,Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import LoginIn from './LoginIn';
import Register from './RegisterComponent';
import Userinterface from './UserInfoPage/UserInterface';
import SimpleMap from './UserInfoPage/SimpleMap';
import Live from "./Live";
import RuleComponent from './rule';
var footerstyle = {
    width:"500px",
    marginLeft:"auto", 
    marginRight:"auto",
    marginBottom:"auto",
}

// define home page
class Home extends Component{
    render(){
        return(
            <div>
                {/* define every button and component unique router */}
                <NavBar />
                <Switch>
                    <Route exact path="/login" component={()=><LoginIn history='/login'/>} />
                    <Route exact path= "/register" component={()=><Register/>} />
                    <Route exact path="/userinfo" component={() =><Userinterface/>}/>
                    <Route exact path="/live" component={() =><Live/>}/>
                    <Route exact path="/rule" component={() =><RuleComponent/>}/>
                    <Route path="/map/:address" component={() =><SimpleMap/>}/>
                    <Redirect to="/login" />
                </Switch>
                <footer style={footerstyle}>
                    CopyRight@ CNDevelopers in Fall 2018 WebProgramming
                </footer>
            </div>
        );
    }
}
export default Home;