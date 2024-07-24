import React from "react";
import Navbar from "../../components/Navbar/Navbar";
function About() {
  return (
    <>
    <Navbar />
    <div className="p-2">
      <h2 className="text-center text-3xl font-semibold">About Us</h2>
      <h2 className="text-xl font-semibold">History :</h2>
      <p className="font-semibold">
        Founded in 2005, LearnWell School has grown from a small community
        institution to a leading educational establishment. Over the years, we
        have expanded our facilities, introduced innovative teaching methods,
        and built a reputation for academic excellence. Our journey began with a
        handful of dedicated educators and a vision to create a nurturing
        environment for holistic education. Today, we pride ourselves on our
        diverse student body and our commitment to fostering a love for
        learning.
      </p>
      <br />
      <h2 className="text-xl font-semibold">Vision :</h2>
      <p className="font-semibold">
        Our vision at LearnWell School is to become a beacon of educational
        excellence, inspiring and preparing students to thrive in a dynamic
        global society. We aim to empower students to become critical thinkers,
        compassionate leaders, and lifelong learners who make a positive impact
        in the world.
      </p>
      <br />
      <h1 className="text-xl font-semibold">Mission :</h1>
      <ul style={{ listStyleType: "disc" }}>
        <li className="font-semibold">
          LearnWell School is dedicated to providing a supportive and inclusive
          environment <br/>where students are encouraged to achieve their fullest
          potential. Our mission is to:
        </li>
        <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
          <li>
            Deliver a rigorous and balanced curriculum that challenges and
            engages students.
          </li>
          <li>
            Foster creativity, innovation, and critical thinking through a
            variety of learning experiences.
          </li>
          <li>
            Promote a culture of respect, responsibility, and community
            involvement.
          </li>
          <li>
            Support the holistic development of each student, including their
            academic, social, emotional, and physical well-being.
          </li>
        </ul>
      </ul>
      <br/>
      <h1 className="text-xl font-semibold">Values :</h1>
      <ul style={{ listStyleType: "disc" }}>
        <li className="font-semibold">At LearnWell School, our core values guide everything we do:</li>

        <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
          <li>
            Excellence: Striving for the highest standards in all aspects of
            education.
          </li>
          <li>
            Integrity: Fostering honesty, fairness, and accountability among our
            students and staff.
          </li>
          <li>
            Respect: Creating a culture of mutual respect, understanding, and
            appreciation for diversity.
          </li>
          <li>
            Innovation: Encouraging creativity and forward-thinking to adapt to
            a rapidly changing world.
          </li>
          <li>
            Collaboration: Working together with students, parents, and the
            community to achieve common goals.
          </li>
          <li>
            Compassion: Promoting empathy, kindness, and a commitment to the
            well-being of others.
          </li>
        </ul>
      </ul>
    </div>
  </>
  );
}

export default About;
