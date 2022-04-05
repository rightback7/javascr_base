
//2
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum=0;
for(key in salaries){
    sum = salaries[key]+sum
}

alert(sum)

//4
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
    for(key in obj){
        if(typeof obj[key]=='number'){
          obj[key]=obj[key]*2;
        }
    }
}
multiplyNumeric(menu);