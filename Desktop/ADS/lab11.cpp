#include <iostream>
#include<deque>
#include<vector>
using namespace std;

int main(){
    int t;
    cin>>t;

    vector<vector<int> > v;

    while(t--){
        int n;
        cin>>n;
        deque<int> d;
        
        for(int i=n;i>=1;--i){
            d.push_front(i);
            int size=d.size();
            int pos=i%size;
            if(pos>0){
                for(int j=0;j<pos;++j){
                    d.push_front(d.back());
                    d.pop_back();
                }
            }
        }

        vector<int> v1;
        while(!d.empty()){
            v1.push_back(d.front());
            d.pop_front();
        }
        v.push_back(v1);
    }
    for (size_t i = 0; i < v.size(); ++i) {
        const vector<int>& v1 = v[i];
        for (size_t j = 0; j < v1.size(); ++j) {
            cout << v1[j] << ' ';
        }
        cout << '\n';
    }

}