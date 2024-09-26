#include <iostream>
#include <deque>
using namespace std;

int main(){
    int n,cnt1=0,cnt2=0;
    cin>>n;
    string str;
    cin>>str;
    deque<int> dq1;
    deque<int> dq2;

    for(int i=0;i<str.size();i++){
        if(str[i]=='K') dq2.push_back(i);
        else dq1.push_back(i);
    }

    while(!dq1.empty() && !dq2.empty()){
        if(dq2.front()<dq1.front()) dq2.push_back(dq2.front()+str.size());
        else dq1.push_back(dq1.front()+str.size());
        dq1.pop_front();
        dq2.pop_front();
    }

    if(dq1.empty()) cout<<"KATSURAGI";
    else cout<<"SAKAYANAGI";
}