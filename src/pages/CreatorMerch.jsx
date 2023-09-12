import { useState } from 'react';
import { useParams } from 'react-router-dom';
import FilterSection from '../creatorMerch/FilterSection';
import MerchDisplay from '../creatorMerch/MerchDisplay';

const CreatorMerch = () => {
  const params = useParams();
  const [width, setWidth] = useState(window.innerWidth);

  const resizeObserver = new ResizeObserver(() => {
    setWidth(window.innerWidth);
  });
  resizeObserver.observe(document.querySelector('body'));

  const checkWidth = () => {
    if (width > 1000) return true;
    else return false;
  };

  return (
    <>
      <div className='flex'>
        {checkWidth() && <FilterSection />}
        <MerchDisplay name={params.creator} />
      </div>
    </>
  );
};

export default CreatorMerch;
