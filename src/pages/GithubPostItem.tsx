import { useParams, useNavigate } from 'react-router-dom';
import { useGetUserQuery } from '../redux/githubApi';
import User from '../components/User';

function GithubPostItem() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetUserQuery(id!);
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='product_container'>
        <div className='product1'>
          {isLoading && <h2 className='info'>Loading...</h2>}
          {isError && <h2 className='warning'>An error occurred: {isError}</h2>}
          {data && <User data={data} />}
        </div>
      </div>
      <div className='product_container'>
        <button className='back_button' onClick={() => navigate('/users')}>
          BACK
        </button>
      </div>
    </div>
  );
}

export default GithubPostItem;
