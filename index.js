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

function wrapAdjective() {
    const part1 = "You are";
    return function () {
        const part2 = "a hard worker"
        return function(){
        console.log(`${part1} ${part2}!`);
      };
    };
}
  
  wrapAdjective()()();

  function wrapAdjective() {
    const part1 = "You are";
    return function () {
        const part2 = "a dedicated worker."
        return function(){
        console.log(`${part1} ${part2}!`);
      };
    };
}
  
  wrapAdjective()()();