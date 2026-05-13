import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

function PromoPopup() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const seen = sessionStorage.getItem("promoSeen");
    if (!seen) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("promoSeen", "true");
  };

  if (!visible) return null;

  return createPortal(
    <div className="promo-overlay" onClick={handleClose}>
      <div
        className="promo-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="promo-close-btn" onClick={handleClose} aria-label="Close">
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Promo Image */}
        <div
          className="promo-image-wrap"
          style={{ cursor: "pointer" }}
          onClick={() => { handleClose(); navigate("/Register"); }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/promo/promo-banner.png`}
            alt="PROFX EXPO AFRICA 2026 Promotion"
            className="promo-img"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

export default PromoPopup;
