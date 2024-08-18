const db = require('../services/db');
const config = require('../config');

function getUsers(pageNum) {
    const offset = (pageNum - 1) * config.listPerPage;

    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM users LIMIT ?,?', [offset, config.listPerPage], (err, rows) => {
            if (err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function getUserById(id) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
            if (err)
                reject(err);
            else
                resolve(row);
        });
    });
}

function addUser(name) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO users (name) VALUES (?)', [name], (err) => {
            if (err)
                reject(err);
            else
                resolve("success");
        });
    });
}

function updateUser(id, newName) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE users SET name = ? WHERE id = ?', [newName, id], (err) => {
            if (err)
                reject(err);
            else
                resolve("success");
        });
    });
}

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM users WHERE id = ?', [id], (err) => {
            if (err)
                reject(err);
            else
                resolve("success");
        });
    });
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};