import { Link } from 'react-router-dom';

const FilterSection = () => {
  return (
    <div className='merchPage-filter p-5 py-10 text-[1.8rem] w-[307px] px-12'>
      <div className='demo'>
        <p>Total Items(Merch Count)</p>
        <div className='flex flex-col gap-2 mt-2'>
          <Link>
            <p>Shirts</p>
          </Link>
          <Link>
            <p>Shoes</p>
          </Link>
          <Link>
            <p>Hats</p>
          </Link>
          <Link>
            <p>Accessories</p>
          </Link>
        </div>

        <div className='my-4 filter-dividers'></div>

        <p>Gender</p>
        <div className='flex flex-col gap-2 mt-2'>
          <div className='flex gap-1'>
            <input type='checkbox' id='men' className='checkbox' />
            <label htmlFor='men'>Men</label>
          </div>
          <div className='flex gap-1'>
            <input type='checkbox' id='women' className='checkbox' />
            <label htmlFor='women'>Women</label>
          </div>
          <div className='flex gap-1'>
            <input type='checkbox' id='unisex' className='checkbox' />
            <label htmlFor='unisex'>Unisex</label>
          </div>
        </div>

        <div className='my-4 border-2 filter-dividers'></div>

        <p>Shop By Price</p>
        <div className='flex flex-col gap-3 mt-2'>
          <div className='flex gap-1'>
            <input type='checkbox' id='lowest' className='checkbox' />
            <label htmlFor='lowest'>Under 1000</label>
          </div>
          <div className='flex gap-1'>
            <input type='checkbox' id='middle' className='checkbox' />
            <label htmlFor='middle'>1000 - 2 900</label>
          </div>
          <div className='flex gap-1'>
            <input type='checkbox' id='highest' className='checkbox' />
            <label htmlFor='highest'>Over 3000</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
