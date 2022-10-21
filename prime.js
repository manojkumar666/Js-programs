var num=9;
var i;
for( i=2;i<num;i++){
    if(num%i==0)
    {
        console.log(num+" is not a prime number");
        break;
    }
}
if(i==num)
console.log(num+" is  a prime number");
