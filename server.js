const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 5000;

const records = [{
    id: 1,
    recordName: 'React ahaha',
    artistName: 'Huy',
    description: 'mot 2 ba bon 2 2 ba bon'
}, {
    id: 2,
    recordName: 'building app ahha',
    artistName: 'Retro ver',
    description: 'copy from internet'
}];

app.get('/api/records', (req, res) => {
    res.send(records);
});

app.post('/api/records', (req,res) => {
    const newRecord = {
        id: records.reduce((acc,item) => {
            return item.id > 0 ? item.id : acc;
        }, 0) + 1,
        ...req.body,
    };
    records.push(newRecord);
    res.send(newRecord);

})

app.listen(port, () => console.log(`Server listening on port ${port}`))
