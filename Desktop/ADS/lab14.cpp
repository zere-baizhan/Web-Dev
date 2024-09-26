#include<iostream>
#include <stack>
using namespace std;

int main(){
    string s;
    cin>>s;
    stack <char> st;

    for(int i=0;i<s.length();i++){
        char c=s[i];
        if(!st.empty() && st.top() == c) st.pop();
        else st.push(c);
    }

    if(st.empty()) cout<<"YES";
    else cout <<"NO";
}