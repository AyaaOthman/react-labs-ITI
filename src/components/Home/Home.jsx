import React from "react";
import ghostsHome from "../../images/ghosts-home.jpeg";

export default function Home() {
  return (
    <div className="bg-violet  d-flex justify-content-center align-items-center vh-100">
      <div class="container ">
        <div className="row  ">
          <div class="col-lg-5 col-md-12  bottom-0">
            <img src={ghostsHome} alt="" className="w-100" />
          </div>
          <div class="col-lg-7 col-md-12 d-flex justify-content-center flex-column align-items-center ">
            <h3 className="text-white">31th octobar 2018</h3>
            <h1 className="text-yellow display-3">Halloween Party</h1>
            <p className="text-white">
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
