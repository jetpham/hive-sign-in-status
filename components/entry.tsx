import { getMajorConfig } from "./major-config";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { UpdatedDataType } from "@/app/page";

export default function Entry({
  updatedData,
}: {
  updatedData: UpdatedDataType;
}) {
  const initials = updatedData.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const { color, hoverColor, icon } = getMajorConfig(updatedData.major);

  return (
    <Card className="flex items-center justify-left px-3">
      <Avatar>
        <AvatarImage src="/avatar.png" alt="avatar" />
        <AvatarFallback className={`${color}`}>{initials}</AvatarFallback>
      </Avatar>
      <CardHeader className="p-3">
        <CardTitle>
          {updatedData.name.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          )}
        </CardTitle>
        <CardDescription>
          {new Date(
            updatedData.timestamp.getTime() +
              updatedData.timestamp.getTimezoneOffset() * 60 * 1000
          ).toLocaleTimeString("en-US", {
            hour12: true,
            hour: "numeric",
            minute: "numeric",
          })}
          <Badge
            className={`items-center gap-1 ${color} ${hoverColor} transition-colors duration-200 ml-2 align-middle`}
            variant="secondary"
          >
            {icon}
            <span>{updatedData.major}</span>
          </Badge>{" "}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
