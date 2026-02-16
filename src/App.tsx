import './App.css'

import UserTable from "./components/UserTable";
import UserDrawer from "./components/UserDrawer";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto p-6 relative">
      <UserTable />
      <UserDrawer />
    </div>
  );
}

