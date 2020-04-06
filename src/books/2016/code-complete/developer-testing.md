---
author: [Steve McConnell]
date: 2016-10-11
description: This book contains many useful tips about software construction and best practices on creating clean code. A list of issues that can happen during software construction and how to avoid them by testing your code before writing them. The best part is the checklist at the end of every section containing useful items to check for during software construction.
seo-description: Code complete second edition - a practical handbook of software construction by Steve McConnell notes.
title: Developer Testing
---

Testing is usually broken into two broad categories: black-box testing and white-box or glass-box testing. "Black-box testing" refers to tests in which the tester cannot see the inner working of the item being tested. "White-box testing" refers to tests which the tester is aware of the inner working of the item being tested.

> Testing is a means of detecting errors.

> Debugging is a means of diagnosing and correcting the root causes of errors that have already been detected.

Writing test cases first will minimize the amount of time between when a defect is inserted into the code and when the defect is detected and removed. Test-first programming is one of the most beneficial software practices.

"Code coverage" testing or "logic coverage" testing are approaches in which you test all the path through a program.

The idea of boundary analysis is to write test cases that exercise the boundary conditions, also applies to minimum and maximum allowable values.
