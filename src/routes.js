const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

const routes = [
  // /
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!, This is project cloud website!";
    },
  },
  // create date (POST)
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  //get all
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  //detail data
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookByIdHandler,
  },
  //update
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookByIdHandler,
  },
  //delete
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = { routes };
