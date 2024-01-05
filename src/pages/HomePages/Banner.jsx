
import helpbanner from '../../assets/Image1.png';


const Banner = () => {
  return (
    <div className="p-4 sm:p-8 md:p-16 lg:p-24 max-w-screen-xl mx-auto">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 p-4 sm:p-10 bg-orange-500 rounded-[25px]">
        <div className="sm:pr-4">
          <div className="my-4 sm:my-24 text-white">
            <h1 className="text-2xl sm:text-4xl font-semibold">
              Deliver Food To Your
            </h1>
            <h1 className="text-2xl sm:text-4xl font-semibold">Door stepl</h1>
            <p className="py-3 text-sm sm:text-base">
              Authentic Food. Quick Service. Fast Delivery
            </p>
            
          </div>
        </div>
        <div className="sm:pl-4">
          <img src={helpbanner} alt="Help Banner" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
