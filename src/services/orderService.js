// src/services/orderService.js
import { collection, getDocs, doc, getDoc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

// Fetch all orders
export async function fetchOrders() {
  const ordersRef = collection(db, "orders");
  const snapshot = await getDocs(ordersRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Fetch order by ID
export async function fetchOrderById(id) {
  const docRef = doc(db, "orders", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
}

// Add new order
export async function addOrder(order) {
  const ordersRef = collection(db, "orders");
  const docRef = await addDoc(ordersRef, order);
  return docRef.id;
}

// Update order status/fields
export async function updateOrder(id, updates) {
  const docRef = doc(db, "orders", id);
  await updateDoc(docRef, updates);
}
