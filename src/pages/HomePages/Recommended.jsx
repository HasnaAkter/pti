import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Recommended = () => {
  const [setSwiperRef] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsForSwiper, setSelectedItemsForSwiper] = useState([]);

  useEffect(() => {
    const fetchInitialItems = async () => {
      const response = await fetch(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );
      const initialItems = await response.json();
      setItems(initialItems.Items);
    };

    fetchInitialItems();
  }, []);

  const toggleSelectedItem = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const handleAddItems = () => {
    const selectedItemsData = selectedItems.map((itemId) =>
      items.find((item) => item.Id === itemId)
    );

    setSelectedItemsForSwiper(selectedItemsData);
    document.getElementById("my_modal_2").close();
    resetSelectedItems();
  };
  const resetSelectedItems = () => {
    setSelectedItems([]);
  };
  const handleCloseItems = () => {
    document.getElementById("my_modal_1").close();
    resetSelectedItems();
  };

  return (
    <div className="p-10 px-24 max-w-screen-xl mx-auto">
      <div className="flex justify-between">
        <h3 className="text-2xl font- text-start py-3">Recommended</h3>
        <p className="text-start py-3">
          <button
            className="btn text-orange-500"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Add More
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              {items
                .filter((item) => item.IsRecommended === true)
                .map((item) => (
                  <div
                    key={item.Id}
                    className={`flex items-center p-2 ${
                      selectedItems.includes(item.Id)
                        ? "text-orange-500"
                        : "text-black"
                    }`}
                    onClick={() => toggleSelectedItem(item.Id)}
                  >
                    <img
                      src={item.ImageUrl}
                      alt={item.Name}
                      style={{ height: "50px", width: "50px" }}
                      className="rounded-[25px]"
                    />
                    <p className=" card-title text-[14px] text-center ml-2">
                      {item.Name}
                    </p>
                  </div>
                ))}

              <div className="modal-action">
                <form method="dialog">
                  {selectedItems.length > 0 && (
                    <button
                      className="btn bg-orange-500 text-white"
                      onClick={handleAddItems}
                    >
                      Add
                    </button>
                  )}
                  <button
                    className="btn bg-orange-500 text-white  mx-2"
                    onClick={handleCloseItems}
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
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
        navigation={{
          type: "fraction",
        }}
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

        {selectedItemsForSwiper.map((selectedItem) => (
          <SwiperSlide key={selectedItem.Id}>
            <div className="flex flex-col items-center">
              <img
                src={selectedItem.ImageUrl}
                alt={selectedItem.Name}
                style={{ height: "250px", width: "500px" }}
                className="rounded-[25px]"
              />
              <p className="card-title text-[14px] text-center mt-2">
                {selectedItem.Name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommended;
