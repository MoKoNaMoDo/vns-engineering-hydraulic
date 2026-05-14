export default function SectionText({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-black">{title}</h2>
      {items.map((item) => (
        <p key={item}>•{item}</p>
      ))}
    </div>
  );
}
