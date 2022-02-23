// code your solution here
//1
function saturdayFun(activity='roller-skate'){
return(`This Saturday, I want to ${activity}!`)
}
saturdayFun('bathe my dog')
//2
function mondayWork(activity='go to the office'){
return (`This Monday, I will ${activity}.`)
}
mondayWork('work from home')
//3
function wrapAdjective(mark = "*"){
   return function (adj="special"){
       return `You are ${mark}${adj}${mark}!`;
   }
}
//4
