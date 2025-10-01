import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUpCircle, X } from "lucide-react";
import FooterIcons from "@/components/footer/footer-icons";
import FooterForm from "@/components/footer/footer-form";

const Footer = () => {
  const [show, setShow] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!show) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        footerRef.current &&
        !footerRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [show]);

  const handleClose = () => setShow(false);

  const handleOpen = () => setShow(true);

  return (
    <footer
      ref={footerRef}
      className="fixed bottom-0 center w-full p-4 bg-secondary flex justify-between flex-col border-t border-foreground/20"
    >
      <div className="w-full flex justify-between items-center">
        <FooterIcons />
        <Button
          variant={show ? "ghost" : "default"}
          onClick={show ? handleClose : handleOpen}
        >
          {show ? <X /> : <ChevronUpCircle />}
        </Button>
      </div>
      <FooterForm show={show} />
    </footer>
  );
};

export default Footer;
