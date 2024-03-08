import clsx from "clsx";

type TProps = {
  message: string;
  inbound: boolean;
};

const ChatMessage = ({ inbound, message }: TProps) => {
  return (
    <div
      className={clsx("flex mb-4", {
        "justify-end": inbound,
        "justify-start": !inbound,
      })}
    >
      <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
        {message}
      </div>
      <img
        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
        className="object-cover h-8 w-8 rounded-full"
        alt=""
      />
    </div>
  );
};

export default ChatMessage;
