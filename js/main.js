import { GetCoins } from "./service.js";
import { CreateRow } from "./ui.js";

async function init() {

    const coins = await GetCoins()
    console.log(coins[0])

    console.log(coins.length)

    CreateRow(coins)
}

init()