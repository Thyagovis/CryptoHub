import {millify} from 'https://esm.sh/millify'

const view = document.getElementById('view')

function VerifyChanges(Percent){

    if(Percent >= 0){

        return {
            Class: 'increase',
            Url: './assets/icons/increase.png'
        }

    }else{

        return {
            Class: 'decrease',
            Url: './assets/icons/decrease.png'
        }

    }

}

function CreateName(Name, Symbol, Logo){

    const name = document.createElement('h3')
    const symbol = document.createElement('p')
    const logo_image = document.createElement('img')
    const div_text = document.createElement('div')
    const div_name_logo = document.createElement('div')
    const td_name = document.createElement('td')

    name.textContent = `${Name}`
    symbol.textContent = `${Symbol}`
    logo_image.src = `${Logo}`

    div_text.appendChild(name)
    div_text.appendChild(symbol)
    div_name_logo.appendChild(logo_image)
    div_name_logo.appendChild(div_text)

    div_name_logo.className = 'logo-nome'

    td_name.appendChild(div_name_logo)

    return td_name
}

function CreatePrice(Price){

    const td_price = document.createElement('td')

    td_price.textContent = `${millify(Price)}`

    return td_price
}

function CreateChanges(Percent){

    const div_data = VerifyChanges(Percent)

    const div_changes = document.createElement('div')
    const percent_text = document.createElement('p')
    const increase_decrease_image = document.createElement('img')
    const td_changes = document.createElement('td')

    percent_text.textContent = `${Percent}`

    div_changes.appendChild(increase_decrease_image)
    div_changes.appendChild(percent_text)

    div_changes.className = div_data.Class
    increase_decrease_image.src = div_data.Url

   
    td_changes.appendChild(div_changes)

    return td_changes
}

function CreateMakertCap(MarketCap){

    const market_cap = document.createElement('td')

    market_cap.textContent = `${millify(MarketCap)}`

    return market_cap
}

function CreateVolume(Volume){

    const volume = document.createElement('td')
    
    volume.textContent = `${millify(Volume)}`

    return volume
}

export function CreateRow(Coins){

    console.log('inicializando...')
    
    for(let i = 0; i < Coins.length; i++){

        const row = document.createElement('tr')
        const row_number = document.createElement('td')

        row_number.textContent = `${i + 1}`

        row.appendChild(row_number)
        row.appendChild(CreateName(Coins[i].name, Coins[i].symbol, Coins[i].logo))
        row.appendChild(CreatePrice(Coins[i].preco))
        row.appendChild(CreateChanges(Coins[i].changes))
        row.appendChild(CreateMakertCap(Coins[i].marketCap))
        row.appendChild(CreateVolume(Coins[i].volume))

        view.appendChild(row)
    }

}
