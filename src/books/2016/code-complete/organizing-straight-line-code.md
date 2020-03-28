---
author: [Steve McConnell]
date: 2016-10-11
description: This book contains many useful tips about software construction and best practices on creating clean code. A list of issues that can happen during software construction and how to avoid them by testing your code before writing them. The best part is the checklist at the end of every section containing useful items to check for during software construction.
seo-description: Code complete second edition - a practical handbook of software construction by Steve McConnell notes.
title: Design In Construction
---

Although organizing straight-line code is a relatively simple task, some organizational subtleties influence code quality, correctness, readability, and maintainability.

The easiest sequential statements to order are those in which the order counts. When statements have dependencies that require you to put them in a certain order, take steps to make the dependencies clear.

You might encounter cases in which one statement doesn't depend on, or logically follow, a statement. But ordering affects readability, performance, and maintainability. Use this guiding principle called Principle of Proximity: _keep related actions together_. They can be related because they operate on the same data, perform similar tasks, or depend on each other's being performed in order.
