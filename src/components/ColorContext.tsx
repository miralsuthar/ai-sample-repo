import { createContext, useState, ReactNode } from 'react';

export type TColorContext = {
  primary300: string;
  setPrimary300: (color: string) => void;
}

export const ColorContext = createContext<TColorContext>({
  primary300: "",
  setPrimary300: () => { }
})

export const ColorContextProvider = ({ children }: { children: ReactNode }) => {
  const [primary300, setPrimary300] = useState<string>("")
  return (
    <ColorContext.Provider value={{ primary300, setPrimary300 }}>
      {children}
    </ColorContext.Provider>
  )
}

