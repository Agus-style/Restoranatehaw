const MenuItemCard = ({ item }: { item: any }) => (
  <div className="border rounded overflow-hidden shadow">
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">{item.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
      <p className="font-bold text-primary">
        Rp {item.price.toLocaleString("id-ID")}
      </p>
    </div>
  </div>
);

export default MenuItemCard;