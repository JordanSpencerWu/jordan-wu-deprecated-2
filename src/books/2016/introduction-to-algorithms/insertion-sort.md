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
title: Insertion Sort
---

This is an efficient algorithm for sorting a small number of elements, using the **incremental** approach: having sorted the subarray $A[1..j - 1]$, we inserted the single element $A[j]$ into its proper place, yielding the sorted subarray $A[1..j]$.

**Input**: A sequence of $n$ numbers $<a_1,a_2,\cdots,a_n>$

**Ouput**: A permutation reordering $<a'_1,a'_2,\cdots,a'n>$ of the input sequence such that $a'_1 \leq a'_2 \leq \cdots \leq a'_n$.

**Description**: Insertion sort works the way many people sort a hand of playing cards. We start with an empty left hand and the cards face down on the table. We then remove one card at a time from the table and insert it into the correct position in the left hand.To find the correct position for a card, we compare it with each of the cards already in the hand, right to left. At all times, the cards held in the left hand are sorted, and these cards were originally the top cards of the pile on the table.

##### INSERTION-SORT A

This _pseudocode_ takes as a parameter an array $A[1..n]$ containing a sequence of length $n$ that is to be sorted. The algorithm sorts the input numbers **in place**: it rearranges the numbers within the array.

```java
  for j = 2 to A.length
    key = A[j]
    // Insert A[j] into the sorted sequence A[1..j-1].
    i = j - 1
    while i > 0 and A[i] > key
      A[i + 1] = A[i]
      i = i - 1
    A[i + 1] = key
```

The index $j$ indicates the "current card" being inserted into the subarray consisting of elements $A[1..j - 1]$ currently sorted array. The remaining subarray $A[j + 1..n]$ corresponds to the unordered array.

> Elements $A[1..j - 1]$ are the elements _originally_ in positions $1$ through $j - 1$, but now in sorted order, this is known as **loop invariant**

The best-case occurs if the array is already sorted and the best-case running time will be a **linear function** of $n$, $\Theta(n)$.

The worst-case occurs when the array is in reverse sorted order and the worst-case running time is a **quadratic function** of $n$, $\Theta(n^2)$.

##### Java Implementation Using Figure 2.2 In Book

```java
  public class Main {
    public static void main(String[] args) {
        int[] unsortedArray = {5, 2, 4, 6, 1, 3};
        insertionSort(unsortedArray);
        printArray(unsortedArray);
        // returns 1 2 3 4 5 6
    }

    public static void insertionSort(int[] array) {
        int key, i;

        for (int j = 1; j < array.length; j++) {
            key = array[j];
            i = j - 1;
            while(i >= 0 && array[i] > key) {
                array[i + 1] = array[i];
                i = i - 1;
            }
            array[i + 1] = key;
        }
    }

    public static void printArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
    }
  }
```
