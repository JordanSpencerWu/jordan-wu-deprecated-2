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
title: Stacks
---

In a **stack**, the element deleted from the set is the one most recently inserted: the stack implements a **last-in, first-out**, or **LIFO**.

The **INSERT** operation on a stack is often called **PUSH**, and the **DELETE** operation, which does not take an element argument, is often called **POP**.

> These names are allusions to physical stacks, such as the spring-loaded stacks of plates used in cafeterias. The order in which plates are popped from the stack is the reverse of the order in which they were pushed onto the stack, since only the top plate is accessible.

We can implement a stack of at most $n$ elements with an array $S[1..n]$. The array has an attribute $S.top$ that indexes the most recently inserted element. The stack consists of elements $S[1..S.top]$, where $S[1]$ is the element at the bottom of the stack and $S[S.top]$ is the element at the top.

When $S.top = 0$, the stack contains no elements and is **empty**. We can test to see whether the stack is empty by query operation **STACK-EMPTY**. If we attempt to pop an empty stack, we say the stack **underflows**, which is normally an error. If $S.top$ exceeds $n$, the stack **overflows**.

> Each of the three stack operation takes $\Theta(1)$.

##### STACK-EMPTY S

```java
  if S.top == 0
    return TRUE
  else return FALSE
```

##### PUSH S,x

```java
  S.top = S.top + 1
  S[S.top] = x
```

##### POP S

```java
  if STACK-EMPTY(S)
    error "underflow"
  else S.top = S.top - 1
    return S[S.top + 1]
```
