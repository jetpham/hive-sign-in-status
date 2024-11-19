import { PrismaClient } from "@prisma/client";
import Entries from "@/components/entries";
import { unstable_cache } from "next/cache";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";

export type UpdatedDataType = {
  id: number;
  name: string;
  duration: string;
  areas: string[];
  major: string;
  project: string;
  opinion: string;
  timestamp: Date;
};

const prisma = new PrismaClient();

const getCachedEntries = unstable_cache(async () => {
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
});

export default async function Home() {
  const updatedData: UpdatedDataType[] = await getCachedEntries();

  //TODO: add a qr code for the hive sign in form
  return (
    <>
      <Entries updatedData={updatedData} />
    </>
  );
}
