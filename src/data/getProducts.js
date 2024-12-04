const products = [

  {
    id: "p1",
    category: "procesadores",
    name: "Procesador Intel Celeron G5905",
    description: "LGA 1200 generación 10",
    image: "/images/procesadores/celeron.jpg",
    price: 67
},
{
    id: "p2",
    category: "procesadores",
    name: "Procesador Intel I3 10100",
    description:"LGA 1200 generación 10",
    image: "/images/procesadores/i3.jpg",
    price: 129
},
{
    id: "p3",
    category: "procesadores",
    name: "Procesador Intel I5 11400",
    description: "LGA 1200 generación 11",
    image: "/images/procesadores/i5.jpg",
    price: 182
},
{
  id: "p6",
  category: "procesadores",
  name: "Procesador Intel I5 12400F",
  description:  "LGA 1700 generación 12",
  image: "/images/procesadores/i5.jpg",
  price: 176
},
{
  id: "p7",
  category: "procesadores",
  name: "Procesador Intel I3 13100F",
  description:  "LGA 1700 generación 13",
  image: "/images/procesadores/i3.jpg", 
  price: 163
},
{
  id: "p16",
  category: "procesadores",
  name:"Procesador AMD RYZEN 5 4500",
  description: "AM4 generación 4",
  image: "/images/procesadores/ryzen5.jpg",
  price: 109
},
{
  id: "p17",
  category: "procesadores",
  name: "Procesador AMD RYZEN 5 4600G",
  description: "AM4 generación 4",
  image: "/images/procesadores/ryzen5.jpg",
  price: 129
},
{
  id: "p18",
  category: "procesadores",
  name:"Procesador AMD RYZEN 5 5500",
  description: "AM4 generación 5", 
  image: "/images/procesadores/ryzen5.jpg",
  price: 128
},
{
  id: "m1",
  category:"motherboards",  
  name: "Motherboard Asus Prime H510M-K R 2.0",
  description: "Socket LGA 1200, Generación 10 y 11, DDR4",
  image: "/images/placas/Prime H510MK R 2.0.jpg",
  price: 89
},
{
  id: "m2",
  category:"motherboards",
  name: "Motherboard Gigabyte H470M H",
  description: "Socket LGA 1200, Generación 10 y 11, DDR4",
  image: "/images/placas/H470M H.jpg",
  price: 110
},
{
  id: "m3",
  category:"motherboards",
  name: "Motherboard Gigabyte H510M H V2",
  description: "Socket LGA 1200, Generación 10 y 11, DDR4",
  image: "/images/placas/H510M H V2.jpg",
  price: 85
},
{
  id: "m4",
  category:"motherboards",
  name: "Motherboard Asus H610M-K D4",
  description: "Socket LGA 1700, Generación 12 y 13, DDR4",
  image: "/images/placas/H610M-K D4.jpg",
  price: 103
},
{
  id: "m5",
  category:"motherboards",
  name: "Motherboard Gigabyte H610M H V2",
  description: "Socket LGA 1700, Generación 12, 13 y 14, DDR4",
  image: "/images/placas/H610M H V2.jpg",
  price: 104
},
{
  id: "m6",
  category:"motherboards",
  name: "Motherboard MSI Pro B760M-E DDR4",
  description: "Socket LGA 1700, Generación 12, 13 y 14, DDR4",
  image: "/images/placas/Pro B760M-E DDR4.jpg",
  price: 118
},

{
  id: "r2",
  category: "rams",
  name: "Memoria Netac NTSDD4P32SP-08R",
  description: "DDR4, 8 GB, 3.200 Mhz",
  image: "/images/rams/netac.jpg",
  price: 24
},
{
  id: "r4",
  category: "rams",
  name: "Memoria Corsair CMG8GX4M1E3200C1",
  description: "DDR4, 8 GB, 3.200 Mhz",
  image: "/images/rams/corsair.jpg",
  price: 31
},
{
  id: "r5",
  category: "rams",
  name: "Memoria Kingston KVR32N22S6/8",
  description: "DDR4, 8 GB, 3.200 Mhz",
  image: "/images/rams/kingston.jpg",
  price: 29
},
{
  id: "r7",
  category: "rams",
  name: "Memoria Kingston KF440C19RBK2/16",
  description: "DDR4, 16 GB, 4.400 Mhz",
  image: "/images/rams/kingston.jpg",
  price: 49
},
{
  id: "r8",
  category: "rams",
  name: "Memoria Kingston KF552C40BB-8",
  description: "DDR5, 8 GB, 5.200 Mhz",
  image: "/images/rams/kingston.jpg",
  price: 51
},
{
  id: "r9",
  category: "rams",
  name: "Memoria Kingston KF556C40BBA-16",
  description: "DDR5, 8 GB, 5.600 Mhz",
  image: "/images/rams/kingston.jpg",
  price: 94
}
]

//obtener productos
const getProducts = new Promise((resolve, reject) => {
  //simulamos un retraso de red con setTimeout
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export default getProducts