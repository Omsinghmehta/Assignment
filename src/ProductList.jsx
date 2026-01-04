function ProductList({ products, view, onEdit }) {
  if (view === "list") {
    return (
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-gray-700">Name</th>
              <th className="p-3 text-left text-gray-700">Price</th>
              <th className="p-3 text-left text-gray-700">Category</th>
              <th className="p-3 text-left text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-t hover:bg-gray-50 transition duration-150"
              >
                <td className="p-3">{p.name}</td>
                <td className="p-3 font-medium">₹ {p.price}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">
                  <button
                    onClick={() => onEdit(p)}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition duration-200"
        >
          <h3 className="text-lg font-bold mb-2 text-gray-800">{p.name}</h3>
          <p className="text-gray-700 font-medium mb-1">₹ {p.price}</p>
          <p className="text-gray-600 mb-3">{p.category}</p>
          <button
            onClick={() => onEdit(p)}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
