# Server Testing
Topics:
  * API Specification Design
  * Test Driven Development
  * Async Testing with Mocha

## Description
Up to this point you've learned about client side testing, but now we're going to break you into the world of testing an API. The flow of this project will be to design your own API specification, write tests for that API, and then build out that API. What you will gain from this is a sense of common practices for building a maintainable API.

## Setting up the Project
- Run `npm install --save express body-parser`.
- Run `npm install --save-dev mocha chai chai-http`.

## Instructions
For this project you will need to implement a back-end application from scratch for a Veterinarian's Office. Imagine you're tasked by your local vet to build a Client Management System for all of the animals that come in and out of his/her office. Now that you have the skills to do this, and you know that it is going to be project that someone else may have to maintain later on, you're going to really have to think about how your data is going to look and how your app is going to function. The way to do this is to thoroughly plan out each part of your application.

### API Design
* We want you to take a step back and actually come up with an API design specification for your application. 
* Create an `api_specification.md` file that you will use to create a your spec.
* You're not going to need to worry about designing any Schema until you get to the Extra credit so don't worry about that right away. 
* You will need to think about the type of data each client should have in the vet's office. Because this is a RESTful API you'll need to have at least one of each of these, POST, GET, PUT and DELETE endpoint. After that you can get as creative as you'd like. 
#### HINT - Your data could be thought of like this.
* i.e. Each client needs a `name`, some sort of `unique ID` (because Mongo isn't doing this for you until the extra credit, you'll have to think about how to implement this yourself), a `species`, some sort of `'visit' timestamp`, and an `owner` with a `name`, `address`, `phone` `number` and `optional email`. Ask yourself, what does all of this information need to look like.
  * [Tips and tricks for writing a Markdown File](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) 

### Writing tests for your API End points
* Write your tests to fail first. Now that you have a specification designed for your API you can start to write your tests. Create a directory called tests.

### Crafting your API

### Extra Credit
* Add a data persistence layer mongodb. You can work backwards from your specification and build out a Schema for your `clients` and their `owners`.
* You'll want to create your `data` directory in order to save your data to your local project as opposed to saving it to your hard drive.
