import { useContext } from 'react';
import CreatorContexts from '../Context/creatorContext';

const MerchDisplay = ({ name }) => {
  const { creatorPhoto } = useContext(CreatorContexts);

  return (
    <>
      <div className='merch-display border-2 w-full'>
        <div className='creator-infoContainer relative h-[250px] mt-5'>
          <div className='creator-info'>
            <img
              src={creatorPhoto}
              className='rounded-full border-4 h-[200px] w-[200px]'
            />
            <p className='text-center mt-2 text-[1.8rem]'>Name: {name}</p>
          </div>
        </div>

        {/* Cards */}
        <div className='merch-display-card w-[80%] sm:w-[90%] m-auto grid gap-[50px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10'>
          <div className='shadow-2xl relative rounded-md flex flex-col'>
            <div className='h-[300px]'>
              <img
                src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/133d8e36-a9d2-4171-8fd3-6eabf13c483b/infinityrn-4-se-road-running-shoes-STv3Zz.png'
                className='w-full h-full rounded-t-md'
                alt='cover-photo'
              />
            </div>

            <div className='flex flex-col gap-4 p-4'>
              <div>
                <p>
                  Men's Running Shoes <span className='font-normal'></span>
                </p>
              </div>
              <div>
                <p>MRP: 3 495.00</p>
              </div>

              <div className='flex flex-col'>
                <button type='btn' className='btn btn-black w-1/2 m-auto my-3'>
                  Add to Cart
                </button>
                <button type='btn' className='btn btn-black w-1/2 m-auto my-3'>
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className='shadow-2xl relative rounded-md flex flex-col'>
            <div className='h-[300px]'>
              <img
                src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d5fd41c-bd04-40d6-b271-5a36f7ed6ed3/miler-dri-fit-uv-short-sleeve-running-top-WhRW8W.png'
                className='w-full h-full rounded-t-md'
                alt='cover-photo'
              />
            </div>

            <div className='flex flex-col gap-4 p-4'>
              <div>
                <p>Men's Gym T-shirt</p>
              </div>

              <div>
                <p>MRP: 3 495.00</p>
              </div>

              <div className='flex flex-col'>
                <button type='btn' className='btn btn-black w-1/2 m-auto my-3'>
                  Add to Cart
                </button>
                <button type='btn' className='btn btn-black w-1/2 m-auto my-3'>
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className='shadow-2xl relative rounded-md flex flex-col'>
            <div className='h-[300px]'>
              <img
                src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/84742617-d3e0-43a8-914c-11cafef85bd4/rise-structured-trucker-cap-5Nv2R5.png'
                className='w-full h-full rounded-t-md'
                alt='cover-photo'
              />
            </div>

            <div className='flex flex-col gap-4 p-4'>
              <div>
                <p>Topi</p>
              </div>

              <div>
                <p>MRP: 3 495.00</p>
              </div>
              <div className='flex flex-col'>
                <button type='btn' className='btn btn-black w-1/2 m-auto my-3'>
                  Add to Cart
                </button>
                <button type='btn' className='btn btn-black w-1/2 m-auto my-3'>
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className='shadow-2xl relative rounded-md flex flex-col'>
            <div className='h-[300px]'>
              <img
                src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/04390726-3fcb-4fa8-a415-dbb207c77717/sportswear-trend-short-sleeve-top-wPH3tD.png'
                className='w-full h-full rounded-t-md'
                alt='cover-photo'
              />
            </div>

            <div className='flex flex-col gap-4 p-4'>
              <div>
                <p>Men's Casual T-shirt</p>
              </div>

              <div>
                <p>MRP: 3 495.00</p>
              </div>

              <div className='flex flex-col'>
                <button type='btn' className='btn btn-black w-1/2 m-auto my-3'>
                  Add to Cart
                </button>
                <button type='btn' className='btn btn-black w-1/2 m-auto my-3'>
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className='shadow-2xl relative rounded-md flex flex-col'>
            <div className='h-[300px]'>
              <img
                src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/892fac7f-7078-4128-ab5a-0a381e2bbe7e/brasilia-backpack-N0nGt1.png'
                className='w-full h-full rounded-t-md'
                alt='cover-photo'
              />
            </div>

            <div className='flex flex-col gap-4 p-4'>
              <div>
                <p>Kids Stylish Backpack</p>
              </div>
              <div>
                <p>MRP: 3 495.00</p>
              </div>
              <div className='flex flex-col'>
                <button type='btn' className='btn btn-black w-1/2 m-auto my-3'>
                  Add to Cart
                </button>
                <button type='btn' className='btn btn-black w-1/2 m-auto my-3'>
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className='shadow-2xl relative rounded-md flex flex-col'>
            <div className='h-[300px]'>
              <img
                src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4e9138d9-278f-48b1-851c-f4e51dbb4ee9/air-jordan-1-zoom-cmft-2-shoes-nX8Qqx.png'
                className='w-full h-full rounded-t-md'
                alt='cover-photo'
              />
            </div>

            <div className='flex flex-col gap-4 p-4'>
              <div>
                <p>Jordans</p>
              </div>
              <div>
                <p>MRP: 3 495.00</p>
              </div>

              <div className='flex flex-col'>
                <button type='btn' className='btn btn-black w-1/2 m-auto my-3'>
                  Add to Cart
                </button>
                <button type='btn' className='btn btn-black w-1/2 m-auto my-3'>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MerchDisplay;
