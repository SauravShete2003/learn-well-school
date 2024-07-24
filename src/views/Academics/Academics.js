import React from "react";
import Navbar from "../../components/Navbar/Navbar";
function Academics() {
  return (
    <>
      <Navbar />
      <div className="">
        <img
          src="https://www.dais.edu.in/images/academics-collage-header.jpg"
          className="w-screen"
        />
        <h1 className="text-2xl font-semibold text-center m-3">Academics</h1>
        <div className="shadow-md shadow-gray-700 rounded-md m-2 p-2 flex flex-wrap items-center justify-evenly rounded-md">
          
          <div className=" text-center w-48 m-1 p-2 rounded-md shadow-md shadow-gray-700" style={{height : '320px'}}>
            <h2  className="text-xl font-semibold">Curriculum :</h2>
            <p>
              At LearnWell School, we offer a comprehensive curriculum that
              spans across different educational levels:
            </p>
          </div>
          <div className="text-center w-48  p-2 m-1 rounded-md shadow-md shadow-gray-700">
            <h1 className="text-xl font-semibold">Primary Education :</h1>
            <p>
              Our primary program focuses on foundational skills in literacy,
              numeracy, and basic sciences. We emphasize interactive and
              experiential learning to ignite curiosity and foster a love for
              learning.
            </p>
          </div>
          <div className=" text-center w-48  p-2 m-1 rounded-md shadow-md shadow-gray-700">
            <h1 className="text-xl font-semibold">Secondary Education :</h1>
            <p>
              The secondary curriculum builds on the primary foundation,
              introducing more specialized subjects. Students engage in deeper
              exploration of mathematics, sciences, languages, social studies,
              and the arts.
            </p>
          </div>
          <div className=" text-center w-60  p-2 m-1 rounded-md shadow-md shadow-gray-700">
            <h1 className="text-xl font-semibold">Senior Secondary Education:</h1>
            <p>
              Our senior secondary program prepares students for higher
              education and professional pathways. We offer a range of subjects
              across science, commerce, and humanities streams, allowing
              students to tailor their education to their interests and career
              aspirations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Academics;
