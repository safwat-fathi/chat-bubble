import { ChangeEvent, useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: File | string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | undefined>();

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files) setFile(files[0]);
  };

  const handleText = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value) setMessage(value);
  };

  const handleSendMessage = () => {
    if (!message && !file) return;

    if (file) {
      onSendMessage(file);

      setFile(undefined);
    }

    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="py-5 flex flex-col gap-5">
      <div className="relative">
        <input
          value={message}
          onChange={handleText}
          className="w-full bg-gray-300 py-5 px-3 rounded-xl pe-28"
          type="text"
          placeholder="type your message here..."
        />

        <label
          htmlFor="img"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-300 border border-zinc-400 cursor-pointer px-3 py-1 rounded-xl w-28 text-ellipsis overflow-hidden whitespace-nowrap"
        >
          <input
            id="img"
            // value={file}
            onChange={handleFile}
            className="hidden"
            type="file"
            // accept="image/*"
            placeholder="type your message here..."
          />
          {file ? file.name : "Upload File"}
        </label>
      </div>
      <button
        className="bg-slate-300 border border-zinc-400 cursor-pointer px-3 py-1 rounded-xl self-start"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
