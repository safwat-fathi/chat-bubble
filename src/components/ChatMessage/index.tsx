import clsx from "clsx";

type TProps = {
  type: "text" | "image" | "audio";
  message: string;
  inbound: boolean;
  avatar: string;
};

const renderMessage = (type: TProps["type"], message: string) => {
  switch (type) {
    case "text":
      return <p>{message}</p>;
    case "image":
      return <img src={message} alt="" className="h-40 w-40 object-cover" />;
    case "audio":
      return (
        <audio controls src={message}>
          Your browser does not support the audio element.
        </audio>
      );
  }
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
        {renderMessage(type, message)}
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
