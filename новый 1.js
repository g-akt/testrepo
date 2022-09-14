let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for(let key in salaries){
	sum += salaries[key];
}
return sum;

let obj = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
	for(let s in obj);
	if(typeof obj[s] == "number"){
	obj[s] *= 2;}
		