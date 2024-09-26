#include<iostream>
using namespace std;

struct Node{
    int data;
    Node* next;
};

void insertik(Node*& head,int val){
    Node* newNode= new Node();
    newNode->data=val;
    newNode->next=nullptr;

    if(head==nullptr) head=newNode;
    else{
        Node* temp=head;
        while(temp->next!=nullptr) temp=temp->next;
        temp->next=newNode;
    }

}

void deleteIndex(Node*& head){
    if(head==nullptr || head->next==nullptr) return;
    Node* cur=head;
    Node* prev=nullptr;

    int cnt=1;
    while(cur!=nullptr){
        if(cnt%2==0){
            prev->next=cur->next;
            delete cur;
            cur=prev->next;
        } else{
            prev=cur;
            cur=cur->next;
        }
        cnt++;
    }
}

void displaychik(Node* head){
    Node* temp=head;
    while(temp!=nullptr){
        cout<<temp->data<<" ";
        temp=temp->next;
    }
}

int main(){
    int n;
    cin>>n;
    Node*head=nullptr;
    for(int i=0;i<n;i++){
        int a;
        cin>>a;
        insertik(head,a);
    }
    deleteIndex(head);
    displaychik(head);
}