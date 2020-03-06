import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from "../react-auth0-spa";
import API from '../utils/API';
import PopOut from './PopOutTicker';

import plus from '../images/plus.svg';
import minus from '../images/minus.svg';
import popout from '../images/pop-out-window.svg';

const MyStocks = () => {

    const [symbolSearch, setSymbolSearch] = useState();
    const [searchResults, setSearchResults] = useState([]);
    const [userSymbols, setUserSymbols] = useState([]);
    const [isUpdating, setUpdating] = useState(false);
    const { user } = useAuth0();

    useEffect(() => {
        setUpdating(false);
        API.getStock(user.sub)
            .then(res => {
                setUserSymbols(res.data);
            });
        console.log(userSymbols);
    }, [isUpdating]);

    const FormSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbolSearch}&datatype=json&apikey=${process.env.REACT_APP_AV_API}`)
            .then(response => {
                setSearchResults(response.data.bestMatches);
                console.log(searchResults);
            });
    }

    const getSymbols = (name, symbol) => {
        setUpdating(true);
        if(userSymbols.includes(symbol) === false) {
            console.log(userSymbols,"   ", !userSymbols.includes(symbol), " In the if statement")
            setUserSymbols(userSymbols => [...userSymbols, symbol]);
            const stockData = {
                name: name,
                symbol: symbol,
                user: user.sub
            };
            API.saveStock(stockData)
                .then(() => console.log("Successfully added symbol"))
                .catch(err => console.log(err));
        } else {
            alert("this item already exist");
        }
    }

    const removeSymbols = (id) => {
        setUpdating(true);
        API.deleteStock(id)
            .then(() => console.log("Sucessfully deleted symbol"))
            .catch(err => console.log(err));
    }

    const placeholder = () => console.log("clicked");

    return (
        <div className="flex mb-4">
            <div className="w-1/3 mt-2 ml-8">
                <form className="w-full max-w-lg" onSubmit={FormSubmit}>
                    <div className="flex items-center border-b border-b-2 border-green-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                               type="text" 
                               placeholder="Enter a symbol or keyword" 
                               aria-label="Stock symbol"
                               id="search"
                            onChange={e => setSymbolSearch(e.target.value)}/>

                        <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                            Search
                        </button>
                    </div>
                </form>
                <div className="w-full max-w-lg">
                    {searchResults.map(result => {
                        const symbol = result['1. symbol']
                        const name= result['2. name']
                        return(
                            <div className="flex flex-row max-w-lg overflow-hidden border-b border-b-2 border-green-500 py-2">
                                <h1 className="ml-1 mr-3 font-bold text-lg">{symbol}</h1>
                                <p className="max-w-0.625rem truncate text-gray-700 text-md">{name}</p>    
                                <button className="flex-none ml-auto mr-2 fill-current h-6 w-6" onClick={() => getSymbols(name, symbol)}><img src={plus} alt="add"/></button>                            
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-1/3 mt-2 ml-8">  
                <div className="flex flex-row max-w-lg overflow-hidden mt-2 font-bold text-lg border-b border-b-3 border-green-500 py-2">Current Symbols</div>              
                {!userSymbols ?
                    (<div className="flex flex-row max-w-lg overflow-hidden border-b border-b-3 border-green-500 py-2">
                        <h1 className="ml-1 mr-3 font-bold text-lg">No symbols added for {user.name}.</h1>
                     </div>) : 
                    (userSymbols.map(stock => {
                        return(
                            <div className="flex flex-row max-w-lg overflow-hidden border-b border-b-3 border-green-500 py-2">
                                <h1 className="ml-1 mr-3 font-bold text-lg">{stock.symbol}</h1>
                                <p className="max-w-0.625rem truncate text-gray-700 text-md">{stock.name}</p> 
                                <button className="flex-none ml-auto mr-2 fill-current h-6 w-6" onClick={() => removeSymbols(stock._id)}><img src={minus} alt="remove" /></button>
                            </div>
                        )
                    }))
                }
            </div>
            <div className="w-1/3 mt-2">
                <button className="flex-none mt-8 ml-auto mr-2 fill-current h-12 w-12" onClick={() => placeholder()}><img src={popout} alt="pop out" /></button>
                <h1 className="ml-1 mr-3 font-bold text-lg">Create Pop Out Window</h1>
            </div>
        </div>
    )
}

export default MyStocks;
