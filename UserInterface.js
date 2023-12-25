
let price_Of_Book = [];



function addData(){
    let name = document.getElementById('namee').value ;
    price_Of_Book.push(name);
    let val = "";
    for(let i=0 ; i< price_Of_Book.length; i++){
        val = val + price_Of_Book[i];
    }
    console.log(val +' ' );

    let costlyBook = price_Of_Book.filter((inputArrval) =>{
       return inputArrval > 10 
    })
    console.log("costlyBook",costlyBook);
    
   

}
let myarry = [12,14,16,12,18,42]

let myArray1 = myarry.map(( value) => value*2);

console.log("Map",myArray1);

let counting = myArray1.reduce((totalSum, nextPrice)=> totalSum + nextPrice)
 console.log("Reduce",counting);

   






 



 
    




 