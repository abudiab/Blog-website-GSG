import express from "express";
const PORT = 5500;
const app = express();

app.unsubscribe(express.json());

app.listen(PORT, () => {
  console.log(`Dancing on port ${PORT}`);
});
