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
title: Linked Lists
---

A **linked list** is a data structure in which the objects are arranged in a linear order, the order in a linked list is determined by a pointer in each object.

A **doubly linked list** $L$ is an object with an attribute $key$ and two other pointer attribute: **next** and **prev**. Given an element $x$ in the list, $x.next$ points to its **successor** in the linked list, and $x.prev$ points to its **predecessor**. If $x.prev = NIL$, the element $x$ has no predecessor and is therefore the first element, or **head**, of the list. If $x.next = NIL$, the element $x$ has no successor and is therefore the last element, or **tail**, of the list. An attribute $L.head$ points to the first element of the list. If $L.head = NIL$, the list is empty.

> A list may have one of several forms. It may be either singly linked or doubly linked, it may be sorted or not, and it may be circular or not.

**Singly linked**, we omit the _prev_ pointer in each element.

A **sorted** list, the linear order of the list corresponds to the linear order of keys stored in elements of the list; the minimum element is then the head of the list, and the maximum element is the tail.

A **unsorted** list, the elements can appear in any order.

In a **circular** list, the _prev_ pointer of the head of the list points to the tail, and the _next_ pointer of the tail of the list points to the head.

##### Searching a linked list

The procedure **LIST-SEARCH L,k** finds the first element with key $k$ in list $L$ by a simple linear search, returning a pointer to this element. If no object with key $k$ appears in the list, then the procedure return $NIL$.

##### LIST=SEARCH L,k

```java
  x = L.head
  whilte x != NIL and x.key != k
    x = x.next
  return x
```

To search a list of $n$ objects, the **LIST-SEARCH** procedure takes $\Theta(n)$ time in the worst case, since it may have to search the entire list.

##### Inserting into a linked list

Given an element $x$ whose $key$ attribute has already been set, **LIST-INSERT** procedure "splices" $x$ onto the front of the linked list.

##### LIST-INSERT L,x

```java
  x.next = L.head
  if L.head != NIL
    L.head.prev = x
  L.head = x
  x.prev = NIL
```

The running time for **LIST-INSERT** on a list of $n$ elements is $\Theta(1)$.

##### Deleting from a linked list

The procedure **LIST-DELETE** removes an element $x$ from a linked list $L$. It must be given a pointer to $x$, and it then "splices" x out of list by updating pointers. If we wish to delete an element with a given key, we must first call **LIST-SEARCH** to retrieve a pointer to the element.

##### LIST-DELETE L,x

```java
  if x.prev != NIL
    x.prev.next = x.next
  else L.head = x.next
  if x.next != NIL
    x.next.prev = x.prev
```

**LIST-DELETE** runs in $\Theta(1)$, but if we wish to delete an element with a given key, $\Theta(n)$ time is required in the worst case because we must first call **LIST-SEARCH** to find the element.
