import { icons, images } from "./";

const appProfile = {
    name: "BAPENDA",
    profile_image: images.logo,
    address: "No. 88, Jln Padungan, Kuching",
};

const myProfile = {
    profile_image: images.profile,
};

const categories = [
    {
        id: 1,
        name: "Pajak Bumi Bangunan",
        icon: icons.world,
    },
    {
        id: 2,
        name: "Pajak Restoran",
        icon: icons.burger,
    },
    {
        id: 3,
        name: "Pajak Hiburan",
        icon: icons.disco,
    },
    {
        id: 4,
        name: "Pajak Reklame",
        icon: icons.rice,
    },
    {
        id: 5,
        name: "Pajak Penerangan Jalan",
        icon: icons.lighting,
    },
    {
        id: 6,
        name: "Pajak Parkir",
        icon: icons.parking,
    },
    {
        id: 7,
        name: "Pajak Hotel",
        icon: icons.hotel,
    },
];

const articlesatu = {
    id: 1,
    name: "Launching e-SPPT",
    description: "Permudah Wajib Pajak, Pemko Padang Launching e-SPPT PBB-P2",
    categories: [1, 4, 5, 6],
    date: "2 July 2021",
    calories: 78,
    isFavourite: true,
    image: "https://bapenda.padang.go.id/wp-content/uploads/2021/07/IMG_1490.png",
};

const articledua = {
    id: 2,
    name: "Target PAD Rp. 880 Miliar",
    description: "Target PAD Rp. 880 Miliar, Pemko Padang Tingkatkan Kualitas 280 Petugas Pajak",
    categories: [1, 2, 3, 6],
    date: "24 February 2021",
    calories: 78,
    isFavourite: false,
    image: "https://bapenda.padang.go.id/wp-content/uploads/2021/03/IMG-20210209-WA0023-1024x498.jpg",
};

const articletiga = {
    id: 3,
    name: "Belasan Reklame Dibongkar",
    description: "Tak Bayar Pajak, Belasan Papan Reklame Dibongkar",
    categories: [1, 2, 3, 4, 5, 6],
    date: "17 February 2021",
    calories: 78,
    isFavourite: true,
    image: "https://bapenda.padang.go.id/wp-content/uploads/2021/03/Screenshot_2021-03-04-Belum-Bayar-Retribusi-Puluhan-Reklame-Dicabut-Bapenda-Padang-Terdapat-di-7-Titik-Tribun-Padang.png",
};

const articleempat = {
    id: 4,
    name: "Ujung Tombak Realisasi PAD",
    description: "Petugas Penagih Ujung Tombak Realisasi PAD",
    categories: [1, 2, 3, 4, 5, 6],
    date: "2 June 2021",
    calories: 78,
    isFavourite: true,
    image: "https://bapenda.padang.go.id/wp-content/uploads/2021/06/fb_img_1622636407639-1024x683.jpg",
};

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
        list: [articlesatu, articledua, articletiga],
    },
    {
        id: 2,
        name: "Teknologi Informasi",
        list: [articledua, articletiga, articleempat],
    },
    {
        id: 3,
        name: "Pajak Daerah",
        list: [articletiga, articleempat, articledua],
    },
    {
        id: 4,
        name: "Pelayanan",
        list: [articleempat, articlesatu, articletiga],
    },
    {
        id: 5,
        name: "UPTB",
        list: [articletiga, articlesatu, articleempat],
    },
    {
        id: 6,
        name: "Recommended",
        list: [articletiga, articlesatu, articledua],
    },
];

const office = [
    {
        id: 1,
        isExpanded: false,
        office_name: "Badan Pendapatan Daerah",
        address: "Jalan Prof. M. Yamin, SH No. 70",
        subcategory: [
            {
                id: 1,
                val: "Kepala : Drs. Yosefriawan",
            },
            {
                id: 2,
                val: "Telepon : (0751) 32377",
            },
            {
                id: 3,
                val: "Email : bapenda@padang.go.id",
            },
        ],
    },
    {
        id: 2,
        isExpanded: false,
        office_name: "UPTB Wilayah I",
        address: "Mall Pelayanan Publik Kota Padang lt. 3",
        subcategory: [
            {
                id: 1,
                val: "Pimpinan : Ade Hendrama, SE, MM",
            },
            {
                id: 2,
                val: "Telepon : (0751) 32377",
            },
            {
                id: 3,
                val: "Email : bapenda@padang.go.id",
            },
        ],
    },
    {
        id: 3,
        isExpanded: false,
        office_name: "UPTB Wilayah II",
        address: "Jalan Sutan Syahrir No. 238",
        subcategory: [
            {
                id: 1,
                val: "Pimpinan : Zulklifli, SE",
            },
            {
                id: 2,
                val: "Telepon : (0751) 32377",
            },
            {
                id: 3,
                val: "Email : bapenda@padang.go.id",
            },
        ],
    },
    {
        id: 4,
        isExpanded: false,
        office_name: "UPTB Wilayah III",
        address: "Jalan Gurun Laweh No. 21",
        subcategory: [
            {
                id: 1,
                val: "Pimpinan : Yulisman, SE",
            },
            {
                id: 2,
                val: "Telepon : (0751) 32377",
            },
            {
                id: 3,
                val: "Email : bapenda@padang.go.id",
            },
        ],
    },
    {
        id: 5,
        isExpanded: false,
        office_name: "UPTB Wilayah IV",
        address: "Jalan Bypass KM. 8",
        subcategory: [
            {
                id: 1,
                val: "Pimpinan : Suarnijon Imra, SH",
            },
            {
                id: 2,
                val: "Telepon : (0751) 32377",
            },
            {
                id: 3,
                val: "Email : bapenda@padang.go.id",
            },
        ],
    },
    {
        id: 6,
        isExpanded: false,
        office_name: "UPTB Wilayah V",
        address: "Jalan Bypass KM. 17",
        subcategory: [
            {
                id: 1,
                val: "Pimpinan : Arisman, SE, MM",
            },
            {
                id: 2,
                val: "Telepon : (0751) 32377",
            },
            {
                id: 3,
                val: "Email : bapenda@padang.go.id",
            },
        ],
    },
];

export default {
    appProfile,
    myProfile,
    categories,
    menu,
    office,
};
