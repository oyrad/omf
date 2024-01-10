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
      className="w-full px-4 py-2 border-b border-black rounded-none outline-none bg-stone-100"
      required={true}
    />
  );
}
