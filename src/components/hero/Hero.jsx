import React from "react";
import '../hero/hero.css'

// swipper
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import Maincart from "../mainCart/Maincart";
// swipper

// icons
import { IoPlay } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
// icons

const Hero = () => {
  const { data } = useGetMovieQuery();
  console.log(data);
  const navigate = useNavigate()

  return (
    <>
      <div className="container xl ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-10 h-[700px] rounded-2xl overflow-hidden max-[450px]:h-[500px] max-[450px]:w-[80%] "
        >
          {data?.results?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="relative h-full">
                <img
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt=""
                  className="w-full h-full object-cover "
                />
                <div className="absolute bottom-10 left-2/4 -translate-x-1/2 flex flex-col items-center ">
                  <p className="text-3xl text-mutedColor">{movie.title}</p>
                  <p className="text-2xl text-mutedColor ">{movie.release_date}</p>
                  <button className="bg-white text-mainColor px-16 py-3 rounded-lg flex items-center hover:bg-mainColor hover:text-mutedColor">
                    <IoPlay className="mr-2" /> Смотретъ
                  </button>
                    
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Maincart />
    </>
  );
};

export default Hero;
