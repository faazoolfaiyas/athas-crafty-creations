// src/services/productService.js
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

// Fetch all products
export async function fetchProducts() {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Fetch single product by ID
export async function fetchProductById(id) {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
}

// Add new product
export async function addProduct(product) {
  const productsRef = collection(db, "products");
  const docRef = await addDoc(productsRef, product);
  return docRef.id;
}

// Update product
export async function updateProduct(id, updates) {
  const docRef = doc(db, "products", id);
  await updateDoc(docRef, updates);
}

// Delete product
export async function deleteProduct(id) {
  const docRef = doc(db, "products", id);
  await deleteDoc(docRef);
}
