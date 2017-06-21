var clients = require('./clients.json')

for(i = 0; i < clients.length; i++) {
  if (clients[i].state.toUpperCase() === process.argv[i].toUpperCase()){
    console.log(
      "id:", clients[i].id,
      "name:", clients[i].rep_name,
      "company:", clients[i].company,
      "city:", clients[i].city,
      "state:", clients[i].state
    )
  }
};