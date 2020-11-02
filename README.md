# Basic Math Operations
######Package developed as part of PUC-MG software architecture graduation program

This package does the basic four mathematical operations (sum, subtraction, multiplication and division).

The math module itself relies on a vanilla JS implementation of the Decorator design pattern to make the input 
validation logic common to all exported functions, whilst the specific operation methods augment the common logic with
their specific logic.

##Installation

`npm i basic-math-ops` 

##Usage

```javascript
const math = require('basic-math-ops/math')

math.sum(1, 1)
math.subtract(5, 2)
math.multiply(7, 3)
math.divide(8, 4)
```
