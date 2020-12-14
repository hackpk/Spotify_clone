import React from 'react';
import './Home.css';
import Category from './Category';
import {useDataLayerValue} from './DataLayer';

const Home = () => {
    const [{categories},dispatch] = useDataLayerValue();
    return (
        <div className = 'home'>
            <div className="home_category">
                <Category />
                <Category />
                {console.log("heii" + categories)}
                {categories?.items?.map((berry)=>{
                    return <Category category ={berry} />;
                })}
            </div>

            
            
        </div>
    )
}

export default Home
