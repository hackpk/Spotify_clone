import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import './Body.css';
import Header from './Header';
import Home from './Home';
import {useDataLayerValue} from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';


const Body = ({spotify}) => {
    const [{discover_weekly},dispatch] = useDataLayerValue();
    return (
        // <Router>
        //     <Switch>
        //         <Route path='/'>
        //             <div className='body'>
        //                 <Header spotify ={spotify} />
        //                 <Home spotify = {spotify} />
        //             </div>

        //         </Route>
        //         <Route path ='/search'>
        //             <h1>library</h1>
        //         </Route>
        //     </Switch>
        // </Router>

            <div className='body'>
                <Header spotify ={spotify} />
                <Home spotify = {spotify} />
            </div>

        // <div className='body'>
        //     <Header spotify ={spotify} />
        //     <div className="body_info">
        //         <img src = '' alt='' />
        //         <div className="body_infoText">
        //             <strong>PLAYLIST</strong>
        //             <h2>Discover Weekly</h2>
        //             <p>{discover_weekly?.description}</p>
        //         </div>
        //     </div>
        //     <div className="body_songs">
        //         <div className="body_icons">
        //             <PlayCircleFilledIcon className = 'body_shuffle' />
        //             <FavoriteIcon font-size ='large' />
        //             <MoreHorizIcon />
        //         </div>
        //         {discover_weekly?.tracks?.items.map(item=>
        //                 <SongRow track={item.track} />
        //             )}
                
        //     </div>
        // </div>
    )
}

export default Body
