const URL_BASE = 'https://api.coinpaprika.com/v1/tickers'

export async function request(){

    const response = await fetch(URL_BASE)
    const result = await response.json()
    
    return result
}