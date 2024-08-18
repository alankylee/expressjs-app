var express = require('express');
var router = express.Router();
const users = require('../services/users');

// GET ALL
router.get('/', async function (req, res) {
  const pageNum = req.query.pageNum ??= 1;
  const userList = await users.getUsers(pageNum);
  res.json(userList);
});

// GET
router.get('/:userId', async function (req, res) {
  const userId = req.params.userId;
  const user = await users.getUserById(userId);
  res.json(user);
});

// POST
router.post('/add', async function (req, res) {
  console.log(req.body);
  const { name } = req.body;
  const message = await users.addUser(name);
  res.send({ "message": message });
});

// PUT
router.put('/update/:userId', async function (req, res) {
  console.log(req.body);
  const userId = req.params.userId;
  const { name } = req.body;
  const message = await users.updateUser(userId, name);
  res.send({ "message": message });
});

// DELETE
router.delete('/:userId', async function (req, res) {
  const userId = req.params.userId;
  const message = await users.deleteUser(userId);
  res.send({ "message": message });
});

module.exports = router;