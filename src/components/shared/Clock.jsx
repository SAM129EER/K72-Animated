import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

const Clock = ({ className = "" }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateClock = () => {
      const currentTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());

      setTime(currentTime);
    };

    updateClock(); // Initial call to set the time immediately
    const intervalId = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
  <div className={`fixed bottom-2 left-2 z-50 flex items-center gap-1 tracking-tight text-white ${className}`}>
    <Globe size={24} className="-mt-1"/>

    <span className="font-[lausanne-sm] uppercase text-2xl">
      Jaipur
    </span>

    <span className="font-[lausanne-sm] uppercase text-2xl">
      {time}
    </span>
  </div>
);
};

export default Clock;
