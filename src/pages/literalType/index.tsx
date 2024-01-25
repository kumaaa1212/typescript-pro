export default function LiteralType() {
  const a: "a" = "a";
  const b: 12 = 12;
  const c: 1 | 2 | 3 | 4 | 5 = 1;
  return (
    <div>
      <h1>Literal Type</h1>
    </div>
  );
}
