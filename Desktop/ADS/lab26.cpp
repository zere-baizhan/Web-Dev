#include<iostream>
using namespace std;

struct Node{
    int data;
    Node* next;
};

void insertik(Node*&head,int value){
    Node* newNode=new Node();
    newNode->data=value;
    newNode->next=nullptr;

    if(head==nullptr){
        head=newNode;
    }
    else{
        Node* temp=head;
        while(temp->next !=nullptr){
            temp=temp->next;
        }
        temp->next=newNode;
    }
}

void insertpos(Node*& head,int val,int pos){
    Node* newNode= new Node();
    newNode->data=val;

    if(pos==0){
        newNode->next=head;
        head=newNode;
    }
    else{
        Node* temp=head;
        for(int i=0;i<pos-1 && temp!=nullptr;i++) temp=temp->next;
        if(temp==nullptr) insertik(head,val);
        else{
            newNode->next=temp->next;
            temp->next=newNode;
        }
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
    Node* head=nullptr;
    for(int i=0;i<n;i++){
        int a;
        cin>>a;
        insertik(head,a);
    }
    int c,b;
    cin>>c;
    cin>>b;
    
    insertpos(head,c,b);

    displaychik(head);
}