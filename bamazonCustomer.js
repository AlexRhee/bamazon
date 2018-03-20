var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

var idHolder = [];

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected as ID :" + connection.threadId + "\n");
  readProducts();
  chooseProducts();
});

function chooseProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    inquirer.prompt([{
      name: "id",
      type: "input",
      message: "Enter product ID #"
    },
    {
      name: "quantity",
      type: "input",
      message: "How many units would you like to purchase?"
    }
    ]).then(function (answer) {
      console.log(res.length);
      if (answer.id <= res.length || answer.id === NaN || answer.id < 0) {
        console.log("good")

        function updateProduct() {
          console.log(answer.quantity)
          console.log(res[answer.id - 1].stock_quantity)

          if ((answer.quantity > res[answer.id - 1].stock_quantity) || answer.quantity === NaN || answer.quantity < 0) {
            console.log("Insufficient stock for your purchase.")
          }
          else {
            console.log("Purchasing " + res[answer.id - 1].product_name);
            console.log("Quantity: " + answer.quantity);
            console.log("Total : $" + (answer.quantity * res[answer.id - 1].price))
            connection.query("UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: res[answer.id - 1].stock_quantity - answer.quantity
                },
                {
                  item_id: answer.id
                }
              ],
              function (err, res) {

                connection.end();

              }
            );
            //update();
          }
        }
        updateProduct();
      }
      else {
        console.log("Invalid ID #. Please try again.")
        chooseProducts();
      }
    })
  })
}

function readProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("Items available:")
    console.log("-------------------------")
    for (i = 0; i < res.length; i++) {
      console.log("Item ID: " + res[i].item_id);
      console.log("Item: " + res[i].product_name);
      console.log("Department: " + res[i].department_name);
      console.log("Price: $" + res[i].price);
      console.log("Stock left: " + res[i].stock_quantity);
      console.log("-------------------------")
      idHolder.push(res[i]);
    }


  });
}




