const screens = {
    main_layout: "MainLayout",
    home: "Home",
    event: "Event",
    office: "Kantor",
    notification: "Notifikasi",
    article: "Article",
    help: "Pusat Bantuan",
    setting: "Pengaturan",
    logout: "Logout",
    invite: "Undang Teman",
    profile: "Profile",
};

const bottom_tabs = [
    {
        id: 1,
        label: screens.home,
    },
    {
        id: 2,
        label: screens.article,
    },
    {
        id: 3,
        label: screens.event,
    },
    {
        id: 4,
        label: screens.office,
    },
    {
        id: 5,
        label: screens.profile,
    },
];

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins",
    },
    {
        id: 3,
        label: "30 Mins",
    },
];

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    },
];

const tags = [
    {
        id: 1,
        label: "Burger",
    },
    {
        id: 2,
        label: "Fast Food",
    },
    {
        id: 3,
        label: "Pizza",
    },
    {
        id: 4,
        label: "Asian",
    },
    {
        id: 5,
        label: "Dessert",
    },
    {
        id: 6,
        label: "Breakfast",
    },
    {
        id: 7,
        label: "Vegetable",
    },
    {
        id: 8,
        label: "Taccos",
    },
];

export default {
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags,
};
