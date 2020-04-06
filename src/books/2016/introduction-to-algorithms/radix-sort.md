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
title: Radix Sort
---

**Radix sort** is the algorithm that sorts number on their _least significant_ digit first. The algorithm then combines the cards into a single deck. Then it sorts the entire deck again on the second-least significant digit and recombines the deck in a like manner. The process continues until the cards have been sorted on all $d$ digits. Remarkably, at that point the cards are fully sorted on the $d$-digit number. Thus, only $d$ passes through the deck are required to sort.

The following procedure assumes that each element in the $n$-element array $A$ has $d$ digits, where digit 1 is the lowest-order digit and digit $d$ is the highest-order digit.

##### RADIX-SORT A,d

```java
  for i = 1 to d
    use a stable sort to sort array A on digit i
```

**Note**: A example of a stable sort is <a href="{{ "/counting-sort/" | prepend: site.baseurl }}">**Counting Sort**</a>.

> Given $n$ $d$-digit numbers in which each digit can take on up to $k$ possible values, **RADIX-SORT** correctly sorts these number in $\Theta(d(n + k))$ time if the stable sort it uses take $\Theta(n + k)$ time.

##### Java Implementation Using Figure 8.3 In Book

```java
  public class Main {

      public static void main(String[] args) {
          int[] unsortedArray = {329, 457, 657, 839, 436, 720, 355};
          int[] sortedArray = new int[unsortedArray.length];

          sortedArray = radixSort(unsortedArray,3);
          printArray(sortedArray);
          // return 329 355 436 457 657 720 839
      }

      public static int[] radixSort(int[] array, int digit) {
          for (int i = 1; i <= digit; i++) {
              int[] sortedArray = new int[array.length];
              int maxIntegerAtDigit = getMaxIntegerInArrayByDigit(array,i);
              countingSortByDigit(array,sortedArray,maxIntegerAtDigit,i);
              array = sortedArray;
          }
          return array;
      }

      public static int getMaxIntegerInArrayByDigit(int[] array, int digit) {
          int max = getNthDigitWithBaseTen(array[0],digit);

          for (int i = 1; i < array.length; i++) {
              int thisMax = getNthDigitWithBaseTen(array[i],digit);
              if (thisMax > max) {
                  max = thisMax;
              }
          }

          return max;
      }

      // stackoverflow get a specific digit of a number from an int in java
      public static int getNthDigitWithBaseTen(int number, int digit) {
          int base = 10;
          return (int) ((number / Math.pow(base, digit - 1)) % base);
      }

      public static void countingSortByDigit(int[] unsortedArray, int[] sortedArray, int maxInteger, int digit) {
          int[] tempArray = new int[maxInteger + 1];

          for (int i = 0; i <= maxInteger; i++) {
              tempArray[i] = 0;
          }

          for (int j = 0; j < unsortedArray.length; j++) {
              tempArray[getNthDigitWithBaseTen(unsortedArray[j],digit)] = tempArray[getNthDigitWithBaseTen(unsortedArray[j],digit)] + 1;
          }

          for (int i = 1; i <= maxInteger; i++) {
              tempArray[i] = tempArray[i] + tempArray[i - 1];
          }

          for (int j = unsortedArray.length - 1; j >= 0; j--) {
              sortedArray[tempArray[getNthDigitWithBaseTen(unsortedArray[j],digit)] - 1] = unsortedArray[j];
              tempArray[getNthDigitWithBaseTen(unsortedArray[j],digit)] = tempArray[getNthDigitWithBaseTen(unsortedArray[j],digit)] - 1;
          }
      }

      public static void printArray(int[] array) {
          for( int i = 0; i < array.length; i++) {
              System.out.print(array[i] + " ");
          }
      }
  }
```
