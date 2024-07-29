import React from "react";

export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Log in
        </h1>
        <form action="#" method="post" className="space-y-4">
          <div>
            <input
              id="email"
              className="border p-3 w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 shadow-md placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              id="password"
              className="border p-3 w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 shadow-md placeholder:text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="w-full py-3 bg-gray-800 dark:bg-indigo-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="submit"
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}
