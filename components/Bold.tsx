/** Renders **bold** segments inside a plain string. */
export default function Bold({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? <b key={i} className="font-semibold text-current">{part}</b> : <span key={i}>{part}</span>
      )}
    </>
  );
}
