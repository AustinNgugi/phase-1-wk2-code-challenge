// Here I created a function which takes in the two numbers
function acceptor (num1,num2)
{
    // here I created a variable that contains the array in which the numbers between those two inputed numbers will be stored
    let ian =[];
    // Here I created a variable which will contain the value of the first number
    let i=num1;
    // here I created a while loop whose main function is to check the two numbers if the boolean condition is met then the system proceeds to generate the numbers 
    // between the two numbers 
    while (i<=num2)
    {
        ian.push(i);
        i++;
    }
    // here we are talling the computer to return the values generated into the array created known as Ian 
    return ian ;
}
console.log(acceptor(2,7));