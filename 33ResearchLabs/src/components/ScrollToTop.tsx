import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();
  const { pathname, hash } = useLocation();
  const naviagte = useNavigate();
  console.log(location);
  useEffect(() => {
    window.scrollTo(0, 0);

    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname]); // Scrolls on every route/pathname change

  return null;
};
