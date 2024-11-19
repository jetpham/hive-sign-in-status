import Entry from "./entry";
import { UpdatedDataType } from "@/app/page";
import { ScrollArea } from "./ui/scroll-area";

export default function Entries({
  updatedData,
}: {
  updatedData: UpdatedDataType[];
}) {
  return (
    <ScrollArea className="h-full w-full rounded-md border">
      {updatedData.map((data) => (
        <Entry key={data.id} updatedData={data} />
      ))}
    </ScrollArea>
  );
}
