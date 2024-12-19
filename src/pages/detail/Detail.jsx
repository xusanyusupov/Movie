import React, { useState } from "react";
import { useGetDetailImagesQuery, useGetDetailQuery } from "../../redux/api/movie-api";
import '../detail/detail.css'

import { useParams } from "react-router-dom";

// icons
import { GoStarFill } from "react-icons/go";
// icons

const Detail = () => {
  const [activeTab, setActiveTab] = useState("OVERVIEW");

  const tabContent = {
    OVERVIEW:
      "  The use of CGI (computer-generated imagery) has become more advanced, allowing for incredibly realistic visual effects. As technology continues to evolve, it's exciting to imagine how films will adapt and what new forms of storytelling will emerge. The Avengers and their Super Hero allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    TRAILERS_MORE: "Cinema has always had a profound impact on society, influencing cultural norms, political ideas, and personal identities. From the earliest silent films to today's blockbusters, movies have shaped public perception and the way people see the world. They are more than just entertainment; they reflect societal issues, raise awareness about important topics, and even drive change. Through the years, cinema has served as a mirror to society, reflecting its values, struggles, and aspirations. Whether it's through a powerful documentary or a fictional drama, films have the ability to spark conversations and inspire action.",
    MORE_LIKE_THIS: "The future of film is closely tied to technological advancements, and we are witnessing a revolution in how movies are made and consumed. Virtual reality (VR), augmented reality (AR), and artificial intelligence (AI) are pushing the boundaries of traditional filmmaking. Filmmakers are now able to create immersive worlds that audiences can experience in ways never before possible. ",
    DETAILS: "Film criticism is an art form in itself, requiring a deep understanding of cinema and the ability to articulate one's thoughts clearly. Critics not only assess a film's technical aspects, such as direction, acting, and cinematography, but also analyze its thematic depth, narrative structure, and emotional impact."
  };

  const { id } = useParams();
  const { data } = useGetDetailQuery(id);
  const {data: img } = useGetDetailImagesQuery(id)
  console.log(img);
  return (
    <>
      <div className="container xl  mt-10  mb-20 max-[570px]:px-10 max-[570px]:mt-1">
        {
          <div className="grid grid-cols-2 gap-10 w-full max-[750px]:grid-cols-1 ">
            <div className="w-full h-full max-[749px]:h-[80%]">
              <img
                src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                alt={data?.title}
                className="w-full h-[90%] object-cover rounded-xl max-[1299px]:h-full max-[749px]:hidden"
              />
            </div>
            <div className="flex flex-col relative h-full">
              <div className="flex items-center justify-between py-5">
                <p className="text-mutedColor text-4xl">{data?.title}</p>{" "}
                <span className="text-mutedColor flex items-center text-2xl">
                  {" "}
                  {data?.vote_average}{" "}
                  <GoStarFill className="text-yellow-500" />
                </span>
              </div>
              <div className="flex items-center justify-between ">
                <span className="text-secondaryColor flex ">
                  {data?.release_date} | {data?.production_countries?.[0]?.name}
                </span>{" "}
                <a
                  href={data?.homepage}
                  className="text-yellow-500 hover:underline"
                >
                  About Movie
                </a>{" "}
              </div>
              <p className="text-secondaryColor py-5">{data?.overview}</p>

              <div className="bg-transparent text-white  ">
                <div className="border-b border-gray-700">
                  <ul className="flex space-x-8">
                    {[
                      "OVERVIEW",
                      "TRAILERS_MORE",
                      "MORE_LIKE_THIS",
                      "DETAILS",
                    ].map((tab) => (
                      <li
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer pb-2 text-gray-400 hover:text-white ${
                          activeTab === tab
                            ? "border-b-2 border-mainColor text-white"
                            : ""
                        }`}
                      >
                        {tab.replace("_", " & ")}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 text-lg text-secondaryColor">
                  <p>{tabContent[activeTab]}</p>
                </div>
              </div>
                        
              <div className="w-full flex overflow-x-auto gap-7 snap-x scroll">
                  {
                    img?.backdrops?.slice(0,10).map((elImg)=>(
                      <img className="rounded-xl w-[90%] max-[600px]:w-full max-[600px]:h-[350px] max-[600px]:object-cover" key={elImg.file_path} src={`https://image.tmdb.org/t/p/original/${elImg.file_path}`} alt="" />
                    ))
                  }
              </div>

            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Detail;
