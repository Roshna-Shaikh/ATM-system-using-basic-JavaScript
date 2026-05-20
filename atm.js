let pin = 1234
let balance = 2000
let running = true

function atmsystem(){
    

    let userpin = +prompt  ("Enter your PIN: ")
    if(userpin === pin){
        //console.log("correct PIN")

        let menu = prompt("1. Deposite Amount \n" + "2. Withdraw Amount\n" + "3. Check Balance\n" + "4. Exit")

        if(menu == 1){
            let deposite_amount = +prompt("Enter Your Amount: ")
            balance += deposite_amount
            //console.log(deposite_amount)
            //console.log(balance)
            console.log("Amount deposite successfully. Your current Balance is: PKR " + balance)
            alert("Amount deposite successfully. Your current Balance is: PKR " + balance)
        }

        else if(menu == 2){
            let withdraw_amount = +prompt("Enter Your Amount: ") 
            if (withdraw_amount <= balance){
                balance -= withdraw_amount
                console.log("Amount Withdraw successful. please take your card and receive money. your current amount is: " + balance)
                alert("Amount Withdraw successful. Your current amount is: PKR " + balance)
            }
            else{
                console.log("your balance is low")
                alert("your balance is low")
            }
        }

        else if(menu == 3){
            console.log("Your current Balance is: PKR " + balance)
            alert("Your current Balance is: PKR " + balance)
        }

        else if(menu == 4){
            running = false
            console.log("Exit")
            alert("Exit")
        }

        else{
            alert("Invalid request")
        }

    }

    else{
        alert("incorrect PIN")
    }
}