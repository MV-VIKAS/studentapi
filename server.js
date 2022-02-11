const express = require("express");
const { PORT } = require("./config");

const {dbConnection } = require("./config/db")

const app = express(); //start express we need top level fun

const StudentRoute = require("./routes/student");
let StartServer = async () => {

    /*
    database connection start here */

    dbConnection();
    /*
    database connection ends here */



    /*!----------------------------MIDDLEWARE SECTION STARTS <HERE-------------------*/
    app.use(express.json());

    /*!----------------------------MIDDLEWARE SECTION ENDS <HERE-------------------*/

    /*=============LOAD ROUTE START HERE --------------------*/
    app.use("/api/students/", StudentRoute)
    /*=============LOAD ROUTE ENDS HERE --------------------*/


    //listen port

    app.listen(PORT, err => {
        if (err) throw err
        console.log("database created", PORT);
    })
}