// code your solution here
function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
    }
    function mondayWork(activity= "go to the office") {
        return `This Monday, I will ${activity}.`
    }
    function wrapAdjective(_highlight="*") { 
        return function (_message="special"){
            return `You are ${_highlight}${_message}${_highlight}!`
        }
    }
    