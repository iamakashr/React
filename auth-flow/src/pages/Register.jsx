import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    console.log("Registration data:", formData);

    navigate("/home");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-100 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <h1 className="mb-2 text-3xl font-bold">Create Account</h1>

        <p className="mb-6 text-neutral-500">Create your account below.</p>

        {error && (
          <p className="mb-4 rounded-lg bg-red-100 p-3 text-red-700">{error}</p>
        )}

        <div className="mb-4">
          <label className="mb-2 block font-medium">Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-amber-800"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium">Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-amber-800"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium">Password</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-amber-800"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-medium">Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:border-amber-800"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-amber-800 py-3 font-medium text-white hover:bg-amber-900">
          Create Account
        </button>

        <div className="mt-5 text-center">
          <Link to="/login" className="text-amber-800 hover:underline">
            Already have an account? Login
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

export default Register;
