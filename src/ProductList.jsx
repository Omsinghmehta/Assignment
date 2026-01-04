function ProductList({ products, view, onEdit }) {
  if (view === "list") {
    return (
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded shadow ">
          <thead className="bg-gray-200 ">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Category</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-t">
                <td className="p-2">{p.name}</td>
                <td className="p-2">₹ {p.price}</td>
                <td className="p-2">{p.category}</td>
                <td className="p-2">
                  <button
                    onClick={() => onEdit(p)}
                    className="text-blue-600"
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(p => (
        <div key={p.id} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{p.name}</h3>
          <p>₹ {p.price}</p>
          <p>{p.category}</p>
          <button
            onClick={() => onEdit(p)}
            className="text-blue-600 mt-2"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
