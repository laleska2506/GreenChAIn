
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  categories: string[];
  farmer: {
    name: string;
    farm: string;
    location: string;
    avatar?: string;
    certifications?: {
      name: string;
      icon: string;
      color: string;
    }[];
  };
  organic: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Peruvian Mangoes",
    description: "Sweet and juicy mangoes hand-picked from the coastal regions of Peru.",
    price: 5.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1669207334420-66d0e3450283?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Fruits", "Fresh", "Organic"],
    farmer: {
      name: "Carmen Rodriguez",
      farm: "Sunshine Farm",
      location: "Piura, Peru",
      avatar: "CR",
      certifications: [
        { name: "Orgánico", icon: "badge-check", color: "#48BB78" },
        { name: "Comercio Justo", icon: "award", color: "#9B87F5" },
        { name: "Bio", icon: "shield", color: "#4299E1" }
      ]
    },
    organic: true,
    featured: true
  },
  {
    id: 2,
    name: "Vibrant Quinoa",
    description: "Multi-colored quinoa grown in the Andean highlands using traditional farming methods.",
    price: 8.50,
    unit: "500g",
    image: "https://images.unsplash.com/photo-1665674053062-4ff91c7204e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Grains", "Organic", "Superfoods"],
    farmer: {
      name: "Miguel Torres",
      farm: "Andean Heights",
      location: "Cusco, Peru",
      avatar: "MT",
      certifications: [
        { name: "Orgánico", icon: "badge-check", color: "#48BB78" },
        { name: "Tradicional", icon: "shield-check", color: "#ED8936" }
      ]
    },
    organic: true
  },
  {
    id: 3,
    name: "Native Potatoes Variety Pack",
    description: "A colorful mix of ancient potato varieties, each with unique flavors and textures.",
    price: 6.75,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1722060369847-8fd32ad5fb79?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Vegetables", "Native", "Organic"],
    farmer: {
      name: "Luis Quispe",
      farm: "Heritage Fields",
      location: "Puno, Peru",
      avatar: "LQ",
      certifications: [
        { name: "Orgánico", icon: "badge-check", color: "#48BB78" },
        { name: "Biodiversidad", icon: "shield", color: "#805AD5" },
        { name: "Ancestral", icon: "award", color: "#DD6B20" }
      ]
    },
    organic: true,
    featured: true
  },
  {
    id: 4,
    name: "Fresh Organic Avocados",
    description: "Creamy and nutritious avocados grown in Peru's fertile valleys.",
    price: 7.99,
    unit: "pack of 4",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
    categories: ["Fruits", "Fresh", "Organic"],
    farmer: {
      name: "Ana Suarez",
      farm: "Green Valley",
      location: "Ica, Peru",
      avatar: "AS",
      certifications: [
        { name: "Orgánico", icon: "badge-check", color: "#48BB78" },
        { name: "Sin Pesticidas", icon: "shield-check", color: "#38B2AC" }
      ]
    },
    organic: true
  },
  {
    id: 5,
    name: "Goldenberries (Aguaymanto)",
    description: "Tangy and sweet golden berries packed with vitamins and antioxidants.",
    price: 9.50,
    unit: "250g",
    image: "https://images.unsplash.com/photo-1664894350481-11c0e592f206?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Fruits", "Superfoods", "Organic"],
    farmer: {
      name: "Rosa Mamani",
      farm: "Mountain Treasures",
      location: "Huancayo, Peru",
      avatar: "RM",
      certifications: [
        { name: "Orgánico", icon: "badge-check", color: "#48BB78" },
        { name: "Comercio Justo", icon: "award", color: "#9B87F5" },
        { name: "Superalimento", icon: "shield", color: "#F6AD55" }
      ]
    },
    organic: true,
    featured: true
  },
  {
    id: 6,
    name: "Fresh Limes",
    description: "Zesty and aromatic limes perfect for cooking or refreshing beverages.",
    price: 3.49,
    unit: "pack of 6",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562",
    categories: ["Fruits", "Citrus", "Organic"],
    farmer: {
      name: "Pedro Diaz",
      farm: "Coastal Groves",
      location: "Trujillo, Peru",
      avatar: "PD",
      certifications: [
        { name: "Orgánico", icon: "badge-check", color: "#48BB78" }
      ]
    },
    organic: true
  },
  {
    id: 7,
    name: "Organic Cacao Nibs",
    description: "Raw cacao nibs from Peru's Amazon region, perfect for baking or snacking.",
    price: 12.99,
    unit: "200g",
    image: "https://images.unsplash.com/photo-1625558904461-6cf9d0a18a18?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Superfoods", "Raw", "Organic"],
    farmer: {
      name: "Javier Mendoza",
      farm: "Amazon Harvest",
      location: "Tarapoto, Peru",
      avatar: "JM",
      certifications: [
        { name: "Orgánico", icon: "badge-check", color: "#48BB78" },
        { name: "Amazónico", icon: "shield", color: "#38A169" },
        { name: "Sostenible", icon: "shield-check", color: "#3182CE" }
      ]
    },
    organic: true
  },
  {
    id: 8,
    name: "Fresh Organic Asparagus",
    description: "Tender and flavorful asparagus spears grown in Peru's coastal regions.",
    price: 5.25,
    unit: "bunch",
    image: "https://images.unsplash.com/photo-1629875235163-2e52306e4018?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Vegetables", "Fresh", "Organic"],
    farmer: {
      name: "Elena Castro",
      farm: "Coastal Fields",
      location: "La Libertad, Peru",
      avatar: "EC",
      certifications: [
        { name: "Orgánico", icon: "badge-check", color: "#48BB78" },
        { name: "Exportación", icon: "award", color: "#F56565" }
      ]
    },
    organic: true
  }
];

export const categories = Array.from(
  new Set(products.flatMap(product => product.categories))
);
