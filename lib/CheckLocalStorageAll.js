export function CheckLocalStorageAll(router, setState, setLoading) {
  setLoading(true);
  if (typeof window !== "undefined") {
    const loggedInStatus = localStorage.getItem("logged-in") === "true";
    setInterval(() => {
      if (!loggedInStatus) {
        router.push("/login");
      }
      setState(loggedInStatus);
      setLoading(false);
    }, 4000);
  }
}
