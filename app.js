

// let products = [
//     {
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//       },
//       {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//       },
//       {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//       },
//       {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//       },
//       {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//       },
    
    
//     ]


// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// let result = students.filter((item) => {
//  if( item.percent > 85){
// item.grade='A'
//  }
//  else if (item.percent >= 75 && item.percent < 85){
//    item.grade = 'B'
//  }
//  else{
//   item.grade = 'C'
//  }
//  console.log(item)

// })

// let number = [1, 2, 3, 4, 5]
// let rest1 = []
// let rest2 = []

// let result = number.filter((item)=>{
//   if(item % 2 == 0){
//    rest1.push(item)
//   }
//   else if( item % 2 != 0){
//     rest2.push(item)
//   }
// })

// console.log(rest1, rest2)

// let array = [false, 1, 10, "", null, "abdulaziz", 1.13, 0]
// let rest1 = []
// let rest2 = []

// let result = array.filter((item) => {
//   if(item){
//     rest1.push(item)
//   }
//   else{
//     rest2.push(item)
//   }
// })

// console.log(rest1, rest2)

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];
// let result = pupils.filter((item) => {
//   if( item.protcent > 85 && item.protcent > 75){
//  item.grade='A'
//  item.isPssed = true
//   }
//   else if (item.protcent >= 75 && item.protcent < 85 && item.protcent > 75){
//     item.grade = 'B'
//     item.isPssed = true
//   }
//   else{
//    item.grade = 'C'
//    item.isPssed = false
//   }
//   console.log(item)
//  })



let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 15000,
    rating: 4.9,
    discount: 30,
  },
];

// const priseSort = products.sort((a, b)=> a.price - b.price)
// console.log(priseSort)
// const reatingSort = products.sort((a, b)=> a.rating - b.rating)
// console.log(reatingSort)
// const discountSort = products.sort((a, b)=> a.discount - b.discount)
// console.log(discountSort)

// const storngRating = products.sort((a, b)=> b.rating - a.rating)[0]
// console.log(storngRating)
// let result = products.filter((item)=> {
//   if(item.id !== 4){
//     console.log(item)
//   }
// })

// let rest = products.map((item)=> {
//   let name = []
//   name.push(item.name)
//   console.log(name)
// })


// const people = [
//   {name: 'John', age: 13},
//   {name: 'Mark', age: 56},
//   {name: 'Rachel', age: 45},
//   {name: 'Nate', age: 67},
//   {name: 'Jeniffer', age: 65}
//   ];
  

const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];

const grade = pupils.map((i)=>{
  if(i.protcent >= 90 || i.protcent >= 70){
     i.grade = 5
     i.isPssed = true
  } else if(i.protcent >= 80 && i.protcent < 90){
     i.grade = 4
  }   else if(i.protcent >= 70 && i.protcent < 80){
    i.grade = 3
  } else{
  i.grade = 2
  i.isspassed = false
  }
 console.log(i)
})

