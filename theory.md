# To Implement Standard Patterns of Object Creation

## Theory

**Creational Patterns** provide object creation mechanisms that increase flexibility and reuse of existing code. Everyone knows that `new` keyword is used to create an object. Sometimes, the nature of the object must be changed according to the nature of the program. In such cases, we must get the help of creational design patterns to provide more general and flexible approach.

Consider the following creational patterns:

---

## Factory Pattern

**Factory** is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.

### Need for Factory Pattern

- When a class doesn't know what sub-classes will be required to create  
- When a class wants that its sub-classes specify the objects to be created  
- When the parent classes choose the creation of objects to its sub-classes  

It promotes loose-coupling by eliminating the need to bind application-specific classes into the code.

Say you have a class hierarchy of the form:

![8-1](images/images/8-1.png)

Now creating objects through a factory class as follows:

![8-2](images/images/8-2.png)

The demo class can be inserted to instantiate the different shapes:

![8-3](images/images/8-3.png)

The class `Shape`, `Circle` and `Square` are designed as follows:

![8-4](images/images/8-4.png)

![8-5](images/images/8-5.png)

![8-6](images/images/8-6.png)

![8-7](images/images/8-7.png)

The class `ShapeFactory` and `ShapeDemo` are designed as follows:

![8-8](images/images/8-8.png)

![8-9](images/images/8-9.png)

---

## Singleton Pattern

**Singleton** pattern makes sure that there is only one instance of an object created at any point.

Singleton `Shape` class provides a static method to get its static instance to the outside world.

![8-10](images/images/8-10.png)

![8-11](images/images/8-11.png)

---

## Builder Pattern

**Builder Pattern**: A Builder class builds the final object step by step. This builder is independent of other objects.

![8-12](images/images/8-12.png)

![8-13](images/images/8-13.png)

![8-14](images/images/8-14.png)

![8-15](images/images/8-15.png)

![8-16](images/images/8-16.png)

![8-17](images/images/8-17.png)

![8-18](images/images/8-18.png)