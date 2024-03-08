import clsx from "clsx";

type TProps = {
  type: "text" | "image";
  message: string;
  inbound: boolean;
  avatar: string;
};

const ChatMessage = ({ type, avatar, inbound, message }: TProps) => {
  return (
    <div
      className={clsx("flex gap-2 mb-4", {
        "justify-end": inbound,
        "justify-start": !inbound,
      })}
    >
      {!inbound && (
        <img
          src={avatar}
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
      )}
      <div
        className={clsx("py-3 px-4 text-white", {
          "bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl": !inbound,
          "bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl": inbound,
        })}
      >
        {type === "text" ? (
          <p>{message}</p>
        ) : (
          <img src={message} alt="" className="h-40 w-40 object-cover" />
        )}
      </div>
      {inbound && (
        <img
          src={avatar}
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
      )}
    </div>
  );
};

export default ChatMessage;
