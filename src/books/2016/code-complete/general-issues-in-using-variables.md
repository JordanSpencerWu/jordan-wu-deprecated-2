---
author: [Steve McConnell]
date: 2016-10-11
description: This book contains many useful tips about software construction and best practices on creating clean code. A list of issues that can happen during software construction and how to avoid them by testing your code before writing them. The best part is the checklist at the end of every section containing useful items to check for during software construction.
seo-description: Code complete second edition - a practical handbook of software construction by Steve McConnell notes.
title: General Issues In Using Variables
---

Implicit declaration is one of the most hazardous features available in any language. Languages that require you to declare data explicitly are, in essence, requiring you to use data more carefully, which is one of their primary advantages.

> Improper data initialization is one of the most fertile sources of error in computer programming.

Scope, or visibility, refers to the extent to which your variables are known and can be referenced throughout a program. It's always a good idea to localize references to variables by keeping them close together. A variable's life begins at the first statement in which it's referenced; it's life ends at the last statement in which it's referenced. A short live time makes your code more readable, fewer lines of code a reader has to keep in mind at once.

> "Persistence" is another word for the life span of a piece of data.

> "Binding time": the time at which the variable and its value are bound together.

Sequential data consists of clusters of data used together in a certain order. Selective data is a collection in which one of several pieces of data is used at any particular time. Iterative data is the same type of data repeated several times. Your real data can be combination of all three types of data above.
