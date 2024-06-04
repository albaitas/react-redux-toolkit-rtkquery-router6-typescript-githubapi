import { createContext, useState } from 'react';
import { IUser, SearchProviderProps, SearchContextType } from '../../types';

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<IUser[]>([]);

  return <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchResults, setSearchResults }}>{children}</SearchContext.Provider>;
};
