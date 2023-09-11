import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([
    {
      name: 'Dave',
      img: '../imgs/creator-1.jpg',
    },
    {
      name: 'Christina',
      img: '../imgs/creator-2.jpg',
    },
    {
      name: 'John',
      img: '../imgs/creator-3.jpg',
    },
    {
      name: 'Rose',
      img: '../imgs/creator-4.jpg',
    },
    {
      name: 'tony',
      img: '../imgs/creator-5.jpg',
    },
    {
      name: 'Mary',
      img: '../imgs/creator-6.jpg',
    },
  ]);
  const [filteredList, setFilteredList] = useState(data);

  const filterSearch = (e) => {
    const query = e.target.value;
    let updatedList = [...data];
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredList(updatedList);
  };

  return (
    <>
      <div className='flex flex-col items-center py-12 gap-5'>
        <p className='text-[2rem]'>Find Your Favourite Creator</p>
        <div className='w-4/5 sm:w-1/2 lg:w-[40%] flex items-center border-2 border-black'>
          <input
            onChange={filterSearch}
            type='text'
            className='input-text-field p-3 text-3xl w-[90%] focus:outline-none'
          />
          <div className='ml-4 lg:ml-7'>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className='cursor-pointer text-[20px]'
            />
          </div>
        </div>
      </div>

      <div className='user-grid py-10 w-4/5 m-auto grid gap-4 sm:gap-0 grid-cols-2 md:grid-cols-3'>
        {filteredList &&
          filteredList.map((creator, i) => {
            return (
              <div className='grid-item' key={i}>
                <Link to={`/merch/${creator.name}`}>
                  <img
                    src={creator.img}
                    alt='Creator'
                    className='cursor-pointer rounded-full border-4 h-[150px] w-[150px]'
                  />
                </Link>
                <p>{creator.name}</p>
              </div>
            );
          })}
      </div>

      <div className='text-center'>
        {filteredList.length === 0 && (
          <p className='text-[2.5rem]'>No Creator Found :(</p>
        )}
      </div>
    </>
  );
};

export default Home;
