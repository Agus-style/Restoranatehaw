import { ReactNode } from "react";

export function Tabs({ activeTab, setActiveTab, children }: { activeTab: string, setActiveTab: Function, children: ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="flex">{children}</div>;
}

export function TabsTrigger({ value, onClick, children }: { value: string, onClick: Function, children: ReactNode }) {
  return (
    <button onClick={() => onClick(value)} className="p-2">{children}</button>
  );
}

export function TabsContent({ value, activeTab, children }: { value: string, activeTab: string, children: ReactNode }) {
  return activeTab === value ? <div>{children}</div> : null;
}
