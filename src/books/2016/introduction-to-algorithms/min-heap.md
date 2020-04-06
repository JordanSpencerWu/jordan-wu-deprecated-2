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
title: Min Heap
---

We can use the procedure **MIN-HEAPIFY** in a bottom-up manner to convert an array $A[1..n]$, where $n = A.length$, into a min-heap. The elements in the subarray $A[(\lfloor \frac{n}{2} + 1 \rfloor )..n]$ are all leaves of the tree, and so each is a 1-element heap to begin with. The procedure **BUILD-MIN-HEAP** goes through the remaining nodes of the tree and run **MIN-HEAPIFY** on each one.

##### BUILD-MIN-HEAP A

```java
  A.heap-size = A.length
  for i = [A.length/2] downto 1
    MIN-HEAPIFY(A,i)
```

Why **BUILD-MIN-HEAP** works correctly, we use the following loop invariant:

> At the start of each iteration of the for loop, each node $i + 1, i + 2, \dots, n$ is the root of a min-heap.

The running time of **BUILD-MIN-HEAP** as follows, each call to **MIN-HEAPIFY** costs $\Theta(lg \\ n)$ time, and **BUILD-MIN-HEAP** makes $\Theta(n)$. Thus, the running time is $\Theta(n \\ lg \\ n)$.

##### Java Implementation

```java
  public class Main {
      public static void main(String[] args) {
          int[] unsortedArray = {4, 1, 3, 2, 16, 9, 10, 14, 8, 7};
          buildMinHeap(unsortedArray);
          printArray(unsortedArray);
          // 1 2 3 4 7 9 10 14 8 16
      }

      public static void buildMinHeap(int[] array) {
          int midPoint = array.length/2;
          for (int indexsOfLeaves = midPoint; indexsOfLeaves >= 0; indexsOfLeaves--) {
              minHeapify(array,indexsOfLeaves);
          }
      }

      public static void minHeapify(int[] array, int parentIndex) {
          int leftChildIndex = (parentIndex * 2) + 1;
          int rightChildIndex = (parentIndex * 2) + 2;
          int indexOfLowestValue = parentIndex;

          if (leftChildIndex < array.length && array[leftChildIndex] < array[indexOfLowestValue]) {
              indexOfLowestValue = leftChildIndex;
          }
          if (rightChildIndex < array.length && array[rightChildIndex] < array[indexOfLowestValue]) {
              indexOfLowestValue = rightChildIndex;
          }
          if (indexOfLowestValue != parentIndex) {
              int temp = array[parentIndex];
              array[parentIndex] = array[indexOfLowestValue];
              array[indexOfLowestValue] = temp;
              minHeapify(array, indexOfLowestValue);
          }
      }

      public static void printArray(int[] array) {
          for (int i = 0; i < array.length; i++) {
              System.out.print(array[i] + " ");
          }
      }
  }
```
