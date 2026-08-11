import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login data:", formData);

    navigate("/home");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <h1 className="mb-2 text-3xl font-bold">Login</h1>

        <p className="mb-6 text-neutral-500">Enter your account details.</p>

        <div className="mb-4">
          <label className="mb-2 block font-medium">Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-amber-800"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-medium">Password</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-amber-800"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-amber-800 py-3 font-medium text-white hover:bg-amber-900">
          Login
        </button>

        <div className="mt-5 text-center">
          <Link to="/register" className="text-amber-800 hover:underline">
            Don't have an account? Register
          </Link>
        </div>

        <div className="mt-3 text-center">
          <Link to="/" className="text-neutral-500 hover:underline">
            Back to Welcome
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
