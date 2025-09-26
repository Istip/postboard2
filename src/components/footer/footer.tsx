import FooterDrawer from "@/components/footer/footer-drawer/footer-drawer";
import FooterIcons from "@/components/footer/footer-icons";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 center w-full p-4 bg-secondary flex justify-between border-t border-foreground/20">
      <FooterIcons />
      <FooterDrawer />
    </footer>
  );
};

export default Footer;
