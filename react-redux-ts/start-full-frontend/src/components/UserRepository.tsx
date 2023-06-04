import React, { useState } from 'react'
import { IRepos } from '../models/IRepository'
import { useAppSelector } from '../store/store'
import { useActions } from '../store/actions';

export function UserRepository({repo} : {repo: IRepos}) {

  const {addFavourite, removeFavourite} = useActions();
  const {favourites} = useAppSelector(state => state.reposFav);
  const [fav, setFav] = useState(favourites.includes(repo.html_url));

  const addToFavList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo.html_url);
    setFav(true);
  }

  const deleteFromFavList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setFav(false);
  }

  return (
    <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-grey-100 transition-all'>
      <a href={repo.html_url} target='_blank' rel="noreferrer">
        <h2 className='text-lg font-bold'>{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className='font-bold mr-2'>{repo.forks}</span>
          Watches: <span className='font-bold'>{repo.watchers}</span>
        </p>
        <p className='text-sm font-thin'>Description: {repo?.description}</p>

        {!fav && 
          <button 
            className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
            onClick={addToFavList}
          >
            Add
          </button>}
        {fav && 
          <button 
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={deleteFromFavList}
          >
          Delete
        </button>}
      </a>
    </div>
  )
}
