const MerchDisplay = ({ name }) => {
  return (
    <>
      <div className='merch-display relative border-black w-full h-[90vh]'>
        <div className='creator-info mt-2'>
          <img
            src=''
            className='cursor-pointer rounded-full border-4 h-[200px] w-[200px]'
          />
          <p className='text-center mt-2 text-[1.8rem]'>Name: {name}</p>
        </div>

        {/* Cards */}
      </div>
    </>
  );
};

export default MerchDisplay;
