import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircleIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import FooterIcons from "@/components/footer/footer-icons";

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
          {show ? <X /> : <PlusCircleIcon />}
        </Button>
      </div>
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key="footer-input"
            className="center gap-2 w-full"
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
              paddingTop: 0,
              paddingBottom: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: 8,
              paddingTop: 0,
              paddingBottom: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
              paddingTop: 0,
              paddingBottom: 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <Input
              type="text"
              placeholder="Type your message here..."
              className="w-full"
              autoFocus
            />
            <Button onClick={() => console.log("Send message")}>
              <PlusCircleIcon />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
