import {
  Wrench,
  Atom,
  Cpu,
  Palette,
  PenTool,
  BriefcaseBusiness,
  DraftingCompass,
  TreePine,
} from "lucide-react";

export const majorConfig: {
  [key: string]: {
    color: string;
    hoverColor: string;
    icon: JSX.Element;
  };
} = {
  Engineering: {
    color: "bg-orange-500 text-orange-100",
    hoverColor: "hover:bg-orange-600 hover:text-orange-50",
    icon: <Wrench className="h-3 w-3" />,
  },
  Physics: {
    color: "bg-blue-500 text-blue-100",
    hoverColor: "hover:bg-blue-600 hover:text-blue-50",
    icon: <Atom className="h-3 w-3" />,
  },
  "Computer Science": {
    color: "bg-purple-500 text-purple-100",
    hoverColor: "hover:bg-purple-600 hover:text-purple-50",
    icon: <Cpu className="h-3 w-3" />,
  },
  Art: {
    color: "bg-yellow-500 text-yellow-100",
    hoverColor: "hover:bg-yellow-600 hover:text-yellow-50",
    icon: <Palette className="h-3 w-3" />,
  },
  Design: {
    color: "bg-red-500 text-red-100",
    hoverColor: "hover:bg-red-600 hover:text-red-50",
    icon: <PenTool className="h-3 w-3" />,
  },
  Business: {
    color: "bg-orange-500 text-orange-100",
    hoverColor: "hover:bg-orange-600 hover:text-orange-50",
    icon: <BriefcaseBusiness className="h-3 w-3" />,
  },
  Architecture: {
    color: "bg-green-500 text-green-100",
    hoverColor: "hover:bg-green-600 hover:text-green-50",
    icon: <DraftingCompass className="h-3 w-3" />,
  },
  Other: {
    color: "bg-stone-500 text-stone-100",
    hoverColor: "hover:bg-stone-600 hover:text-stone-50",
    icon: <TreePine className="h-3 w-3" />,
  },
};

export const getMajorConfig = (major: string) => {
  return majorConfig[major] || majorConfig["Other"];
};
