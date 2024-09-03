import { FaTshirt, FaShippingFast, FaHeadset, FaHome, FaShoppingCart, FaInfoCircle, FaPhone, FaStore } from 'react-icons/fa';

export const perks = [
    {
        id: 1,
        icon: FaTshirt,
        title: "Exclusive Collection",
        desc: "Browse our curated selection of unique, high-quality fashion pieces you won't find anywhere else.",
    },
    {
        id: 2,
        icon: FaShippingFast,
        title: "Free Shipping",
        desc: "Enjoy fast and free shipping on all orders, with easy returns for a hassle-free shopping experience.",
    },
    {
        id: 3,
        icon: FaHeadset,
        title: "24/7 Support",
        desc: "We're here for you anytime, with dedicated customer service ready to assist you around the clock.",
    }
];

export const navItems = [
    {
        id: 1,
        label: "Home",
        href: "/",
        icon: FaHome,
    },
    {
        id: 2,
        label: "Shop",
        href: "/shop",
        icon: FaStore,
    },
    {
        id: 3,
        label: "About Us",
        href: "/about",
        icon: FaInfoCircle,
    },
    {
        id: 4,
        label: "Contact",
        href: "/contact",
        icon: FaPhone,
    }
];