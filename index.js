// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun());
console.log(saturdayFun('bobsledding'));

function mondayWork (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork());
console.log(mondayWork('play golf'));

function wrapAdjective (flair = "*") {
    return function selfAffirmation (characteristic = "special"){
        return `You are ${flair}${characteristic}${flair}!`;
    }
}

console.log(wrapAdjective("$$")("money"));

const pumpUp = wrapAdjective("!!!");

console.log(pumpUp("great"));

console.log(wrapAdjective());
console.log(wrapAdjective("!!"));