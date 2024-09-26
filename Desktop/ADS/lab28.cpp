#include <iostream>
#include <vector>
  
using namespace std;

struct Node{
 Node * prev;
 Node * next;
 string val;
 Node(string _val){
  prev = NULL;
  next = NULL;
  val = _val;
 } 
};

Node * head = NULL;
Node * tail = NULL;
int cnt=0;
void add_back(string s){
    Node* newNode= new Node(s);
    if(head==NULL) head=tail=newNode;
    else{
        tail->next=newNode;
        newNode->prev=tail;
        tail=newNode;
    }

    cnt++;
}
void add_front(string s){
    Node* newNode=new Node(s);
    if(head==NULL) head=tail=newNode;
    else{
        newNode->next=head;
        head->prev=newNode;
        head=newNode;
    }
    cnt++;
}
bool empty(){
    return cnt==0;
}
void erase_front(){
    if(head==NULL) return;
    Node* deletik=head;
    head=head->next;

    if(head!=NULL) head->prev=NULL;
    else tail=NULL;

    delete deletik;
    cnt--;

}
void erase_back(){
    if(tail==NULL) return;
    Node* deletik=tail;
    tail=tail->prev;
    if(tail!=NULL) tail->next=NULL;
    else head=NULL;

    delete deletik;
    cnt--;
}
string front(){
    if(head!=NULL) return head->val;
    return "error";
}
string back(){
    if(tail!=NULL) return tail->val;
    return "error";
}
void clear(){
    while(!empty()) erase_front();
}
  
int main()
{
 string s;
    while(cin >> s){
     if(s == "add_front"){
      string t;
      cin >> t;
      add_front(t);
      cout << "ok" << endl;
     }
     if(s == "add_back"){
      string t;
      cin >> t;
      add_back(t);
      cout << "ok" << endl;
     }
     if(s == "erase_front"){
      if(empty()){
       cout << "error" << endl;
      }
      else
      {
       cout << front() << endl;
       erase_front();
      }
     }
     if(s == "erase_back"){
      if(empty()){
       cout << "error" << endl;
      }
      else{
       cout << back() << endl;
       erase_back();
      }
     }
     if(s == "front"){
      if(empty()){
       cout << "error" << endl;
      }
      else{
       cout << front() << endl;
      }
     }
     if(s == "back"){
      if(empty()){
       cout << "error" << endl;
      }
      else{
       cout << back() << endl;
      }
     }
     if(s == "clear"){
      clear();
      cout << "ok" << endl;
     }
     if(s == "exit"){
      cout << "goodbye" << endl;
      break;
     }
     // cout << "hi" << endl;
    }
    return 0;
}