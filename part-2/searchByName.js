


var clients = require('./clients.json')

for(i = 0; i < clients.length; i++) {
  if (clients[i].rep_name.toUpperCase()
  .startsWith(process.argv[i].toUpperCase())){
    console.log(
      "id:", clients[i].id,
      "name:", clients[i].rep_name
    )
  }
};

//module.exports = function(needle, haystack){
//	for (obj of haystack){
//		if(obj.name == needle)return obj
//	}
//};
//disregard this was attempting something