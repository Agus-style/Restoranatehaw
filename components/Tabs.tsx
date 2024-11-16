import { useState } from "react";

export function Tabs({ children }: { children: Function }) {
  const [activeTab, setActiveTab] = useState("food");

  return <div>{children(activeTab, setActiveTab)}</div>;
}

export function TabsList({ children, className }: { children: any; className: string }) {
  return <div className={className}>{children}</div>;
}

export function TabsTrigger({
  value,
  onClick,
  className,
  children,
}: {
  value: string;
  onClick: Function;
  className: string;
  children: string;
}) {
  return (
    <button
      onClick={() => onClick(value)}
      className={`focus:outline-none transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  activeTab,
  children,
}: {
  value: string;
  activeTab: string;
  children: any;
}) {
  return activeTab === value ? <div>{children}</div> : null;
}