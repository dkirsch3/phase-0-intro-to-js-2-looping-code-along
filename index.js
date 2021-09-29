// Code your solutions in this file
const ppl = ["Lisa", "Kaitlin", "Jan"]
const event = ["surprise"]

function writeCards(ppl, event) {
    let tycards = [];
    for (let i = 0; i < ppl.length; i++) {
        tycards.push(`Thank you, ${ppl[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return tycards;
}

function countDown(num) {
    for (let num = 10; num >= 0; num--) {
        console.log(num)
    }
}