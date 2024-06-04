import { UserProps } from '../../types';

const User = (props: UserProps) => {
  const { data } = props;
  return (
    <>
      <img src={data?.avatar_url} alt={data?.login} className='product_img' />
      <div className='product_content'>
        <div className='product_title'>Name: {data?.name}</div>
        <p className='product_price'>Location: {data?.location}</p>
        <p>Repos: {data?.public_repos}</p>
      </div>
    </>
  );
};

export default User;
