//show a weekday

//get a snippet from text

function snippet(string, maxlength){
  if (string.length > maxlength){
    console.log(string.slice(0, maxlength) + "...");
  }else {
		console.log(string);
	}
};

//number of properties


function numProps(obj){
  newObj = Object.keys(obj);
  console.log(newObj.length);
};

//filter between

function filterBetween(arr, min, max){
  var newArr = [];
  for(var i=0; i<=arr.length; i++){
    if(arr[i]>min && arr[i]<max){
    newArr.push(arr[i]);
    };
  };
  console.log(newArr);
};