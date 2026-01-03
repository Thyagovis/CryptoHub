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
        logo: `https://static.coinpaprika.com/coin/${coin.id}/logo.png`
    }))

    return coins
}