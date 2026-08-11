import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-100">
      <h1 className="mb-3 text-4xl font-bold">Home</h1>

      <p className="mb-6 text-neutral-600">
        You successfully entered the home page.
      </p>

      <Link
        to="/logout"
        className="rounded-xl bg-red-700 px-6 py-3 text-white hover:bg-red-800">
        Logout
      </Link>
    </div>
  );
};

export default Home;
