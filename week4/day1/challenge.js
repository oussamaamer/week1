let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};

displayGroceries();

const cloneGroceries = () => {
  let user = client;

  client = "OUSSAMA";

  console.log("user:", user);
  console.log("client:", client);

  let shopping = groceries;

  shopping.totalPrice = "35$";

  shopping.other.paid = false;

  console.log("shopping.totalPrice:", shopping.totalPrice);
  console.log("groceries.totalPrice:", groceries.totalPrice);

  console.log("shopping.other.paid:", shopping.other.paid);
  console.log("groceries.other.paid:", groceries.other.paid);
};
cloneGroceries();
