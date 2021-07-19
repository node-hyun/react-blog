const app = require("./app");

const config = require("./config");
const { PORT } = config;

// app.listen("7000", () => {
//     console.log("hi");
// });

app.listen(PORT, () => {
    console.log(`Server is statred on ${PORT}`);
});

