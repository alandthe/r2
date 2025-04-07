export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-2xl bg-purple-700 hover:bg-purple-600 text-white font-semibold ${props.className || ""}`}
    >
      {children}
    </button>
  );
}
