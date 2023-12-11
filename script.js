//Scrivere una funzione che prenda come input un numero e generi un array composto da n numeri casuali compresi tra 1 e 10.
//Esempio: Input= 5    Output= [5, 9, 1, 6, 10]

//Esercizio 1

//let array =[]
//function generator(number){
    //for (let i = 0; i < number; i++) {
    //let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    //array.push(randomNumber)
    //} 
    //return array
//}
//console.log(generator(7));

//Math.floor(Math.random() * (max - min + 1)) + min);
     


// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
//Esempio:
  //Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
  //Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]
//Variante:
//Prova ad ordinali in modo crescente.

//Esercizio 2

//let array =[]
//function generator(number){
    //for (let i = 0; i < number; i++) {
    //let randomNumber =  Math.floor(Math.random() * (10 - 1 + 1) + 1);
    //array.push(randomNumber)
    //array.sort((a, b) => b - a)
   //} 
   //return array
//}
//console.log(generator(10));

//minore
//let array =[]
//function generator(number){
    //for (let i = 0; i < number; i++) {
    //let randomNumber =  Math.floor(Math.random() * (10 - 1 + 1) + 1);
    //array.push(randomNumber)
    //array.sort((a, b) => a - b)
    //} 
    //return array
//}
//console.log(generator(10));

//numbers.sort((a,b) => b - a)

//Esercizio 3

//Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

//Esempi:

    //Input : 9
    //Output :  1 cifra


    //Input : 99
    //Output :  2 cifre

//let array = []
    //function generator(number){
    //for (let i = 0; i < number; i++) {
        //let randomNumber =  Math.floor(Math.random() * (9999 - 1 + 1) + 1);
        //array.push(randomNumber)
        //if(randomNumber < 10) {
            //console.log(`il numero ${randomNumber} ha 1 cifra`);
        //} else if (randomNumber < 100) {
            //console.log(`il numero ${randomNumber} ha 2 cifre`);    
        //}   else if  (randomNumber < 1000) {
            //console.log(`il numero ${randomNumber} ha 3 cifre`)
        //}   else {
            //console.log(`il numero ${randomNumber} ha 4 cifre`)
        //} 
    //return array
//}
//}
//console.log(generator(1));

//Esercizio 4

//Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  //FALSE altrimenti.
  //Esempi:
    //Input: n = 2, m = 3
    //Output: FALSE
    //Input: n = 2, m = '2'
    //Output: FALSE
    //Input: n = 2, m = 2
    //Output: TRUE 

    //function confrontaArgomenti(arg1, arg2) {

        //if (arg1 === arg2) {
            //return "true";
        //} else {
            //return "false";
        //}
    //}
    
    //let arg1 =  Math.floor(Math.random() * (10 - 1 + 1) + 1);
    //let arg2 =  Math.floor(Math.random() * (10 - 1 + 1) + 1);
    
    //console.log(arg1, arg2);
   //console.log(confrontaArgomenti(arg1, arg2));

   //Esercizio 5

   //Scrivi una funzione che dato un numero stampi la tabellina corrispondente.

    


//let num = Number(prompt("Inserisci il numero con cui vuoi fare la tabellina"));
//function tab(n){
    //for(let i =0; i<=10; i++){
         //let tabellina= n * i;
         //console.log(`${n} x ${i} = ${tabellina}`);
     //}
 //}
 //tab(num);




//let numbers = [10, 12, 78, -4, -20, 11];

 //function nMax(array){
     //let max=array[0];
     //for (let i=0; i < numbers.length; i++){
         //max = Math.max(array[i], max); 
     //}
     //console.log(`Il numero massimo dell'array è ${max}`);
 //}

 //nMax(numbers);

 //function nMin(array){
     //let min=array[0];
     //for (let i=0; i < numbers.length; i++){
         //min = Math.min(array[i], min); 
     //}
     //console.log(`Il numero minimo dell'array è ${min}`);
  //}

 //nMin(numbers);


	
    
