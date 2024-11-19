import Entry from "./entry";
import { UpdatedDataType } from "@/app/page";
import { ScrollArea } from "./ui/scroll-area";
import { PrismaClient } from "@prisma/client";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
const prisma = new PrismaClient();

export async function getCachedEntries() {
  "use cache";
  cacheTag("entries");
  console.log("Fetching updated data");
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

export default async function Entries() {
  const updatedData: UpdatedDataType[] = await getCachedEntries();

  return (
    <ScrollArea className="h-full w-full rounded-md border">
      {updatedData.map((data) => (
        <Entry key={data.id} updatedData={data} />
      ))}
    </ScrollArea>
  );
}
