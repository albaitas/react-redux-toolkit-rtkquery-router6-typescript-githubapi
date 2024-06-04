import { SearchUserProps } from '../../types';

const SearchUser = ({ search, setSearch }: SearchUserProps) => {
  return (
    <div className='new_product'>
      <input className='product_input' placeholder='enter at least two letters' value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default SearchUser;
