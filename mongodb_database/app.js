const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/user_management_db")
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ message: err.message }));
});

app.post("/users", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then((newUser) => res.status(201).json(newUser))
    .catch((err) => res.status(400).json({ message: err.message }));
});

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const updateData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  User.findByIdAndUpdate(userId, updateData, { new: true })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ message: "user not found" });
      }
      res.json(updatedUser);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
});
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  User.findByIdAndRemove(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }
      res.json({ message: "user deleted successfully" });
    })
    .catch((err) => res.status(400).json({ message: err.message }));
});
app.listen(port, () => {
  console.log("server is live http://localhost:4000");
});