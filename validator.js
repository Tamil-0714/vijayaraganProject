const form = document.querySelector("#login-form");

const authUser = async (id, pass) => {
  try {
    const requestBody = new URLSearchParams({
      uid: id,
      pass: pass,
    }).toString();

    const response = await fetch("http://localhost:8050/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: requestBody,
      credentials: "include",
    });

    const status = response.status;

    if (status === 200) {
      const headers = Object.fromEntries(response.headers.entries());
      console.log("Headers:", headers);

      const resData = await response.json();
      console.log("Data:", resData);
      alert("Login successful!");
      window.location.href = "/profile.html";
    } else if (status === 403) {
      alert("Unauthorized: Invalid user credentials");
    } else {
      alert(`Unexpected error occurred: Status ${status}`);
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    alert("Failed to connect to the server. Please try again later.");
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.querySelector("#uName").value.trim();
  const pass = document.querySelector("#uPass").value.trim();
  authUser(name, pass);
});
