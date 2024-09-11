function calculateTax(income, expenses) {

    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input"
    }

    let income_minus_expenses = income - expenses
    let tax = income_minus_expenses * 0.2
    return tax
}


function sendNotification(email) {
    
    let parts_of_email = email.split('')

    if(!parts_of_email.includes('@')){
        return "Invalid Email"
    }

    let special_symbol_position = email.indexOf('@')    

    let Output = parts_of_email.slice(0, special_symbol_position).join('') + " sent you an email from "  + parts_of_email.slice(special_symbol_position + 1).join('')

    return Output
}


function checkDigitsInName(name) {

    if(typeof name !== 'string'){
        return "Invalid Input"
    }

    if(name.includes( '0') || name.includes('1' ) || name.includes('2') || name.includes( '3') || name.includes('4') || name.includes('5') || name.includes('6') || name.includes('7') || name.includes('8') || name.includes('9')){
        return true
    }
    else{
        return false
    }   
}


function calculateFinalScore(obj) {

    if(typeof obj !== 'object'){
        return "Invalid Input"
    }

    if(typeof obj.name === 'string' && typeof obj.testScore === 'number' 
        && obj.testScore <= 50 && typeof obj.schoolGrade === 'number' 
        && obj.schoolGrade <=30 && typeof obj.isFFamily === 'boolean'){

        let test_score = obj.testScore
        let school_grade = obj.schoolGrade
        let bonus_score = 0

        if(obj.isFFamily === true){
            bonus_score = 20
        }

        let finalScore = test_score + school_grade + bonus_score
        

        if(finalScore >= 80){
            return true
        }
        else{
            return false
        }
    }
    else{
        return "Invalid Input"
    }
}


function  waitingTime(waitingTimes , serialNumber) {

    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input"
    }

    let sum_of_times = 0
    for(let times of waitingTimes){
        sum_of_times += times
    }

    let average_of_times = Math.round(sum_of_times / waitingTimes.length)
    let timeRequiredForIsrat = (serialNumber - 1 - waitingTimes.length) * average_of_times

    return timeRequiredForIsrat
}