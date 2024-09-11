function calculateFinalScore(obj) {

    if(typeof obj !== 'object'){
        return "Invalid Input"
    }

    if(typeof obj.name === 'string' && typeof obj.testScore === 'number' 
        && obj.testScore <= 50 && typeof obj.schoolGrade === 'number' && obj.schoolGrade <=30 && typeof obj.isFFamily === 'boolean'){

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

console.log(calculateFinalScore({ name: '1234', testScore: 45,  schoolGrade: 25, isFFamily : true  }))
console.log(calculateFinalScore({ name: "Rajib", testScore: 35,  schoolGrade: 25, isFFamily : false }))
console.log(calculateFinalScore("hello" ))
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true }))
console.log(calculateFinalScore({ name: "Rajib", testScore: 35,  schoolGrade: 25, isFFamily : true }))