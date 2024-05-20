import { useEffect } from "react";

function useCustomBack(customBack: () => void) {
  const browserPreventEvent = (event: () => void) => {
    window.history.pushState(null, "", window.location.href);
    event();
  };

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", () => {
      browserPreventEvent(customBack);
    });
    return () => {
      window.removeEventListener("popstate", () => {
        browserPreventEvent(customBack);
      });
    };
  }, []);
}

export default useCustomBack;
