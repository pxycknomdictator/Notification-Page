import React from "react";
import smallImage from "../../../public/images/image-chess.webp";

const Comments = ({ comments }) => {
  const {
    username,
    post,
    reactedPost,
    hasDot,
    hasSmallImage,
    postTime,
    answer,
    profileimage,
  } = comments;

  return (
    <section className="w-full bg-Very-light-grayish-blue rounded-lg">
      <div className="ssm:px-4 ssm:gap-3 flex items-center gap-5 py-3 px-6 cursor-pointer">
        <div className="w-12 ssm:w-[3.4rem] sm:w-14">
          <img className="w-full" src={profileimage} alt="profile-Image" />
        </div>
        <div>
          <div className="ssm:text-[.7rem] sm:text-[.85rem] md:text-[.8rem] lg:text-[.9rem] leading-5 relative">
            <span className="font-extrabold mr-2 hover:colorBlue hover:font-extrabold">
              {username}
            </span>{" "}
            <span className="text-Grayish-blue mr-2">{post}</span>
            {hasDot && (
              <span
                className={`${
                  reactedPost === "Chess Club" && "colorBlue"
                } red-Dot`}
              >
                {reactedPost}
              </span>
            )}
            {hasSmallImage && (
              <img
                id="chess"
                className="w-5 absolute smd:w-10"
                src={smallImage}
                alt="smallImage"
              />
            )}
          </div>
          <span className="text-Grayish-blue text-xs">{postTime}</span>
        </div>
      </div>
      <div className="deactivate">
        <article className="ssm:ml-0 ssm:mt-2 ssm:mr-0 sm:mr-4 sm:ml-[5.3rem] rounded-lg md:text-[.7rem] lg:text-[.9rem] bg-White text-Grayish-blue border border-r-Grayish-blue py-3 px-3 ml-24 mr-4">
          {answer}
        </article>
      </div>
    </section>
  );
};

export default Comments;
