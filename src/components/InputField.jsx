export default function InputField({ setup, state }) {
  const { label, placeholder, type, required } = setup;
  const [getter, setter] = state;

  return (
    <label className="input-field">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={getter}
        onChange={(event) => setter(event.target.value)}
        required={required}
      />
    </label>
  );
}
