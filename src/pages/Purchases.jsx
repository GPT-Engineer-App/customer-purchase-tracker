const purchases = [
  {
    id: 1,
    image: "path/to/image1.jpg",
    size: "M",
    price: "$50",
    status: "Paid",
  },
  {
    id: 2,
    image: "path/to/image2.jpg",
    size: "L",
    price: "$70",
    status: "Pending",
  },
];

const Purchases = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Your Purchases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {purchases.map((purchase) => (
          <div key={purchase.id} className="bg-white p-4 rounded shadow-md">
            <img src={purchase.image} alt={`Purchase ${purchase.id}`} className="w-full h-48 object-cover mb-4" />
            <div className="text-lg font-semibold">{purchase.size}</div>
            <div className="text-gray-700">{purchase.price}</div>
            <div className={`mt-2 ${purchase.status === "Paid" ? "text-green-500" : "text-red-500"}`}>
              {purchase.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchases;