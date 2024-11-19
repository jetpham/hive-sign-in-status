import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";
import TitleBar from "@/components/title-bar";
import Entries from "@/components/entries";

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

async function getUpdatedData() {
  const prisma = new PrismaClient();
  console.log("prisma fetch");
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
      <TitleBar />
      <Entries updatedData={updatedData} />
    </>
  );
}
