import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, auth } from "../lib/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const collectionRef = collection(db, "products");

  useEffect(() => {
    console.log(id);
    const getProductDetails = async () => {
      try {
        let data = await getDocs(collectionRef);
        data = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        data = data.filter((doc) => doc.id === id);
        setProduct(data[0])
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    };
    getProductDetails();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
        <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
          <div className="col-span-5 grid grid-cols-1">
            <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
              <img
                src={product.picture}
                alt="Nike Air Max 95 By You--0"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-4 pt-8 lg:pt-0">
            <div className="mb-7 border-b border-gray-300 pb-7">
              <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                {product.title}
              </h2>
              <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                {product.description}
              </p>
              <div className="mt-5 flex items-center ">
                <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                  ₹{product.price}
                </div>
                <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                  
                </span>
              </div>
            </div>


            <div className="py-6 ">
              <ul className="space-y-5 pb-1 text-sm">
                <li>
                  <span className="text-heading inline-block pr-2 font-semibold">
                    Name of Seller:
                  </span>
                  {product.name}
                </li>
                <li>
                  <span className="text-heading inline-block pr-2 font-semibold">
                    Contact:
                  </span>
                  <a
                    className="hover:text-heading transition hover:underline"
                    href="#"
                  >
                    {product.contact}
                  </a>
                </li>
                <li className="productTags">
                  <span className="text-heading inline-block pr-2 font-semibold">
                    Address:
                  </span>
                  <a
                    className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
                    href="#"
                  >
                    {product.address}
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
