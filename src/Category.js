import React from 'react'
import './Category.css';
import Album from './Album'

const Category = ({category}) => {
    return (
        <div className = 'category'>
            <div className="category_info">
                <h2>Made for you</h2>
                <p>Get better recommendations the more you listen.</p>
            </div>
            <div className="category_albums"> 
                <Album />
                <Album />
                <Album />
                <Album />
                <Album />
            
                {category?.icons?.map((album) =>{
                    return <Album album = {album} />;
                })}

            </div>
            
            
        </div>
    )
}

export default Category
