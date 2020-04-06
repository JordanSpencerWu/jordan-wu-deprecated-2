---
author: [Steve McConnell]
date: 2016-10-11
description: This book contains many useful tips about software construction and best practices on creating clean code. A list of issues that can happen during software construction and how to avoid them by testing your code before writing them. The best part is the checklist at the end of every section containing useful items to check for during software construction.
seo-description: Code complete second edition - a practical handbook of software construction by Steve McConnell notes.
title: Controlling Loops
---

"Loop" is an informal term that refers to any kind of iterative control structure - any structure that causes a program to repeatedly execute a block of code. Loop are differentiated first by flexibility - whether the loop executes a specific number of times or whether it tests for completion on each iteration, also differentiated by the location of the test for completion. Flexibility and the location of the test determine the kind of loop to choose as a control structure.

> If you don't know ahead of time exactly how many times you'll want the loop to iterate, use a _while_ loop.

> A _for_ loop is a good choice when you need a loop that executes a specific number of times.

> The advantage of _foreach_ loop is eliminating loop-housekeeping arithmetic and therefore eliminating any chance of errors in the loop-housekeeping arithmetic.

> Efficient programmers do the work of mental simulations and hand calculations because they know that such measures help them find errors.
