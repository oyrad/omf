"use client";

import { useState, useEffect } from "react";
import InputField from "./InputField";
import {
  ArrowRight,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import ResponseMessage from "./ResponseMessage";
import ClipLoader from "react-spinners/ClipLoader";
import { ContactDictionary } from "@/types/types";

type ContactFormProps = {
  contactMessage: string;
  formText: ContactDictionary["form"];
};

export default function ContactForm({
  contactMessage,
  formText,
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSuccessful, setIsSuccessful] = useState<boolean | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        setIsSubmitted(true);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (!name || !email || !title || !content || isLoading) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [name, email, title, content, isLoading]);

  return (
    <>
      {isSubmitted ? (
        <ResponseMessage
          isSuccessful={isSuccessful}
          setIsSuccessful={setIsSuccessful}
          setIsSubmitted={setIsSubmitted}
          successfulMessage={formText.messageSent}
          failedMessage={formText.messageFailed}
        />
      ) : (
        <p className="mb-8">{contactMessage}</p>
      )}
      <form
        className="flex flex-col items-end mb-20 space-y-6 lg:mb-40 lg:space-y-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full space-y-6 lg:space-y-0 lg:space-x-12 lg:flex-row">
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
          className="w-full h-48 px-4 py-2 border-b border-black rounded-none outline-none bg-stone-100"
          placeholder={formText.content}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required={true}
        ></textarea>
        <button
          type="submit"
          className={`text-white px-4 py-2 lg:py-1.5 flex space-x-2 items-center w-fit ${
            isButtonDisabled
              ? "bg-stone-500 cursor-not-allowed"
              : "bg-stone-800 hover:bg-stone-500 transition-all"
          }`}
          disabled={isButtonDisabled}
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
