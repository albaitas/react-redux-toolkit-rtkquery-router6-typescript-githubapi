import { useNavigate } from 'react-router-dom';
import SearchUser from '../components/SearchUser';
import { useSearchUsersQuery } from '../redux/githubApi';
import useDebounce from '../hooks/useDebounce';
import { useEffect, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { IUser } from '../../types';

function GithubPostList() {
  const { searchTerm, setSearchTerm, searchResults, setSearchResults } = useContext(SearchContext)!;
  const debounced = useDebounce(searchTerm, 500);
  const { data, isLoading, isError } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 2,
    refetchOnFocus: true
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setSearchResults(data);
    }
  }, [data, setSearchResults]);

  return (
    <div className='container'>
      <SearchUser search={searchTerm} setSearch={setSearchTerm} />
      {data && <h2 className='baba'>Github Users:</h2>}
      <div className='product_container'>
        {isLoading && <h2 className='info'>Loading...</h2>}
        {isError && <h2 className='warning'>An error occurred: {isError}</h2>}
        {searchResults &&
          searchResults.map((item: IUser) => (
            <div className='product' key={item.id} onClick={() => navigate(`/users/${item.login}`)}>
              <img src={item.avatar_url} alt={item.login} className='product_img' />
              <div className='product_content'>{item.login}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default GithubPostList;
