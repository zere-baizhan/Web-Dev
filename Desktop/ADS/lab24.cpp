#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;


int main(){
    int n;
    cin>>n;
    vector <int> v;
    for(int i=0;i<n;i++){
        int a;
        cin>>a;
        v.push_back(a);
    }
    sort(v.begin(),v.end());
    int curcnt=1;
    int maxfreq=0;
    vector <int> modes;
    for(int i=1;i<=n;i++){
        if(i<n && v[i]==v[i-1]) curcnt++;
        else{
            if(curcnt>maxfreq){
                maxfreq=curcnt;
                modes.clear();
                modes.push_back(v[i-1]);
            }
            else if(curcnt==maxfreq) modes.push_back(v[i-1]);
            curcnt=1;
        }
    }

    for(int i=modes.size()-1;i>=0;i--){
        cout<<modes[i]<<" ";
    }

}
