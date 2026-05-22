import { TriangleAlert, XIcon } from "lucide-react";
import { useState } from "react";

const Error = ({ children }: { children: string }) => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="bg-red-500 text-sm text-background text-center pl-4 pr-2 py-2 rounded-md">
      <div className="center gap-4">
        <div className="w-8 h-8 center">
          <TriangleAlert className="text-red-900 animate-pulse" />
        </div>
        <div className="text-left">{children}</div>
        <div
          className="p-1 center cursor-pointer"
          role="button"
          onClick={() => setShow(false)}
        >
          <XIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Error;
