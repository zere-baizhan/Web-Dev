#include <iostream>
#include <vector>
using namespace std;

int isPrime(int n){
    if(n<=1) return 0;
    if (n==2 || n==3) return 1;
    if(n%2==0 || n%3==0) return 0;

    for(int i=5;i*i<=n;i+=6){
        if(n%i==0 || n%(i+2)==0) return 0;
    }

    return 1;
}

int nsuperprime(int n){
    vector<int> primes;
    int num=2;
    о
    while(primes.size()<n || primes.size()<primes[n-1]){
        if(isPrime(num)) primes.push_back(num);
        num++;
    }

    return primes[primes[n-1]-1];
}

int main(){
    int n;
    cin>>n;
    cout<< nsuperprime(n);
}