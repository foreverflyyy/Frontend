import { useEffect, useState } from 'react'
import { useGetUsersQuery, useLazyGetUserRepoQuery } from '../store/reducers/userApi'
import useDebounce from '../hooks/useDebounce';
import { UserRepository } from '../components/UserRepository';

export const HomePage = () =>  {

  const [username, setUsername] = useState('');
  const [dropdown, setDropdown] = useState(false);

  const debounced = useDebounce(username);
  const {data: users, error, isLoading} = useGetUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  });

  const [getUserRepo, {data: repos}] = useLazyGetUserRepoQuery();

  useEffect(() => {
    setDropdown(users?.length! > 0 && debounced.length > 3);
  }, [debounced, users])

  const getListReposByUser = (username: string) => {
    setDropdown(false);
    getUserRepo(username);
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {error && <div> Some error was admitted! </div>}

      <div className='relative w-[560px]'>
        <input 
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search Githum profile by username..."
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        {dropdown && 
          <ul className="list-none overflow-y-scroll absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
            { isLoading && <p className='text-center'>Loading...</p>}
            {users?.map(user => 
              <li 
                key={user.id}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                onClick={() => getListReposByUser(user.login)}
              >
                {user.login}
              </li>   
            )}
          </ul>
        }
        <div className='container'>
          {repos?.map((repo) => 
            <UserRepository key={repo.id} repo={repo}/>  
          )}
        </div>
      </div>
    </div>
  )
}
