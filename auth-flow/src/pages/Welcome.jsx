import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-neutral-100">
      <h1 className="text-4xl font-bold">Welcome</h1>

      <p className="text-neutral-600">
        Welcome to my authentication practice app.
      </p>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="rounded-xl bg-amber-800 px-6 py-3 text-white transition-colors hover:bg-amber-900">
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-xl bg-neutral-800 px-6 py-3 text-white transition-colors hover:bg-neutral-900">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
