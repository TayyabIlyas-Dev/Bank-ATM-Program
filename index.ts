import inquirer from "inquirer"

let mybalance = 10000;  // Dollars
let mypin = 1234;
let accNum = 1111;
let transNotComp = "Transaction Not Completed!"
// await is used¬
const pinanswer = await inquirer.prompt([
    {
        name:"accountId",
        message:"Enter 'Account Number'.",
        type:"number"
    },
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
])
if (pinanswer.accountId === accNum && pinanswer.pin === mypin ) {
    // console.log("U Are LoggedIn.");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "U Are LoggedIn",
            type: "list",
            choices: ["1). Withdrawl", "2). CheckBalance"]
        }
        
    ]);
    if (operationAns.operation === "1). Withdrawl") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Amount!",
                type: "number",
            },
            {
                name:"confirmTransaction",
                message:"Please Enter To Confirm",
                type:"confirm"
            }
        ]);

       if(amountans.confirmTransaction === true){
        if (amountans.amount > mybalance) {
            console.log("Your balance is lower.");
        } else {
            mybalance -= amountans.amount;
            console.log(`  🔶 Transaction Completed👍 \n  🔶 Your Remaining Balance Is '${mybalance}💲'`);
        }

       }
       else if(amountans.confirmTransaction == false){
        console.log(transNotComp);
        

       }

    }
    
    if (operationAns.operation === "2). CheckBalance") {

        console.log(`  🔶 Your Balance is  '${mybalance}💲'`);

        
        
    } else {
        
    }
}
else {
    console.log("Incorrect Pin Code!!");

}

