"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavLink = ({ href, exact, children, ...props }) => {
  const pathname = usePathname();
  const active = " active_link";
  const isActive = exact ? pathname === href : pathname;
  console.log(pathname);
  console.log(isActive);
  if (isActive) {
    props.className += active;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
