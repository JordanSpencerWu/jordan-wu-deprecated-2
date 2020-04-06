---
author:
  [
    Thomas H. Cornmen,
    And,
    Charles E Leiserson,
    And,
    Ronald L. Riverest,
    And,
    Clifford Stein,
  ]
date: 2016-09-17
description: This book does a great job at explaining sorting algorithms and data structures with the help of visual figures. It's very math intensive, going over proofs and concepts of the materials. The main reason I bought the book was to understand the basic sorting algorithms and data structures. It give me a better understanding of the time and space complexity in terms of Big O Notation.
seo-description: Introduction to Algorithms by Thomas H. Cornmen and Charles E Leiserson and Ronald L. Riverest and Clifford Stein notes.
title: Binary Search Trees
---

We can represent such a tree by a linked data structure in which each node is an object. In addition to a **key** and **satellite data**, each node contains attributes **left**, **right**, and **p** that point to the nodes corresponding to its left child, its right child, and its parent, respectively. If a child or the parent is missing, the appropriate attribute contains the value $NIL$. The root node is the only node in the tree whose parent is $NIL$.

The keys in a binary search tree are always stored in such a way as to satisfy the **binary-search-tree property**:

> Let $x$ be a node in a binary search tree. If $y$ is a node in the left subtree of $x$, then $y.key \leq x.key$. If $y$ is a node in the right subtree of $x$, then $y.key \geq x.key$.

The binary-search-tree property allow us to print out all the keys in a binary search tree in sorted order by a simple recursive algorithm, called an **inorder tree walk**.

Given a pointer to the root of the tree and a let $k$, **TREE-SEARCH** returns a pointer to a node with key $k$ if one exists; otherwise, it return $NIL$.

##### TREE-SEARCH x,k

```java
  if x == NIL or k == x.key
    return x
  if k < x.key
    return TREE-SEARCH(x.left,k)
  else return TREE-SEARCH(x.right,k)
```

Or the iterative algorithm

##### ITERATIVE-TREE-SEARCH x,k

```java
  while x != NIL and k != x.key
    if x < x.key
      x = x.left
    else x = x.right
  return x
```

The procedure begins its search at the root and traces a simple path downward in the tree. For each node $x$ it encounters, it compares the key $k$ with $x.key$. If the two keys are equal, the search terminates. If $k$ is smaller than $x.key$, the search continues in the left subtree of $x$, since the binary-search-tree property implies that $k$ could not be stored in the right subtree. Symmetrically, if $k$ is larger than $x.key$, the search continues in the right subtree. The running time of **TREE-SEARCH** is $\Theta(h)$, where $h$ is the height of the tree. Use Figure 12.2 in the book for visualization

We can always find an element in a binary search tree whose key is a minimum by following _left_ child pointers from the root until we encounter a $NIL$.

##### TREE-MINIMUM x

```java
  while x.left != NIL
    x = x.left
  return x
```

The pseudocode for **TREE-MAXIMUM** is symmetric:

##### TREE-MAXIMUM x

```java
  while x.right != NIL
    x = x.right
  return x
```

Both run in $\Theta(h)$, where $h$ is the height of the tree.

> We can implement the dynamic-set operations **SEARCH**, **MINIMUM**, **SUCCESSOR**, **PREDECESSOR**, **INSERT**, and **DELETE** so that each one runs in $\Theta(h)$ time on binary search tree of height $h$.
