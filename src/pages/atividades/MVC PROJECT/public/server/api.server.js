const express = require("express");
const bodyParse = require('body-parser')

const app = express();

const server = {
  on: () => {
    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({extended: true}));
    app.use(express.static("/"));

    const port = process.env.port || 7000;

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  },
};

export {server}