import { ReactNode } from 'react';
export interface ServerResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IUser[];
}
export interface UserProps {
  data?: IUser;
}

export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
  name?: string;
  public_repos?: string;
  location?: string;
}
export interface SearchProviderProps {
  children: ReactNode;
}
export interface SearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchResults: IUser[];
  setSearchResults: React.Dispatch<React.SetStateAction<IUser[]>>;
}
export interface SearchUserProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
