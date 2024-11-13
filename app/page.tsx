import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { Badge, badgeVariants } from "@/components/ui/badge"


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
  });

  return (
    <>
      <Card>
        <CardHeader style={{ display: 'flex', alignItems: 'center' }}>
          <CardTitle style={{ paddingBottom: '10px' }}>Hive Sign Ins</CardTitle>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link className={badgeVariants({ variant: "outline" })} href={"https://github.com/jetpham/hive-sign-in-status"}>Github Repo</Link>
            <Link className={badgeVariants({ variant: "outline" })} href={"https://jetpham.com/"}>Jet's Blog</Link>
            <Link className={badgeVariants({ variant: "outline" })} href={"https://docs.google.com/forms/d/e/1FAIpQLSe9T3XuEwjwAPiANzvVZwvLueLBsqZZP569yjOm8rQ5OFZsYQ/viewform"}>Hive Sign In Form</Link>
          </div>
        </CardHeader>
      </Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Areas</TableHead>
            <TableHead>Major</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Opinion</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {updatedData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.duration}</TableCell>
              <TableCell>{data.areas}</TableCell>
              <TableCell>{data.major}</TableCell>
              <TableCell>{data.project}</TableCell>
              <TableCell>{data.opinion}</TableCell>
              <TableCell>{new Date(data.createdAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
