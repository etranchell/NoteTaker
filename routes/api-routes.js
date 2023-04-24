const router = require('express').Router();
const fs = require('fs');

router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('develop/db/db.json', 'utf-8'));
    res.json(dbJson);
});

router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('develop/db/db.json', 'utf-8'));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
    };
    dbJson.push(newFeedback);
    fs.writeFileSync('develop/db/db.json', JSON.stringify(dbJson));
    res.json(dbJson);
});

module.exports = router;