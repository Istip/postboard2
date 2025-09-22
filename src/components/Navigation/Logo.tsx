import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  const handleNavigateHome = () => navigate("/");

  return (
    <div className="h-4 w-4 rounded-full bg-primary">
      <Button
        variant="ghost"
        size="icon"
        className="h-4 w-4 p-0"
        onClick={handleNavigateHome}
      />
    </div>
  );
};

export default Logo;
