const express = require ('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/Menu', (req, res) => {
    res.render('menu', { title: 'Menu' });
});

app.listen(PORT, () => {
    console.log(`Server keyrir a http://localhost:${PORT}`);
    console.log('Stop with ctrl + C');
});