function saturdayFun(fun = "roller-skate"){
    return(`This Saturday, I want to ${fun}!`)
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(fun = "go to the office"){
    return(`This Monday, I will ${fun}.`)
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(part1){
  return function (part2){
    return `You are ${part1}${part2}${part1}!`
  }
}
wrapAdjective('*')
wrapAdjective('||')