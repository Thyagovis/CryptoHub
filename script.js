const display = document.getElementById("display")

function CriarCard(Nome){

    const card = document.createElement("div")
    const Nome_crypto = document.createElement("h2")

    card.className = "card"
    Nome_crypto.className = "name"

    Nome_crypto.textContent = `${Nome}`
    card.appendChild(Nome_crypto)
    display.appendChild(card)
}

function FetchApi(){

    const result = fetch("https://api.coinpaprika.com/v1/tickers")
    .then((res) => res.json())
    .then((data) => {return data})

    return result
}

async function Consultar(){

    const result = await FetchApi()
    const filtered_result = result.filter(
        coin => coin.rank && coin.rank <= 20
    )

    for(let i = 0; i < filtered_result.length; i++){

        console.log(filtered_result[i].name)

    }

/*     display.textContent = `${JSON.display(filtered_result, undefined, 2)}`
 */
}
