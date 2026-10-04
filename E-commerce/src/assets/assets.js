import p_img1 from './p_img1.jpeg'
import p_img2_1 from './p_img2_1.jpg'
import p_img2_2 from './p_img2_2.jpg'
import p_img2_3 from './p_img2_3.jpg'
import p_img2_4 from './p_img2_4.jpg'
import p_img3 from './p_img3.webp'
import p_img4 from './p_img4.webp'
import p_img5 from './p_img5.webp'
import p_img6 from './p_img6.webp'
import p_img7 from './p_img7.jpg'
import p_img8 from './p_img8.webp'
import p_img9 from './p_img9.webp'
import p_img10 from './p_img10.jpg'
import p_img11 from './p_img11.webp'
import p_img12 from './p_img12.jpg'
import p_img13 from './p_img13.jpeg'
import p_img14 from './p_img14.jpeg'
import p_img15 from './p_img15.jpg'
import p_img16 from './p_img16.webp'
import p_img17 from './p_img17.jpg'
import p_img18 from './p_img18.webp'
import p_img19 from './p_img19.webp'
import p_img20 from './p_img20.jpg'
import p_img21 from './p_img21.jpg'
import p_img22 from './p_img22.jpg'
import p_img23 from './p_img23.webp'
import p_img24 from './p_img24.webp'
import p_img25 from './p_img25.webp'
import p_img26 from './p_img26.jpg'
import p_img27 from './p_img27.webp'
import p_img28 from './p_img28.jpg'
import p_img29 from './p_img29.webp'
import p_img30 from './p_img30.webp'
import p_img31 from './p_img31.webp'
import p_img32 from './p_img32.webp'
import p_img33 from './p_img33.webp'
import p_img34 from './p_img34.jpg'
import p_img35 from './p_img35.jpg'
import p_img36 from './p_img36.jpg'
import p_img37 from './p_img37.webp'
import p_img38 from './p_img38.jpg'
import p_img39 from './p_img39.jpg'
import p_img40 from './p_img40.jpg'
import p_img41 from './p_img41.jpg'
import p_img42 from './p_img42.webp'
import p_img43 from './p_img43.webp'
import p_img44 from './p_img44.jpg'
import p_img45 from './p_img45.jpg'
import p_img46 from './p_img46.jpg'
import p_img47 from './p_img47.webp'
import p_img48 from './p_img48.jpg'
import p_img49 from './p_img49.webp'
import p_img50 from './p_img50.webp'
import p_img51 from './p_img51.jpg'
import p_img52 from './p_img52.jpg'


import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.jpg'
import contact_img from './contact_img.jpg'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Women Jacket with Embroidered",
        description: "Blue solid jacket with embroidered, has a spread collar, 2 pockets",
        price: 234,
        image: [p_img1],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Men Straight Kurta",
        description: "woven design straight kurta, has a mandarin collar, long sleeves",
        price: 345,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Girls Printed Flared Skirt ",
        description: "printed knee length flared skirt, has an elasticated waistband with back button closure and flared hem Come with attached shorts",
        price: 345,
        image: [p_img3],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Men Casual Shirt",
        description: "casual shirt Cutaway collarButton placketPatch pocketShort sleeves Straight hemline",
        price: 367,
        image: [p_img4],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Super Cotton French Styled Jacket ",
        description: "Regular Fit Engineered to Prevent Ride Up All Over Print Design",
        price: 567,
        image: [p_img5],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
       name: "Girls Printed Flared Skirt ",
        description: "printed knee length flared skirt, has an elasticated waistband with back button closure and flared hem Come with attached shorts",
        price: 757,
        image: [p_img6],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Men Slim Fit Jeans",
        description: " 5-pocket mid-rise jeans, clean look, no fade, has a button and zip closure",
        price: 656,
        image: [p_img7],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Men Casual Shirt",
        description: "casual shirt Cutaway collarButton placketPatch pocketShort sleeves Straight hemline",
        price: 456,
        image: [p_img8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Girls Round Neck Cotton Top",
        description: "Girls Round Neck Cotton Top",
        price: 177,
        image: [p_img9],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Men Slim Fit Jeans",
        description: " 5-pocket mid-rise jeans, clean look, no fade, has a button and zip closure",
        price: 359,
        image: [p_img10],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Men Casual T-Shirt",
        description: "casual shirt Cutaway collarButton placketPatch pocketShort sleeves Straight hemline",
        price: 256,
        image: [p_img11],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Men Formal Shoot and Shirt",
        description: "Men Formal Shoot and Shirt",
        price: 677,
        image: [p_img12],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Super Cotton French Styled Jacket ",
        description: "Regular Fit Engineered to Prevent Ride Up All Over Print Design",
        price: 765,
        image: [p_img13],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Women Crew Neck T-Shirt",
        description: "Black solid lounge t-shirt, has a crew neck",
        price: 876,
        image: [p_img14],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Men Slim Fit Jeans",
        description: "Men Slim Fit Jeans",
        price: 657,
        image: [p_img15],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
       name: "Girls Printed Flared Skirt",
        description: "printed knee length flared skirt, has an elasticated waistband with back button closure and flared hem Come with attached shorts",
        price: 678,
        image: [p_img16],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
       name: "Men Slim Fit Jeans",
        description: " 5-pocket mid-rise jeans, clean look, no fade, has a button and zip closure",
        price: 556,
        image: [p_img17],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Kids Cotton T-shirt",
        description: "Tshirt for kids Solid Regular length",
        price: 789,
        image: [p_img18],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Kids Cotton T-shirt",
        description: "Tshirt for kids Solid Regular length",
        price: 768,
        image: [p_img19],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Women Wide Leg Stretchable Jeans",
        description: "Dark shade, no fade black jeans Wide leg, mid-rise Clean look Stretchable",
        price: 366,
        image: [p_img20],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "Super Cotton French Styled Jacket ",
        description: "Regular Fit Engineered to Prevent Ride Up All Over Print Design",
        price: 787,
        image: [p_img21],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaav",
        name: "Women Wide Leg Stretchable Jeans",
        description: "Dark shade, no fade black jeans Wide leg, mid-rise Clean look Stretchable",
        price: 228,
        image: [p_img22],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716635445448,
        bestseller: false
    },
    {
        _id: "aaaaw",
        name: "Kids Cotton T-shirt",
        description: "Tshirt for kids Solid Regular length",
        price: 989,
        image: [p_img23],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716636545448,
        bestseller: false
    },
    {
        _id: "aaaax",
        name: "Girls Printed Flared Skirt ",
        description: "printed knee length flared skirt, has an elasticated waistband with back button closure and flared hem Come with attached shorts",
        price: 445,
        image: [p_img24],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716637645448,
        bestseller: false
    },
    {
        _id: "aaaay",
        name: "Girls Printed Flared Skirt ",
        description: "printed knee length flared skirt, has an elasticated waistband with back button closure and flared hem Come with attached shorts",
        price: 365,
        image: [p_img25],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716638745448,
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "Super Cotton French Styled Jacket ",
        description: "Regular Fit Engineered to Prevent Ride Up All Over Print Design",
        price: 564,
        image: [p_img26],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "aaaba",
       name: "Girls Printed Flared Skirt ",
        description: "printed knee length flared skirt, has an elasticated waistband with back button closure and flared hem Come with attached shorts",
        price: 686,
        image: [p_img27],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716640945448,
        bestseller: false
    },
    {
        _id: "aaabb",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "Men Slim Fit Relaxed Denim Jacket",
        price: 977,
        image: [p_img28],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Women Lehenga",
        description: "solid lehenga choli with dupatta, zari",
        price: 766,
        image: [p_img29],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "aaabd",
      name: "Girls Printed Flared Skirt ",
        description: "printed knee length flared skirt, has an elasticated waistband with back button closure and flared hem Come with attached shorts",
        price: 679,
        image: [p_img30],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716644245448,
        bestseller: false
    },
    {
        _id: "aaabe",
        name: "Men Casual Shirt",
        description: "Men Casual Shirt",
        price: 698,
        image: [p_img31],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "Men Casual T-Shirt",
        description: "casual shirt Cutaway collarButton placketPatch pocketShort sleeves Straight hemline",
        price: 899,
        image: [p_img32],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716646445448,
        bestseller: false
    },
    {
        _id: "aaabg",
        name: "Girls Printed Flared Skirt ",
        description: "printed knee length flared skirt, has an elasticated waistband with back button closure and flared hem Come with attached shorts",
        price: 867,
        image: [p_img33],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716647545448,
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "Women Cotton Skirt",
        description: "Printed Skirt,has slip-on closure",
        price: 454,
        image: [p_img34],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716648645448,
        bestseller: false
    },
    {
        _id: "aaabi",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "Women Zip-Front Relaxed Fit Jacket",
        price: 350,
        image: [p_img35],
        name: "Super Cotton French Styled Jacket ",
        description: "Regular Fit Engineered to Prevent Ride Up All Over Print Design",
        sizes: ["S", "M", "L", "XL"],
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Super Cotton French Styled Jacket ",
        description: "Regular Fit Engineered to Prevent Ride Up All Over Print Design",
        price: 789,
        image: [p_img36],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716650845448,
        bestseller: false
    },
    {
        _id: "aaabk",
        name: "Women Lehenga",
        description: "solid lehenga choli with dupatta, zari",
        price: 678,
        image: [p_img37],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716651945448,
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Men Casual Shirt",
        description: "Men Casual Shirt",
        price: 884,
        image: [p_img38],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716653045448,
        bestseller: false
    },
    {
        _id: "aaabm",
        name: "Men Casual T-Shirt",
        description: "casual shirt Cutaway collarButton placketPatch pocketShort sleeves Straight hemline",
        price: 234,
        image: [p_img39],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716654145448,
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "Men Slim Fit Relaxed Denim Jacket",
        price: 1579,
        image: [p_img40],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716655245448,
        bestseller: false
    },
    {
        _id: "aaabo",
        name: "Men Casual Shirt",
        description: "Men Casual Shirt",
        price: 676,
        image: [p_img41],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716656345448,
        bestseller: false
    },
    {
        _id: "aaabp",
        name: "Kids Cotton T-shirt",
        description: "Tshirt for kids Solid Regular length",
        price: 567,
        image: [p_img42],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716657445448,
        bestseller: false
    },
    {
        _id: "aaabq",
        name: "Boys Cotton Pants",
        description: "solid Regular Fit mid-rise trackpants , has an elasticated waistband with drawstring closure and two pockets",
        price: 875,
        image: [p_img43],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716658545448,
        bestseller: false
    },
    {
        _id: "aaabr",
        name: "Super Cotton French Styled Jacket ",
        description: "Regular Fit Engineered to Prevent Ride Up All Over Print Design",
        price: 836,
        image: [p_img44],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716659645448,
        bestseller: false
    },
    {
        _id: "aaabs",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "Men Slim Fit Relaxed Denim Jacket",
        price: 670,
        image: [p_img45],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716660745448,
        bestseller: false
    },
    {
        _id: "aaabt",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "Men Slim Fit Relaxed Denim Jacket",
        price: 3458,
        image: [p_img46],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716661845448,
        bestseller: false
    },
    {
        _id: "aaabu",
        name: "Boys Cotton Pants",
        description: "solid Regular Fit mid-rise trackpants , has an elasticated waistband with drawstring closure and two pockets",
        price: 654,
        image: [p_img47],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716662945448,
        bestseller: false
    },
    {
        _id: "aaabv",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "Men Slim Fit Relaxed Denim Jacket",
        price: 873,
        image: [p_img48],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716664045448,
        bestseller: false
    },
    {
        _id: "aaabw",
        name: "Boys Cotton Pants",
        description: "solid Regular Fit mid-rise trackpants , has an elasticated waistband with drawstring closure and two pockets",
        price: 134,
        image: [p_img49],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716665145448,
        bestseller: false
    },
    {
        _id: "aaabx",
        name: "Boys Cotton Pants",
        description: "solid Regular Fit mid-rise trackpants , has an elasticated waistband with drawstring closure and two pockets",
        price: 450,
        image: [p_img50],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716666245448, bestseller: false
    },
    {
        _id: "aaaby",
        name: "Super Cotton French Styled Jacket ",
        description: "Regular Fit Engineered to Prevent Ride Up All Over Print Design",
        price: 4569,
        image: [p_img51],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716667345448,
        bestseller: false
    },
    {
        _id: "aaabz",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "Men Slim Fit Relaxed Denim Jacket",
        price: 3454,
        image: [p_img52],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716668445448,
        bestseller: false
    }

]