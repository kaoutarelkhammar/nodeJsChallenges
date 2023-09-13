const readline = require('readline');

// Create an interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create an array to store contacts
const contacts = [];

// Function to add a contact
function addContact() {
  rl.question('Enter the name: ', (name) => {
    rl.question('Enter the phone number: ', (phoneNumber) => {
      const contact = { name, phoneNumber };
      contacts.push(contact);
      console.log('Contact added successfully!\n');
      mainMenu();
    });
  });
}

// Function to view all contacts
function viewContacts() {
  if (contacts.length === 0) {
    console.log('No contacts found.\n');
  } else {
    console.log('Contacts:');
    contacts.forEach((contact, index) => {
      console.log(`${index + 1}. Name: ${contact.name}, Phone: ${contact.phoneNumber}`);
    });
    console.log();
  }
  mainMenu();
}

// Function to search for a contact
function searchContact() {
  rl.question('Enter the name to search for: ', (name) => {
    const foundContact = contacts.find((contact) => contact.name === name);
    if (foundContact) {
      console.log(`Contact found:\nName: ${foundContact.name}, Phone: ${foundContact.phoneNumber}\n`);
    } else {
      console.log('Contact not found.\n');
    }
    mainMenu();
  });
}

// Function to display the main menu
function mainMenu() {
  console.log('Contact Manager\n');
  console.log('1. Add a contact');
  console.log('2. View all contacts');
  console.log('3. Search for a contact');
  console.log('4. Exit\n');

  rl.question('Select an option (1/2/3/4): ', (option) => {
   switch (choice) {
    case '1':
      addContact();
      break;
    case '2':
      viewContacts();
      break;
    case '3':
      searchContact();
      break;
    case '4':
      console.log('Exiting the application.');
      process.exit(0);
    default:
      console.log('Invalid choice. Please try again.');
  }
}