---
author: [Robert C. Martin]
date: 2016-08-22
description: There are two reasons to read this book. One you are a programmer, second you want to become a better programmer. Many thought processes are introduced that will make you a professional programmer, where clarity is king. Creating clean code takes a lot of time and effort, always improving readability and design structure of the code. The key is "code-sense" being able to spot bad code and transform it into clean code.
seo-description: Clean code - a handbook of agile software craftsmanship by Robert C. Martin notes.
title: Clean Code - A Handbook Of Agile Software Craftsmanship
---

#### Clean Code

Bad code will bring the company down! It's obvious that messy code takes longer to understand. As the mess continues, productivity will continue to decrease to zero. The only way to increase productivity is to prevent good code from rotting to bad code by writing clean code. It's our job to defend the code and keep it clean. The key is "code-sense" being able to spot bad code and transform it into clean code.

> I could list all of the qualities that I notice in clean code, but there is one overarching quality that leads to all of them. Clean code always looks like it was written by someone who cares. There is nothing obvious that you can do to make it better. All of those things were thought about by the code's author, and if you try to imagine improvements, you're led back to where you are, sitting in appreciation of the code someone left for you - code left by someone who cares deeply about the craft.
>
> by Michael Feathers

Programmers are the authors of their code, it's their responsiblity for communicating well with their readers. Most of the time are spent reading code instead of writing, making it easy to read should be the main focus when creating clean code. Follow the boy scout rule, leave the campground cleaner than you found it. To develop "code sense" by practicing the tools, techniques, and thought processes used by good programmers.

#### Meaningful Names

Name is everywhere in software, it's important to pick a intention-revealing name. The name should tell you why it exists, what it does, and how it is used. Avoid disinformation, leaving false clues that obscure the meaning of code. Remember to make meaningful distinctions, be able to distinguish between variable names. Use pronounceable names so that everyone knows what you're are talking about. Classes and objects should have noun or noun phrase names while methods should have verb or verb phrase names. Pick one word per concept, that one word should be the same everywhere in the software. Avoid using the same word for two purposes. A professional programmer understands that clarity is king! You are the author of your story, use names that will help you tell your story to the reader.

#### Functions

The most important rule of functions is that it should be small!! This implies that the function block using if statement, else statements, while statements, and so on should be a function call. This allows you to name a descriptive function name and reduces your function size. Use the Step-down rule, a top-down narrative where every function to be followed by those at the next level of abstraction.

The ideal number of arguments for a function is zero (niladic). The more arguments you have, the more complex your function gets, we want simple and short functions! You can create functions with parameters but think carefully! Give parameter meaningful names that goes with the descriptive function name.

Avoid side effects! Your functions should only do one thing, avoid doing other hidden things. If you do have a side effect, include the side effect in the function name.

Function should either do something or answer something, but not both. Every function, and every block within a function, should have one entry and one exit. There should only be one return statement in a function, no break or continue statements in a loop.

Master programmers writes stories rather than programs. The art of programming is and has always been, the art of language design.

> FUNCTIONS SHOULD DO ONE THING, THEY SHOULD DO IT WELL. THEY SHOULD DO IT ONLY.

#### Comments

Comments are evil! They propagates lies and misinformation, code are always evolving and the comments don't always follow them. The older the comment is, the farther away it is from the code it describes. Truth can only be found in the code, only the code can truly tell you what it does. Comments can be avoided if you write clean code! You can still use comments, focus on intent and informative.

#### Formatting

Code formatting is imporatant along with readability of you code! Remember readability comes before functionality, the functionality of the code will always change. Readability helps with modifying the functionality, your style and discipline survives.

The newspaper metaphor, think of a well-written newspaper article. The top is where to have your high-level abstraction, as you go down there's more details. The end is where you will find the lowest level functions.

Concepts that are closely related should be kept vertically close to each other. For example, instance variables should be declared at the top of the class. If one functions calls another, they should be vertically close, and the caller should be above the callee. This creates a nice flow down the source code module from high level to low level.

The horizonal formatting limit should be around 80 to 120 characters per line. We can use horizontal white space to associate things that are strongly related and disassociate things that are more weakly related. Every programmer has his own formatting rules, but if he works in a team, then the team rules. Keep to the formatting style that the teams agrees upon.

#### Objects and Data Structures

Hiding implementation is not just a matter of putting a layer of functions between the variables, it's about abstractions. Abstract interfaces allows its users to manipulate the essence of the data, without having to know its implementation.

Objects hide their data behind abstractions and expose functions that operate on that data. Data structure expose their data and have no meaningful functions. Objects and data structure are virtual opposites!

##### Procedual Shape

```java
  public class Square {
    public Point topLeft;
    public double side;
  }

  public class Rectangle {
    public Point topLeft;
    public double height;
    public double width;
  }

  public class Circle {
    public Point center;
    public double radius;
  }

  public class Geometry {
    public final double PI = 3.14;

    public double area(Object shape) throws NoSuchShapeException
    {
      if (shape instanceof Square) {
        Square s = (Square) shape;
        return s.side * s.side;
      }
      else if (shape instanceof Rectangle) {
        Rectangle r = (Rectangle) shape;
        return r.height * r.width;
      }
      else if (shape instanceof Circle) {
        Circle c = (Circle) shape;
        return PI * c.radius * c.radius
      }
      throw new NoSuchShapeException();
    }
  }
```

##### Polymorphic Shapes

```java
  public class Square implements Shape {
    private Point topLeft;
    private double side;

    public double area() {
      return side*side;
    }
  }

  public class Rectangle implements Shape {
    private Point topLeft;
    private double height;
    private double width;

    public double area() {
      return height * width;
    }
  }

  public class Circle implements Shape {
    private Point center;
    private double radius;
    public final double PI = 3.14

    public double area() {
      return PI * radius * radius;
    }
  }
```

> Procedual code (code using data structure) makes it easy to add new functions without changing the existing data structure. OO code, on the other hand, makes it easy to add new classes without changing existing functions.

In other words:

> Procedural code makes it hard to add new data structure because all the functions must change. OO code makes it hard to add new functions because all the classes must change.

#### Error Handling

Error handling is important, but if it obscures logic, it's wrong. Write Try-Catch-Finally Statement first, when you run the code in the try portion, you are stating that execution can abort at any point and then resume at the catch. Create informative error message and pass them along with your exceptions. Don't return null and avoid passing null into methods!

#### Boundaries

We want to control all software in our systems. This includes cleanly integrating foreign code like third-party libraries with the help of design patterns. One way can be creating a wrapper class that implements a interface that is tailored and constrained to meet the needs of the application. It's recommend to use learning tests when exploring third-party API. Code at the boundaries needs clear separation and tests that define expectations.

> It's better to depend on something you control than on something you don't control, lest it end up controlling you.

#### Unit Tests

Test Driven Development (TDD) asks us to write unit tests first, before writing any production code. The tests and the production code are written together, with the tests just a few seconds ahead of the production code. Consider the following three laws:

1. You may not write production code until you have written a failing unit test.
2. You may not write more of a unit test than is sufficient to fail, and not compiling is failing.
3. You may not write more production code than is sufficient to pass the currently failing test.

Keeping tests clean will allow the production code to evolve. The unit tests gives the ability to make sure that changes to the code base worked as expected. Tests preserve and enhance the flexibility, maintainability, and reusability of the production code. Creating clean tests is the same as creating clean code, it follows the same practices, expect it's in a different environment.

Clean tests follow **F.I.R.S.T.** acronym :

**Fast**: Tests should be fast.

**Independent**: Tests should not depend on each other.

**Repeatable**: Test should be repeatable in any environment.

**Self-Validating**: The tests should have a boolean output (pass or fail).

**Timely**: The tests need to be written in a timely fashion.

> Test code is just as important as production code.

#### Classes

The first rule of classes is that they should be small! With classes we count responsibilities. The name of the class should depend on the responsibility it has. The Single Responsibility Principle (SRP) states that classes should have one responsibility - one reason to change. We want our systems to be composed of many small classes, not a few large ones. Each small class encapsulates a single responsibility, has a single reason to change, and collaborates with a few others to achieve the desired system behaviors.

Classes should have a small number of instance variables. Each of the methods of a class should manipulate one or more of those variables. In general the more variables a method manipulates the more cohesive that method is to its class. When cohesion is high, it means that the methods and variables of the class are co-dependent and hang together as a logical whole. Maintaining cohesion results in many small classes.

#### Systems

The code base is similiar to cities, teams of people who manage particular parts of the city. Some of those people are responsible for the big picture, while others focus on the details. Remember that cities works with the help of levels of abstractions and modularity. Construction is a very different process from use. Create clean systems by applying design patterns, never forget to use the simplest thing that can possibly work.

#### Emergence

Here are four simple rules that will help make applying principles such as Single Responsibility Principle (SRP) and Dependency Injection Principle (DIP) easier. A testable system is important, writing simple and easy tests will make us think about better designs. Following a simple and obvious rule that says we need to have tests and run them continuously impacts our system's adherence to the primary Object Oriented (OO) goals of low coupling and high cohesion. Once we have a testable system, refactor to clean code. The fact that we have these tests eliminates the fear that cleaning up the code will break it.

1. Runs All the Tests
2. Contains no duplication
3. Expresses the intent of the programmer
4. Minimizes the number of classes and methods

Following the practice of simple design can and does encourage and enable developers to adhere to good principles and patterns that otherwise takes years to learn.

#### Smells and Heuristics

Here are a list of code smells!!

##### Comments

**C1: Inappropriate Comment**

**C2: Obsolete Comment**

**C3: Redundant Comment**

**C4: Poorly Written Comment**

**C5: Commented-Out Code**

##### Environment

**E1: Build Requires More Than One Step**

**E2: Tests Require More Than One Step**

##### Functions

**F1: Too Many Arguments**

**F2: Output Arguments**

**F3: Flag Arguments**

**F4: Dead Function**

##### General

**G1: Multiple Languages in One Source File**

**G2: Obvious Behavior Is Unimplemented**

**G3: Incorrect Behavior at the Boundaries**

**G4: Overridden Safeties**

**G5: Duplication**

**G6: Code at Wrong Level of Abstraction**

**G7: Base Classes Depending on Their Derivatives**

**G8: Too Much Information**

**G9: Dead Code**

**G10: Vertical Separation**

**G11: Inconsistency**

**G12: Clutter**

**G13: Artificial Coupling**

**G14: Feature Envy**

**G15: Selector Arguments**

**G16: Obscured Intent**

**G17: Misplaced Responsibility**

**G18: Inappropriate Static**

**G19: Use Explanatory Variables**

**G20: Function Names Should Say Whay They Do**

**G21: Understand the Algorithm**

**G22: Make Logical Dependencies Physical**

**G23: Prefer Polymorphism to If/Else or Switch/Case**

**G24: Follow Standard Conventions**

**G25: Replace Magic Number with Named Constants**

**G26: Be Precise**

**G27: Structure over Convention**

**G28: Encapsulate Conditionals**

**G29: Avoid Negative Conditionals**

**G30: Functions Should Do One Thing**

**G31: Hidden Temporal Couplings**

**G32: Don't Be Arbitrary**

**G33: Encapsulate Boundary Conditions**

**G34: Functions Should Descend Only One Level of Abstraction**

**G35: Keep Configurable Data at High Levels**

**G36: Avoid Transitive Navigation**

##### Java

**J1: Avoid Long Import Lists by Using Wildcards**

**J2: Don't Inherit Constants**

**J3: Contants versus Enums**

##### Names

**N1: Choose Descriptive Names**

**N2: Choose Names at the Appropriate Level of Abstraction**

**N3: Use Standard Nomenclature Where Possible**

**N4: Unambiguous Names**

**N5: Use Long Names for Long Scopes**

**N6: Avoid Encodings**

**N7: Names Should Describe Side-Effects**

##### Tests

**T1: Insufficient Tests**

**T2: Use a Coverage Tool!**

**T3: Don't Skip Trivial Tests**

**T4: An Ignored Test Is a Question about an Ambiguity**

**T5: Test Boundary Conditions**

**T6: Exhaustively Test Near Bugs**

**T7: Patterns of Failure Are Revealing**

**T8: Test Coverage Patterns Can be Revealing**

**T9: Tests Should be Fast**

> Clean code is not written by following a set of rules. Professionalism and craftmanship come from values that drive disciplines.
