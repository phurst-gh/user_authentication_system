export const APIService = {
  async register(name, email, password) {
      try {
          const response = await fetch("http://localhost:3001/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, email, password }),
          });

          if (!response.ok) {
              const data = await response.json();
              throw new Error(data.message || "Registration failed.");
          }

          return await response.json();
      } catch (error) {
          console.error("Register Error:", error);
          throw error;
      }
  },

  async login(email, password) {
      try {
          const response = await fetch("http://localhost:3001/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
              credentials: "include",
          });

          if (!response.ok) {
              const data = await response.json();
              throw new Error(data.message || "Invalid credentials.");
          }

          return await response.json();
      } catch (error) {
          console.error("Login Error:", error);
          throw error;
      }
  },

  async logout() {
      try {
          await fetch("http://localhost:3001/logout", {
              method: "GET",
              credentials: "include",
          });
      } catch (error) {
          console.error("Logout Error:", error);
      }
  }
};
