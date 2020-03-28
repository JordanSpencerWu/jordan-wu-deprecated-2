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
title: Introduction to Algorithms
---

An **algorithm** is a sequence of computational steps that transform the input into the output. **Analyzing** an algorithm has come to mean predicting the resources that the algorithm requires. The time taken by an algorithm grows with the size of the input, so it is traditional to describe the running time of a program as a function of the size of its input. To do so, we need to define the terms "running time" and "size of input" more carefully.

**Input size** depends on the problem being studied. For many problems the _number of items in the input_, or it may be _total numbers of bits_ needed to represent the input in ordinary binary notation.

**Running time** of an algorithm on a particular input is the number of primitive operations or "steps" executed.

For the most part of the book, the focus will be on the **worst-case running time**, the longest running time for _any_ input of size $n$. The reason why is this running time gives us the upper bound on the running time for any input of size $n$ guarantee that the algorithm will never take any longer.

**Rate of growth** or **order of growth** of the running time, we consider only the leading term of the running time function and also ignore the leading term's constant coefficient.

We use **loop invariants** to help us understand why an algorithm is correct, it must satisfy the following conditions:

**Initialization**: It is true prior to the first iteration of the loop.

**Maintenance**: If it is true before an iteration of the loop, it remains true before the next iteration.

**Termination**: When the loop terminates, the invariant gives us a useful property that helps show that the algorithm is correct.

A **median**, informally, is the "halfway point" of the set. When $n$ is odd, the median is unique, occuring at $i = (n + 1) / 2$. When $n$ is even, there are two medians, occurring at $i = n / 2$ and $i = n / 2 + 1$.
