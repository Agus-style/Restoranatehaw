export default function MenuItemCard({ item }: { item: any }) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
        <p className="text-blue-500 font-bold">
          Rp {item.price.toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  );
}