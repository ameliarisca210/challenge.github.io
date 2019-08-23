var jutsu = ["jengkol", "garam", "santan", "penyedap"]


//setelah garam tambahkan kecap
//setelah santan tambahkan minyak gorang
//hapus garam tetapi tambahkan mecin
// apakah index ke 3

console.log("Array awal: " + jutsu)

jutsu.splice(2,0, "kecap")
console.log("Menambahkah kecap setelah garam~ : "+ jutsu)

jutsu.splice(4,0, "Minyak goreng")
console.log("Menambahkan minyak goreng setelah santan~ : " + jutsu)

jutsu.splice(1,1, "mecin")
console.log("Hapus garam, dan tambahkan micin~ : " + jutsu)

console.log("index ke-3 adalah: " + jutsu[3])