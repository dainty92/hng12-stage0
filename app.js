const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        email: "estheradexdainty@gmail.com",
        current_datetime: new Date().toISOString().split('.')[0] + 'Z',
        github_url: "https://github.com/dainty92/hng12-stage0",
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
