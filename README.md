# Skill Assessment Exercise: Full-Stack Developer

This assessment is designed to evaluate your proficiency in various full-stack development skills, including:

**Databases:** SQL, MySQL
**Front-end Framework:** Backbone.js
**Back-end Technologies:** Node.js, Express.js, PHP
**Version Control:** Git, GitHub
**Software Design Principles:** SOLID principles
**Instructions:**

## The task

**Imagine you're building a simple e-commerce application for selling books.**

### Part 1: Database Design (SQL & MySQL)

Using your preferred tool (MySQL workbench, pgAdmin, etc.), design an Entity-Relationship Diagram (ERD) for the following entities:
Book (title, author, price, ISBN, stock)
User (name, email, password)
Order (user_id, book_id, quantity, order_date)
Write SQL queries to perform the following actions:
Create tables based on your ERD.
Insert sample data for at least 5 books and 3 users with orders.
Select all books from the database.
Filter books by price (e.g., select books priced between $10 and $20).
Update a book's stock quantity after an order is placed.

### Part 2: Front-end with Backbone.js

Create a simple Backbone.js application with a view to display a list of books from the database.
Implement functionality to filter books by price range using user input.

### Part 3: Back-end with Node.js & Express.js (or PHP)

Set up a Node.js/Express.js (or PHP) server to handle API requests for the book data.
Create API endpoints to:
Get all books
Filter books by price range (matching the front-end functionality)

### Part 4: Version Control with Git & GitHub

Initialize a Git repository for your project.
Stage and commit your code regularly with descriptive commit messages.
Push your code to a GitHub repository.

### Part 5: SOLID Principles

Briefly explain how you would apply the following SOLID principles to your code:

Single Responsibility Principle
Open/Closed Principle
Liskov Substitution Principle
Interface Segregation Principle
Dependency Inversion Principle
Evaluation:

Your code, database design, explanations, and GitHub repository will be reviewed to assess your understanding and practical application of the mentioned skills.

### Bonus Points:

Implement user authentication and authorization in the application.
Add functionalities for adding new books and managing orders.
Deploy your application to a platform like Heroku or AWS.
