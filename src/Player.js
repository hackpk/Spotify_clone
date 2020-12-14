import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

const Player = ({spotify}) => {
    return (
        <Router>
            <Switch>
                <Route exact path ='/' >
                    <div className='player'>
                        <div className = 'player_body'>
                            <Sidebar />
                            <Body  spotify ={spotify} />
                        </div>
                        <Footer />
                    </div>
                </Route>
                <Route path='/search'>
                    <h1>SEarch</h1>
                </Route>
            </Switch>
        </Router>
        // <div className='player'>
        //     <div className = 'player_body'>
        //         <Sidebar />
        //         <Body  spotify ={spotify} />
        //     </div>
        //     <Footer />
        // </div>
    )
}

export default Player
