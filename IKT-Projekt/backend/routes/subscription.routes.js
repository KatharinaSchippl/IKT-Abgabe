const express = require('express');
const webpush = require('web-push');
const router = express.Router();

const publicVapidKey = 'BBXevVLKWBby6Kfl_clQ_9tWi-GJJA1kAeLX1XlMorkFiBWTd-IPSpuAFwxLvufy2tvPaxvpZjDSKnH-4ZM3Zng';
const privateVapidKey = 'Jq-eBwzAqQz8Ck-_wdSipBEuVzkuVBvf6EVf-KTuODg';

router.post('/', async(req, res) => {
    const subscription = req.body;
    console.log('subscription', subscription);
    res.status(201).json({ message: 'subscription received'});

    webpush.setVapidDetails('mailto:freiheit@htw-berlin.de', publicVapidKey, privateVapidKey);
});

module.exports = router;
