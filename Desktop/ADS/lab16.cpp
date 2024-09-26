#include <iostream>
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

int nprime(int a){
    int i=2;
    
    while(a>0){
        if(isPrime(i)) a--;
        i++;
    }

    i-=1;

    return i;
}

int main(){
    int n;
    cin>>n;
    cout<< nprime(n);
}