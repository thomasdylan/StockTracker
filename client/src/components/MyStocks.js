import React, { useState } from 'react';
import axios from 'axios';

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
                <form className="w-full max-w-sm" onSubmit={FormSubmit}>
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
                <div className="w-full max-w-sm">
                    {searchResults.map(result => {
                        const symbol = result['1. symbol']
                        const name= result['2. name']
                        return(
                            <div className="max-w-sm rounded overflow-hidden border-b border-b-2 border-green-500 py-2">
                                <h1 className="ml-1 font-bold text-xl">{symbol}</h1>
                                <p className="mr-1 text-gray-700 text-base">{name}</p>                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyStocks;
