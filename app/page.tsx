import Entries from "@/components/entries";
import { Suspense } from "react";

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

export default async function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Entries />
    </Suspense>
  );
}
