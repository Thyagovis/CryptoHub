import { GetCoins } from "./service.js";
import { FilterCoins } from "./service.js";
import { CreateRow } from "./ui.js";
import { CleanView } from "./ui.js";
import { Search } from "./ui.js";

async function ShowFiltered(quantity){

    const coins = await GetCoins()

    const filtered_coins = await FilterCoins(coins, quantity)
    CleanView()
    CreateRow(filtered_coins)

}

Search(ShowFiltered)

