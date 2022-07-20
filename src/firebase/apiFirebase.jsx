import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./initFirebase";
export const getCategories = async () => {
  const categoriesCollection = collection(db, "categories");

  try {
    const res = await getDocs(categoriesCollection);
    const categories = res.docs.map((c) => ({ id: c.id, ...c.data() }));
    return categories;
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
};

export const getProducts = async (category = null) => {
  let productosCollection;

  if (category) {
    productosCollection = query(
      collection(db, "productos"),
      where("category", "==", category)
    );
  } else {
    productosCollection = collection(db, "productos");
  }

  try {
    const res = await getDocs(productosCollection);
    const productos = res.docs.map((p) => ({ id: p.id, ...p.data() }));
    return productos;
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
};

export const getProduct = async (id) => {
  const productRef = doc(db, "productos", id);

  try {
    const res = await getDoc(productRef);
    if (res.exists()) {
      const product = { id: res.id, ...res.data() };
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
};

export const setOrder = async (order) => {
  const ordersCollection = collection(db, "orders");
  try {
    const { id } = await addDoc(ordersCollection, order);
    return id;
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
};

export const updateProductoStock = async (id, orderQuantity) => {
  const productRef = doc(db, "productos", id);
  try {
    const { stock } = await getProduct(id);
    const newStock = stock - orderQuantity;
    updateDoc(productRef, { stock: newStock });
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
};
