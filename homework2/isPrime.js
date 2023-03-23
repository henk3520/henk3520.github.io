function isPrime(n) 
{
    if(n < 2) 
    {
        return true;
    }
    for(let i = 2; i < n; i++) 
    {
        if(n % i === 0) 
        {
          return false;
        }
    }
    return true;
}
console.log(isPrime(3))
console.log(isPrime(4))
