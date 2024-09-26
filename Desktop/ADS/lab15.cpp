#include <iostream>
#include <deque>

using namespace std;

int main(){
    int cnt=0,a,b,n;
    deque <int> d1,d2;
    
    for(int i=0;i<5;i++){
        cin>>a;
        d1.push_back(a);
    }

    for(int i=0;i<5;i++){
        cin>>a;
        d2.push_back(a);
    }

    for(int i=0;i<1000000;i++){
        if(d1.empty()){
            cout<<"Nursik "<<cnt;
            return 0;}
        else if(d2.empty()){
            cout<<"Boris "<<cnt;
            return 0;}
        
        b = d1.front();
        n = d2.front();

        d1.pop_front();
        d2.pop_front();
        
        if (b == 0 && n == 9) {
            d1.push_back(b);
            d1.push_back(n);
        } else if(b==9 && n==0) {
        
            d2.push_back(b);
            d2.push_back(n);
        } else if(b>n){
            d1.push_back(b);
            d1.push_back(n);
        } else{
            d2.push_back(b);
            d2.push_back(n);
        }

        cnt++; 
    }

    cout << "blin nichya" << endl;
    return 0;
}
