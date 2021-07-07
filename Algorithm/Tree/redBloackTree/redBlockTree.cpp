enum RBTColor
{
  RED,
  BLACK
};

template <class T>
class RBTNode
{
public:
  RBTColor color;  // 颜色
  T key;           // 关键字(键值)
  RBTNode *left;   // 左孩子
  RBTNode *right;  // 右孩子
  RBTNode *parent; // 父结点

  RBTNode(T value, RBTColor c, RBTNode *p, RBTNode *l, RBTNode *r) : key(value), color(c), parent(), left(l), right(r) {}
};

template <class T>
class RBTree
{
private:
  RBTNode<T> *mRoot; // 根结点

public:
  RBTree();
  ~RBTree();

  // 前序遍历"红黑树"
  void preOrder();
  // 中序遍历"红黑树"
  void inOrder();
  // 后序遍历"红黑树"
  void postOrder();

  // (递归实现)查找"红黑树"中键值为key的节点
  RBTNode<T> *search(T key);
  // (非递归实现)查找"红黑树"中键值为key的节点
  RBTNode<T> *iterativeSearch(T key);

  // 查找最小结点：返回最小结点的键值。
  T minimum();
  // 查找最大结点：返回最大结点的键值。
  T maximum();

  // 找结点(x)的后继结点。即，查找"红黑树中数据值大于该结点"的"最小结点"。
  RBTNode<T> *successor(RBTNode<T> *x);
  // 找结点(x)的前驱结点。即，查找"红黑树中数据值小于该结点"的"最大结点"。
  RBTNode<T> *predecessor(RBTNode<T> *x);

  // 将结点(key为节点键值)插入到红黑树中
  void insert(T key);

  // 删除结点(key为节点键值)
  void remove(T key);

  // 销毁红黑树
  void destroy();

  // 打印红黑树
  void print();

private:
  // 前序遍历"红黑树"
  void preOrder(RBTNode<T> *tree) const;
  // 中序遍历"红黑树"
  void inOrder(RBTNode<T> *tree) const;
  // 后序遍历"红黑树"
  void postOrder(RBTNode<T> *tree) const;

  // (递归实现)查找"红黑树x"中键值为key的节点
  RBTNode<T> *search(RBTNode<T> *x, T key) const;
  // (非递归实现)查找"红黑树x"中键值为key的节点
  RBTNode<T> *iterativeSearch(RBTNode<T> *x, T key) const;

  // 查找最小结点：返回tree为根结点的红黑树的最小结点。
  RBTNode<T> *minimum(RBTNode<T> *tree);
  // 查找最大结点：返回tree为根结点的红黑树的最大结点。
  RBTNode<T> *maximum(RBTNode<T> *tree);

  // 左旋
  void leftRotate(RBTNode<T> *&root, RBTNode<T> *x);
  // 右旋
  void rightRotate(RBTNode<T> *&root, RBTNode<T> *y);
  // 插入函数
  void insert(RBTNode<T> *&root, RBTNode<T> *node);
  // 插入修正函数
  void insertFixUp(RBTNode<T> *&root, RBTNode<T> *node);
  // 删除函数
  void remove(RBTNode<T> *&root, RBTNode<T> *node);
  // 删除修正函数
  void removeFixUp(RBTNode<T> *&root, RBTNode<T> *node, RBTNode<T> *parent);

  // 销毁红黑树
  void destroy(RBTNode<T> *&tree);

  // 打印红黑树
  void print(RBTNode<T> *tree, T key, int direction);

#define rb_parent(r) ((r)->parent)
#define rb_color(r) ((r)->color)
#define rb_is_red(r) ((r)->color == RED)
#define rb_is_black(r) ((r)->color == BLACK)
#define rb_set_black(r) \
  do                    \
  {                     \
    (r)->color = BLACK; \
  } while (0)
#define rb_set_red(r) \
  do                  \
  {                   \
    (r)->color = RED; \
  } while (0)
#define rb_set_parent(r, p) \
  do                        \
  {                         \
    (r)->parent = (p);      \
  } while (0)
#define rb_set_color(r, c) \
  do                       \
  {                        \
    (r)->color = (c);      \
  } while (0)
};

/*
 * 对红黑树的节点(x)进行左旋转
 *
 * 左旋示意图(对节点x进行左旋)：
 *      px                              px
 *     /                               /
 *    x                               y
 *   /  \      --(左旋)-->           / \                #
 *  lx   y                          x  ry
 *     /   \                       /  \
 *    ly   ry                     lx  ly
 *
 *
 */
template <class T>
void RBTree<T>::leftRotate(RBTNode<T> *&root, RBTNode<T> *x)
{
  // 设置x的右孩子为y
  RBTNode<T> *y = x->right;

  // 将 “y的左孩子” 设为 “x的右孩子”；
  // 如果y的左孩子非空，将 “x” 设为 “y的左孩子的父亲”
  x->right = y->left;
  if (y->left != NULL)
    y->left->parent = x;

  // 将 “x的父亲” 设为 “y的父亲”
  y->parent = x->parent;

  if (x->parent == NULL)
  {
    root = y; // 如果 “x的父亲” 是空节点，则将y设为根节点
  }
  else
  {
    if (x->parent->left == x)
      x->parent->left = y; // 如果 x是它父节点的左孩子，则将y设为“x的父节点的左孩子”
    else
      x->parent->right = y; // 如果 x是它父节点的左孩子，则将y设为“x的父节点的左孩子”
  }

  // 将 “x” 设为 “y的左孩子”
  y->left = x;
  // 将 “x的父节点” 设为 “y”
  x->parent = y;
}
/*
 * 对红黑树的节点(y)进行右旋转
 *
 * 右旋示意图(对节点y进行左旋)：
 *            py                               py
 *           /                                /
 *          y                                x
 *         /  \      --(右旋)-->            /  \                     #
 *        x   ry                           lx   y
 *       / \                                   / \                   #
 *      lx  rx                                rx  ry
 *
 */
template <class T>
void RBTree<T>::rightRotate(RBTNode<T> *&root, RBTNode<T> *y)
{
  // 设置x是当前节点的左孩子。
  RBTNode<T> *x = y->left;

  // 将 “x的右孩子” 设为 “y的左孩子”；
  // 如果"x的右孩子"不为空的话，将 “y” 设为 “x的右孩子的父亲”
  y->left = x->right;
  if (x->right != NULL)
    x->right->parent = y;

  // 将 “y的父亲” 设为 “x的父亲”
  x->parent = y->parent;

  if (y->parent == NULL)
  {
    root = x; // 如果 “y的父亲” 是空节点，则将x设为根节点
  }
  else
  {
    if (y == y->parent->right)
      y->parent->right = x; // 如果 y是它父节点的右孩子，则将x设为“y的父节点的右孩子”
    else
      y->parent->left = x; // (y是它父节点的左孩子) 将x设为“x的父节点的左孩子”
  }

  // 将 “y” 设为 “x的右孩子”
  x->right = y;

  // 将 “y的父节点” 设为 “x”
  y->parent = x;
}

/*  */
/*
 * 将结点插入到红黑树中
 *
 * 参数说明：
 *     root 红黑树的根结点
 *     node 插入的结点        // 对应《算法导论》中的node
 */
template <class T>
void RBTree<T>::insert(RBTNode<T> *&root, RBTNode<T> *node)
{
  RBTNode<T> *y = NULL;
  RBTNode<T> *x = root;

  // 1. 将红黑树当作一颗二叉查找树，将节点添加到二叉查找树中。
  while (x != NULL)
  {
    y = x;
    if (node->key < x->key)
      x = x->left;
    else
      x = x->right;
  }

  node->parent = y;
  if (y != NULL)
  {
    if (node->key < y->key)
      y->left = node;
    else
      y->right = node;
  }
  else
    root = node;

  // 2. 设置节点的颜色为红色
  node->color = RED;

  // 3. 将它重新修正为一颗二叉查找树
  insertFixUp(root, node);
}

/*
 * 将结点(key为节点键值)插入到红黑树中
 *
 * 参数说明：
 *     tree 红黑树的根结点
 *     key 插入结点的键值
 */
template <class T>
void RBTree<T>::insert(T key)
{
  RBTNode<T> *z = NULL;

  // 如果新建结点失败，则返回。
  if ((z = new RBTNode<T>(key, BLACK, NULL, NULL, NULL)) == NULL)
    return;

  insert(mRoot, z);
}
/* 内部接口 -- insert(root, node)的作用是将"node"节点插入到红黑树中。其中，root是根，node是被插入节点。
外部接口 -- insert(key)的作用是将"key"添加到红黑树中。


添加修正操作的实现代码(C++语言) */
/*
 * 红黑树插入修正函数
 *
 * 在向红黑树中插入节点之后(失去平衡)，再调用该函数；
 * 目的是将它重新塑造成一颗红黑树。
 *
 * 参数说明：
 *     root 红黑树的根
 *     node 插入的结点        // 对应《算法导论》中的z
 */
template <class T>
void RBTree<T>::insertFixUp(RBTNode<T> *&root, RBTNode<T> *node)
{
  RBTNode<T> *parent, *gparent;

  // 若“父节点存在，并且父节点的颜色是红色”
  while ((parent = rb_parent(node)) && rb_is_red(parent))
  {
    gparent = rb_parent(parent);

    //若“父节点”是“祖父节点的左孩子”
    if (parent == gparent->left)
    {
      // Case 1条件：叔叔节点是红色
      {
        RBTNode<T> *uncle = gparent->right;
        if (uncle && rb_is_red(uncle))
        {
          rb_set_black(uncle);
          rb_set_black(parent);
          rb_set_red(gparent);
          node = gparent;
          continue;
        }
      }

      // Case 2条件：叔叔是黑色，且当前节点是右孩子
      if (parent->right == node)
      {
        RBTNode<T> *tmp;
        leftRotate(root, parent);
        tmp = parent;
        parent = node;
        node = tmp;
      }

      // Case 3条件：叔叔是黑色，且当前节点是左孩子。
      rb_set_black(parent);
      rb_set_red(gparent);
      rightRotate(root, gparent);
    }
    else //若“z的父节点”是“z的祖父节点的右孩子”
    {
      // Case 1条件：叔叔节点是红色
      {
        RBTNode<T> *uncle = gparent->left;
        if (uncle && rb_is_red(uncle))
        {
          rb_set_black(uncle);
          rb_set_black(parent);
          rb_set_red(gparent);
          node = gparent;
          continue;
        }
      }

      // Case 2条件：叔叔是黑色，且当前节点是左孩子
      if (parent->left == node)
      {
        RBTNode<T> *tmp;
        rightRotate(root, parent);
        tmp = parent;
        parent = node;
        node = tmp;
      }

      // Case 3条件：叔叔是黑色，且当前节点是右孩子。
      rb_set_black(parent);
      rb_set_red(gparent);
      leftRotate(root, gparent);
    }
  }

  // 将根节点设为黑色
  rb_set_black(root);
}
/* insertFixUp(root, node)的作用是对应"上面所讲的第三步"。它是一个内部接口。



5. 删除操作

将红黑树内的某一个节点删除。需要执行的操作依次是：首先，将红黑树当作一颗二叉查找树，将该节点从二叉查找树中删除；然后，通过"旋转和重新着色"等一系列来修正该树，使之重新成为一棵红黑树。详细描述如下：

第一步：将红黑树当作一颗二叉查找树，将节点删除。
      这和"删除常规二叉查找树中删除节点的方法是一样的"。分3种情况：
① 被删除节点没有儿子，即为叶节点。那么，直接将该节点删除就OK了。
② 被删除节点只有一个儿子。那么，直接删除该节点，并用该节点的唯一子节点顶替它的位置。
③ 被删除节点有两个儿子。那么，先找出它的后继节点；然后把“它的后继节点的内容”复制给“该节点的内容”；之后，删除“它的后继节点”。在这里，后继节点相当于替身，在将后继节点的内容复制给"被删除节点"之后，再将后继节点删除。这样就巧妙的将问题转换为"删除后继节点"的情况了，下面就考虑后继节点。 在"被删除节点"有两个非空子节点的情况下，它的后继节点不可能是双子非空。既然"的后继节点"不可能双子都非空，就意味着"该节点的后继节点"要么没有儿子，要么只有一个儿子。若没有儿子，则按"情况① "进行处理；若只有一个儿子，则按"情况② "进行处理。

第二步：通过"旋转和重新着色"等一系列来修正该树，使之重新成为一棵红黑树。
       因为"第一步"中删除节点之后，可能会违背红黑树的特性。所以需要通过"旋转和重新着色"来修正该树，使之重新成为一棵红黑树。


删除操作的实现代码(C++语言) */
/*
 * 删除结点(node)，并返回被删除的结点
 *
 * 参数说明：
 *     root 红黑树的根结点
 *     node 删除的结点
 */
template <class T>
void RBTree<T>::remove(RBTNode<T> *&root, RBTNode<T> *node)
{
  RBTNode<T> *child, *parent;
  RBTColor color;

  // 被删除节点的"左右孩子都不为空"的情况。
  if ((node->left != NULL) && (node->right != NULL))
  {
    // 被删节点的后继节点。(称为"取代节点")
    // 用它来取代"被删节点"的位置，然后再将"被删节点"去掉。
    RBTNode<T> *replace = node;

    // 获取后继节点
    replace = replace->right;
    while (replace->left != NULL)
      replace = replace->left;

    // "node节点"不是根节点(只有根节点不存在父节点)
    if (rb_parent(node))
    {
      if (rb_parent(node)->left == node)
        rb_parent(node)->left = replace;
      else
        rb_parent(node)->right = replace;
    }
    else
      // "node节点"是根节点，更新根节点。
      root = replace;

    // child是"取代节点"的右孩子，也是需要"调整的节点"。
    // "取代节点"肯定不存在左孩子！因为它是一个后继节点。
    child = replace->right;
    parent = rb_parent(replace);
    // 保存"取代节点"的颜色
    color = rb_color(replace);

    // "被删除节点"是"它的后继节点的父节点"
    if (parent == node)
    {
      parent = replace;
    }
    else
    {
      // child不为空
      if (child)
        rb_set_parent(child, parent);
      parent->left = child;

      replace->right = node->right;
      rb_set_parent(node->right, replace);
    }

    replace->parent = node->parent;
    replace->color = node->color;
    replace->left = node->left;
    node->left->parent = replace;

    if (color == BLACK)
      removeFixUp(root, child, parent);

    delete node;
    return;
  }

  if (node->left != NULL)
    child = node->left;
  else
    child = node->right;

  parent = node->parent;
  // 保存"取代节点"的颜色
  color = node->color;

  if (child)
    child->parent = parent;

  // "node节点"不是根节点
  if (parent)
  {
    if (parent->left == node)
      parent->left = child;
    else
      parent->right = child;
  }
  else
    root = child;

  if (color == BLACK)
    removeFixUp(root, child, parent);
  delete node;
}

/*
 * 删除红黑树中键值为key的节点
 *
 * 参数说明：
 *     tree 红黑树的根结点
 */
template <class T>
void RBTree<T>::remove(T key)
{
  RBTNode<T> *node;

  // 查找key对应的节点(node)，找到的话就删除该节点
  if ((node = search(mRoot, key)) != NULL)
    remove(mRoot, node);
}
/* 内部接口 -- remove(root, node)的作用是将"node"节点插入到红黑树中。其中，root是根，node是被插入节点。
外部接口 -- remove(key)删除红黑树中键值为key的节点。


删除修正操作的实现代码(C++语言) */
/*
 * 红黑树删除修正函数
 *
 * 在从红黑树中删除插入节点之后(红黑树失去平衡)，再调用该函数；
 * 目的是将它重新塑造成一颗红黑树。
 *
 * 参数说明：
 *     root 红黑树的根
 *     node 待修正的节点
 */
template <class T>
void RBTree<T>::removeFixUp(RBTNode<T> *&root, RBTNode<T> *node, RBTNode<T> *parent)
{
  RBTNode<T> *other;

  while ((!node || rb_is_black(node)) && node != root)
  {
    if (parent->left == node)
    {
      other = parent->right;
      if (rb_is_red(other))
      {
        // Case 1: x的兄弟w是红色的
        rb_set_black(other);
        rb_set_red(parent);
        leftRotate(root, parent);
        other = parent->right;
      }
      if ((!other->left || rb_is_black(other->left)) &&
          (!other->right || rb_is_black(other->right)))
      {
        // Case 2: x的兄弟w是黑色，且w的俩个孩子也都是黑色的
        rb_set_red(other);
        node = parent;
        parent = rb_parent(node);
      }
      else
      {
        if (!other->right || rb_is_black(other->right))
        {
          // Case 3: x的兄弟w是黑色的，并且w的左孩子是红色，右孩子为黑色。
          rb_set_black(other->left);
          rb_set_red(other);
          rightRotate(root, other);
          other = parent->right;
        }
        // Case 4: x的兄弟w是黑色的；并且w的右孩子是红色的，左孩子任意颜色。
        rb_set_color(other, rb_color(parent));
        rb_set_black(parent);
        rb_set_black(other->right);
        leftRotate(root, parent);
        node = root;
        break;
      }
    }
    else
    {
      other = parent->left;
      if (rb_is_red(other))
      {
        // Case 1: x的兄弟w是红色的
        rb_set_black(other);
        rb_set_red(parent);
        rightRotate(root, parent);
        other = parent->left;
      }
      if ((!other->left || rb_is_black(other->left)) &&
          (!other->right || rb_is_black(other->right)))
      {
        // Case 2: x的兄弟w是黑色，且w的俩个孩子也都是黑色的
        rb_set_red(other);
        node = parent;
        parent = rb_parent(node);
      }
      else
      {
        if (!other->left || rb_is_black(other->left))
        {
          // Case 3: x的兄弟w是黑色的，并且w的左孩子是红色，右孩子为黑色。
          rb_set_black(other->right);
          rb_set_red(other);
          leftRotate(root, other);
          other = parent->left;
        }
        // Case 4: x的兄弟w是黑色的；并且w的右孩子是红色的，左孩子任意颜色。
        rb_set_color(other, rb_color(parent));
        rb_set_black(parent);
        rb_set_black(other->left);
        rightRotate(root, parent);
        node = root;
        break;
      }
    }
  }
  if (node)
    rb_set_black(node);
}