const menuService = require('../lib/menuService');

async function index(req, res) {
    const menus = await menuService.getAllMenus();
    res.render('index', { title: 'Menu', menus });
}

async function detail(req, res) {
    const id = req.params.id;
    const menu = await menuService.getMenuById(id);
    
    console.log('Waiting for id;', id);
    if (!menu) {
        return res.render('404', { title: 'Menu not Found'});
    }


    res.render('menu-detail', { title: 'menu.title', menu  });

    const info = (req, res) => {
        res.render('Info', { title: 'Info'});
    };

    module.exports = {
        index,
        detail,
        info
    }
}