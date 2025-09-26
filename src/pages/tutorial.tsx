import Markdown from "react-markdown";
import tutorial from "@/assets/tutorial.md?raw";

const Tutorial = () => {
  return (
    <div className="prose prose-amber dark:prose-invert max-w-none">
      <Markdown>{tutorial}</Markdown>
    </div>
  );
};

export default Tutorial;
