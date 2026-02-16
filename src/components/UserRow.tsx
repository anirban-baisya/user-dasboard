import { useUserStore } from "../store/useUserStore";
import type { User } from "../types/user";

export default function UserRow({ user }: { user: User }) {
  const selectUser = useUserStore((s) => s.selectUser);

  return (
    <tr
      className="border-t hover:bg-gray-100 cursor-pointer"
      onClick={() => selectUser(user)}
    >
      <td className="p-3">{user.id}</td>
      <td className="p-3">{user.firstName}</td>
      <td className="p-3">{user.lastName}</td>
      <td className="p-3">{user.username}</td>
      <td className="p-3">{user.email}</td>
      <td className="p-3">{user.phone}</td>
      <td className="p-3">{user.ip}</td>
    </tr>
  );
}
