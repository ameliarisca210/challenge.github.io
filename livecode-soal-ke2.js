//live code ke 2
var name ="budi"
var karakter=""
//console.log(name.length)
for (var i = 0; i < name.length; i++){
  karakter += name[i]
}
//console.log(karakter[0])

if  (karakter[0] == "a" || karakter[0] == "b" || karakter[0] == "c" || karakter[0] == "d"){
  console.log("Nama = " + name + ", Masuk group Pertama")
}else if(karakter[0] == "e" || karakter[0] == "f" || karakter[0] == "g" || karakter[0] == "h"){
  console.log("Nama = " + name + ", Masuk group Kedua")
}else{
  console.log("Nama = " + name + ", Masuk group Terakhir")
}