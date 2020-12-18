let userData = require('../database/users.json');

const createUser = async (req, res, next) => {
  let index = userData.length;
  const { username, email, password} = req.body;
  if (!username && !email && !password) 
    return res.send("You must supply for the following: 'username', 'email' and 'password'");

  try {
    var newUser = {
      "id": index + 1,
      username,
      email,
      password     
    }

  userData.push(newUser);
  res.status(201).json({message:"User created successfully", userData});
  } catch (err) {
    return next(err);
  }
};

const getUser = (req, res, next) => {
  try {
    return res.status(200).json({message:"Users retrieved successfully", userData});
  } catch (err) {
    return next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const {id}= req.params;
    if (id > userData.length || id <= 0) return res.status(404).send(`User with ID ${id} does not exist`);

    for (var i = 0; i < userData.length; i++) {
      if(userData[i].id == id){
          return res.status(200).json({message:`User ${id} retrieved successfully`, userData:userData[i] })

      }
  }
  } catch (err) {
    return next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const {id}= req.params;
    const { username, email, password} = req.body;
    if (id > userData.length || id <= 0) return res.status(404).send(`User with ID ${id} does not exist`);
    
    if (!username || !email || !password) 
    return res.send("You must supply for the following: 'username', 'email' or 'password'");

    for (var i = 0; i < userData.length; i++) {
        if(userData[i].id == id){
          userData[i].username = username;
          userData[i].email = email;
          userData[i].password = password;
        }
    }

    return res.status(200).json({message:"User updated successfully", userData});
  } catch (err) {
    return next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const {id}= req.params;
    if (id > userData.length || id <= 0) return res.status(404).send(`User with ID ${id} does not exist`);

    for (var i = 0; i < userData.length; i++) {
      if(userData[i].id == id){
        userData.splice(i, 1);
        return res.status(200).json({message:`User with ID ${id} deleted successfully`, userData});
      }
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = { 
    createUser, getUser, getUserById, updateUser, deleteUser
};
