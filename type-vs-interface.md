### Type Alias vs Interface in TypeScript: What Are the Differences and When will one over them?

**Introduction**

In TypeScript type and interface are used to define the structure of data. They help users to define what properties and types an object should have. At first glance, it may look like they are the same because both can do similar work. But there are some differences between them.

**1. Type Alias**

A type alias is used to give a name to any type. We can use it for strings, numbers, objects, unions, and many other types.

Example:
```
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Habib",
  age: 25,
};
```
Here, we created a type called User and defined its properties. Now we can use User whenever we need the same structure.

**2. Interface**

Interface is mainly used to define the structure of an object shape data. It tells us what properties an object should we have.

Example:
```
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Habib",
  age: 25,
};
```
Here, interface works almost the same as type alias. Both define the structure of our user object.

**3. Core Differences**

There are some important differences between Type Alias & Interface in typescript.

Extending: They Both can extend other structures, but they use different syntax.
```
interface Admin extends User {
  role: string;
}

type Admin = User & {
  role: string;
};
```
Union Types: Type alias supports union types directly, but interface does not.
```
type Payment = "cash" | "card" | "bkash";
```
Declaration Merging: Interface can be declared multiple times with the same name, and TypeScript combines them. Type alias does not support this.

**When Should We Choose One?**

We can use interface when working mainly with objects and when we want to extend object structures.

We can use type when working with union types, primitive types, or more complex type combinations.

If We need to allow consumers of your types to augment them, we must use an interface.


**Conclusion**

They both type alias and interface are useful in typeScript. They can do many similar things, but they also have some core differences. We don't need to worry too much about choosing the perfect one. We just need to understand how they work and use them based on our requirements.