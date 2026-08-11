import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");

    navigate("/");
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow">
        <h1 className="mb-3 text-3xl font-bold">Logout</h1>

        <p className="mb-6 text-neutral-600">
          Are you sure you want to logout?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleCancel}
            className="rounded-xl bg-neutral-200 px-6 py-3 hover:bg-neutral-300">
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-700 px-6 py-3 text-white hover:bg-red-800">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
