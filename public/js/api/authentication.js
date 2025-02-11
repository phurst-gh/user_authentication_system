const baseUrl = "http://localhost:3001";

export const Authentication = {
  async register(name, email, password) {
    try {
      const response = await fetch(`${baseUrl}/api/register`, {
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
      const response = await fetch(`${baseUrl}/api/login`, {
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
    console.log("Logging out...");
    try {
      console.log("inside logout try");
      await fetch(`${baseUrl}/api/logout`, {
        method: "GET",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout Error:", error);
    }
  },
};
