import React from "react";

export default function Home() {
  return (
    <div className="bg-violet  d-flex justify-content-center vh-100">
      <div class="container ">
        <div className="row gap-2  ">
          <div class="col-lg-6 col-md-12 ">
            <img
              src={"images/ghosts-home.jpeg"}
              alt=""
              className="w-100 mt-5"
            />
          </div>
          <div class="col-lg-5 col-md-12 d-flex justify-content-center flex-column align-items-center ">
            <h3 className="text-white">31th octobar 2018</h3>
            <h1 className="text-yellow display-4">Halloween Party</h1>
            <p className="text-white text-center">
              Halloween or Hallowe'en (a contraction of All Hallows' Evening)
              also known as Allhalloween, All Hallows' Eve or All Saints' Eve is
              a celebration observed in a number of countries on 31 October.{" "}
            </p>
            <button className="btn bg-yellow text-violet rounded-5 ms-5  px-4 py-2  ">
              <span className="h4"> Explore More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
