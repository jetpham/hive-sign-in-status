"use client";
import BadgeLinks from "./badge-links";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function TitleBar() {
  return (
    <Card>
      <CardHeader style={{ display: "flex", alignItems: "center" }}>
        <CardTitle>Hive Sign Ins</CardTitle>
        <CardDescription style={{ paddingBottom: "10px" }}>
          From the past 24 hours
        </CardDescription>
        <BadgeLinks />
      </CardHeader>
    </Card>
  );
}
