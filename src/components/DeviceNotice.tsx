"use client";

import { useEffect, useState } from "react";

export default function DeviceNotice() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Only show if not already shown this session
    const alreadyShown = sessionStorage.getItem("desktopNoticeShown");
    console.log(alreadyShown)
    if (alreadyShown) return;

    // Check for mobile device by userAgent
    const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    // Check for small screen width
    const isSmallScreen = window.innerWidth < 768;

    if (isMobileDevice || isSmallScreen) {
      setShowNotice(true);
      sessionStorage.setItem("desktopNoticeShown", "true");
    }
  }, []);

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md text-sm shadow-lg z-50 max-w-xs text-center">
      For the best experience, please view this site on a desktop or laptop.
    </div>
  );
}
