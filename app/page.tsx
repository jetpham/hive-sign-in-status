import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge";
import { unstable_noStore as noStore } from "next/cache";
import { ModeToggle } from "@/components/theme-toggle";

const prisma = new PrismaClient();

type UpdatedDataType = {
  id: number;
  name: string;
  duration: string;
  areas: string[];
  major: string;
  project: string;
  opinion: string;
  timestamp: Date;
};

async function getUpdatedData() {
  noStore();
  return await prisma.updatedData.findMany({
    where: {
      timestamp: {
        gte: new Date(new Date().setDate(new Date().getDate() - 1)),
      },
    },
    orderBy: {
      timestamp: "desc",
    },
  });
}

export default async function Home() {
  const updatedData: UpdatedDataType[] = await getUpdatedData();

  return (
    <>
      <Card>
        <CardHeader style={{ display: "flex", alignItems: "center" }}>
          <CardTitle>Hive Sign Ins</CardTitle>
          <CardDescription style={{ paddingBottom: "10px" }}>
            From the past 24 hours
            <ModeToggle />
          </CardDescription>
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
        </CardHeader>
      </Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Areas</TableHead>
            <TableHead>Major</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Opinion</TableHead>
            <TableHead>Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {updatedData.map((data: UpdatedDataType) => (
            <TableRow key={data.id}>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.duration}</TableCell>
              <TableCell>{data.areas.join(", ")}</TableCell>
              <TableCell>{data.major}</TableCell>
              <TableCell>{data.project}</TableCell>
              <TableCell>{data.opinion}</TableCell>
              <TableCell>
                {new Date(
                  new Date(data.timestamp).getTime() + 8 * 60 * 60 * 1000
                ).toLocaleString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: true,
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
