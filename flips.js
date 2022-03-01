import { coinFlips, countFlips  } from "./modules/coin.mjs";
import minimist from "./node_modules/minimist/index.js"



let commandFlip = minimist((process.argv.slice(2)))
let flipNum = commandFlip['number']
if(flipNum == undefined){
    flipNum = 1
}
let flips = coinFlips(flipNum)
console.log(flips)
console.log(countFlips(flips))
