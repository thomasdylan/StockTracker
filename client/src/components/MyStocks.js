import React, { useState } from 'react';
import axios from 'axios';

import plus from '../images/plus.svg';

const MyStocks = () => {

    const [symbolSearch, setSymbolSearch] = useState();
    const [searchResults, setSearchResults] = useState([]);

    const FormSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbolSearch}&datatype=json&apikey=$${process.env.REACT_APP_AV_API}`)
            .then(response => {
                setSearchResults(response.data.bestMatches);
                console.log(searchResults);
            });
    }

    return (
        <div>
            <div className="mt-2 ml-8">
                <form className="w-full max-w-lg" onSubmit={FormSubmit}>
                    <div className="flex items-center border-b border-b-2 border-green-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                               type="text" 
                               placeholder="Search by Stock Symbol" 
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
                                <button className="flex-none ml-auto mr-2 fill-current h-6 w-6"><img src={plus} alt="add"/></button>                            
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyStocks;
