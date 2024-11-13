import camtien from '../img/camtien.jpg'
import thanhtin from '../img/thanhtin.jpg'
import thienan from '../img/thienan.png'
import vongoc from '../img/ngoc.png'
import camtien2 from '../img/454006364_1634053407434602_307973945687490064_n.jpg'
import pawBig from "../img/img-vector-7-91x92.png";
import heart from "../img/img-vector-8-88x91.png";
import bone from "../img/img-vector-9-116x99.png";
import start from "../img/img-vector-10-97x99.png";
import grooming from '../img/grooming.png'
import hotel from '../img/pet-hotel.png'
import academy from '../img/academy.png'
import img1 from '../img/info-box-best-activity-425x313.png'
import img2 from '../img/info-box-care-4-425x313.png'
import img3 from '../img/info-box-cats-hotel-425x313.png'
import img4 from '../img/info-box-vet-care-1-425x313.png'
import img5 from '../img/info-box-care-4-425x313.png'

import bgInfoBox1 from '../img/info-box-best-activity-decoration.png'
import bgInfoBox2 from '../img/info-box-best-activity-decoration.png'
import bgInfoBox3 from '../img/info-box-cats-hotel-decoration.png'
import bgInfoBox4 from '../img/info-box-best-activity-decoration.png'
import bgInfoBox5 from '../img/info-box-cats-hotel-decoration.png'

import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";

export const dataRoutes = [
    {
        title: "Trang chủ",
        href: "/",
        Icon: BiHomeAlt2,

    },
    {
        title: "Cửa hàng",
        href: "/shop",
        Icon: FiSearch,

    },
    {
        title: "Academy",
        href: "/academy",
        Icon: IoPricetagsOutline,

    },
    {
        title: "Liên hệ",
        href: "/contact",
        Icon: PiChatCircleBold,

    },
]


export const dataSevce = [
    {
        id: 1,
        img: img1,
        name: 'Hotel For Pets',
        title: 'Pawscare is the largest specialty pet retailer of services and solutions.',
        bg: bgInfoBox1,
    },
    {
        id: 2,
        img: img2,
        name: 'Veterinary Care',
        title: 'Pawscare is the largest specialty pet retailer of services and solutions.',
        bg: bgInfoBox2,
    },
    {
        id: 3,
        img: img3,
        name: 'Best Activity',
        title: 'Pawscare is the largest specialty pet retailer of services and solutions.',
        bg: bgInfoBox3,
    },
    {
        id: 4,
        img: img4,
        name: 'Incredible Team',
        title: 'Pawscare is the largest specialty pet retailer of services and solutions.',
        bg: bgInfoBox4,
    },
    {
        id: 5,
        img: img5,
        name: 'Walks Pet',
        title: 'Pawscare is the largest specialty pet retailer of services and solutions.',
        bg: bgInfoBox5,
    },
]

export const dataOurTeam = [
    {
        delay: '100',
        name: 'Dương Cẩm Tiên',
        img: camtien,
        position: 'TRAINING MANAGER - GROOMER',
        tw: '',
        fb: 'fb.com/camtien.duong.777',
        in: 'https://www.instagram.com/cengrooming',
        ins: '',
    },
    {
        delay: '150',
        name: 'Thành Tín',
        img: thanhtin,
        position: 'MANAGER',
        tw: '',
        fb: 'fb.com/thanhtin412',
        in: 'https://www.instagram.com/cengrooming',
        ins: '',
    },
    {
        delay: '200',
        name: 'Thiên Ân',
        img: thienan,
        position: 'MARKETING',
        tw: '',
        fb: 'https://www.facebook.com/an.hong.96930013',
        in: '',
        ins: '',
    },
    {
        delay: '100',
        name: 'Võ Ngọc',
        img: vongoc,
        position: 'GROOMER',
        tw: '',
        fb: 'fb.com/camtien.duong.777',
        in: '',
        ins: '',
    },
    {
        delay: '150',
        name: 'Dương Cẩm Tiên',
        img: camtien,
        position: 'TRAINING MANAGER - GROOMER',
        tw: '',
        fb: 'fb.com/camtien.duong.777',
        in: '',
        ins: '',
    },
    {
        delay: '200',
        name: 'Dương Cẩm Tiên',
        img: camtien2,
        position: 'GROOMER',
        tw: '',
        fb: 'fb.com/camtien.duong.777',
        in: '',
        ins: '',
    },
]


export const dataSectionServiceBig = [
    {
        name: 'Pet Boarding',
        subtitle: 'Nibh consequ pretium luctus  empor orci pharetra magna placerat veauris.',
        img: pawBig,
    },
    {
        name: 'Pet Adroption',
        subtitle: 'Sapien pellentesque habitant morbi tristique senectu dolor netus malesuada.',
        img: heart,
    },
    {
        name: 'Pet Food',
        subtitle: 'Eget nunc lobortis mattis aliquam faucibus diam vel quam elementum.',
        img: bone,
    },
    {
        name: 'Five Star Service',
        subtitle: 'Diam in arcu cursus euismod quis viverra nibh. Auctor elit sed vulputate mi sit.',
        img: start,
    }
]

export const dataSectionservice = [
    {
        name: 'Pet Grooming',
        subtitle: 'Making dogs & cats look great is our passion !',
        img: grooming,
    },
    {
        name: 'Pet Academy',
        subtitle: 'Đào tạo trở thành groomer chuyên nghiệp !',
        img: academy,
    },
    {
        name: 'Pet Food',
        subtitle: 'Place for dogs & cats to stay while you’re away !',
        img: hotel,
    },
]

export const dataBenefit = [
    {
        id: '1',
        name: 'Quality toys & food for your pets',
        subtitle: 'Please be aware that you will be charged forthe rest of your pet’s meals up to $5/meal. If you do not bring your pet’s own food, we offer our Fromm’s house cuisine.',
        
    },
    {
        id: '2',
        name: 'Premium pet care for your friend',
        subtitle: 'Please be aware that you will be charged forthe rest of your pet’s meals up to $5/meal. If you do not bring your pet’s own food, we offer our Fromm’s house cuisine.',
        
    },
    {
        id: '3',
        name: 'Incredible salon pet services',
        subtitle: 'Please be aware that you will be charged forthe rest of your pet’s meals up to $5/meal. If you do not bring your pet’s own food, we offer our Fromm’s house cuisine.',
        
    },
    {
        id: '4',
        name: 'Indoor & outdoor activities for pets',
        subtitle: 'Please be aware that you will be charged forthe rest of your pet’s meals up to $5/meal. If you do not bring your pet’s own food, we offer our Fromm’s house cuisine.',
        
    },
]