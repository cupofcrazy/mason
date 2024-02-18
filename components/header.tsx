"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const paths = [
    { href: '/resources', label: 'Resources' },
    { href: '/info', label: 'Info' },
  ]
  const pathname = usePathname()
  
  return (
    <header className="py-4 px-4 lg:px-24 flex justify-between items-center fixed top-0 left-0 w-full">
      <nav className="flex flex-1 gap-4">
        { paths.map(path => (
          <li key={path.label}>
            <Link
              className={`text-neutral-500 hover:text-neutral-900 hover:underline transition-all ${pathname === path.href ? 'text-neutral-900 underline' : ''}`}
              href={path.href}
            >
              {path.label}
            </Link>
        </li>
        )) }
      </nav>
      <Link href="/" className={`uppercase text-neutral-500 hover:text-neutral-900 transition-all ${pathname === "/" ? 'text-neutral-900' : ''}`}>Mason — 01</Link>
      <div className="flex flex-1 justify-end">
        {process.env.NODE_ENV === "development" && (
          <Link
            className=" text-neutral-500 hover:text-neutral-900 hover:underline transition-all"
            href="/admin"
            target="_blank"
          >
            Studio
          </Link>
        )}
      </div>
    </header>
  );
};
