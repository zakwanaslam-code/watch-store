import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Ye component kuch bhi "dikhata" nahi (UI nahi hai),
// sirf ek "listener" ki tarah kaam karta hai jo
// route change hote hi scroll ko top pe le jata hai
export default function ScrollToTop() {
  // useLocation current URL path track karta hai
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi pathname badle (naye route pe jayen),
    // window ko instantly top pe scroll kar do
    window.scrollTo(0, 0);
  }, [pathname]); // dependency: pathname badalte hi ye effect chalega

  return null; // kuch render nahi karna, sirf side-effect chahiye
}