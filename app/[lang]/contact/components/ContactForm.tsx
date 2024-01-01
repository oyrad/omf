"use client";

import InputField from "./InputField";
import {
  ArrowRight,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <form className="flex flex-col space-y-8 mb-40" onSubmit={handleSubmit}>
      <div className="flex space-x-12">
        <InputField placeholder="Ime i prezime" />
        <InputField placeholder="E-mail" />
      </div>
      <InputField placeholder="Naslov" />
      <textarea
        className="bg-stone-100 rounded-none outline-none border-b border-black w-full px-4 py-2"
        placeholder="Sadržaj"
      ></textarea>
      <button
        type="submit"
        className="bg-stone-800 text-white px-4 py-1 flex space-x-2 items-center w-fit"
      >
        <p>Pošalji</p>
        <ArrowRight className="w-5" />
      </button>
    </form>
  );
}
