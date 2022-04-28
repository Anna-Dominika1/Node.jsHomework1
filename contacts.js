const { nanoid } = require("nanoid");

const fs = require('fs').promises;

const contactsPath = './db/contacts.json';

async function listContacts() {
  return JSON.parse(await fs.readFile(contactsPath));
  }
  
  async function getContactById(contactId){
   
    const array = await listContacts();
    const user = array.find(item => item.id === contactId);
    const deleted = array.find(item => item.id === contactId);
   if(deleted,user){

    console.log(user);
   }else{
     console.log("Ooops,we don't found this user");
   }
  };
  
  async function removeContact(contactId) {
    const array = await listContacts();
    const filter = array.filter(item => item.id !== contactId);
    const deleted = array.find(item => item.id === contactId);
    fs.writeFile(contactsPath, JSON.stringify(filter));
    console.log(`We delete user ${deleted.name}`);
    console.log(deleted);
    if(!deleted){
      console.log("Not Found");
    }
  }
  
  async function addContact(name, email, phone) {
    const newUser = {
      id: nanoid(),
      name,
      email,
      phone,
    };
  
    const array = await listContacts();
    array.push(newUser);
    await fs.writeFile(contactsPath, JSON.stringify(array));
    console.log(`User ${name}`);
    console.log(newUser);
  }


  module.exports = {
    listContacts,
    removeContact,
    getContactById,
    addContact
};