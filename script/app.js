//#1-Masala
// let price = +prompt("Foydalanuvchi mablag'ini kiriting: ");

// const narx = 700;

// const vaqt = 4;

// const sotibolish = 0;

// const ruchkalar = 0;

// do {

//     if (price >= narx) {
//         price -= narx;
//         ruchkalar++;
//         sotibolish += vaqt;
//     }
// } 

// while (price >= narx && sotibolish < 200000);

// document.write("Foydalanuvchi ", ruchkalar, " ta ruchka sotib oldi va ",  sotibolish, " kun ichida yetdi.");

//#2-Masala
// let son = +prompt("Ixtiyoriy son kiriting");
// let random = Math.floor(Math.random() * 10);
// do {
//      if (son % random == 0) {
//           document.write("Topdiz " + random);
//      }
//      else {
//           document.write("Topaolmadiz " + random);
//      }

// } while (son == random);

//#3-Masala
// let foydalanuvchiHarfi;

// do {
//     foydalanuvchiHarfi = prompt("Istalgan harfni kiriting:");
//     kiritilganHarf = foydalanuvchiHarfi.toLowerCase(); 

//     if (kiritilganHarf.length !== 1 || !/[a-z]/.test(kiritilganHarf)) {
//         document.write("Alifbodagi bitta harf kiriting.");
//     } else {
//         let boshlangichHarf = 'a';
//         let alifbo = 'abcdefghijklmnopqrstuvwxyz';
//         let index = alifbo.indexOf(kiritilganHarf);

//         if (index !== -1) {
//             let qolganHarflar = alifbo.slice(index + 1);
//             document.write("Keyingi harflar: " + qolganHarflar);
//         } else {
//             document.write("Alifbodagi bitta harf kiriting.");
//         }
//     }
// } while (kiritilganHarf.length !== 1 || !/[a-z]/.test(kiritilganHarf));
    
//#4-Masala
// let shanbaKunlari = 0;
// let yakshanbaKunlari = 0;
// let kun = 1;

// do {
//     let kunSanasi = new Date(2024, 0, kun);
//     let haftaKuni = kunSanasi.getDay();

//     if (haftaKuni === 6) {
//         shanbaKunlari++;
//     } else if (haftaKuni === 0) {
//         yakshanbaKunlari++;
//     }

//     kun++;
// } while (kun <= 365);

// document.write("Shanba kunlari:", shanbaKunlari);
// document.write("Yakshanba kunlari:", yakshanbaKunlari);

// // #5-Masala EVOS
// const restrant = "EVOS";
// let count = 0
// do{
//     document.write("Bormoq")
//     count++
// }
// while(restrant === "EVOS" && count < 5 || restrant === "OQ TEPA" && count < 10);

//1-misol
// function minMax(arr) {
//     let min = arr[1];
//     let max = arr[1];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return (min, max)
// }
// document.write(minMax([1, 2, 3, 4, 5]))

//2-misol
// let a;
// let b;

// do {
// a = +prompt("A sonni yozing");
// b = +prompt("B sonni yozing");
//  if(a < b) {
//     document.write(b);
//  }
//  else if(a > b) {
//     document.write(a);
//  }
//  } while (a == b && a == b);

//4-misol
// function countPotatoes(string) {
//     let count = 0;
//     let i = 0;
//     do {
//         if (string.slice(i, i + 8) === "Potatoes") {
//             count++;
//         }
//         i++;
//     } while (i + 8 <= string.length);
//     return count;
// }

// const s = prompt("Potatoes so'zini yozing boshqa so'z yozmasdan:  Potatoes");
// document.write(countPotatoes(s));

//5-misol   
// function removeStrings(arr) {
    //     return arr.filter(item => typeof item === 'number');
    // }
    
    // const mixedArray = [10, "apple", 2, "banana", 375, "cherry", 21,];
    // const resultArray = removeStrings(mixedArray);
    // document.write(resultArray);
    
    //6-misol
    // function countVowel(str) { 
        //     const count = str.match(/[aeiou]/gi).length;
        //     return count;
        // }
        // const string = prompt('Xayolizga kegan sozni kiriting: ');
        // const result = countVowel(string);
        
        // document.write(result);
        
 //7-misol
     // let raqamlar;
     // if (raqamlar.length === 0) {
     //     document.write("Bosh qoldi");
     // }
     // let engyuqori = raqamlar[0];
     // for (let i = 0; i < raqamlar.length; i++) {
     //     if (raqamlar[i] > engyuqori) {
     //         engyuqori = raqamlar[i];
     //     }
     // }
     // document.write(engyuqori);

//8-misol
// let array = [2, 5, 8, 2, 9, 1];

// let sum = 0;
// let i = 0;

// while (i < array.length) {
//     sum += Math.abs(array[i]);
//     i++;
// }

// document.write(sum);

// 10-misol
// let raqam1 = 4;
// let raqam2 = 3;
// if (raqam1 < raqam2){
 //     document.write("True");
// }else if (raqam1 > raqam2) {
//     document.write("Noto'g'ri");
// }else {
//     document.write("Teng");
// }