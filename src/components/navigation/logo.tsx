import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="space-x-2 center">
      <div className="rounded-full w-4 h-4 bg-primary" />
      <p className="heading text-primary">Postboard</p>
    </Link>
  );
};

export default Logo;
