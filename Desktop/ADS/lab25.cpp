#include <iostream>

using namespace std;

struct Node{
    string data;
    Node* next;
};
void insertik(Node*& head,string val){
    Node* newNode= new Node();
    newNode->data=val;
    newNode->next=head;
    head=newNode;

}

void db(Node*& head){
    if(head==nullptr) return;
    Node* cur=head;

    while(cur!=nullptr && cur->next!=nullptr){
        if(cur->data == cur->next->data){
            Node* dups=cur->next;
            cur->next=cur->next->next;
            delete dups;
        } 
        else cur=cur->next;
    }
}

void displaychik(Node*& head){
    Node* temp=head;
    int cnt=0;

    while(temp!=nullptr){
        cnt++;
        temp=temp->next;
    }

    cout<<"All in all: "<<cnt<<endl;
    cout<<"Students: "<<endl;

    temp=head;
    while(temp!=nullptr){
        cout<<temp->data<<endl;
        temp=temp->next;
    }
}

int main(){
    int n;
    cin>>n;
    Node*head=nullptr;
    for(int i=0;i<n;i++){
        string a;
        cin>>a;
        insertik(head,a);
    }
    db(head);
    displaychik(head);
}