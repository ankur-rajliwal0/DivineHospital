import { Phone, MessageCircle } from "lucide-react";

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Call */}
      <a
        href="tel:+919876543210"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B88A2F] text-white shadow-xl transition duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="Call"
      >
        <Phone size={26} />
      </a>
    </div>
  );
}

export default FloatingButtons;