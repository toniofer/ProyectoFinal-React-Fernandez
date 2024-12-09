export const products = [

  {
    code: "p1",
    category: "procesadores",
    name: "Procesador Intel Celeron G5905",
    description: "LGA 1200 generación 10",
    image: "/images/procesadores/celeron.jpg",
    price: 67,
    stock: 12
},
{
  code: "p2",
    category: "procesadores",
    name: "Procesador Intel I3 10100",
    description:"LGA 1200 generación 10",
    image: "/images/procesadores/i3.jpg",
    price: 129,
    stock: 10
},
{
  code: "p3",
    category: "procesadores",
    name: "Procesador Intel I5 11400",
    description: "LGA 1200 generación 11",
    image: "/images/procesadores/i5.jpg",
    price: 182,
    stock: 22
},
{
  code: "p6",
  category: "procesadores",
  name: "Procesador Intel I5 12400F",
  description:  "LGA 1700 generación 12",
  image: "/images/procesadores/i5.jpg",
  price: 176,
  stock: 18
},
{
  code: "p7",
  category: "procesadores",
  name: "Procesador Intel I3 13100F",
  description:  "LGA 1700 generación 13",
  image: "/images/procesadores/i3.jpg", 
  price: 163,
  stock: 6
},
{
  code: "p16",
  category: "procesadores",
  name:"Procesador AMD RYZEN 5 4500",
  description: "AM4 generación 4",
  image: "/images/procesadores/ryzen5.jpg",
  price: 109,
  stock: 9
},
{
  code: "p17",
  category: "procesadores",
  name: "Procesador AMD RYZEN 5 4600G",
  description: "AM4 generación 4",
  image: "/images/procesadores/ryzen5.jpg",
  price: 129,
  stock: 12
},
{
  code: "p18",
  category: "procesadores",
  name:"Procesador AMD RYZEN 5 5500",
  description: "AM4 generación 5", 
  image: "/images/procesadores/ryzen5.jpg",
  price: 128,
  stock: 14
},
{
  code: "m1",
  category:"motherboards",  
  name: "Motherboard Asus Prime H510M-K R 2.0",
  description: "Socket LGA 1200, Generación 10 y 11, DDR4",
  image: "/images/placas/Prime H510MK R 2.0.jpg",
  price: 89,
  stock: 6
},
{
  code: "m2",
  category:"motherboards",
  name: "Motherboard Gigabyte H470M H",
  description: "Socket LGA 1200, Generación 10 y 11, DDR4",
  image: "/images/placas/H470M H.jpg",
  price: 110,
  stock: 8
},
{
  code: "m3",
  category:"motherboards",
  name: "Motherboard Gigabyte H510M H V2",
  description: "Socket LGA 1200, Generación 10 y 11, DDR4",
  image: "/images/placas/H510M H V2.jpg",
  price: 85,
  stock: 7
},
{
  code: "m4",
  category:"motherboards",
  name: "Motherboard Asus H610M-K D4",
  description: "Socket LGA 1700, Generación 12 y 13, DDR4",
  image: "/images/placas/H610M-K D4.jpg",
  price: 103,
  stock: 14
},
{
  code: "m5",
  category:"motherboards",
  name: "Motherboard Gigabyte H610M H V2",
  description: "Socket LGA 1700, Generación 12, 13 y 14, DDR4",
  image: "/images/placas/H610M H V2.jpg",
  price: 104,
  stock: 10
},
{
  code: "m6",
  category:"motherboards",
  name: "Motherboard MSI Pro B760M-E DDR4",
  description: "Socket LGA 1700, Generación 12, 13 y 14, DDR4",
  image: "/images/placas/Pro B760M-E DDR4.jpg",
  price: 118,
  stock: 6
},

{
  code: "r2",
  category: "rams",
  name: "Memoria Netac NTSDD4P32SP-08R",
  description: "DDR4, 8 GB, 3.200 Mhz",
  image: "/images/rams/netac.jpg",
  price: 24,
  stock: 8
},
{
  code: "r4",
  category: "rams",
  name: "Memoria Corsair CMG8GX4M1E3200C1",
  description: "DDR4, 8 GB, 3.200 Mhz",
  image: "/images/rams/corsair.jpg",
  price: 31,
  stock: 12
},
{
  code: "r5",
  category: "rams",
  name: "Memoria Kingston KVR32N22S6/8",
  description: "DDR4, 8 GB, 3.200 Mhz",
  image: "/images/rams/kingston.jpg",
  price: 29,
  stock: 22
},
{
  code: "r7",
  category: "rams",
  name: "Memoria Kingston KF440C19RBK2/16",
  description: "DDR4, 16 GB, 4.400 Mhz",
  image: "/images/rams/kingston.jpg",
  price: 49,
  stock: 18
},
{
  code: "r8",
  category: "rams",
  name: "Memoria Kingston KF552C40BB-8",
  description: "DDR5, 8 GB, 5.200 Mhz",
  image: "/images/rams/kingston.jpg",
  price: 51,
  stock: 14
},
{
  code: "r9",
  category: "rams",
  name: "Memoria Kingston KF556C40BBA-16",
  description: "DDR5, 8 GB, 5.600 Mhz",
  image: "/images/rams/kingston.jpg",
  price: 94,
  stock: 5
}
]

//obtener productos
const getProducts = new Promise((resolve, reject) => {
  //simulamos un retraso de red con setTimeout
  setTimeout(() => {
    resolve(products);
  }, 10);
});

export default getProducts