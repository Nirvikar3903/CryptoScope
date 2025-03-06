import { createContext, useEffect, useState } from "react";

  export const CoinContext = createContext();

  const CoinContextProvider = (props) =>{
    // data will be received in form of array and saved in allCoin
    const [allCoin , setAllCoin] = useState([]);
    const [currency ,setCurrency] = useState({
        name:"usd",
        symbol:"$",
    })
    

    const fetchAllCoin = async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-GsuRohwUhBknGbA5ub7sEeUd'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.error(err));
          
          }

        useEffect(()=>{
          fetchAllCoin();
        },[currency])

        // whenever currency dependency changes it will call the function and add another api request with updated currency name ${currency.name}

    const contextValue = {
      allCoin , currency , setCurrency
    }

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )

  }

  export default CoinContextProvider;