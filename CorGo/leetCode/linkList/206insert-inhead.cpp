#include <iostream>
using namespace std;

// 头插法将一个数组变成一个链表
typedef struct LinkNode {
  int val;
  LinkNode* next;
} Node;
// 头插法生成链表
void createListHead(LinkNode*& L, int a[], int n) {
  Node* s;
  L = (Node*)malloc(sizeof(Node));
  L->next = NULL;
  for (int i = 0; i < n; ++i) {
    s = (Node*)malloc(sizeof(Node));
    s->val = a[i];
    s->next = L->next;
    L->next = s;
  }
}
// 尾插法生成链表
void createListRear(LinkNode*& L, int a[], int n) {
  Node* s,*r;
  L = (Node*)malloc(sizeof(Node));
  // L->next = NULL;
  r = L;
  for (int i = 0; i < n; ++i) {
    s = (Node*)malloc(sizeof(Node));
    s->val = a[i];
    r->next = s;
    r = s;
  }
}
int main() {
  // int a[] = [ 1, 5, 6, 98, 7, 5, 6, 2 ];
}