---
author: [Steve McConnell]
date: 2016-10-11
description: This book contains many useful tips about software construction and best practices on creating clean code. A list of issues that can happen during software construction and how to avoid them by testing your code before writing them. The best part is the checklist at the end of every section containing useful items to check for during software construction.
seo-description: Code complete second edition - a practical handbook of software construction by Steve McConnell notes.
title: General Control Issues
---

All control structures depend on the evaluation of boolean expression. Use the identifiers true and false in boolean expressions rather than using values like 0 and 1. Avoid complicated negative boolean expressions in your program. Organize numeric test so that they follow points on a number line.

> A "compound statement" or "block" is a collection of statements that are treated as a single statement for purpose of controlling the flow of a program.

> Avoid deep nesting, few people can understand more than three levels of nested _ifs_.

The core of structured programming is the simple idea that a program should use only one-in, one-out control constructs. A one-in, one-out control construct is a block of code that has only one place it can start and only one place it can end. A structured program progresses in an orderly, disciplined way, rather than jumping around unpredictably.

The central concept of structured programming are still useful today and apply to consideration in using _break_, _continue_, _throw_, _catch_, _return_, and other topics.

> "Programming complexity" is the number of mental objects you have to keep in mind simultaneously in order to understand the program.

> Poor use of control structures increases complexity; good use decreases it. All control structures depend on the evaluation of boolean expression. Use the identifiers true and false in boolean expressions rather than using values like 0 and 1. Avoid complicated negative boolean expressions in your program. Organize numeric test so that they follow points on a number line.

> A "compound statement" or "block" is a collection of statements that are treated as a single statement for purpose of controlling the flow of a program.

> Avoid deep nesting, few people can understand more than three levels of nested _ifs_.

The core of structured programming is the simple idea that a program should use only one-in, one-out control constructs. A one-in, one-out control construct is a block of code that has only one place it can start and only one place it can end. A structured program progresses in an orderly, disciplined way, rather than jumping around unpredictably.

The central concept of structured programming are still useful today and apply to consideration in using _break_, _continue_, _throw_, _catch_, _return_, and other topics.

> "Programming complexity" is the number of mental objects you have to keep in mind simultaneously in order to understand the program.

> Poor use of control structures increases complexity; good use decreases it.
