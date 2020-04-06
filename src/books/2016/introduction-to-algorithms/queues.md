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
title: Queues
---

In a **queue**, the element deleted is always the one that has been in the set for the longest time: the queue implements a **first-in, first-out**, or **FIFO**, policy. We call the **INSERT** operation on a queue **ENQUEUE**, and we call the **DELETE** operation **DEQUEUE**.

> The FIFO property of a queue causes it to operate like a line of customers waiting to pay a cashier. The queue has a **head** and a **tail**. When a element is enqueued, it takes its place at the tail of the queue, just as a newly arriving customer takes a place at the end of the line. The element dequeued is always the one at the head of the queue, like the customer at the head of the line who has waited the longest.

One way to implement a queue of at most $n - 1$ elements using an array $Q[1..n]$. The queue has an attribute $Q.head$ that indexes, or points to, its head. The attribute $Q.tail$ indexes the next location at which a newly arriving element will be inserted into the queue. The elements in the queue reside in the locations $Q.head, Q.head + 1, ..., Q.tail-1$. When $Q.head = Q.tail$, the queue is empty, initially we have $Q.head = Q.tail = 1$.

If we attempt to dequeue an element from an empty queue, the queue **underflows**. When $Q.head = Q.tail + 1$, the queue is full, and if we attempt to enqueue an elment, then the queue **overflows**.

> Each operation takes takes $\Theta(1)$.

##### ENQUEUE Q,x

```java
  Q[Q.tail] = x
  if Q.tail == Q.length
    Q.tail = 1
  else Q.tail = Q.tail + 1
```

##### DEQUEUE Q

```java
  x = Q[Q.head]
  if Q.head == Q.length
    Q.head = 1
  else Q.head = Q.head + 1
  return x
```
