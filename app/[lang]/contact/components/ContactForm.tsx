"use client";

import InputField from "./InputField";
import {
  ArrowRight,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

type ContactFormProps = {
  formText: any;
};

export default function ContactForm({ formText }: ContactFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <form
      className="flex flex-col items-end space-y-8 mb-40"
      onSubmit={handleSubmit}
    >
      <div className="flex space-x-12 w-full">
        <InputField placeholder={formText.name} />
        <InputField placeholder={formText.email} />
      </div>
      <InputField placeholder={formText.title} />
      <textarea
        className="bg-stone-100 rounded-none outline-none border-b border-black w-full px-4 py-2 h-48"
        placeholder={formText.content}
      ></textarea>
      <button
        type="submit"
        className="bg-stone-800 text-white px-4 py-1 flex space-x-2 items-center w-fit"
      >
        <p>{formText.buttonText}</p>
        <ArrowRight className="w-5" />
      </button>
    </form>
  );
}