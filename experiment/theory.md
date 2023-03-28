### Theory

**Polymorphism:**

-  ability by which, we can create functions or reference variables which behaves differently in different programmatic context.

-  Types of Polymorphism

    - Coercion: a single abstraction serves several types through implicit type conversion (In Java, automatic conversion from say int to double , double to int, etc…)

    - Overloading: a single identifier denotes several abstractions –Method and operator Overloading (Static Polymorphism in Java)

    - Parametric: an abstraction operates uniformly across different types (Generics in Java)

    -   Subtype: a type can serve as another type's subtype (Runtime Polymorphism in Java)

**Subtype Polymorphism in Java:**

-  Subtype polymorphism, often referred to as simply polymorphism or run-time polymorphism in the context of object-oriented programming, is the ability to create a variable, a function, or an object that has more than one form.” – Wikipedia

-  Subtyping is a relation on types allowing values of one type to be used in place of values of another.

-  An instance of a subclass can appear wherever an instance of a superclass is expected.

-  The conversion of a subtype to one of its supertypes is called widening. The conversioning of a supertype to one of its subtypes is called narrowing.

- Widening happens automatically during an assignment. Nothing special is required. This is also typically called upcasting.

-  Narrowing requires a proper explicit cast, otherwise the compiler will complain. This is an example of Java’s very strong typing. It is your best friend. Narrowing is also known as “downcasting”.

**Upcasting:**

-  If the reference variable of Parent class refers to the object of Child class, it is known as upcasting.

![fig1](images/images/fig1.jpg)

- Example:

    class A{}
    
    class B extends A{}

- Usage form:

    A a=new B();//upcasting

- Example:

![fig2](images/images/fig2.jpg)

After upcasting Splendor to Bike,

– you cannot call Splendor-specific methods, such as a horn() method, because Splendor-specific methods are not part of Shape's interface.

– Losing access to subtype features after shrinking a subclass to its superclass seems pointless, but is necessary for achieving subtype polymorphism

- Connecting a method call to the method body is known as binding.There are two types of binding:

-  Static Binding (also known as Early Binding).

-  Dynamic Binding (also known as Late Binding).

-  Static Binding – Object type resolved by compiler. If there is any private, final or static method in a class, there is static binding.

-  Dynamic Binding - Object type resolved at runtime

**Downcasting and instanceof:**

-  Java’s instanceof operator is used to test whether the object is an instance of the specified type (class or subclass or interface)

    -  also known as type comparison operator because it compares the instance with type.

    - It returns either true or false.

- Subclass type refers to the object of Parent class.

    - If we perform it directly, compiler gives Compilation error.
    eg. Dog d=new Animal();//Compilation error

    - If you perform it by typecasting, ClassCastException is thrown at runtime. eg. Dog d=(Dog)new Animal();
    //Compiles successfully but ClassCastException is thrown at runtime

    -  But if we use instanceof operator, downcasting is possible.
    -  Example:

![fig3](images/images/fig3.jpg)

**Abstract class:**

Superclasses are created through the process called "generalization". Often, the superclass does not have a "meaning" or does not directly relate to a "thing" in the real world. It is an artifact of the generalization process. Due to this, abstract classes cannot be instantiated. They act as place holders for abstraction.

An Abstract class is a conceptual class. An Abstract class cannot be instantiated – objects cannot be created. Abstract classes provide a common root for a group of classes, nicely tied together in a package. Every abstract class increases the complexity of your design.

Syntax of a abstract class:

```
abstract class className{
    abstract Type MethodName1();
    ...
    ...
    Type Method2()
    {
        //method body
    }
}
```
Rules of abstract class:

1. When a class contains one or more abstract methods, it should be declared as abstract class.

2. The abstract methods of an abstract class must be defined in its subclass.

3. We cannot declare abstract constructors or abstract static methods.


**Method overriding:**

-  Declaring a method in subclass which is already present in parent class is known as method overriding

-  Implementing a method with same signature but different body in a any derived class which is same as parent class is method overriding.

-  Method overriding is used to provide specific implementation of a method that is already provided by the super class

-  Method overriding is used for runtime polymorphism.

-  Rules for method overriding:

    -  Method must have same name as in the parent class.

    -  Method must have same parameter as in the parent class.

    -  Must be IS-A relationship (inheritance).

    - A subclass within the same package as the instance’s superclass can override any superclass method that is not declared private or final.

    - A subclass in a different package can only override the non-final methods declared public or protected.

    -  An overriding can throw any uncheck exceptions, regardless of whether the overridden method throws exception or not.

![fig4](images/images/fig4.jpg)

 
Method Overriding in dynamic method dispatch:

Dynamic method dispatch is a technique which enables us to assign the base class reference to a child class object.

Consider an example where parent class reference is assigned to a child class object:



![fig7](images/images/fig7.jpg)

**Interfaces:**

Interface is a conceptual entity similar to a Abstract class.

- But can contain only constants (final variables) and abstract method (no implementation) - Different from Abstract classes.

-  It is used when several classes share a common interface.

-  Class(es) implement the interface.

-  Protocol for classes that completely separates specification/behaviour from implementation.

-  One class can implement many interfaces.

-  One interface can be implemented by many classes.

-  By providing the interface keyword, Java allows you to fully utilize the "one interface, multiple methods" aspect of polymorphism.

-  Interfaces are designed to avoid this problem.

    -  They disconnect the definition of a method or set of methods from the
     inheritance hierarchy.

    -  Since interfaces are in a different hierarchy from classes, it is
     possible for classes that are unrelated in
      terms of the class hierarchy to implement the same interface.

-  Syntax to define an interface:

![fig8](images/images/fig8.jpg)



