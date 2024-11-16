import { ReactNode, useState } from "react";

export const Tabs = ({
  children,
}: {
  children: (activeTab: string, setActiveTab: (value: string) => void) => ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState("food");
  return <div>{children(activeTab, setActiveTab)}</div>;
};

export const TabsList = ({ children }: { children: ReactNode }) => (
  <div className="flex">{children}</div>
);

export const TabsTrigger = ({
  value,
  children,
  onClick,
}: {
  value: string;
  children: ReactNode;
  onClick: (value: string) => void;
}) => (
  <button
    className="px-4 py-2 font-bold"
    onClick={() => onClick(value)}
  >
    {children}
  </button>
);

export const TabsContent = ({
  value,
  activeTab,
  children,
}: {
  value: string;
  activeTab: string;
  children: ReactNode;
}) => (value === activeTab ? <div>{children}</div> : null);