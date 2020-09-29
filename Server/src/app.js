const express = require('express');
const getAllMovesForPlayer = require('./utils/chessMoves');
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/getMove', (req, res) => {
    if (!!req.body && !!req.body.postion) {
        let { i, j } = req.body.postion;
        if (!isNaN(i) && !isNaN(j)) {
            let postions = getAllMovesForPlayer({ i, j });
            return res.send(JSON.stringify(postions));
        }
    }
    return res.send({ Error: 'please send Postion' });
});


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})