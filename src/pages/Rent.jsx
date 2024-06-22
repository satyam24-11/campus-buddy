import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css&js/productList.css";
import { db, auth } from "../lib/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
// import Image from "react-image";

const Rent = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);

  const { user} = UserAuth()
  const navigate = useNavigate()

  const collectionRef = collection(db, "products");

  const getProductList = async () => {
    try {
      let data = await getDocs(collectionRef);
      data = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      data = data.filter((doc) => doc.sellorrent === "rent");
      setAllProducts(data.reverse());
      setProducts(data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allProducts.filter(
          (product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase()) ||
            product.description.toLowerCase().includes(searchText.toLowerCase())
        );
        console.log(searchResults);
        setProducts(searchResults);
      }, 500)
    );
  };

  return (
    <>
      <div>
        <h2 className="text-xl sm:text-4xl text-center m-4">Rental Product List</h2>
        {/* Searchbar & Categories */}
        <div className="flex flex-col items-center">
          <form className="w-[80%]">
            <div className="flex">
              <select className="w-[80px] sm:w-[15%] outline-none border-gray-300 rounded-md"
                name="cars"
                id="cars"
                onChange={(e) => {
                  if (e.target.value === "all") {
                    setProducts(allProducts);
                  } else {
                    setProducts(
                      allProducts.filter(
                        (product) => product.category === e.target.value
                      )
                    );
                  }
                }}
              >
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="others">Others</option>
              </select>

              <div className="relative w-full">
                <input
                  onChange={handleSearchChange}
                  value={searchText}
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search for products..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-sm"
                >
                  {" "}
                  x<span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        {products.length === 0 ? (
          <>
            <div className="text-4xl text-center my-36">No products found!</div>
          </>
        ) : (
          <div className="product-list">
            {products?.map((product) => (
              <div key={product.id} className="product-item">
                <img
                  src={product.picture}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p>₹{product.price}</p>
                  <button onClick={()=>{
                    if(!user){
                      alert('SignIn to view details')
                    } else{
                      navigate(`/products/${product.id}`)
                    }
                  }}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Rent;
