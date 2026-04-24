const fs = require('fs');
const path = require('path');

const loadData = () => {
    const filepath = path.join(__dirname, '../data/menu.json');
    const fileData = fs.readFileSync(filepath);
    return JSON.parse(fileData);
};

const getAllMenus = () => {
    const menus = loadData();
    return menus;  
};


const getMenuById = (id) => {
    const menus = loadData();
    return menus.find(menu => menu.id === id);    
};


module.exports = {
    getAllMenus,
    getMenuById
};

