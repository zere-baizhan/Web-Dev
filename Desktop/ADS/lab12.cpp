#include <iostream>
#include <queue>
#include <stack>
using namespace std;
int main(){
    int n;
    cin>>n;
    queue<int> q;
    for(int i=0;i<n;i++){
        int a;
        cin>>a;
        q.push(a);
    }
    stack<int> s;

    if(!q.empty()){
        int first=q.front();
        q.pop();
        cout<<"-1"<<" ";
        s.push(first);
        }
        
        while(!q.empty()){
            int current=q.front();
            q.pop();
            while(!s.empty() && s.top()>current) s.pop();
            if(!s.empty()) cout<<s.top() <<" ";
            else{
                cout<<"-1"<<" ";
            }
            s.push(current);
        }
    }
    
    
