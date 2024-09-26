#include <iostream>
#include <vector>
#include <cmath>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector <int> v;
    vector <int> v1;
    for(int i=0;i<n;i++){
        int a;
        cin>>a;
        v.push_back(a);
    }
    int k;
    cin>>k;

    for(int i=0;i<v.size();i++){
        int c=abs(v[i]-k);
        v1.push_back(c);
    }

    int mini = v1[0];  
    int minIndex = 0;
     for (int i = 1; i < v1.size(); i++) { 
        if (v1[i] < mini) {
            mini = v1[i];  
            minIndex = i;  
    }
     }
     
     cout<<minIndex;}