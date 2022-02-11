const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const server = require("http").Server(app);

//=========================================================== MIDDLEWARE ===========================================================//

// Protection ----------------------------------------------------------------------------------------------------------------------//
// x-frame-options against clickjacking
app.use((req, res, next) => {
    res.setHeader("x-frame-options", "deny");
    next();
});

// Compression ---------------------------------------------------------------------------------------------------------------------//
app.use(compression());

// JSON Setup ----------------------------------------------------------------------------------------------------------------------//
app.use(express.json());

// Serve client, public folder -----------------------------------------------------------------------------------------------------//
app.use(express.static(path.join(__dirname, "..", "client", "public")));

// =================================================================================================================================//
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

server.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
