import {millify} from 'https://esm.sh/millify';

const display = document.getElementById("view")
const rank = document.getElementById('rank')
const btngo = document.getElementById("btngo")

function Verifica_porcentagem(valor){

    if(valor >= 0){

        return 'increase'

    }else{

        return 'decrease'
    }

}

function CriarRow(rank, nome, simbolo, logo, preco, mudancas, cap, vol){

    const row = document.createElement("tr")

    const name = document.createElement("h3")
    const symbol = document.createElement("p")
    const rank_td = document.createElement('td')
    const logo_text = document.createElement('td')
    const price = document.createElement("td")
    const changes = document.createElement("td")
    const market = document.createElement("td")
    const volume = document.createElement("td")
    const div_name = document.createElement('div')
    const div_changes = document.createElement('div')

    const logo_image = document.createElement('img')
    const increase_decrease_image = document.createElement('img')
    const percent_text = document.createElement('p')
    percent_text.textContent = `${mudancas}`
    const div_text = document.createElement('div')

    div_name.className = 'logo-nome'
    div_changes.className = Verifica_porcentagem(mudancas)

    if(div_changes.className == 'increase'){

        increase_decrease_image.src = './assets/icons/increase.png'

    }else{

        increase_decrease_image.src = './assets/icons/decrease.png'

    }
    
    
    div_changes.appendChild(increase_decrease_image)
    div_changes.appendChild(percent_text)
    div_name.appendChild(logo_image)
    div_name.appendChild(div_text)
    
    div_text.appendChild(name)
    div_text.appendChild(symbol)

    logo_text.appendChild(div_name)

    logo_image.src = logo
    rank_td.textContent = `${rank}`
    symbol.textContent = `${simbolo}`
    name.textContent = `${nome}`
    price.textContent = `${preco}`
    changes.appendChild(div_changes)
    market.textContent = `${cap}`
    volume.textContent = `${vol}`
    
    row.appendChild(rank_td)
    row.append(logo_text)
    row.appendChild(price)
    row.appendChild(changes)
    row.appendChild(market)
    row.appendChild(volume)

    display.appendChild(row)
}

function LimparView(){

    view.innerHTML = '<tr><th>#</><th>Nome</th><th>Preço</th><th>Mudanças 24h</th><th>Market cap</th><th>Volume</th></tr>'

}

function FetchApi(){

    const result = fetch("https://api.coinpaprika.com/v1/tickers")
    .then((res) => res.json())
    .then((data) => {return data})

    return result
}

async function Consultar(rank){

    const result = await FetchApi()
    const filtered_result = result.filter(
        coin => coin.rank && coin.rank <= rank
    )

    LimparView()

    for(let i = 0; i < filtered_result.length; i++){
    
        CriarRow(
            i + 1,
            filtered_result[i].name,
            filtered_result[i].symbol,
            `https://static.coinpaprika.com/coin/${filtered_result[i].id}/logo.png`,
            millify((filtered_result[i].quotes.USD.price)),
            filtered_result[i].quotes.USD.percent_change_24h,
            millify(filtered_result[i].quotes.USD.market_cap),
            millify((filtered_result[i].quotes.USD.volume_24h).toFixed(2))
        )
    }
}

btngo.addEventListener('click', () => {

    Consultar(rank.value)

})

