const express = require("express");
const app = express();
const PORT = "8001";
const path = require("path");
const { restrictToLoggedInUserOnly, checkAuth } = require("./middleware/auth")
const cookieparser = require("cookie-parser");
const URL = require("./models/url");
const { connectToMongoDB } = require("./connect");

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => console.log("MongoDB connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());

const staticRoute = require("./routes/staticRouter");
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");

app.get("/test", async (req, res) => {
    const allUrls = await URL.find({});
    return res.render("home", {
        urls: allUrls,
    });
})

app.use("/", checkAuth, staticRoute);
app.use("/url", restrictToLoggedInUserOnly, urlRoute);
app.use("/user", userRoute);


app.listen(PORT, () => { console.log(`Server connectrd at port ${PORT}`) });