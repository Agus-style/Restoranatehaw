import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs";
import MenuItemCard from "../components/MenuItemCard";

// Data menu
const foodItems = [
  { id: 1, name: "Sop Iga Rempah", description: "Sop dengan Rempah Yang Menghangatkan Tubuh", price: 55000, image: "/img/food/Sop_iga.jpg" },
  { id: 2, name: "Nasi Lemak Rendang", description: "Nasi lemak Rendang Khas Minang", price: 50000, image: "/img/food/Nasilemr.jpg" },
];

const drinkItems = [
  { id: 101, name: "Jus Buah Naga", description: "Jus Buah naga segar", price: 18000, image: "/img/drink/jusnaga.jpg" },
  { id: 102, name: "Jus Stroberi", description: "Jus stroberi segar", price: 18000, image: "/img/drink/jus-stober.jpg" },
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