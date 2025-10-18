import { useState, useEffect } from 'react'
import { FiArrowUp } from "react-icons/fi";
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <>
            {isVisible && (
                
<button
  onClick={scrollToTop}
  title="Back to top"
  aria-label="Scroll to top"
  className="fixed bottom-5 right-5 p-4 bg-purple-500 text-white rounded-xl shadow-lg hover:bg-purple-700 active:scale-95 transition"
>
  <FiArrowUp size={24} />
</button>
            )}
        </>
    )
}

export default ScrollToTop