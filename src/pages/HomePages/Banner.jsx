import helpbanner from "../../assets/Image1.png";

const Banner = () => {
  return (
    <div className="p-24 rounded-3xl max-w-screen-xl mx-auto rounded">
      <div className="grid gap-4 grid-cols-2 p-10 bg-orange-500 ">
        <div>
          <div className=" my-24 text-white" >
            <h1 className="text-4xl font-semibold ">
              Deliver Food To Your 
            </h1>
            <h1  className="text-4xl font-semibold ">Door Stepl</h1>{" "}
            <p className="py-3">Authentic Foodl.Quick Service.Fast Delivery</p>
            <div className="py-3">
              {" "}
              
            </div>{" "}
          </div>
        </div>
        <div>
          <img src={helpbanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
