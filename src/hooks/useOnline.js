import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(navigator.onLine); // Initial state set to the current online status

  useEffect(() => {
    // Define the event handler
    const handleOnline = () => {
      console.log("online");
      setOnline(true);
    };

    const handleOffline = () => {
      console.log("offline");
      setOnline(false);
    };

    // Add event listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return online;
};

export default useOnline;
