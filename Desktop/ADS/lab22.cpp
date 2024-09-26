#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n,m,i=0;
    cin>>n>>m;
    vector <string> v;
    vector <string> v2;
    for(int i=0;i<n;i++){
        string a;
        cin>>a;
        v.push_back(a);
    }

    
     for (int i = m; i < v.size(); i++) v2.push_back(v[i]);

     for (int i = 0; i < m; i++) v2.push_back(v[i]);  


    for(vector<string>::iterator it=v2.begin();it!=v2.end();it++){
        cout<<*it<<" ";
    }
}
