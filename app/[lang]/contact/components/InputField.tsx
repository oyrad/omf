type InputFieldProps = {
  placeholder: string;
};

export default function InputField({ placeholder }: InputFieldProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-stone-100 rounded-none outline-none border-b border-black px-4 py-2 w-full"
    />
  );
}
