import { Frown } from "lucide-react";
import { Link } from "react-router";

const ShoppingEmpty = () => {
  return (
    <div className="space-y-1 text-center">
      <div className="w-fit h-fit mb-4 rounded-xl mx-auto border border-primary overflow-hidden">
        <Frown className="p-4 bg-primary text-muted animate-pulse" size={64} />
      </div>
      <p className="my-2">Your shopping list is empty.</p>
      <p className="text-sm text-muted-foreground">
        Please use the toggler button from your footer to open the shopping item
        creation form.
      </p>
      <p className="my-2 text-sm">
        If you need help, please visit the{" "}
        <Link
          to="/tutorial"
          className="text-primary underline underline-offset-4"
        >
          Tutorial page
        </Link>
        .
      </p>
    </div>
  );
};

export default ShoppingEmpty;
