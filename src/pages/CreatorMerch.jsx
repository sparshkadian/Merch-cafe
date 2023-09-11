// Again a Protected Route
// 1000px -> Below that hide filter section, Only Merch Display
import FilterSection from '../creatorMerch/FilterSection';
import MerchDisplay from '../creatorMerch/MerchDisplay';
import { useState } from 'react';

const CreatorMerch = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);

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
        <MerchDisplay />
      </div>
    </>
  );
};

export default CreatorMerch;
