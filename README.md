# E-Commerce App

## Table of Contents

## Description

In this application I built the backend for an E-commerce app using Node.js and Sequelize. I configured a working Express.js API to use Sequelize to interact with a MySQL database. The app offers details on categories of products, product and tag details. This app also uses `dotenv` package to store sensitive information like username and password to access mySQL database.

## Demo Video

Click [here](https://drive.google.com/file/d/17xMHZYOceY-o3fpgROP9cC9sCNyBzPgB/view) to view the demo video.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Technical steps

- added `category`, `product` & `tag` models
- created `belongsTo`, `belongToMany` associations between the models
- added controller functions for `API` routes, which included `get all categories`, `get category by id`, `create`, `update` and `delete`
- synced Sequelize to mySQL database
-

## Getting Started

### Installation

To run the application, you will need to have [node.js](https://nodejs.org/en/) and [PostMan](www.postman.com) installed.

#### Clone repository

`git clone git@github.com:lianavaleria15/business-note-taker.git`

#### Install packages

- use `npm init -y` to install package.json

### Usage

- run `npm run start` in the terminal to connect to the server

#### Seed the data

- run `npm run seed` in the terminal to seed data to your database so that you can test your routes

#### Test requests

- run `GET`, `POST`, `PUT` & `DELETE` requests using Postman.

## Packages Used

- Node
- Sequelize
- mySQL
- Dotenv

## Questions

If you have any questions related to the application or repository, would like to collaborate or open an issue, please use the contact details below:

- 👩 [Liana Laurentiu](https://github.com/lianavaleria15)
- 📧 [liana.valeria15@gmail.com](mailto:liana.valeria15@gmail.com)
