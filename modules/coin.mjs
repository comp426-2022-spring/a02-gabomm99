/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  let result
  let flip = Math.random()
  if ( flip < 0.5) {
    result = "heads"
  } else {
    result = "tails"
  }
  return result
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */
export function coinFlips(flips) {
  let multiFlip = []
  let i = 0
  while (i < flips){
    multiFlip.push(coinFlip())
    i++
  }
  return multiFlip
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */
console.log(countFlips(coinFlips(1)))
export function countFlips(array) {
  let tNum = 0
  let hNum = 0
  let counter = [] 
  for (let flip in array){
    if (array[flip] == "tails"){
      counter.tails = tNum+1
    }
    else{
      counter.heads =  hNum+1
    }
  }
  return counter
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  let outcome = "lose"
  let flipOut = coinFlip()
  if (flipOut == call){
    outcome = "win"
  }
  let scenario = {call: call, flip: flipOut, result: outcome }
  return scenario
}


/** Export 
 * 
 * Export all of your named functions
*/
