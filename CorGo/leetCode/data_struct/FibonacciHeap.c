//斐波那契结点ADT

#include<stdio.h>
#include<iostream>
using namespace std;
/* 此处示例中使用的编程语言为C

每个结点x的域

父结点p[x]
指向任一子女的指针child[x]——结点x的子女被链接成一个环形双链表，称为x的子女表
左兄弟left[x]
右兄弟right[x]——当left[x] = right[x] = x时，说明x是独子。
子女的个数degree[x]
布尔值域mark[x]——标记是否失去了一个孩子
 */
typedef struct FibonacciHeapNode {
  int key;                    //结点
  int degree;                 //度
  FibonacciHeapNode* left;    //左兄弟
  FibonacciHeapNode* right;   //右兄弟
  FibonacciHeapNode* parent;  //父结点
  FibonacciHeapNode* child;   //第一个孩子结点
  bool marked;                //是否被删除第1个孩子
} FibNode;

/* 对于一个给定的斐波那契堆H，可以通过指向包含最小关键字的树根的指针min[H]来访问，这个结点被称为斐波那契堆中的最小结点。如果一个斐波那契堆H是空的，则min[H]
 * = NIL.
 * 在一个斐波那契堆中，所有树的根都通过left和right指针链接成一个环形的双向链表，称为堆的根表。于是，指针min[H]就指向根表中具有最小关键字的结点。
 */
//斐波那契堆ADT
typedef struct FibonacciHeap {
  int keyNum;                //堆中结点个数
  FibonacciHeapNode* min;    //最小堆，根结点
  int maxNumOfDegree;        //最大度
  FibonacciHeapNode** cons;  //指向最大度的内存区域
} FibHeap;

/*创建一个空的费波那契堆，过程MAKE-FIB-HEAP 分配并返回一个费波那契堆对象H；
 */
//初始化一个空的Fibonacci Heap
FibHeap* FibHeapMake() {
  return calloc(1, sizeof(FibHeap));
}

//初始化节点x
FibNode* FibHeapNodeMake() {
  FibNode* x = (FibNode*)calloc(1, sizeof(FibNode));
  x->left = x->right = x;
  return x;
}