import {
  X, // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

type ResponseMessageProps = {
  isSuccessful: boolean | undefined;
  setIsSuccessful: (isSuccessful?: boolean) => void;
  successfulMessage: string;
  failedMessage: string;
};

export default function ResponseMessage({
  isSuccessful,
  setIsSuccessful,
  successfulMessage,
  failedMessage,
}: ResponseMessageProps) {
  if (isSuccessful === undefined) return;

  return (
    <div
      className={`${
        isSuccessful ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      } px-4 py-2 mb-6 -mt-2 rounded-md flex justify-between items-center w-full`}
    >
      {isSuccessful ? <p>{successfulMessage}</p> : <p>{failedMessage}</p>}
      <X className="w-6 h-6 cursor-pointer" onClick={() => setIsSuccessful()} />
    </div>
  );
}
