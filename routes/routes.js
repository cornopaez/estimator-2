const express = require('express');
const router = express.Router();

module.exports = router;

router.get('*', function (req, res) {
	// Load landing page
	res.sendFile('index.html', {root: "./" });
});