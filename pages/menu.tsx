import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs";
import MenuItemCard from "../components/MenuItemCard";

const foodItems = [
  {
    id: 1,
    name: "Nasi Goreng",
    description: "Nasi dengan bumbu spesial",
    price: 25000,
    image: "/img/food/nasi-goreng.jpg",
  },
  {
    id: 2,
    name: "Nasi Lemak",
    description: "Nasi gurih khas Melayu",
    price: 30000,
    image: "/img/food/nasi-lemak.jpg",
  },
];

const drinkItems = [
  {
    id: 101,
    name: "Es Teh",
    description: "Teh manis dingin",
    price: 5000,
    image: "/img/drink/es-teh.jpg",
  },
  {
    id: 102,
    name: "Jus Alpukat",
    description: "Jus alpukat segar",
    price: 15000,
    image: "/img/drink/jus-alpukat.jpg",
  },
];

export default function Menu() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Menu Restoran Kami</h1>
      <Tabs>
        {(activeTab: string, setActiveTab: Function) => (
          <>
            <TabsList className="flex space-x-4 justify-center mb-4">
              <TabsTrigger value="food" onClick={setActiveTab}>
                Makanan
              </TabsTrigger>
              <TabsTrigger value="drinks" onClick={setActiveTab}>
                Minuman
              </TabsTrigger>
            </TabsList>
            <TabsContent value="food" activeTab={activeTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foodItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="drinks" activeTab={activeTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {drinkItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
}