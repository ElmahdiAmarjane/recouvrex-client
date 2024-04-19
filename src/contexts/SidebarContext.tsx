import { FC, useState, createContext, ReactNode } from 'react';

type SidebarContextType = {
  sidebarToggle: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType>(
  {} as SidebarContextType
);

// Define the props explicitly when extending FC
interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => setSidebarToggle(!sidebarToggle);
  const closeSidebar = () => setSidebarToggle(false);

  return (
    <SidebarContext.Provider value={{ sidebarToggle, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
