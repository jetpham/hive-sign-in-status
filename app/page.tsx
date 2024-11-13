import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PrismaClient } from "@prisma/client";

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
    <Table>
      <TableCaption>A list of recent data updates.</TableCaption>
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
  );
}
