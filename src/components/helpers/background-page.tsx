import { heights } from "@/lib/heights";

type BackgroundPageProps = {
  children: React.ReactNode;
  background: string;
};

const BackgroundPage = ({ children, background }: BackgroundPageProps) => {
  const styles = {
    backgroundImage: `url('${background}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div
      className={`fixed inset-0 top-[${heights.navigation}px] bottom-[${heights.footer}px]`}
      style={styles}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/95 to-background/90" />
      <div className="relative z-10 p-2">{children}</div>
    </div>
  );
};

export default BackgroundPage;
