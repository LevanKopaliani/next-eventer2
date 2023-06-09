"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavLink = ({ href, exact, children, ...props }) => {
  const pathname = usePathname();
  const active = " active_link";
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    console.log(props.className);
    props.className += active;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
