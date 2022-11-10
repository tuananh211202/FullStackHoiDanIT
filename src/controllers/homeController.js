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
}
