type InputFieldProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-stone-100 rounded-none outline-none border-b border-black px-4 py-2 w-full"
      required={true}
    />
  );
}
