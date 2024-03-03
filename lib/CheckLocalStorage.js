export function CheckLocalStorage(router, setState) {
  if (typeof window !== "undefined") {
    const loggedInStatus = localStorage.getItem("logged-in") === "true";
    setInterval(() => {
      if (loggedInStatus === true) {
        router.push("/home");
      } else if (!loggedInStatus) {
        router.push("/login");
      }
      setState(loggedInStatus);
    }, 4000);
  }
}
