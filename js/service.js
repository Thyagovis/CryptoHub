import { request } from "./api.js";

export async function GetCoins(){
    
    const data = await request()

    const coins = data.map(coin => ({

        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        preco: coin.quotes.USD.price,
        changes: coin.quotes.USD.percent_change_24h,
        marketCap: coin.quotes.USD.market_cap,
        volume: (coin.quotes.USD.volume_24h),
        rank: coin.rank,
        logo: `https://static.coinpaprika.com/coin/${coin.id}/logo.png`
    }))

    return coins
}

export async function FilterCoins(coins, quantity){
    
    const filtered_coins = await (coins).filter(coin => coin.rank && coin.rank <= quantity)

    console.log(filtered_coins)

    return filtered_coins
}