// src/data/categoryData.ts

export type SubCategory = {
  title: string;
  items: string[];
};

export type MegaMenuCategory = {
  label: string;
  subCategories: SubCategory[];
};

export const megaMenuData: MegaMenuCategory[] = [
  {
    label: "Beauty & Personal Care",
    subCategories: [
      {
        title: "Feminine Care",
        items: ["Menstrual Pads", "Period Underwear", "Women Normal Innerwear", "Period kits & Combos", "Stain Removers (Period specific)", "Panty liners", "Menstrual Cups"],
      },
      {
        title: "Bath and Body",
        items: ["Body Oils", "Body Wash", "Hand Wash", "Deodorant", "Bath Accessories", "Soaps / Cleansers"],
      },
      {
        title: "Skin Care",
        items: ["Scrub", "Face Wash", "Body Cream", "Massagers / Rollers", "Face Pack", "Moisturizer"],
      },
      {
        title: "Personal Hygiene",
        items: ["Pain Relief Oils & Balms", "Intimate Wash", "Foot Care Accessories", "General Grooming", "Men's Grooming"],
      },
      {
        title: "Oral Care",
        items: ["Tongue Cleaner", "Teeth Whitening", "Mouth Wash", "Oral Care Set", "Tooth Brush"],
      },
      {
        title: "Hair Care",
        items: ["Shampoo", "Combs", "Hair Color", "Hair Oil", "Hair Pack", "Conditioner"],
      },
    ],
  },
  {
    label: "Kitchen & Home Care",
    subCategories: [
      {
        title: "Cleaning Supplies",
        items: ["Tissue Holder", "Garbage Bags", "Floor Cleaner", "Soap Dishes", "Cleaning Brushes", "Laundry Detergent"],
      },
      {
        title: "Kitchen Essentials",
        items: ["Straws", "Serving Bowls", "Coasters / Table Mats", "Storage Containers", "Cutlery", "Dishwasher (Scrub Pad/Brush)", "Kitchen Accessories", "Cutting Board - Wooden", "Glasses/mugs", "Water Bottles", "Trays/Platters", "Dishwash", "Cooking Utensils"],
      },
      {
        title: "Home Essentials",
        items: ["Pooja Set", "Gemstones", "Idols /Statues", "Incense/ Fragrances", "Gardening", "Candles & Candle Holders", "Baskets & Storage", "Decorative Lamps", "Clocks", "Photo frame", "Decorative Accents", "Jewellery Box", "Reusable Bags (Daily Use)", "Desk Accessories"],
      },
    ],
  },
  {
    label: "Bags & Accessories",
    subCategories: [
      {
        title: "Accessories",
        items: ["Stationery", "Bracelets", "Pendants & Necklaces", "Buntings", "Earrings"],
      },
      {
        title: "Yoga & Wellness",
        items: ["Yoga Mats", "Yoga Accessories"],
      },
      {
        title: "Bags",
        items: ["Handbags", "Tote Bags", "Specialty Bags", "Small Bags", "Sling Bags", "Laptop Bag"],
      },
    ],
  },
  {
    label: "Food & Beverages",
    subCategories: [
      {
        title: "Foods",
        items: ["Grains, Rice and Flours", "Superfoods & Herbal Powders", "Snacks and Treats", "Baked Goods & Mixers", "Oils, Butter, and Ghee", "Dry Fruits", "Sweetners & Chocolates"],
      },
      {
        title: "Beverages",
        items: ["Tea", "Beverage Delights"],
      },
    ],
  },
  {
    label: "Gifts & Festivals",
    subCategories: [
      {
        title: "Cultural & Religious",
        items: ["Holi", "Christmas", "Diwali", "Raksha Bandhan"],
      },
      {
        title: "Gifts",
        items: ["Under ₹500", "Under ₹1000", "Under ₹1500", "Under ₹2000", "Under ₹3000", "Under ₹5000"],
      },
    ],
  },
  {
    label: "Mom & Baby",
    subCategories: [
      {
        title: "Diapering",
        items: ["Baby Wipes"],
      },
      {
        title: "Feeding",
        items: ["Bibs", "Others"],
      },
      {
        title: "Toys",
        items: ["Blocks/Stacking Toys", "General Toys", "Rattles", "Learning & Educational Toys", "Combos"],
      },
      {
        title: "Nursery",
        items: ["Shop All", "Swaddles", "Towels", "Bedding Set", "Combos", "Blankets"],
      },
      {
        title: "Fashion",
        items: ["Shirts", "Tops", "Pants", "Sets"],
      },
    ],
  },
  {
    label: "Brands",
    subCategories: [
      {
        title: "Premium",
        items: [
          "Scrapshala", "Ecobharat", "Toy Trunk", "Almitra Sustainables", "ilearnngrow", "Windmill baby", 
          "Saha", "SochGreen", "Soil Origin", "Masilo", "Ecotyl - Elevating Health and Wellness", "THE ASF SHOP", 
          "Cheluvu", "TUMMYFRIENDLY FOODS", "ONEARTH", "more"
        ],
      },
      {
        title: "New",
        items: [], // Ready for you to populate later
      },
      {
        title: "Best Selling",
        items: [], // Ready for you to populate later
      }
    ],
  }
];