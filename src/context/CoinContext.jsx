import { createContext, useState } from "react";

  export const CoinContext = createContext();

  const CoinContextProvider = (props) =>{
    // data will be received in form of array and saved in allCoin
    const [allCoin , setAllCoin] = useState([]);
    const [currency ,setCurrency] = ({
        name:"usd",
        symbol:"$",
    })

    const fetchAllCoin = async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-GsuRohwUhBknGbA5ub7sEeUd'}
          };
          
          fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    const contextValue = {

    }

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )

  }

  export default CoinContextProvider;