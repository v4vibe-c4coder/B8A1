### Combining Union and Intersection Types in TypeScript

**Introduction**

In TypeScript, we can use Union (|) and Intersection (&) to combine different kind of types. Union means we can use one type or another type similar to or logical oparator. And Intersection means we need to combine all the properties from different types.

We can use both together in real projects. Let's understand with a simple payment example.

**Practical Example**

Suppose we are making a payment system where users can pay using either bKash or a card. Both payment methods have some common information, like amount and transaction ID. But they also have some different information.

First, let's create two types for payment methods.
```
type BkashPayment = {
  method: "bkash";
  phoneNumber: string;
};

type CardPayment = {
  method: "card";
  cardNumber: string;
};
```
Now we can use Union (|) to say that payment can be either bKash or card.

type PaymentMethod = BkashPayment | CardPayment;

Next, we create another type for the common information.

```

type PaymentInfo = {
  amount: number;
  transactionId: string;
};
```

Now comes the interesting part. We can combine these two types using Intersection (&).

type Payment = PaymentInfo & PaymentMethod;

What does it mean?

It means every payment must have amount and transactionId. Also, it must have either phoneNumber for bKash or cardNumber for card payment.

Let's create two objects:

```
const payment1: Payment = {
  amount: 500,
  transactionId: "TXN101",
  method: "bkash",
  phoneNumber: "01712345678",
};

const payment2: Payment = {
  amount: 1000,
  transactionId: "TXN102",
  method: "card",
  cardNumber: "123456789",
};
```

Both are valid because they follow our payment type structure.

**Conclusion**

So, basically, Union (|) gives us different options to provide, and Intersection (&) combines properties together. In this example, we used both to make a payment type where some information is common but the payment method can be different.