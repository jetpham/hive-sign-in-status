"use client";
import Bee from "./bee";
import BadgeLinks from "./badge-links";

export default function TitleBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-3">
        <Bee height={24} color="#FDBB30" />
        <h1 className="text-xl font-semibold">Hive Sign Ins</h1>
        <BadgeLinks />
      </div>
    </div>
  );
}
