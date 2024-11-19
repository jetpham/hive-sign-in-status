import Link from "next/link";
import { badgeVariants } from "./ui/badge";

export default function BadgeLinks() {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <Link
        className={badgeVariants({ variant: "outline" })}
        href={"https://github.com/jetpham/hive-sign-in-status"}
      >
        Github Repo
      </Link>
      <Link
        className={badgeVariants({ variant: "outline" })}
        href={"https://jetpham.com/"}
      >
        Jet&apos;s Blog
      </Link>
      <Link
        className={badgeVariants({ variant: "outline" })}
        href={
          "https://docs.google.com/forms/d/e/1FAIpQLSe9T3XuEwjwAPiANzvVZwvLueLBsqZZP569yjOm8rQ5OFZsYQ/viewform"
        }
      >
        Hive Sign In Form
      </Link>
    </div>
  );
}
