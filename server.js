require('dotenv').config();
const express = require ('express');
const path = require('path');

const menusRouter = require('./src/routes/menus_routes');
const { title } = require('process');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', menusRouter);

app.use((req, res, next) => {
    res.status(404).render('404', { title: '404 - Page Not Found' })
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.render(500)
});

app.listen(PORT, () => {
    console.log(`Server keyrir a http://localhost:${PORT}`);
    console.log('Stop with ctrl + C');
});