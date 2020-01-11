var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    populateList();
    selectProduct();
});

function populateList() {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "input",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(res[i].id + " | " + res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
                        }
                        return choiceArray;
                    },
                    message: "Please select an item id?"
                }
            ])

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].item_id + " | " + res[i].product_name + " | " + res[i].price)
        }
    })

}

