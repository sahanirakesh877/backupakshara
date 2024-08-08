import React  from "react";
import "../css/Learning.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const LRPA = () => {
  // const continuousAssessmentContent = (
  //   <>
  //     <h4 className="border-bottom-title w-100 py-2">Continuous Assessment</h4>
  //     <p className="lrpamid-p">
  //       Appropriate assessment of each task is done to monitor a child's skill
  //       of manipulation of words, materials, ideas, concepts. Such assessments
  //       help to notice whether the child has acquired language, mathematical,
  //       and social skills or not. This is done on a day-to-day basis through the
  //       use of CAS book.
  //     </p>
  //   </>
  // );
  // const [centerText, setCenterText] = useState(continuousAssessmentContent);

  // const handleMouseEnter = (text) => {
  //   setCenterText(<div className="">{text}</div>);
  // };

  // const handleMouseLeave = () => {
  //   setCenterText(continuousAssessmentContent);
  // };

  const brandImg = [
    "/a.jpg",
    "/b.jpg",
    "/c.jpg",
    "/d.jpg",
    "/e.jpg",
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
  };
  const items = brandImg.map((img, index) => (
    <div className="academic-itemk" key={index}>
      <img src={img} alt={`Brand ${index + 1}`} className="" />
    </div>
  ));

  return (
    <>
 <div className="container-fluid">
        <div className="py-2 ">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay={true}
            infinite={true}
            responsive={responsive}
            controlsStrategy="alternate"
            animationDuration={3000}
            disableButtonsControls={true}
            disableDotsControls={true}
            paddingLeft={"5px"}
          />
        </div>
      </div>



      <div className="container">
        <div className="row">
          <h2 className="text-center border-bottom-title pt-5  mb-5 addcolor">
            Learn Through <span className=" head-color ">LRPA Approach</span>
          </h2>
          <p className="lrpa-p-text  py-4">
          At Aksharaa, we believe that education is a dynamic and evolving process. To ensure that our students not only grasp knowledge but also apply it effectively, we have implemented the Learn Through LRPA (Learning, Recording, Practice, and Assessment) approach. This innovative framework integrates Continuous Assessment, Active Observation and Recording, Assignments, and Time-Bound Written Assessments to create a holistic and engaging learning environment.
          </p>
        </div>
      </div>

      <div className="container lrpaContainer">
        <div className="row d-flex align-items-start lrpacont  justify-content-between bg-lrp3">
          <div className="col-md-4 border px-md-0">
          <div className="contimg ">
          <img src="/banner1.jpg" alt="Continuous Assessment" />

          </div>
          </div>
          <div className="col-md-8 position-relative px-4">
            <h4 className="border-bottom-title w-100  text-center">
              Continuous Assessment
            </h4>
            <p className="lrpamid-p pt-4">
           <strong> Continuous Assessment</strong> is integral to our educational strategy, allowing for ongoing evaluation of students' performance throughout their learning journey. This approach provides regular feedback and supports personalized learning by identifying areas for improvement and adapting instruction to meet individual needs. By monitoring progress continuously, we help students stay motivated and engaged, promoting a growth mindset.
            </p>
            <div className="number fs-2">1</div>
          </div>
        </div>

        <div className="row d-flex align-items-start lrpacont  bg-lrp2">
        <div className="col-md-8 position-relative px-4">
            <h4 className="border-bottom-title w-100 py-2 text-center">
            Active Observation and Recording
            </h4>
            <p className="lrpamid-p pt-4">
           <strong> Active Observation and Recording </strong>involve educators closely monitoring students during their activities and lessons. This hands-on approach enables teachers to gain valuable insights into students' engagement, behaviors, and learning styles. Detailed records from these observations inform instructional decisions, ensuring that teaching methods are tailored to address each student's unique needs and preferences.
            </p>
            <div className="number1 fs-2">2</div>

          </div>
          <div className="col-md-4 px-md-0">
          <div className="contimg">
          <img src="/banner2.jpg" alt="Continuous Assessment " />

          </div>
          </div>
          
        </div>


        <div className="row d-flex align-items-start lrpacont  bg-lrp1">
          <div className="col-md-4 px-md-0">
          <div className="contimg">
          <img src="/banner3.jpg" alt="Continuous Assessment" />

          </div>
          </div>
          <div className="col-md-8 position-relative  px-4">
            <h4 className="border-bottom-title w-100 py-2 text-center">
            Assignment
            </h4>
            <p className="lrpamid-p pt-4">
            <strong>Assignments</strong> play a crucial role in applying classroom learning to real-world scenarios. They help students develop essential skills such as critical thinking, research, and independent problem-solving. By providing meaningful and practical tasks, assignments reinforce knowledge and offer opportunities for growth through feedback, fostering a deeper understanding of the subject matter.
            </p>
            <div className="number fs-2">3</div>
          </div>
        </div>

        <div className="row d-flex align-items-start lrpacont  bg-lrp">
        <div className="col-md-8 position-relative px-4">
            <h4 className="border-bottom-title w-100 py-2 text-center">
            Time Bound Written Assessment
            </h4>
            <p className="lrpamid-p pt-4">
            <strong>Time-Bound Written Assessments</strong> are designed to evaluate students' knowledge and problem-solving abilities under timed conditions. These assessments simulate real-world pressures and help students develop effective time management skills. They offer a comprehensive view of students' understanding and readiness for future academic and professional challenges, while also teaching valuable stress management techniques.
            </p>
            <div className="number1 fs-2">4</div>
          </div>
          <div className="col-md-4 px-md-0">
          <div className="contimg">
          <img src="/school/banner1.jpg" alt="Continuous Assessment" />

          </div>
          </div>
        
        </div>

      </div>
      {/* <div className="container">
        <div className="row">
          <div className="corner-image-container bg-light">
            <div
              className="image-wrapper top-left"
              onMouseEnter={() => handleMouseEnter(continuousAssessmentContent)}
              onMouseLeave={handleMouseLeave}
            >
              <img src="/banner1.jpg" alt="Continuous Assessment" />
            </div>
            <div
              className="image-wrapper top-right border-0"
              onMouseEnter={() =>
                handleMouseEnter(
                  <>
                    <h4 className="border-bottom-title w-100 py-2">
                      Active Observation and Recording
                    </h4>
                    <p className="lrpamid-p">
                      Through intra and outside classroom activities, students'
                      knowledge level, learning skills, extent of participation,
                      research work, interest, psychomotor skills, etc. are
                      observed and recorded using specific criteria. Such
                      observation helps to monitor the overall development of a
                      child.
                    </p>
                  </>
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              <img src="/banner2.jpg" alt="Active Observation and Recording" />
            </div>
            <div
              className="image-wrapper bottom-left"
              onMouseEnter={() =>
                handleMouseEnter(
                  <>
                    <h4 className="border-bottom-title w-100 py-2">
                      Assignment
                    </h4>
                    <p className="lrpamid-p">
                      Age-appropriate specific assignments are assigned in each
                      chapter. Written assignments, project works, and research
                      work are used as records on the development of specific
                      skills related to instructional objectives or the attitude
                      expressed or demonstrated by a student towards learning.
                    </p>
                  </>
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              <img src="/banner3.jpg" alt="Assignment" />
            </div>
            <div
              className="image-wrapper bottom-right"
              onMouseEnter={() =>
                handleMouseEnter(
                  <>
                    <h4 className="border-bottom-title w-100 py-2">
                      Time-Bound Written Assessment
                    </h4>
                    <p className="lrpamid-p">
                      At the end of each term, a time-bound written test is
                      given in each subject. This helps the student to know
                      their writing speed and be familiar with our traditional
                      exam system.
                    </p>
                  </>
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              <img src="/banner1.jpg" alt="Time-Bound Written Assessment" />
            </div>
            <div className="center-text px-5 py-2">{centerText}</div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default LRPA;
