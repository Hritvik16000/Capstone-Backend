const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/homes", require("./routes/homes"));
app.use("/guests", require("./routes/users"));
// app.use("/hosts", require("./routes/hosts"));
app.use("/bookings", require("./routes/bookings"));

app.get("/", (req, res) => {
  res.send(`
    <h1> Airbnb Clone </h1>
    `);
});

let dblink = "mongodb+srv://Hritvik16000:Pjmarryme1234@cluster0.7ldaiie.mongodb.net/?retryWrites=true&w=majority"
// mongoose
// .connect(dblink)
// .then(function(){
//     console.log("connected")
// }).catch(function(err){
//     console.log("error", err)
// });

// DB Config
// const uri = config.get("mongodb://localhost:27017");

// Connect to Mongo
mongoose
  .connect(dblink, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("database connected!"))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
