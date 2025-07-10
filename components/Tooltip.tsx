import { useState } from "react";

interface TooltipProps {
  children: React.ReactElement;
  content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      <div
        className="relative"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        <div
          className={`absolute bottom-[130%] left-[50%] 
        translate-x-[-50%] bg-gray-200 p-2 w-max rounded-xl
        after:content-[''] after:absolute
        after:top-[100%] after:left-[50%] after:ml-[-5px] 
        after:border-[5px] after:border-solid after:border-t-gray-200
        after:border-b-transparent after:border-l-transparent after:border-r-transparent
        ${isVisible ? "opacity-1" : "opacity-0"}
        `}
        >
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
