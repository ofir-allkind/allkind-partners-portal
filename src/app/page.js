import Image from "next/image";

export default function Home() {
  const name = "Amy Boardman";
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : "Good evening";

  return (
    <div className="px-8 py-8" style={{ paddingTop: 0 }}>
      <h1 className="text-2xl font-semibold text-gray-900">
        {greeting} {name}
      </h1>
    </div>
  );
}
