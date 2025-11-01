"use client";

// Every page.tsx or .jsx at least should contain one default export
function Home() {
  return (
    <div className="">
      <h1 className="text-center text-4xl text-blue-600">Welecome to NextJs</h1>
      ;
    </div>
  );
}
export default Home;

/**
 * Typescript: It’s a superset of JavaScript, meaning it builds on top of JavaScript by adding static typing and modern features that make development more robust and maintainable.
 *
 */

let name: string = "Abdallah"; // strinbg type
// name = 23; // It throws error because name can accapt only string type

const PI: number = 3.14; // const number with type number
// PI = 3.5; //

let value: any; // it accepts any value type but is it better to avoid it
value = "Any values";
value = 34; // ok
value = 3.5; //ok
console.log(value);

let v: number = 10;
console.log(v);

// User Defined Types
/**
 * 1. Interface
 * 2. type
 *
 */
// Interface Example
interface User {
  //required properties
  name: string;
  age: number;
  //Optional props
  city?: string;
  //Union types
  phone: number | string | null;
}

// Create Object

// this is packed style
const user: User = {
  name: "Abdallah",
  age: 23,
  city: "HR",
  phone: "25263",
};

//access Object by dot(.) operator
console.log(user.name);
console.log(user.age);
console.log(user.city);
console.log(user.phone);

// Unpackaged style
const {
  name: name2,
  age,
  city,
  phone,
}: User = {
  name: "Abdallah",
  age: 23,
  city: "HR",
  phone: "25263",
};
// we can access directly: remember I renamed name for clash of name property
console.log(name2);
console.log(age);
console.log(city);
console.log(phone);
