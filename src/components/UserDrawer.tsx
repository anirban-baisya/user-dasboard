import { useUserStore } from "../store/useUserStore";

export default function UserDrawer() {
  const { selectedUser, selectUser } = useUserStore();

  if (!selectedUser) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end">
      <div className="bg-white w-[400px] h-full p-6 overflow-y-auto">
        <button
          className="mb-4 text-gray-500"
          onClick={() => selectUser(null)}
        >
          ← Back
        </button>

        <img
          src={selectedUser.image}
          alt=""
          className="w-24 h-24 rounded-full mx-auto"
        />

        <h2 className="text-xl font-semibold text-center mt-3">
          {selectedUser.firstName} {selectedUser.lastName}
        </h2>

        <p className="text-center text-gray-500">
          @{selectedUser.username}
        </p>

        <div className="mt-6 space-y-2 text-sm">
          <p><b>Age:</b> {selectedUser.age}</p>
          <p><b>Blood Group:</b> {selectedUser.bloodGroup}</p>
          <p><b>Height:</b> {selectedUser.height} cm</p>
          <p><b>Weight:</b> {selectedUser.weight} kg</p>
          <p><b>Eye Color:</b> {selectedUser.eyeColor}</p>
          <p><b>Hair Color:</b> {selectedUser.hair.color}</p>
          <p>
            <b>Address:</b><br />
            {selectedUser.address.address}, {selectedUser.address.city},{" "}
            {selectedUser.address.state},{" "}
            {selectedUser.address.country}
          </p>
        </div>
      </div>
    </div>
  );
}
