import { useEffect, useRef } from "react";
import { useUserStore } from "../store/useUserStore";
import UserRow from "./UserRow";

export default function UserTable() {
  const { users, fetchMoreUsers, loading } = useUserStore();
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchMoreUsers();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchMoreUsers();
      }
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3">First Name</th>
            <th className="p-3">Last Name</th>
            <th className="p-3">Username</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">IP</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div ref={observerRef} className="h-10" />
      {loading && (
        <p className="text-center py-4 text-gray-500">Loading...</p>
      )}
    </div>
  );
}
