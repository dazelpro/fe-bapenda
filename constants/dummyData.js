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

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hamburger.png")
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/veg_biryani.png")
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png")
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
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },

]


export default {
    appProfile,
    myProfile,
    categories,
    menu
}