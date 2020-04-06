---
author: [Andrew Hunt, David Thomas]
date: 2016-09-07
description: The road to mastering your software craftsmanship is to constantly invest in your learning. This book shows you how a pragmatic programmer create clean, flexible, and adaptable code. Everything you need to know about working on a project and more!
seo-description: The pragmatic programmer - from journeyman to master by Andrew Hunt and David Thomas notes.
title: The Pragmatic Programmer - From Journeyman To Master
---

##### A Pragmatic Philosophy

Invest in your knowledge portfolio, your knowledge and experience are your most important professional assets.

> An investment in knowledge always pays the best interest.
>
> Benjamin Franklin

##### A Pragmatic Approach

During development focus on orthogonality by reducing duplication in the system, remember to use Tracer Code or Prototyping when implementing new features.

##### The Basic Tools

Every craftsman starts his or her journey with tools, spend time learning to use these tools, and at some point you'll be surprised to discover your fingers moving over the keyboard, manipulating text without conscious thought. The tools well have become extensions of your hands.

##### Pragmatic Paranoia

Perfect software doesn't exist, use this to your advantage by applying techniques that test for the correctness of your code.

> You can't write perfect software.

##### Bend, or Break

The world is constantly changing, so does your code, focus on producing flexible and adaptable software.

##### While You Are Coding

Developers who don't actively think about their code or programming by coincidence - the code might work, but there's no particular reason why.

> Avoid programming by coincidence - relying on luck and accidental successes - in favoring of programming deliberately.

##### Before the Project

Requirement gathering rarely lie on the surface. Normally, they're buried deep beneath layers of assumptions, misconceptions, and politics.

> Work with a user to think like a user

##### Pragmatic Projects

The success of a project is measured by how well it meets the expectations of its users.

> The Golden Rule "Do unto others as you would have them do unto you"

#### Terms

**Entropy** is a term from physics that refers to the amount of "disorder" in a system. When disorder increases in software, programmers call it "software rot".

**Don't Repeat Yourself DRY**, every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

**Orthogonality**, two or more things are orthogonal if changes in one do not affect any of the others.

**Cohesion**, components that are self-contained: independent, and with a single, well-defined purpose.

**Reversibility** means producing flexible and adaptable software.

**Tracer code** is not disposable: you write it for keeps. It contains all the error checking, structuring, documentation, and self-checking that any piece of production code has.

**Prototyping** generates disposable code.

**Tracing statements** are used to watch the state of a program or a data structure over time.

**Rubber Ducking** a useful technique for finding the cause of a problem is simply to explain it to someone else.

**Code Generators** are code that writes code, task of producing the same code over and over again.

**Design by Contract DBC** a powerful technique that focuses on documenting and agreeing to the rights and responsibilities of software modules to ensure program correctness.

**Lazy code**: be strict in what you will accept before you begin, and promise as little as possible in return.

**Coupling**, the dependencies among modules of code.

**Shy code**: don't reveal yourself to others, and don't interact with too many people.

**Decoupling**, reducing the dependencies among modules of code.

**Law of Demeter for functions** attempts to minimize coupling between modules in any given program.

**Metadata** is any data that describes the application - how it should run, what resources it should use, and so on.

**Temporal coupling** is about time dependencies.

**Concurrency** are things happening at the same time.

**Model-View-Controller MVC**: separating the model from both the GUI that represents it and the controls that manage the view.

**Big O Notation**: estimating the resources that algorithms use - time, processor, memory, and so on.

1. Access Array => **O1**
2. Simple loops => **On**
3. Nested loops => **Om x n**
4. Binary chop => **Olgn**
5. Divide and Conquer => **n lgn**

**Premature optimization**: a good idea to make sure an algorithm really is a bottleneck before investing your precious time trying to improve it.

**Refactoring**: rewriting, reworking, and re-architecting code.

**Unit Testing**: testing done on each module, in isolation, to verify its behavior.

**Testing against contract** tells us two things: whether the code meets the contract, and whether the contracts means what we think it means.

**Documenting Requirements**, you want to write likely scenarios that describe what the application need to do and publish a document that everyone can use as a basis for discussions - the developers, the end users, and the project sponsors.

**Use cases**: describe a particular use of the system - not in terms of user interface, but in a more abstract fashion.

**Requirements** are not architecture. Requirements are not designs, nor are they the user interface. Requirements are need.

**Project glossary** - one place that defines all the specific terms and vocabulary used in a project.

**Project specification** is the process of taking a requirement and reducing it down to the point where a programmer's skill can take over.

**Seamless approach**: specification and implementation are simply different aspects of the same process - an attempt to capture and codify a requirement.

**Quality officer** - someone to whom the team delegates the responsibility for the quality of the deliverable.

**Chief water tester**: this person check constantly for increased scope, decreased time scales, additional features, new environments - anything that wasn't in the original agreement.

**Project librarian**: responsible for coordinating documentation and code repositories.

**Tool Builders**: to construct and deploy the tools that automate the project drudgery.

A **build** is a procedure that takes on empty directory and builds the project from scratch, producing whatever you hope to produce as a final deliverable.

**Final builds**: which you intend to ship as products, may have different requirement from the regular nightly build.

**Integration testing** shows that the major subsystem that make up the project work and play well with each other.

**Real-world conditions**, in the real world, your programs don't have limitless resources; they run out of things.

**Regression test** compares the output of the current test with previous or known values.

**Test data**: there are only two kinds of data: real-world data and synthetic data.

**Coverage analysis** tools watch your code during testing and keep track of which lines of code have been executed and which haven't.

**Internal documentation** includes source code comments, design and test document, and so on.

**External documentation** is anything shipped or published to the outside world, such as user manuals.
