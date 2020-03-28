---
author: [Steve McConnell]
date: 2016-10-11
description: This book contains many useful tips about software construction and best practices on creating clean code. A list of issues that can happen during software construction and how to avoid them by testing your code before writing them. The best part is the checklist at the end of every section containing useful items to check for during software construction.
seo-description: Code complete second edition - a practical handbook of software construction by Steve McConnell notes.
title: Unusual Data Types
---

The term "structure" refers to data that's built up from other types. Deals with user-created structured data - _structs_ in C and C++ and _structures_ in Microsoft Visual Basic. Classes also sometimes perform as structures when the class consists entirely of public data members with no public routines.

Conceptually, every pointer consists of two parts: a location in memory and a knowledge of how to interpret the contents of that location. The location in memory is an address, the pointer itself contains only this address. To use the data the pointer points to, you have to go to that address and interpret the contents of memory at that location.

Global variables are accessible anywhere in a program. Most experienced programmers have concluded that access to data from several routines is pretty useful. Anything you can do with global data, you can do better with access routines. The use of access routines is a core technique for implementing abstract data types and achieving information hiding.
