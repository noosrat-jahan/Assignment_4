function sendNotification(email) {
    
    let parts_of_email = email.split('')

    if(!parts_of_email.includes('@')){
        return "Invalid Email"
    }

    let special_symbol_position = email.indexOf('@')    

    let Output = parts_of_email.slice(0, special_symbol_position).join('') + " sent you an email from " 
                 + parts_of_email.slice(special_symbol_position + 1).join('')

    return Output
}

console.log(sendNotification('zihad@gmail.com'))
console.log(sendNotification('farhan34@yahoo.com'))
console.log(sendNotification('nadim.naem5@outlook.com'))
console.log(sendNotification('fahim234.hotmail.com'))
console.log(sendNotification('sadia8icloud.com'))
