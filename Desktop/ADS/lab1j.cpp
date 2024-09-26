#include <iostream>
#include <deque>
#include <string>
#include <vector>
using namespace std;
int main(){
    deque <pair<char,int> > dq;
    vector <string> v;
    int sum=0;
    char sign;
    int num;

    while(true){
        cin>>sign;
        if(sign=='!') break;
        
        if(sign=='+' || sign=='-'){
            cin>>num;
            if(sign=='+') dq.push_front(make_pair(sign,num));
            else dq.push_back(make_pair(sign,num));
        }
        else if(sign=='*'){
            if(dq.size()>1){
                sum=dq.front().second + dq.back().second;
                v.push_back(to_string(sum));
                dq.pop_front();
                dq.pop_back();
                
            } 
            else if (dq.size() == 1) {  
                sum = dq.front().second * 2;
                v.push_back(to_string(sum));  
                dq.pop_front();  
            }
            else {
                v.push_back("error");  
            }
        
    } }
    
   for(int i=0;i<v.size();i++) cout<<v[i]<<endl;
    
    
    
}