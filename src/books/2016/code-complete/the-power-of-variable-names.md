---
author: [Steve McConnell]
date: 2016-10-11
description: This book contains many useful tips about software construction and best practices on creating clean code. A list of issues that can happen during software construction and how to avoid them by testing your code before writing them. The best part is the checklist at the end of every section containing useful items to check for during software construction.
seo-description: Code complete second edition - a practical handbook of software construction by Steve McConnell notes.
title: The Power of Variable Names
---

The goodness or badness of a variable is largely determined by its name. The most important consideration in naming a variable is that the name fully and accurately describe the entity the variable represents. A good name tends to express the what more than the how.

> A study by W.J. Hansen found that longer names are better for rarely used variables or global variables and shorter names are better for local variables or loop variables.

Using naming conventions for opposite help consistency, which helps readability.

Status variables describe the state of your program. Temporary variable are used to hold intermediate results of calculations, as temporary placeholders, and to hold housekeeping values. Keep typical Boolean names in mind like done, error, found, success or ok. When naming constants, name the abstract entity the constant represent rather than the number the constant refer to.

The power of naming conventions doesn't come from the specific convention chosen but from the fact that a convention exist, adding structure to the code and giving you fewer things to worry about. Follow the naming convention of the language you're using.

Standardizing prefixes for common meanings provides a terse but consistent and readable approach to naming data.
