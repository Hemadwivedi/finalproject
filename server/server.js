const path = require('path');
const express = require('express');
const Sequelize = require('sequelize');

const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "build")));
  }
app.use(express.urlencoded({extended: true}));
app.use(express.json());



// for loging
const passport = require("./config/passport");
const session = require("express-session");
app.use(session({secret: "hemashirleyeti", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

//TODO delete later now dont want to login every time
app.use((req, res, next) => {
    db.User.findByPk(3)
        .then(user => {
            req.user = user.dataValues;
            next();
        }).catch(e => console.log(`error ${e}`));
});

//routing

const loginRouts = require("./routes/login-routes");
const bookRoutes = require("./routes/book-routes");
const userRoutes = require("./routes/user-routes");
const cartRoutes = require("./routes/cart-routes");
const blogCommentRoute = require("./routes/blog-comment-route");

app.use(loginRouts);
app.use('/api/user', userRoutes);
app.use('/api/book', bookRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/blog/', blogCommentRoute);

//Here is association (relation)
const db = require("./models");
// one user can have many book
db.User.hasMany(db.Book);
db.Book.belongsTo(db.User, {constraints: true, onDelete: 'CASCADE'});

// one user will have only one cart
db.User.hasOne(db.Cart);
db.Cart.belongsTo(db.User);

//in one cart we can have many book
db.Cart.belongsToMany(db.Book, {through: db.CartItem});

// one book can belong to many cart
db.Book.belongsToMany(db.Cart, {through: db.CartItem});


//Server start
const PORT = process.env.PORT || 8080;
db.sequelize.sync().then(result => {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    })
});