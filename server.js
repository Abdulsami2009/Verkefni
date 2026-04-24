const express = require ('express');
const path = require('path');

const menusRouter = require('./src/routes/menus_routes');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', menusRouter);




app.use((err, req, res, next) => {
    console.error(err.stack);
    res.render(500).send('Internel Server Error')
});

app.listen(PORT, () => {
    console.log(`Server keyrir a http://localhost:${PORT}`);
    console.log('Stop with ctrl + C');
});