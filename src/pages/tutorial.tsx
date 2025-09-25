import Markdown from "react-markdown";
import tutorialContent from "@/assets/tutorial.md?raw";

const Tutorial = () => {
  return (
    <div className="prose prose-amber dark:prose-invert max-w-none">
      <Markdown>{tutorialContent}</Markdown>
    </div>
  );
};

export default Tutorial;
