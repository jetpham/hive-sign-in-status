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
} from "@/components/ui/card"

import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge"


const prisma = new PrismaClient();

type UpdatedDataType = {
  id: number;
  name: string;
  duration: string;
  areas: string;
  major: string;
  project: string;
  opinion: string;
  createdAt: Date;
};

export default async function Home() {
  const updatedData: UpdatedDataType[] = await prisma.updatedData.findMany({
    where: {
      createdAt: {
        // Get data from the last 24 hours
        gte: new Date(new Date().setDate(new Date().getDate() - 1)),
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <>
      <Card>
        <CardHeader style={{ display: 'flex', alignItems: 'center' }}>
          <CardTitle>Hive Sign Ins</CardTitle>
          <CardDescription style={{ paddingBottom: '10px' }}>From the past 24 hours</CardDescription>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link className={badgeVariants({ variant: "outline" })} href={"https://github.com/jetpham/hive-sign-in-status"}>Github Repo</Link>
            <Link className={badgeVariants({ variant: "outline" })} href={"https://jetpham.com/"}>Jet&apos;s Blog</Link>
            <Link className={badgeVariants({ variant: "outline" })} href={"https://docs.google.com/forms/d/e/1FAIpQLSe9T3XuEwjwAPiANzvVZwvLueLBsqZZP569yjOm8rQ5OFZsYQ/viewform"}>Hive Sign In Form</Link>
          </div>
        </CardHeader>
      </Card >
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
          {updatedData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.duration}</TableCell>
              <TableCell>{data.areas}</TableCell>
              <TableCell>{data.major}</TableCell>
              <TableCell>{data.project}</TableCell>
              <TableCell>{data.opinion}</TableCell>
              <TableCell>{new Date(data.createdAt).toLocaleTimeString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
