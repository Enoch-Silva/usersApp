import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-zinc-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <h1 className="font-bold text-2xl">usersApp</h1>
          </Link>
        </div>
        <div className="links flex gap-6">
          <div className="flex gap-2 items-center">
            <i className="ph-bold ph-user-plus"></i>
            <Link href={"/add"}>cadastrar</Link>
          </div>
          <div className="flex gap-2 items-center">
            <i className="ph-bold ph-info"></i>
            <Link href={"/about"}>Sobre</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
