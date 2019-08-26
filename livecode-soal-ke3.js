//livecode ke 3
//function 1
function addTitle(name1, name2, name3, name4){
return ("Mr. " + name1 + ", " + "Mr. " + name2 + ", " + "Mr. " + name3 + ", " + "Mr. " + name4)

}

console.log(addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo' , 'Geese Howard'))
//end code function 1



//function 2
function changeSpaceWith(str, to){
  
  var newStr = str.split(" ")
  var joinStr = newStr.join(to)
  return joinStr 
}

console.log(changeSpaceWith('Steve Fox','-'))
console.log(changeSpaceWith('Sergei Dragunov', '+'))
//end code function 2


//function 3
function cutString(str){
  var newString = str.substr(0,6)
  return newString
}

 console.log(cutString('Kazuya Mishima'))
 console.log(cutString('Serge '))