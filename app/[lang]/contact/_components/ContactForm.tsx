"use client";

import { useState } from "react";
import InputField from "./InputField";
import {
  ArrowRight,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import ResponseMessage from "./ResponseMessage";
import ClipLoader from "react-spinners/ClipLoader";

type ContactFormProps = {
  formText: any;
};

export default function ContactForm({ formText }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSuccessful, setIsSuccessful] = useState<boolean | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, title, content }),
    })
      .then((res) => {
        if (res.status === 200) {
          setName("");
          setEmail("");
          setTitle("");
          setContent("");
          setIsSuccessful(true);
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        console.error(err, "Error occurred");
        setIsSuccessful(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <ResponseMessage
        isSuccessful={isSuccessful}
        setIsSuccessful={setIsSuccessful}
        successfulMessage={formText.messageSent}
        failedMessage={formText.messageFailed}
      />
      <form
        className="flex flex-col items-end space-y-8 mb-40"
        onSubmit={handleSubmit}
      >
        <div className="flex space-x-12 w-full">
          <InputField
            placeholder={formText.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            placeholder={formText.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <InputField
          placeholder={formText.title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="bg-stone-100 rounded-none outline-none border-b border-black w-full px-4 py-2 h-48"
          placeholder={formText.content}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className={`bg-stone-800 hover:bg-stone-500 transition-all text-white px-4 py-1 flex space-x-2 items-center w-fit ${
            isLoading ? "bg-stone-500" : ""
          }`}
          disabled={isLoading}
        >
          <p>{formText.buttonText}</p>
          {isLoading ? (
            <ClipLoader
              color="#ffffff"
              loading={isLoading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <ArrowRight className="w-5" />
          )}
        </button>
      </form>
    </>
  );
}
