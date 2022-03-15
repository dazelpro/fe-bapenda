import { icons, images } from "./";

const appProfile = {
    name: "BAPENDA",
    profile_image: images.logo,
    address: "No. 88, Jln Padungan, Kuching"
}

const myProfile = {
    profile_image: images.profile
}

const categories = [
    {
        id: 1,
        name: "Fast Food",
        icon: icons.burger
    },
    {
        id: 2,
        name: "Fruit Item",
        icon: icons.cherry
    },
    {
        id: 3,
        name: "Rice Item",
        icon: icons.rice
    }
]

const articlesatu = {
    id: 1,
    name: "Launching e-SPPT",
    description: "Permudah Wajib Pajak, Pemko Padang Launching e-SPPT PBB-P2",
    categories: [1, 2],
    date: "2 July 2021",
    calories: 78,
    isFavourite: true,
    image: require("../assets/images/notfound.png")
}

const articledua = {
    id: 2,
    name: "Target PAD Rp. 880 Miliar",
    description: "Target PAD Rp. 880 Miliar, Pemko Padang Tingkatkan Kualitas 280 Petugas Pajak",
    categories: [1, 3],
    date: "24 February 2021",
    calories: 78,
    isFavourite: false,
    image: require("../assets/images/notfound.png")
}

const articletiga = {
    id: 3,
    name: "Belasan Reklame Dibongkar",
    description: "Tak Bayar Pajak, Belasan Papan Reklame Dibongkar",
    categories: [1, 2, 3],
    date: "17 February 2021",
    calories: 78,
    isFavourite: true,
    image: require("../assets/images/notfound.png")
}

const articleempat = {
    id: 4,
    name: "Ujung Tombak Realisasi PAD",
    description: "Petugas Penagih Ujung Tombak Realisasi PAD",
    categories: [1, 2],
    date: "2 June 2021",
    calories: 78,
    isFavourite: true,
    image: require("../assets/images/notfound.png")
}

// const imageSlider = [
//     {
//         title: 'Anise Aroma Art Bazar',
//         url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//         id: 1
//     },
//     {
//         title: 'Food inside a Bowl',
//         url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//         id: 2
//     },
//     {
//         title: 'Vegatable Salad',
//         url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//         id: 3
//     }
// ]

const menu = [
    {
        id: 1,
        name: "Berita & Informasi",
        list: [
            articlesatu, articledua, articletiga,
        ]
    },
    {
        id: 2,
        name: "Teknologi Informasi",
        list: [
            articledua, articletiga, articleempat,
        ]
    },
    {
        id: 3,
        name: "Pajak Daerah",
        list: [
            articletiga, articleempat, articledua,
        ]
    },
    {
        id: 4,
        name: "Pelayanan",
        list: [
            articleempat, articlesatu, articletiga,
        ]
    },
    {
        id: 5,
        name: "UPTB",
        list: [
            articletiga, articlesatu, articleempat,
        ]
    },
]


export default {
    appProfile,
    myProfile,
    categories,
    menu
}