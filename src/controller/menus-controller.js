const menuService = require('../lib/menu-service');

const index = (req, res) => {
    const menus = menuService.getAllMenus();
    res.render('index', { title: 'menu', menus });
};

const details = (req, res) => {
    const { id }= req.params;
    const menu = menuService.getMenuById(id);
    
    if (!menu) {
        return res.status(404).render ('404', { title: 'Menu not Found'});
    }


    res.render('details', { title: 'menu.title', menu  });
};

const info = (req, res) => {
    res.render('info', { title: 'Info'});
};

    module.exports = {
        index,
        details,
        info
    };

