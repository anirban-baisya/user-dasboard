import type { User } from "../types/user";


const BASE_URL = "https://dummyjson.com/users";

export async function fetchUsers(
  limit: number,
  skip: number
): Promise<User[]> {
  const res = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
  const data = await res.json();
  return data.users;
}
