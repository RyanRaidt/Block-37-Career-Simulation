const express = require("express");
const app = express();

app.use(express.json());

const routes = [
  {
    method: "post",
    path: "/api/auth/register",
    message: "This will handle user registration.",
  },
  {
    method: "post",
    path: "/api/auth/login",
    message: "This will handle user login.",
  },
  {
    method: "get",
    path: "/api/auth/me",
    message: "This will return the current logged-in user.",
  },
  { method: "get", path: "/api/items", message: "This will fetch all items." },
  {
    method: "get",
    path: "/api/items/:id",
    message: "This will fetch details for item with ID: :id.",
  },
  {
    method: "get",
    path: "/api/items/:id/reviews",
    message: "This will fetch reviews for item with ID: :id.",
  },
  {
    method: "post",
    path: "/api/items/:id/reviews",
    message: "This will create a review for item with ID: :id.",
  },
  {
    method: "get",
    path: "/api/reviews/me",
    message: "This will fetch all reviews written by the logged-in user.",
  },
  {
    method: "put",
    path: "/api/users/:userId/reviews/:id",
    message: "This will update review with ID: :id for user with ID: :userId.",
  },
  {
    method: "delete",
    path: "/api/users/:userId/reviews/:id",
    message: "This will delete review with ID: :id for user with ID: :userId.",
  },
  {
    method: "post",
    path: "/api/items/:itemId/reviews/:id/comments",
    message:
      "This will create a comment for review with ID: :id on item with ID: :itemId.",
  },
  {
    method: "get",
    path: "/api/comments/me",
    message: "This will fetch all comments written by the logged-in user.",
  },
  {
    method: "put",
    path: "/api/users/:userId/comments/:id",
    message: "This will update comment with ID: :id for user with ID: :userId.",
  },
  {
    method: "delete",
    path: "/api/users/:userId/comments/:id",
    message: "This will delete comment with ID: :id for user with ID: :userId.",
  },
];

routes.forEach(({ method, path, message }) => {
  app[method](path, (req, res) => res.json({ message }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
