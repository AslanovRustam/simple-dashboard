import { useEffect, useState } from "react";
import api from "../services/api";
import { Order } from "../types";

export default function OrdersTable() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get("/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Current orders</h2>
      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.product}</td>
              <td className="border p-2">{order.status}</td>
              <td className="border p-2">{order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
