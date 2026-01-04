import { useEffect, useState } from "react";

function ProductForm({ onSave, editProduct }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (editProduct) setForm(editProduct);
  }, [editProduct]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.category) {
      setError("Name, Price and Category are required");
      return;
    }

    setError("");
    onSave(form);
    setForm({ name: "", price: "", category: "", stock: "", description: "" });
  };

  return (
    <form onSubmit={submitHandler} className="bg-white p-4 rounded shadow ">
      <h2 className="text-xl font-semibold mb-2">
        {editProduct ? "Edit Product" : "Add Product"}
      </h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input className=" bg-gray-200 px-2 py-4 rounded-md m-2" placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input className=" bg-gray-200 px-2 py-4 rounded-md m-2" type="number" placeholder="Price"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })} />

      <input className=" bg-gray-200 px-2 py-4 rounded-md m-2" placeholder="Category"
        value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })} />

      <input className=" bg-gray-200 px-2 py-4 rounded-md m-2" type="number" placeholder="Stock"
        value={form.stock}
        onChange={e => setForm({ ...form, stock: e.target.value })} />

      <textarea className=" bg-gray-200 px-2 py-4 rounded-md m-2" placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })} />

      <button className="w-full bg-green-600 text-white py-2 rounded my-5">
        Save
      </button>
    </form>
  );
}

export default ProductForm;
