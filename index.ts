import * as express from "express";

export const app = express();

app.get(["/", "/:name"], (req, res) => {
    if (req.params.name !== undefined) {
        res.send(`Hello! And you too ${req.params.name}!`);
    } else {
        res.send("Hello!");
    }
});

// tslint:disable-next-line:no-console
app.listen(8080, () => console.log("Example app listening on port 8080!"));