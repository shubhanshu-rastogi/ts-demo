// Overload signatures
function greet(name: string): string;
function greet(age: number): string;

// Implementation
function greet(input: string | number): string {
  if (typeof input === 'string') {
    return `Hello, ${input}!`;
  } else {
    return `You are ${input} years old.`;
  }
}

// Usage
console.log(greet("Alice")); // Hello, Alice!
console.log(greet(30));      // You are 30 years old.