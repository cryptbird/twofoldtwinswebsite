import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";

import productImg04 from "../Images/single-sofa-01.jpg";
import productImg05 from "../Images/single-sofa-02.jpg";
import productImg06 from "../Images/single-sofa-03.jpg";
import productImg007 from "../Images/single-sofa-04.png";

import productImg07 from "../Images/arm-chair-01.jpg";
import productImg08 from "../Images/arm-chair-02.jpg";
import productImg09 from "../Images/arm-chair-03.jpg";
import productImg10 from "../Images/arm-chair-01.jpg";

import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";
import phone08 from "../Images/phone-08.png";

import watch01 from "../Images/watch-01.jpg";
import watch02 from "../Images/watch-02.jpg";
import watch03 from "../Images/watch-03.jpg";
import watch04 from "../Images/watch-04.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

import sofaSlide from "../Images/hero-img.png";
import watchSlide from "../Images/watch-07.png";

export const SliderData = [
  {
      id: 1,
      title: "50% Off For Your First Shopping",
      desc: "Discover our exclusive collection of premium furniture and home decor. Shop now and transform your living space with our stylish designs.",
      cover: sofaSlide,
  },
  {
      id: 2,
      title: "50% Off For Your First Shopping",
      desc: "Get the latest smartphones and accessories at unbeatable prices. Stay connected with our cutting-edge technology collection.",
      cover: phone08,
  },
  {
      id: 3,
      title: "50% Off For Your First Shopping",
      desc: "Experience crystal-clear sound with our premium wireless headphones. Perfect for music lovers and professionals.",
      cover: wireless01,
  },
  {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Elevate your style with our luxury watch collection. Timepieces that make a statement.",
      cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "Free delivery on orders over ₹499",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "100% secure payment methods",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Secure Payment",
    subtitle: "SSL encrypted checkout",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: "Back Guarantee",
    subtitle: "30-day money-back guarantee",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Stone and Beam Westview",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    discount: 30,
    shortDesc: "Elegant and comfortable 3-seater sofa with premium fabric upholstery and sturdy wooden frame.",
    description: "The Stone and Beam Westview sofa combines style and comfort perfectly. Features include high-density foam cushions, premium fabric upholstery, and a solid wooden frame. Perfect for modern living rooms, this sofa offers excellent support and durability. Available in multiple color options to match your home decor.",
    reviews: [
      {
        rating: 4.7,
        text: "Excellent quality and very comfortable. The fabric is durable and easy to clean.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    discount: 20,
    shortDesc: "Contemporary design with clean lines and premium leather upholstery.",
    description: "The Rivet Bigelow Modern sofa features a sleek, contemporary design with premium leather upholstery. Its ergonomic design provides optimal comfort while maintaining a sophisticated look. The sofa includes adjustable headrests and lumbar support for personalized comfort. Perfect for modern homes and offices.",
    reviews: [
      {
        rating: 4.8,
        text: "Beautiful design and very comfortable. The leather quality is exceptional.",
      },
      {
        rating: 4.8,
        text: "Perfect addition to our modern living room. Easy to assemble.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    discount: 15,
    shortDesc: "Ergonomic office chair with adjustable height and lumbar support.",
    description: "The Baltsar Chair is designed for maximum comfort during long work hours. Features include adjustable height, lumbar support, and breathable mesh backrest. The chair's ergonomic design helps maintain proper posture and reduce back strain. Perfect for home offices and workstations.",
    reviews: [
      {
        rating: 4.6,
        text: "Very comfortable for long work sessions. The lumbar support is excellent.",
      },
      {
        rating: 4.9,
        text: "Great value for money. Assembly was straightforward.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    discount: 35,
    shortDesc: "Modern accent chair with premium fabric and sturdy construction.",
    description: "The Helmar Chair combines contemporary design with exceptional comfort. Features premium fabric upholstery, solid wood frame, and plush cushioning. Perfect for reading corners or as an accent piece in living rooms. Available in multiple color options to match your decor.",
    reviews: [
      {
        rating: 4.6,
        text: "Beautiful chair that adds style to any room. Very comfortable.",
      },
      {
        rating: 4.9,
        text: "Excellent quality and craftsmanship. Worth every penny.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    discount: 10,
    shortDesc: "Powerful smartphone with 64MP camera and 5000mAh battery.",
    description: "The Realme 8 offers exceptional value with its powerful features. Equipped with a 64MP quad-camera system, 5000mAh battery, and 6.4-inch Super AMOLED display. The device runs on the latest Android OS and supports fast charging. Perfect for photography enthusiasts and power users.",
    reviews: [
      {
        rating: 4.8,
        text: "Great camera quality and battery life. Perfect for daily use.",
      },
      {
        rating: 4.9,
        text: "Excellent value for money. Performance is smooth.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    discount: 5,
    shortDesc: "Premium smartphone with 5G capability and advanced camera system.",
    description: "The OnePlus Nord delivers flagship features at a competitive price. Features include 5G connectivity, 48MP quad-camera system, and 90Hz AMOLED display. The device offers smooth performance with its powerful processor and optimized OxygenOS. Perfect for tech enthusiasts.",
    reviews: [
      {
        rating: 4.8,
        text: "Fast performance and excellent camera. 5G works great.",
      },
      {
        rating: 4.9,
        text: "Best value flagship phone. Battery life is impressive.",
      },
    ],
    avgRating: 4.8,
  },
];

export const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    shortDesc: "Elegant and comfortable 3-seater sofa with premium fabric upholstery and sturdy wooden frame.",
    description: "The Stone and Beam Westview sofa combines style and comfort perfectly. Features include high-density foam cushions, premium fabric upholstery, and a solid wooden frame. Perfect for modern living rooms, this sofa offers excellent support and durability. Available in multiple color options to match your home decor.",
    reviews: [
      {
        rating: 4.7,
        text: "Excellent quality and very comfortable. The fabric is durable and easy to clean.",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Rivet Bigelow Modern",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc: "Contemporary design with clean lines and premium leather upholstery.",
    description: "The Rivet Bigelow Modern sofa features a sleek, contemporary design with premium leather upholstery. Its ergonomic design provides optimal comfort while maintaining a sophisticated look. The sofa includes adjustable headrests and lumbar support for personalized comfort. Perfect for modern homes and offices.",
    reviews: [
      {
        rating: 4.8,
        text: "Beautiful design and very comfortable. The leather quality is exceptional.",
      },
      {
        rating: 4.8,
        text: "Perfect addition to our modern living room. Easy to assemble.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: productImg03,
    category: "sofa",
    price: 173,
    shortDesc: "Versatile 2-seater sofa with modern design and comfortable cushioning.",
    description: "The Amazon Brand Modern Sofa offers the perfect blend of style and functionality. Features include high-quality foam cushions, durable fabric upholstery, and a sturdy wooden frame. The compact design makes it ideal for apartments and small living spaces. Available in multiple color options.",
    reviews: [
      {
        rating: 4.6,
        text: "Great value for money. Very comfortable and stylish.",
      },
      {
        rating: 4.9,
        text: "Perfect size for our apartment. Quality is excellent.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg04,
    category: "sofa",
    price: 163,
    shortDesc: "Plush and cozy sofa with sheepskin-like upholstery for ultimate comfort.",
    description: "The Fllufy Sheep Sofa brings luxury and comfort to your living space. Features premium plush upholstery that mimics sheepskin, providing a soft and cozy seating experience. The sofa's ergonomic design ensures proper support while maintaining a stylish appearance. Perfect for creating a warm and inviting atmosphere.",
    reviews: [
      {
        rating: 4.6,
        text: "Super comfortable and looks great in our living room.",
      },
      {
        rating: 4.9,
        text: "The plush upholstery is amazing. Very cozy to sit on.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Faux Velvet Sofa",
    imgUrl: productImg05,
    category: "sofa",
    price: 163,
    shortDesc: "Luxurious velvet-like sofa with elegant design and comfortable seating.",
    description: "The Faux Velvet Sofa combines luxury with practicality. Features premium velvet-like upholstery that's easy to clean and maintain. The sofa's elegant design includes decorative stitching and plush cushions for maximum comfort. Perfect for creating a sophisticated living space.",
    reviews: [
      {
        rating: 4.6,
        text: "Beautiful velvet finish. Very comfortable and stylish.",
      },
      {
        rating: 4.9,
        text: "Great quality and easy to maintain. Looks expensive.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg06,
    category: "sofa",
    price: 163,
    shortDesc: "Modern sectional sofa with plush upholstery and modular design.",
    description: "The Fllufy Sheep Sectional Sofa offers versatility and comfort. Features include modular design for customizable layouts, premium plush upholstery, and sturdy construction. The sofa's sectional design allows for various seating arrangements to suit your space. Perfect for modern homes.",
    reviews: [
      {
        rating: 4.6,
        text: "Love the modular design. Very comfortable and versatile.",
      },
      {
        rating: 4.9,
        text: "Perfect for our open-concept living room. Quality is excellent.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Sakarias Armchair",
    imgUrl: productImg07,
    category: "chair",
    price: 99,
    shortDesc: "Modern armchair with ergonomic design and premium upholstery.",
    description: "The Sakarias Armchair combines contemporary style with ergonomic comfort. Features include premium fabric upholstery, padded armrests, and a supportive backrest. The chair's compact design makes it perfect for reading corners or as an accent piece. Available in multiple color options.",
    reviews: [
      {
        rating: 4.6,
        text: "Very comfortable and stylish. Perfect for reading.",
      },
      {
        rating: 4.9,
        text: "Great quality and easy to assemble. Looks great in our home.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Modern Arm Sofa",
    imgUrl: productImg007,
    category: "sofa",
    price: 173,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    shortDesc: "Ergonomic office chair with adjustable height and lumbar support.",
    description: "The Baltsar Chair is designed for maximum comfort during long work hours. Features include adjustable height, lumbar support, and breathable mesh backrest. The chair's ergonomic design helps maintain proper posture and reduce back strain. Perfect for home offices and workstations.",
    reviews: [
      {
        rating: 4.6,
        text: "Very comfortable for long work sessions. The lumbar support is excellent.",
      },
      {
        rating: 4.9,
        text: "Great value for money. Assembly was straightforward.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    shortDesc: "Modern accent chair with premium fabric and sturdy construction.",
    description: "The Helmar Chair combines contemporary design with exceptional comfort. Features premium fabric upholstery, solid wood frame, and plush cushioning. Perfect for reading corners or as an accent piece in living rooms. Available in multiple color options to match your decor.",
    reviews: [
      {
        rating: 4.6,
        text: "Beautiful chair that adds style to any room. Very comfortable.",
      },
      {
        rating: 4.9,
        text: "Excellent quality and craftsmanship. Worth every penny.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Apple iPhone 12 Pro",
    imgUrl: phone01,
    category: "mobile",
    price: 799,
    shortDesc: "Premium smartphone with advanced camera system and 5G capability.",
    description: "The Apple iPhone 12 Pro delivers professional-grade features in a sleek design. Features include a triple-camera system with LiDAR scanner, 5G connectivity, and A14 Bionic chip. The device offers exceptional performance and advanced photography capabilities. Perfect for professionals and content creators.",
    reviews: [
      {
        rating: 4.8,
        text: "Excellent camera quality and performance. 5G works great.",
      },
      {
        rating: 4.9,
        text: "Best iPhone yet. Battery life is impressive.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Sakarias Armchair",
    imgUrl: productImg10,
    category: "chair",
    price: 99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: "Apple iPhone 12 Max",
    imgUrl: phone02,
    category: "mobile",
    price: 799,
    shortDesc: "Large-screen iPhone with advanced features and premium design.",
    description: "The Apple iPhone 12 Max offers a larger display and enhanced features. Features include a 6.7-inch Super Retina XDR display, A14 Bionic chip, and advanced camera system. The device provides an immersive viewing experience and powerful performance. Perfect for multimedia enthusiasts.",
    reviews: [
      {
        rating: 4.8,
        text: "Amazing display and camera. Performance is smooth.",
      },
      {
        rating: 4.9,
        text: "Perfect for watching videos and gaming.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Apple iPhone 13 Pro",
    imgUrl: phone05,
    category: "mobile",
    price: 899,
    shortDesc: "Latest iPhone with Pro camera system and advanced features.",
    description: "The Apple iPhone 13 Pro sets new standards for smartphone photography and performance. Features include a Pro camera system with macro photography, A15 Bionic chip, and ProMotion display. The device offers professional-grade capabilities in a compact form. Perfect for content creators and power users.",
    reviews: [
      {
        rating: 4.8,
        text: "Incredible camera system. Macro photography is amazing.",
      },
      {
        rating: 4.9,
        text: "Best iPhone for photography. Performance is outstanding.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Samsung Galaxy S22",
    imgUrl: phone06,
    category: "mobile",
    price: 699,
    shortDesc: "Flagship Android smartphone with advanced features and premium design.",
    description: "The Samsung Galaxy S22 offers a premium Android experience. Features include a powerful processor, advanced camera system, and stunning display. The device provides seamless performance and excellent battery life. Perfect for Android enthusiasts and power users.",
    reviews: [
      {
        rating: 4.8,
        text: "Excellent Android flagship. Camera quality is superb.",
      },
      {
        rating: 4.9,
        text: "Great performance and battery life. Design is beautiful.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Rolex Watch",
    imgUrl: watch01,
    category: "watch",
    price: 299,
    shortDesc: "Luxury timepiece with classic design and precise movement.",
    description: "The Rolex-inspired watch combines elegance with precision. Features include a stainless steel case, sapphire crystal, and reliable movement. The watch's classic design makes it suitable for both formal and casual occasions. Perfect for watch enthusiasts.",
    reviews: [
      {
        rating: 4.8,
        text: "Beautiful design and accurate timekeeping. Looks expensive.",
      },
      {
        rating: 4.9,
        text: "Excellent quality and craftsmanship. Worth the investment.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Timex Easy Reader Watch",
    imgUrl: watch02,
    category: "watch",
    price: 299,
    shortDesc: "Classic timepiece with easy-to-read dial and reliable movement.",
    description: "The Timex Easy Reader Watch offers simplicity and reliability. Features include a clear, easy-to-read dial, durable construction, and accurate movement. The watch's classic design makes it suitable for everyday wear. Perfect for those who prefer traditional timepieces.",
    reviews: [
      {
        rating: 4.8,
        text: "Very readable and reliable. Great everyday watch.",
      },
      {
        rating: 4.9,
        text: "Simple and elegant design. Battery life is excellent.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "Rolex Watch",
    imgUrl: watch03,
    category: "watch",
    price: 299,
    shortDesc: "Premium timepiece with sophisticated design and precise movement.",
    description: "The Rolex-inspired watch features a sophisticated design and reliable movement. Includes a stainless steel case, scratch-resistant crystal, and precise timekeeping. The watch's elegant appearance makes it suitable for special occasions. Perfect for watch collectors.",
    reviews: [
      {
        rating: 4.8,
        text: "Beautiful design and accurate movement. Looks luxurious.",
      },
      {
        rating: 4.9,
        text: "Excellent quality and attention to detail.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Apple Watch",
    imgUrl: watch04,
    category: "watch",
    price: 399,
    shortDesc: "Smartwatch with health tracking and cellular connectivity.",
    description: "The Apple Watch combines style with advanced technology. Features include health monitoring, cellular connectivity, and a bright display. The watch offers seamless integration with iOS devices and comprehensive fitness tracking. Perfect for tech-savvy individuals.",
    reviews: [
      {
        rating: 4.8,
        text: "Great health tracking features. Cellular works well.",
      },
      {
        rating: 4.9,
        text: "Perfect companion for iPhone users. Battery life is good.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Beat Studio Wireless",
    imgUrl: wireless01,
    category: "wireless",
    price: 199,
    shortDesc: "Premium wireless headphones with active noise cancellation.",
    description: "The Beat Studio Wireless headphones deliver exceptional sound quality and comfort. Features include active noise cancellation, wireless connectivity, and long battery life. The headphones provide immersive audio experience and crystal-clear sound. Perfect for music enthusiasts.",
    reviews: [
      {
        rating: 4.8,
        text: "Amazing sound quality. Noise cancellation works great.",
      },
      {
        rating: 4.9,
        text: "Very comfortable for long listening sessions.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "Beat EP Headphones",
    imgUrl: wireless03,
    category: "wireless",
    price: 199,
    shortDesc: "Wireless headphones with premium sound and comfortable design.",
    description: "The Beat EP Headphones offer premium sound quality and comfort. Features include wireless connectivity, built-in controls, and long battery life. The headphones provide rich, balanced sound and a comfortable fit. Perfect for daily use.",
    reviews: [
      {
        rating: 4.8,
        text: "Great sound quality and comfortable fit.",
      },
      {
        rating: 4.9,
        text: "Excellent battery life. Easy to use.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "22",
    productName: "Black Headphones",
    imgUrl: wireless02,
    category: "wireless",
    price: 169,
    shortDesc: "Stylish wireless headphones with premium sound quality.",
    description: "The Black Headphones combine style with performance. Features include wireless connectivity, built-in microphone, and comfortable ear cushions. The headphones deliver clear, balanced sound and a sleek design. Perfect for everyday use.",
    reviews: [
      {
        rating: 4.8,
        text: "Great sound quality and stylish design.",
      },
      {
        rating: 4.9,
        text: "Very comfortable and easy to use.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "23",
    productName: "Bluetooth Headphones",
    imgUrl: wireless04,
    category: "wireless",
    price: 139,
    shortDesc: "Affordable wireless headphones with reliable performance.",
    description: "The Bluetooth Headphones offer reliable wireless audio at an affordable price. Features include stable Bluetooth connection, built-in controls, and comfortable fit. The headphones provide clear sound and long battery life. Perfect for budget-conscious users.",
    reviews: [
      {
        rating: 4.8,
        text: "Great value for money. Sound quality is good.",
      },
      {
        rating: 4.9,
        text: "Reliable connection and comfortable to wear.",
      },
    ],
    avgRating: 4.8,
  },

];
