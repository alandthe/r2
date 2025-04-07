export function Input(props) {
  return (
    <input
      {...props}
      className={`px-4 py-2 rounded-xl bg-purple-900 border border-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 ${props.className || ""}`}
    />
  );
}
