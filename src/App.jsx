import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("list");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [editProduct, setEditProduct] = useState(null);

  const [page, setPage] = useState(1);
  const limit = 5;

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const start = (page - 1) * limit;
  const paginatedProducts = filteredProducts.slice(start, start + limit);

  const saveProduct = (product) => {
    if (editProduct) {
      setProducts(products.map(p => p.id === product.id ? product : p));
      setEditProduct(null);
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-4">

        <h1 className="text-3xl font-bold text-center">
          Product Management
        </h1>

        <input
          className="w-full p-2 border rounded"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setView(view === "list" ? "card" : "list")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Switch to {view === "list" ? "Card" : "List"} View
        </button>

        <ProductForm onSave={saveProduct} editProduct={editProduct} />

        <ProductList
          products={paginatedProducts}
          view={view}
          onEdit={setEditProduct}
        />

        <Pagination
          total={filteredProducts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default App;
