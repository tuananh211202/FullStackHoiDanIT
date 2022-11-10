import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try{
      let data = await db.User.findAll();
      return res.render('homepage.ejs', {data: JSON.stringify(data)});
    } catch (error){
      console.log(error);
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
  return res.render('CRUD.ejs');
}

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send('post crud');
}

let displayGetCrud = async (req, res) => {
  let data = await CRUDService.getAllUsers();
  return res.render('displayCRUD.ejs',{dataTable: data});
}

let getEditCrud = async (req, res) => {
  let userID = req.query.id;
  if(!userID) return res.send('user not found');
  let userData = await CRUDService.getUserInfoById(userID);
  if(!userData.id) return res.send('user not found');
  return res.render('editCRUD.ejs',{user: userData});
}

let putCrud = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDService.updateUserData(data);
  return res.redirect('/get-crud');
}

// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCrud: displayGetCrud,
    getEditCrud: getEditCrud,
    putCrud: putCrud,
}
