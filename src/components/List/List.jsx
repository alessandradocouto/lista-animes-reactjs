import React, { useState, useEffect } from 'react'
import './List.css';
import SearchInput from '../SearchInput/SearchInput';
import Post from '../Post/Post';
import Pagination from '../Pagination/Pagination';

export default function List() {
    // states inputSearch
    const [text, setText] = useState('');
    // state cards 
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    // state pages
    const [offset, setOffset] = useState(0);

    // valores fixos
    const limit = 12;
    const total = 380;

    // urls da API
    const url = 'https://kitsu.io/api/edge/anime';
    const urlPage = `${url}?page[limit]=${limit}&page[offset]=${offset}`;
    const urlInfo = `${url}?filter[text]=${text}`;
    const handleInput = (func) => {
        return (e) => {
            const convertText = e.target.value.toLowerCase().trim();
            func(convertText);
        }
    }

    const getData = (link, func) => {
        setLoading(true);
        fetch(link)
        .then(resp => resp.json())
        .then((jsonResult) => {
            // o objeto da resposta JSON com um state de objetos
            func(jsonResult);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    useEffect( () => {
        
        if (text !== '') {
            getData(urlInfo, setPost);
        }
        getData(urlPage, setPost);

    },[text, offset, urlPage,urlInfo]);

    return (
        <div className="List">
            <h1>Kitsu's Anime</h1>
            <SearchInput value = {text} onChange={handleInput(setText)} />
            <Post post={post} loading={loading} />
            <Pagination limit={limit} total={total} 
                offset={offset} setOffset={setOffset}
            />
        </div>
    );

}
