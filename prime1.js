function isPrime()
{
    let n=document.getElementById("number").value;
    var i;
    for( i=2;i<n;i++){
        if(n%i==0)
        {
            alert(`${n} is not a Prime number`);
            break;
        }
    }
    if(i==n)
    alert(`${n} is a Prime number`);
}