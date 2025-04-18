import express from "express";

const app = express();
const PORT = 80;

app.get("/", (req, res) => {
  res.send("Welcome to the Express server! CodingWithSayantan");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
