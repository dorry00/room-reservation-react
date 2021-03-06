import b1 from "../src/Assets/images/rooms/bathroom1.jpg";
import b2 from "../src/Assets/images/rooms/bathroom2.jpg";
import b3 from "../src/Assets/images/rooms/bathroom3.jpg";
import b4 from "../src/Assets/images/rooms/bathroom4.jpg";
import c1 from "../src/Assets/images/rooms/closet1.jpg";
import c2 from "../src/Assets/images/rooms/closet2.jpg";
import r1 from "../src/Assets/images/rooms/room1.jpg";
import r3 from "../src/Assets/images/rooms/room3.jpg";
import r4 from "../src/Assets/images/rooms/room4.jpg";
import r5 from "../src/Assets/images/rooms/room5.jpg";
import r7 from "../src/Assets/images/rooms/room7.jpg";
import r8 from "../src/Assets/images/rooms/room8.jpg";
import r9 from "../src/Assets/images/rooms/room9.jpg";
import r10_c from "../src/Assets/images/rooms/room10_couple.jpg";
import r11_d from "../src/Assets/images/rooms/room11_double.jpg";
import r6_d from "../src/Assets/images/rooms/room6_double.jpg";
import r2_d from "../src/Assets/images/rooms/room2_double.jpg";
import by1 from "../src/Assets/images/Balcony1.jpg";
import by2 from "../src/Assets/images/Balcony2.jpg";
import w1 from "../src/Assets/images/WorkStation1.jpg";
import w2 from "../src/Assets/images/WorkStation2.jpg";
import w3 from "../src/Assets/images/WorkStation3.jpg";
import g from "../src/Assets/images/General.jpg";
import bkft from "../src/Assets/images/Breakfast.jpg";

export const data = [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "single-Economy",
      slug: "single-Economy",
      type: "single",
      price: 1500,
      size:200,
      capacity: 1,
      breakfast: false,
      pets:true,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo,
              street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. `,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r1,
        },
        {
          url: b1,
        },
        {
          url: c1,
        },
        {
          url: by1,
        },
        {
          url: w1,
        },
        {
          url: g,
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Double-Economy",
      slug: "Double-Economy",
      type: "family",
      size:100,
      price:2500,
      capacity: 2,
      breakfast: false,
      pets:false,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. `,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r2_d,
        },
        {
          url: b2,
        },
        {
          url: c2,
        },
        {
          url: by2,
        },
        {
          url: w2,
        },
        {
          url: g,
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "single-standard",
      slug: "single-standard",
      type: "single",
      price:3000, 
      size:130, 
      capacity: 1,
      breakfast: false,
      pets:false,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. `,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r3,
        },
        {
          url: b3,
        },
        {
          url: c1,
        },
        {
          url: by2,
        },
        {
          url: w3,
        },
        {
          url: g,
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "Delux",
      slug: "Delux",
      type: "family",
      price: 4000,
      size:180,
      capacity: 3,
      breakfast: true,
      pets:true,
      featured: true,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. `,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r4,
        },
        {
          url: b4,
        },
        {
          url: c2,
        },
        {
          url: by1,
        },
        {
          url: w1,
        },
        {
          url: g,
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "Double standard",
      slug: "Double standard",
      type: "pair",
      price: 2700,
      size:120,
      capacity: 2,
      breakfast: false,
      pets:true,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. `,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r5,
        },
        {
          url: b1,
        },
        {
          url: c1,
        },
        {
          url: by2,
        },
        {
          url: w3,
        },
        {
          url: g,
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "Double delux",
      slug: "Double delux",
      type: "pair",
      price: 3500,
      size:120,
      capacity: 2,
      pets:true,
      breakfast: true,
      featured: true,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. `,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r6_d,
        },
        {
          url: b3,
        },
        {
          url: c2,
        },
        {
          url: by2,
        },
        {
          url: w2,
        },
        {
          url: g,
        },
      ],
    },
  },
  {
    sys: {
      id: "7",
    },
    fields: {
      name: "single delux",
      slug: "single delux",
      type: "single",
      price: 5000,
      size:140,
      capacity: 1,
      breakfast: false,
      pets:false,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. `,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r7,
        },
        {
          url: b4,
        },
        {
          url: c1,
        },
        {
          url: by1,
        },
        {
          url: w1,
        },
        {
          url: g,
        },
      ],
    },
  },
  {
    sys: {
      id: "8",
    },
    fields: {
      name: "Delux",
      slug: "Delux",
      type: "family",
      price: 6000,
      size:300,
      capacity: 4,
      breakfast: true,
      pets:true,
      featured: true,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. `,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r8,
        },
        {
          url: b2,
        },
        {
          url: c2,
        },
        {
          url: by2,
        },
        {
          url: w3,
        },
        {
          url: g,
        },
      ],
    },
  },
  {
    sys: {
      id: "9",
    },
    fields: {
      name: "Couple Retreat",
      slug: "Couple Retreat",
      type: "couple",
      price: 7500,
      size:190,
      capacity: 2,
      breakfast: true,
      pets:false,
      featured: true,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. `,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r9,
        },
        {
          url: b1,
        },
        {
          url: c1,
        },
        {
          url: by1,
        },
        {
          url: w3,
        },
        {
          url: g,
        },
        {
          url: bkft,
        },
      ],
    },
  },
  {
    sys: {
      id: "10",
    },
    fields: {
      name: "Couple Retreat",
      slug: "Couple Retreat",
      type: "couple",
      price: 5500,
      size:200,
      capacity: 2,
      breakfast: true,
      pets:true,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. `,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r10_c,
        },
        {
          url: b4,
        },
        {
          url: c2,
        },
      ],
    },
  },
  {
    sys: {
      id: "11",
    },
    fields: {
      name: "family economy",
      slug: "family-economy",
      type: "pair",
      price: 4200,
      size:200,
      capacity: 2,
      breakfast: true,
      pets:true,
      featured: false,
      description: `A very descent room with the vibe of nature, beautiful view of the resort from
             the window and balcony to sit and relax.Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. `,
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          url: r11_d,
        },
        {
          url: b1,
        },
        {
          url: c1,
        },
      ],
    },
  },
];
export default data