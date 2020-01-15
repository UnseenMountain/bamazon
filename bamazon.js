var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "starwars2019",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    populateList();
    
});

function populateList() {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

            // var displayTable = new Table ({
            //     head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
            //     colWidths: [10,25,25,10,14]
            // });
            // for(var i = 0; i < res.length; i++){
            //     displayTable.push(
            //         [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].Stock_quantity]
            //         );
            // }
            console.table(res)
            
            purchasePrompt();
        
    })

}

function purchasePrompt() {
    inquirer.prompt([
        {
            name: "productID",
            type: "input",
            message: "Please input a product ID." 
        },
        
        {
            name: "Product Quantity",
            type: "input",
            message: "How many items do you want to purchese?" 
        }
    ]).then(function(answers){
        var quantityNeeded = answers.Quantity;
        var IDrequested = answers.ID;
        purchaseOrder(IDrequested, quantityNeeded)
    });
};

function purchaseOrder(ID, amtNeeded){
    connection.query('Select * from products WHERE item_id = ' + ID, function(err, res){
        if(err) {console.log(err)};
        if(amtNeeded <= res[0].Stock_quantity){
            var totalCost = res[0].price * amtNeeded;
            console.log("Congradulations your order is in stock");
            console.log("Your Total cost will be " + amtNeeded + res[0].product_name + totalCost + "thankyou!")
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amtNeeded + "WHERE item_id = " + ID);
		} else{
			console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
		};
		
    })
}