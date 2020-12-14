import React ,{useEffect,useState} from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';

//spotify api include everything we need to make 
 const spotify = new SpotifyWebApi();

function App() {
  //this token is now handled by the reducer
  //const [token,setToken] = useState(null);

  //data Layer is a Context api uses reducer 
  //in which we can put something where we want without prop drilling
  const [{user,token},dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    const _token = hash.access_token;

    if(_token){
      //setToken(_token);
      dispatch({
        type:'SET_TOKEN',
        token:_token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user)=>{
        dispatch({
          type:'SET_USER',
          user:user,
        })
      })

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type:'SET_PLAYLISTS',
          playlists:playlists,
        })
      })

      spotify.getPlaylist('37i9dQZF1E38otp1O8GfnH').then((discover_weekly) => 
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly:discover_weekly,
        })
        )

      spotify.getGeneric().then((categories=>{
        dispatch({
          type:'SET_CATEGORIES',
          categories:categories,
        })
      }))

    }
  }, []);

  console.log('ME',user);
  
    console.log('i have a token',token);
  return (
  
          <div className="app">
            {
              token ? (
                <Player spotify ={spotify} />
              ):(<Login />)
            }

          </div>
    
  );
}

export default App;
