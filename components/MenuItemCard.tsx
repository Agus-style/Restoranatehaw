export default function MenuItemCard({ item }: { item: any }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg mb-2">{item.name}</h3>
        <p className="text-sm mb-2">{item.description}</p>
        <p className="font-bold text-primary">Rp {item.price.toLocaleString()}</p>
      </div>
    </div>
  );
}