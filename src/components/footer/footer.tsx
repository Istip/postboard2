import FooterIcons from "@/components/footer/footer-icons";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 center w-full p-4 bg-secondary flex justify-between border-t border-foreground/20">
      <FooterIcons />
      <Input placeholder="Type your message..." />
    </footer>
  );
};

export default Footer;
