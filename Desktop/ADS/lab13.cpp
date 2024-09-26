#include <iostream>
#include <string>
#include <stack>
using namespace std;

int main()
{
	stack <char> st1,st2;
    string s1,s2;
    cin>>s1>>s2;
    for(int i=0;i<s1.length();i++){
        if(s1[i]=='#'){
            if (!st1.empty()){
                st1.pop();
            }
        }
        else{
            st1.push(s1[i]);
        }
        
    }

    for(int i=0;i<s2.length();i++){
        if(s2[i]=='#'){
            if(!st2.empty()){
                st2.pop();
            }
        }
        else{
            st2.push(s2[i]);
        }
    }

	bool equal= true;

    while(!st1.empty() && !st2.empty()){
        if (st1.top()!=st2.top()){
            equal= false;
            break;
        }
        st1.pop();
        st2.pop();
    }
    
	if (!st1.empty() or !st2.empty()){
        equal=false;
    }

    if(equal) cout<<"Yes";
    else cout<<"No";
}