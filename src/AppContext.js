import{createContext} from 'react';

export const defaultObject = {
  sidebarVisible:false,
  setSidebarVisible: () => {}
}
export const AppContext = createContext(defaultObject)