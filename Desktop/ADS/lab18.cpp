#include <iostream>
using namespace std;
int main(){
    int n,temp=0,i=2;
    cin>>n;

    while(i<=n/2){
        if(n%i==0){
            temp++;
            break;
        }
        i++;
    }
        
    
    if(temp==0 && n!=1){
        cout<<"YES";
    }
    else{
        cout<<"NO";
    }
}