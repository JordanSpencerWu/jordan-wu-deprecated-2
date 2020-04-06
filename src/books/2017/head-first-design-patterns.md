---
author:
  [Eric Freeman, And, Elisabeth Robson, And, Kathy Sierra, And, Bert Bates]
date: 2017-08-27
description: A great book that describes popular design patterns that is used in software development. Learning design pattern can be hard, but this book provides many coding examples and diagrams explaining each pattern step by step. I recommend this book to anyone who wants to learn design patterns.
seo-description: Head first design patterns by Eric Freeman and Elisabeth Robson and Kathy Sierra and, Bert Bates notes.
title: Head First Design Patterns
---

##### The Strategy Pattern

> Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

**Design Principle:**

Identify the aspects of your application that vary and separate them from what stays the same. In other words, take the parts that vary and encapsulate them, so that later you can alter or extend the parts that vary without affecting those that don't.

Program to an interface, not an implementation.

Favor composition over inheritance.

##### The Observer Pattern

> Defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

Publishers + Subscribers = Observer Pattern

If you understand newspaper subscriptions, you pretty much understand that Observer Patter, only we call the publisher the **SUBJECT** and the subscribers the **OBSERVERS**.

The Observer Pattern provides an object design where subjects and observers are loosely coupled. When two objects are loosely coupled, they can interact, but have very little knowledge of each other.

Design Principle: Strive for loosely coupled designs between objects that interact.

##### The Decorator Pattern

> Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to sub classing for extending functionality.

Open-Closed Principle: Classes should be open for extension, but closed for modification.

##### The Factory Pattern

> Defines an interface for creating an object, but let’s subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

The Dependency Inversion Principle: Depend upon abstractions. Do not depend upon concrete classes.

The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

##### The Singleton Pattern

> Ensures a class has only one instance and provides a global point of access to it.

##### The Command Pattern

> Encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.

##### The Adapter Pattern

> Converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

##### The Facade Pattern

> Provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

Principle of Least knowledge: talk only to your immediate friends.

##### The Template Pattern

> Defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

##### The Iterator Pattern

> Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

Design Principle: A class should have only one reason to change.

##### The Composite Pattern

> Allows you to compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of object uniformly.

##### The State Pattern

> Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.

##### The Proxy Pattern

> Provides a surrogate or placeholder for another object to control access to it.

A **Pattern** is a solution to a problem in a context.

An **Anti-Pattern** tells you how to go from a problem to a BAD solution.

**Creational Patterns** involve object instantiation and all provide a way to decouple a client from the objects it needs to instantiate.

Any pattern that is a **Behavioral Pattern** is concerned with how classes and objects interact and distribute responsibility.

**Structural Patterns** let you compose classes or objects into larger structures.

**Class Patterns** describe how relationships between classes are defined via inheritance. Relationships in class patterns are established at compile time.

**Object Patterns** describe relationships between objects and are primarily defined by composition. Relationships in object patterns are typically created at runtime and are more dynamic and flexible.
