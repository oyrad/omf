"use client";

import { useState } from "react";
import InputField from "./InputField";
import {
  ArrowRight,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import ResponseMessage from "./ResponseMessage";

type ContactFormProps = {
  formText: any;
};

export default function ContactForm({ formText }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSuccessful, setIsSuccessful] = useState<boolean | undefined>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, title, content }),
    }).then((res) => {
      console.log(res, "Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setName("");
        setEmail("");
        setTitle("");
        setContent("");
        setIsSuccessful(true);
      } else {
        console.log("Response failed!");
        setIsSuccessful(false);
      }
    });
  }

  return (
    <>
      <ResponseMessage
        isSuccessful={isSuccessful}
        setIsSuccessful={setIsSuccessful}
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
          className="bg-stone-800 hover:bg-stone-500 transition-all text-white px-4 py-1 flex space-x-2 items-center w-fit"
        >
          <p>{formText.buttonText}</p>
          <ArrowRight className="w-5" />
        </button>
      </form>
    </>
  );
}
