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
    position: "fixed" as const,
    top: `${heights.navigation}px`,
    bottom: `${heights.footer}px`,
    left: 0,
    right: 0,
    overflow: "auto",
  };

  return (
    <div style={styles}>
      <div className="relative z-10 min-h-full">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/80 via-background/90 via-50% to-background" />
        <div className="relative z-10 p-2">{children}</div>
      </div>
    </div>
  );
};

export default BackgroundPage;
