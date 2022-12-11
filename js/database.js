const categories = [
    {
        id: 1,
        category: "Toys",
    },
    {
        id: 2,
        category: "Sports",
    },
    {
        id: 3,
        category: "Toys",
    },
    {
        id: 4,
        category: "Grocery",
    },
    {
        id: 5,
        category: "Garden",
    },
];

const products = [
    {
        id: 1,
        category_id: 2,
        name: "Borsh selyansky",
        description:
            "Traditional borscht with meat. We cook according to a classic Ukrainian recipe.",
        price: '32,25 EUR',
        image: 'image/food/ukrainianborscht.jpg',
    },
    {
        id: 2,
        category_id: 5,
        name: "Cello Aspro Mavro Ball Pen",
        description:
            "Cello Aspro Mavro Ball Pen has a comfortable grip for a tireless writing experience. This ball pen has a 0.7mm tip for fine writing",
        price: '167,45 EUR',
        image: 'image/stationery/aspro.jpg',
    },
    {
        id: 3,
        category_id: 2,
        name: "Varenyky with potatoes",
        description:
            "One of the most popular Ukrainian dishes. Tender dough with potato filling.",
        price: '13,60 EUR',
        image: 'image/food/varenyki.jpg',
    },
    {
        id: 4,
        category_id: 3,
        name: "NIKE - PARK TEAM BALL",
        description:
            "60% RUBBER 15% POLYURETHANE 13% POLYESTER 12% EVA",
        price: '125,20 EUR',
        image: 'image/sport/ball.png',
    },
    {
        id: 5,
        category_id: 3,
        name: "OBO CK Carbon Helmet",
        description:
            "Made from Carbon, Kevlar and specially formulated flexible resins; with a gel coat for maximum protection and durability.",
        price: '414,70 EUR',
        image: 'image/sport/carbon.webp',
    },
    {
        id: 6,
        category_id: 2,
        name: "Syrnyky",
        description:
            "A great option for breakfast or dessert.",
        price: '12,30 EUR',
        image: 'image/food/syrnyky.jpg',

    },
    {
        id: 7,
        category_id: 4,
        name: "Dary laniv Cherry jam 360g",
        description:
            "Natural and tasty jam made from juicy pitted cherries. Sterilized. It is prepared exclusively from freshly picked selected cherries grown in an ecologically clean region on the fertile lands of Podillya.",
        price: '49,80 EUR',
        image: 'image/grocery/jemV.jpg',
    },
    {
        id: 8,
        category_id: 1,
        name: "Jack Daniel's",
        description: "A legend among legends. Seven from Jack Daniel's is an iconic whiskey from Tennessee, which owes its typically sweet aroma to filtration through a three-meter layer of sugar maple coals.",
        price: '25,90 EUR',
        image: 'image/alcohol/jack.jpg',
    },
    {
        id: 9,
        category_id: 4,
        name: "Dary Laniv Currant Jam 360g",
        description:
            "Natural and tasty currant jam. Sterilized. It is made from freshly picked ripe black currants grown in an ecologically clean region on the fertile lands of Podolia. ",
        price: '98,75 EUR',
        image: 'image/grocery/jemSm.jpg',
    },
    {
        id: 10,
        category_id: 3,
        name: "Gloves Benlee Rockland 12oz",
        description:
            "De Benlee Rocky Marciano Rockland bokshandschoenen zijn starter, fitness en hobby handschoenen van kwaliteits rundleder.",
        price: '460,68 EUR',
        image: 'image/sport/gloves.jpg',
    },
    {
        id: 11,
        category_id: 1,
        name: "Jim Beam",
        description:
            "American Jim Beam is one of the world's best-selling bourbon whiskey brands. Its history dates back to the 18th century, when the German Böhm family went across the ocean to live their American dream.",
        price: '327,30 EUR',
        image: 'image/alcohol/jim.jpg',
    },
    {
        id: 12,
        category_id: 4,
        name: "Dary Laniv Apricot Jam 360g",
        description:
            "Natural and delicious seedless apricot jam. Sterilized. It is prepared exclusively from freshly picked selected apricots grown in an ecologically clean region on the fertile lands of Podolia. ",
        price: '218,55 EUR',
        image: 'image/grocery/jemAb.jpg',
    },
    {
        id: 13,
        category_id: 5,
        name: "Electronic Digital Vernier",
        description:
            "Electronic digital caliper Vernier. An ideal tool digital Vernier caliper for a broad range of industrial and automotive applications made of hardened stainless steel",
        price: '35,80 EUR',
        image: 'image/stationery/vernier.jpg',
    },
    {
        id: 14,
        category_id: 1,
        name: "Jagermeister",
        description:
            "German Jägermeister is an absolute classic among herbal liqueurs. The bittersweet delicacy is based on a strictly secret recipe with a total of 56 ingredients - herbs, flowers, roots and fruit.",
        price: '79,20 EUR',
        image: 'image/alcohol/jager.jpg'
    },
    {
        id: 15,
        category_id: 5,
        name: "Heavy Duty Staple Gun with staples",
        description:
            "Heavy-duty staple gun with 600 staples included. Ideal for upholstery, carpentry, restoration, repair, and more",
        price: '1 146,55 EUR',
        image: 'image/stationery/staples.jpg',
    },
];