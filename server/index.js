const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;
const { mogoUrl } = require("./keys");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("./models/User");
require("./models/Order");
const requireToken = require("./middleware/requireToken");

const authRoutes = require("./routes/authRoutes");
const mail = require("./routes/mail");
const Setting = require("./routes/Setting");
const add = require("./routes/Addorder");
const email = require("./routes/Email");
const DEL = require("./routes/Remove");
const orderRoutes = require("./routes/order");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(authRoutes);
app.use(mail);
app.use(Setting);
app.use(add);
app.use(DEL);
app.use(orderRoutes);
app.use(email);
mongoose.connect(mogoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo ");
});

mongoose.connection.on("error", (err) => {
  console.log("this is error", err);
});

app.get("/", requireToken, (req, res) => {
  res.send({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    phone: req.user.phone,
    adress: req.user.adress,
  });
});

app.listen(PORT, () => {
  console.log("server running " + PORT);
});
