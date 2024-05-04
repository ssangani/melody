import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }, { name: "description", content: "Home Page" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Hello!</h1>
      <p data-testid="todo">TODO</p>
    </div>
  );
}
