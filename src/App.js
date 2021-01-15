import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import MainMenu from './common/components/MainMenu/MainMenu';
import HomePage from './pages/HomePage/HomePage';
import Associates from './pages/Associates/Associates';
import Footer from './common/components/Footer/Footer';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { UserContext } from './common/state/context';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[700]
        }
    }
});

function App() {

    const [user, setUser] = useState({
        userName:null, 
        selectedAssociate: {
            name:null,
            email:null,
        }, 
        auth:false
    });
    const updateUser = (userUpdate) => {
        setUser({...user, ...userUpdate });
    }
    return (
        <BrowserRouter>
            <UserContext.Provider value={{user, updateUser}}>
                <ThemeProvider theme={theme}>
                    <MainMenu/>
                    <Switch>
                        {user.auth && <Route path="/associates" component={Associates} exact/>}
                        <Route path="/" component={HomePage} default/>
                    </Switch>
                    <Footer/>
                </ThemeProvider>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
