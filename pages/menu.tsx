import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs";
import MenuItemCard from "../components/MenuItemCard";

const foodItems = [
  {
    id: 1,
    name: "Sop Iga Rempah",
    description: "Sop Dengan Rempah Menghangatkan Tubuh",
    price: 55000,
    image: "/img/food/Sop_iga.jpg",
  },
  {
    id: 2,
    name: "Nasi Lemak Rendang",
    description: "Nasi gurih khas Minang .",
    price: 30000,
    image: "/img/food/nasilmr.jpg",
  },
];

const drinkItems = [
  {
    id: 101,
    name: "Jus Buah Naga",
    description: "Teh manis dingin yang menyegarkan.",
    price: 18000,
    image: "/img/drink/jusnaga.jpg",
  },
  {
    id: 102,
    name: "Jus Strawberry",
    description: "Jus strawberry segar.",
    price: 18000,
    image: "/img/drink/jus-stober.jpg",
  },
];

export default function Menu() {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Menu Restoran Kami
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Temukan berbagai pilihan makanan dan minuman spesial yang kami tawarkan.
      </p>

      {/* Tabs for Menu */}
      <Tabs>
        {(activeTab: string, setActiveTab: Function) => (
          <>
            {/* Tabs List */}
            <TabsList className="flex justify-center space-x-4 mb-8">
              <TabsTrigger
                value="food"
                onClick={setActiveTab}
                className={`px-6 py-2 text-lg rounded ${
                  activeTab === "food"
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Makanan
              </TabsTrigger>
              <TabsTrigger
                value="drinks"
                onClick={setActiveTab}
                className={`px-6 py-2 text-lg rounded ${
                  activeTab === "drinks"
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Minuman
              </TabsTrigger>
            </TabsList>

            {/* Food Tab Content */}
            <TabsContent value="food" activeTab={activeTab}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            {/* Drinks Tab Content */}
            <TabsContent value="drinks" activeTab={activeTab}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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