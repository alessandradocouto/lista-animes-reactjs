import React from 'react'
import '../Post/Post.css'

export default function Post( { post, loading } ) {

    return (
        <>
            {loading && <h2 className="loading">Loading...</h2>}
            {post.data && <ul className="animes-list">
                {post.data.map( (item) => 
                    <li key={item.id} >
                        <img 
                            src={item.attributes.posterImage.small} 
                            alt={item.attributes.canonicalTitle}/>
                        {item.attributes.canonicalTitle}
                    </li>
                )}
                </ul>
            }
        </>
    )
}