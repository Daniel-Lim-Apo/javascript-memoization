# javascript-memoization
javascript memoization tutorial - Examples of javascript memoization
By Daniel Lim-Apo


# JavaScript Memoization

Memoization is a programming technique used to optimize functions by caching their results. This repository provides a comprehensive guide to understanding and implementing memoization in JavaScript.

## Table of Contents

- [Introduction](#introduction)
- [How Memoization Works](#how-memoization-works)
- [Benefits of Memoization](#benefits-of-memoization)
- [Implementing Memoization in JavaScript](#implementing-memoization-in-javascript)
  - [Basic Example](#basic-example)
  - [Recursive Example: Fibonacci Sequence](#recursive-example-fibonacci-sequence)
- [When Not to Use Memoization](#when-not-to-use-memoization)
- [References](#references)

## Introduction

Memoization is a technique that involves storing the results of expensive function calls and returning the cached result when the same inputs occur again. The term originates from "memorandum," meaning "to remember."

## How Memoization Works

1. **Function Call**: Invoke a function with specific inputs.
2. **Cache Check**: Before executing the function's logic, check if the result for these inputs exists in the cache.
3. **Return Cached Result**: If the result is cached, return it immediately.
4. **Compute and Cache**: If not, compute the result, store it in the cache, and then return it.

## Benefits of Memoization

- **Performance Improvement**: Reduces redundant computations, leading to faster execution times.
- **Efficiency**: Particularly useful for functions with heavy or repetitive calculations.
- **Simplicity**: Easy to implement and integrate into existing codebases.

