# Advent of Code

This repository contains my solutions for [Advent of Code](https://adventofcode.com) 2021. I was going to keep everything in the repository from last year but things broke after upgrading, and there are all sorts of stuff that makes me cringe in there, so I decided to just archive that and start a new one. Please feel free to clone this and use it however you want (well, it's MIT-licensed anyway)!

## Table of Contents

-   [Installation](#installation)
-   [Creating a New Solution](#creating-a-new-solution)
-   [Running and Testing](#runing-and-testing)
    -   [Running a Single File](#running-a-single-file)
    -   [Getting The Solutions for a Challenge](#getting-the-solutions-for-a-challenge)
    -   [Running Tests for a Single Challenge](#running-tests-for-a-single-challenge)
-   [Fomratting](#formatting)

## Installation

The solutions are written in [TypeScript](https://www.typescriptlang.org/) under a [Node.js](https://nodejs.org) environment. Once the repository is cloned, installation can be done using either the [NPM](https://www.npmjs.com) or [Yarn](https://yarnpkg.com) package manager.

```sh
# Clone the repoisotry
git clone https://github.com/honmanyau/advent-of-code-2021

# Change to the cloned directory
cd advent-of-code-2021

# Install the required dependencies with NPM
npm install
```


## Creating a New Solution

There a `template` directory in `src` for getting started quickly with opinionated copypasta.

Example usage:

```sh
DAY=3 npm run new-day
```


## Running and Testing

The [Mocha](https://mochajs.org) test framework is used to write the tests in this repository. A few primitive shell scripts are set up in [`package.json`](./package.json) for excuting tests.

### Getting Solutions for a Challenge

The code that outpus the solutions contained in each challenge's `index.ts` file only runs when the `SOLVE` environment variable is set to `true`. Use the `solve` script to get the solutions for a challenge:

```sh
# In the root directory
DAY=1 npm run solve
```

### Running Tests for a Single Challenge

```sh
# In the root directory
DAY=1 npm run test
```

### Running a Single File

You probably don't need this unless you want to do something strange and weird.

```sh
npm run ts-node src/day-1/index.ts
```


## Formatting

For those who need everything pretty and consistent (this script write formatting changes without asking for confirmation):

```sh
npm run format
```
