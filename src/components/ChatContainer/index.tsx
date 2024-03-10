import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = {
  title: string;
  avatar: string;
  color?: string;
  expanded?: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
};

const ChatContainer = ({
  title,
  avatar,
  color,
  expanded,
  onCollapse,
  onExpand,
  children,
}: PropsWithChildren<Props>) => {
  // const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    if (expanded && onCollapse) {
      onCollapse();
    } else if (!expanded && onExpand) {
      onExpand();
    }
  };

  return (
    <>
      <div
        className={clsx("absolute bottom-2", {
          "bg-white": !color,
          [`bg-[${color}]`]: color,
        })}
      >
        <div
          className={clsx({
            hidden: !expanded,
            block: expanded,
          })}
        >
          <div className="m-2 w-96">
            <div className="w-full px-5 flex flex-col justify-between border border-blue-500 rounded-lg">
              {children}
            </div>
          </div>
        </div>
        <div
          role="button"
          className="w-[150px] border border-cyan-200 flex flex-col items-center gap-3 p-4 rounded-md"
          onClick={handleExpand}
        >
          <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
            <img src={avatar} className="w-full h-auto" alt="chat-avatar" />
          </div>
          <p className="text-lg font-bold">{title}</p>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
