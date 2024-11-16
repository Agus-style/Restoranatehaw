import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs";
import MenuItemCard from "../components/MenuItemCard";

// Data menu
const foodItems = [
  { id: 1, name: "Nasi Goreng", description: "Nasi dengan bumbu spesial", price: 25000, image: "/img/nasi-goreng.jpg" },
  { id: 2, name: "Mie Ayam", description: "Mie dengan topping ayam", price: 20000, image: "/img/mie-ayam.jpg" },
];

const drinkItems = [
  { id: 101, name: "Es Teh", description: "Teh manis dingin", price: 5000, image: "/img/es-teh.jpg" },
  { id: 102, name: "Jus Alpukat", description: "Jus alpukat segar", price: 15000, image: "/img/jus-alpukat.jpg" },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("food");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Menu Restoran Kami</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
        <TabsList>
          <TabsTrigger value="food">Makanan</TabsTrigger>
          <TabsTrigger value="drinks">Minuman</TabsTrigger>
        </TabsList>
        <TabsContent value="food" activeTab={activeTab}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {foodItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="drinks" activeTab={activeTab}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {drinkItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}