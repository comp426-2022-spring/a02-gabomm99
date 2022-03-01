import { flipACoin } from "./modules/coin.mjs";
import minimist from "./node_modules/minimist/index.js";


let commandFlip = minimist((process.argv.slice(2)))
let flipCall = commandFlip['call']
let outcome = flipACoin(flipCall)
if(flipCall == undefined){
    console.log("Error: no input.")
    console.log("Usage: node guess-flips --call=[head|tails]")
}
if(flipCall != "tails" && flipCall != "heads"){
    console.log("Usage: node guess-flip.js --call=[head|tails]")
}
else{
    console.log(outcome)
}
