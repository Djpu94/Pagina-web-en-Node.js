const express = require('express');
const router = express.Router();

//rutas
router.get('/', (rep, res) => {
    res.render('index.html', {title:'Primera Pagina Web'});
});

router.get('/contact', (rep, res) => {
    res.render('contact.html', {title:'Contact Page'});
});

module.exports = router;