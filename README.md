# braziliandocs.core

## Description

A set of classes to help handle Brazilian's documents like CPF.

Now, it provides:

- A Cpf type (with digit verification);
- A function which validates if the CPF is valid;

## How to use it

```bash
$ npm i ts-brazildocs.core
```

```TypeScript
import { Cpf } from 'ts-brazildocs.core'

// You can create it using a number
const cpfFromNumber = new Cpf(19548270080)

// You can create it using a string
const cpfFromString = new Cpf("19548270080")

const cpf = cpfFromString || cpfFromNumber;

// you can retrive as string with no format
console.log(cpf.toString()) // output: "19548270080"

// you can retrive as number with no format
console.log(cpf.asNumber()) // output: 19548270080

// you can retrive as string FORMATTED
console.log(cpf.toFormattedString()) // output: 195.482.700-80
```

### How to run this repo

```bash
$ npm install
```

#### Build

```bash
$ npm run build
```

#### Test

```bash
$ npm run tests
```

## Requirements

- NodeJS
- npm
