import React from "react";
import profile from "../../assets/avatar-mark-webber.webp";

const Comments = () => {
  return (
    <section className="w-full bg-Very-light-grayish-blue rounded-lg">
      <div className="ssm:px-4 ssm:gap-3 flex items-center gap-5 py-3 px-6 cursor-pointer">
        <div className="w-12 ssm:w-32 sm:w-14">
          <img className="w-full" src={profile} alt="profile-Image" />
        </div>
        <div>
          <div className="ssm:text-[.7rem] sm:text-[.85rem] md:text-[.8rem] lg:text-[.9rem] leading-5 relative">
            <span className="font-extrabold mr-2">MarkWebber</span>{" "}
            <span className="text-Grayish-blue mr-2">
              reacted to your recent post
            </span>
            <span className="text-Dark-grayish-blue font-bold red-Dot">
              My first tournament today!
            </span>
          </div>
          <span className="text-Grayish-blue text-xs">1m ago</span>
        </div>
      </div>
      <div>
        <article className="ssm:ml-0 ssm:mt-2 ssm:mr-0 sm:mr-4 sm:ml-[5.3rem] rounded-lg md:text-[.7rem] lg:text-[.9rem] bg-White text-Grayish-blue border border-r-Grayish-blue py-3 px-3 ml-24 mr-4">
          Hello Thanks for setting up the chess Clup. I's been a member for a
          few weeks now and I'm already having lots of fun and improving my
          game.
        </article>
      </div>
    </section>
  );
};

export default Comments;
