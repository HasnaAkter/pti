import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Recommended = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddMore = async () => {
    try {
      const response = await fetch(
        `http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=${
          currentPage + 1
        }&pageSize=10`
      );
      const newItems = await response.json();
      setItems([...items, ...newItems.Items]);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.error("Error fetching more items:", error);
    }
  };

  useEffect(() => {
    const fetchInitialItems = async () => {
      try {
        const response = await fetch(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );
        const initialItems = await response.json();
        setItems(initialItems.Items);
      } catch (error) {
        console.error("Error fetching initial items:", error);
      }
    };

    fetchInitialItems();
  }, []);

  return (
    <div className="p-10 px-24 max-w-screen-xl mx-auto">
      <div className="flex justify-between">
        <h3 className="text-2xl font- text-start py-3">Recommended</h3>
        <p className="text-start py-3">
          <span className="btn text-orange-500" onClick={handleAddMore} >
            Add More
            
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 inline-block ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </p>
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {items
          .filter((item) => item.IsRecommended === true)
          .map((item) => (
            <SwiperSlide key={item.Id}>
              <div className="flex flex-col items-center">
                <img
                  src={item.ImageUrl}
                  alt={item.Name}
                  style={{ height: "250px", width: "500px" }}
                  className="rounded-[25px]"
                />
                <p className="card-title text-[14px] text-center mt-2">
                  {item.Name}
                </p>
              </div>
            </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
  );
};

export default Recommended;
