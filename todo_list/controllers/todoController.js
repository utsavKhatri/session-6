import express from "express";
import { Todo } from "../models/todoModel.js";

/* Exporting the function to the app.js file. */
export default function (app) {
  
  app.use(express.urlencoded({ extended: true }));

  /* This is a route that is used to get the data from the database and pass it to the view. */
  app.get("/", (req, res) => {
    // Getting the data from the database and passing it to the view.
    //res.render("todo")
    Todo.find({})
      .then((data) => {
        res.render("todo", { todos: data });
      })
      .catch((err) => {
        console.log("error",err);
      });
  });

  /* Saving the data to the database. */
  app.post("/todo", (req, res) => {
    let newTodo = Todo(req.body)
      .save()
      .then((response) => {
        res.redirect("/");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  /* Deleting the item from the array. */
  app.delete("/todo/:id", (req, res) => {
    /* Finding the item in the database and removing it. */

    Todo.findByIdAndDelete(req.params.id)
      .then((response) => {
        res.json({ redirect: "/" });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).render('404');
      });
  });

  /* This is a middleware that is used to render the 404 page when the user tries to access a page that does not exist. */
  app.use((req, res, next) => {
    res.status(404).render("404");
    next();
  });


}
