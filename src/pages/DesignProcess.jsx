import React from "react";
import Mainlayouts from "../layouts/Mainlayouts";
import DribbbleIcon from "../assets/images/dribbble.svg";
import MediumIcon from "../assets/images/medium.svg";

export default function DesignProcess() {
  return (
    <>
      <Mainlayouts>
        <div className="container">
          <div className="flex flex-col items-start gap-5">
            <div className="title-page">DESIGN PROCESS</div>
            <div className="subtitle-page">FROM CONCEPT TO CREATION</div>
          </div>

          <div className="flex w-full pb-3 justify-between items-center border-b border-solid border-b-neutral-950 mt-14">
            <div className="title-design-process">DESIGN PROCESS</div>
            <div className="title-design-process">001</div>
          </div>

          <div className="flex flex-col md:flex-row sm:justify-between items-start w-full mt-8">
            <div className="w-full md:w-4/12 pr-4">
              <div className="flex flex-col items-start gap-5">
                <div className="big-qoute">
                  “Every project is different but will follow a basic process”
                </div>
                <div className="flex flex-col items-start gap-3">
                  <div className="small-qoute-black">
                    These processes are rarely ever linear & steps tend to be
                    repeated multiple times before delivery.
                  </div>
                  <div className="small-qoute-grey">
                    Some will need card sorting and some might have the
                    information architecture already well defined. The nitty
                    gritty method choice tends to differ but I still follow a
                    general process for every project.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-8/12 md:pl-4">
              <div className="flex flex-col items-start sm:gap-8">
                <div className="flex flex-col sm:flex-row items-start w-full">
                  <div className="w-full sm:w-6/12 flex flex-col items-start gap-5 pt-6 md:pt-0 pr-1 sm:pr-4">
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex relative">
                        <div className="bg-number"></div>
                        <div className="number-design-process">01</div>
                      </div>
                      <div className="title-desc-design-process">
                        DEFINE THE REQUIREMENTS
                      </div>
                    </div>
                    <div className="desc-design-process">
                      The first step I take is usually to define the general
                      business needs, requirements for the project, understand
                      the deliverables, timeline and expectations. It's
                      important to always stay on the same page with the rest of
                      the team. At this step, I like to jot down my own
                      hypothesis for what I expect the problem might be.
                    </div>
                  </div>

                  <div className="w-full sm:w-6/12 flex flex-col items-start gap-5 pt-6 md:pt-0 pl-1 sm:pl-4">
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex relative">
                        <div className="bg-number"></div>
                        <div className="number-design-process">02</div>
                      </div>
                      <div className="title-desc-design-process">
                        DISCOVER THE ISSUES
                      </div>
                    </div>
                    <div className="desc-design-process">
                      During this phase, I collect information, talk to people
                      and explore the problem space. I will also look into user
                      reports, and understand why the product came to be the way
                      it is. If user research isn't within the budget or
                      allocated time, I'll try to conduct ad hoc guerilla
                      interviews to avoid designing blindly.
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start w-full">
                  <div className="w-full sm:w-6/12 flex flex-col items-start gap-5 pt-6 pr-1 sm:pr-4">
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex relative">
                        <div className="bg-number"></div>
                        <div className="number-design-process">03</div>
                      </div>
                      <div className="title-desc-design-process">
                        INTERPRET THE RESULTS
                      </div>
                    </div>
                    <div className="desc-design-process">
                      The interpretation phase allows me to define the users,
                      their needs and pain points. Personas, journey maps, story
                      boards and problem statements can be defined or redefined.
                      At this stage, I set our goals and the metrics we want to
                      hit for success. This phase is always very insightful.
                    </div>
                  </div>

                  <div className="w-full sm:w-6/12 flex flex-col items-start gap-5 pt-6 pl-1 sm:pl-4">
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex relative">
                        <div className="bg-number"></div>
                        <div className="number-design-process">04</div>
                      </div>
                      <div className="title-desc-design-process">
                        IDEATE OVER SOLUTIONS
                      </div>
                    </div>
                    <div className="desc-design-process">
                      The ideation phase is a lot of fun for me! I like to bring
                      in developers, other designers, stake holders and customer
                      supports to an ideation session to explore different
                      options. I like to let my mind go wild and come up with as
                      many solutions as I can. I strive for quantity over
                      quality at this stage.
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start w-full">
                  <div className="w-full sm:w-6/12 flex flex-col items-start gap-5 pt-6 pr-1 sm:pr-4">
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex relative">
                        <div className="bg-number"></div>
                        <div className="number-design-process">05</div>
                      </div>
                      <div className="title-desc-design-process">PROTOTYPE</div>
                    </div>
                    <div className="desc-design-process">
                      In this phase, I will create the interactive prototype. It
                      may be a hi-fi figma prototype or even an interactive
                      website. The level of details and fidelity depends on how
                      far along in the process I am and what I want to test.
                    </div>
                  </div>

                  <div className="w-full sm:w-6/12 flex flex-col items-start gap-5 pt-6 pl-1 sm:pl-4">
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex relative">
                        <div className="bg-number"></div>
                        <div className="number-design-process">06</div>
                      </div>
                      <div className="title-desc-design-process">
                        TEST, ITERATE AND TEST AGAIN
                      </div>
                    </div>
                    <div className="desc-design-process">
                      In this final phase, I will test the prototype with users.
                      Sometimes it will be a quick guerilla test, while other
                      times it may be a full fledged usability test session. The
                      test results will help us understand what needs to be
                      changed and fixed.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full pb-3 justify-between items-center border-b border-solid border-b-neutral-950 mt-14">
            <div className="title-design-process">DESIGN PHILOSOPHIES</div>
            <div className="title-design-process">002</div>
          </div>

          <div className="flex flex-col md:flex-row sm:justify-between items-start w-full mt-8">
            <div className="w-full md:w-4/12 pr-4">
              <div className="flex flex-col items-start gap-5">
                <div className="big-qoute">
                  How I like to collaborate & my work style
                </div>
                <div className="flex flex-col items-start gap-3">
                  <div className="small-qoute-black">
                    I like to find information from where ever I can and there
                    is plenty of information to be found.
                  </div>
                  <div className="small-qoute-grey">
                    This means joining supporters as they answer product
                    questions to understand where users have problems or even
                    scouring reviews of the product as well as competing
                    projects to find insights.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-8/12 md:pl-4">
              <div className="flex flex-col items-start sm:gap-8">
                <div className="flex flex-col sm:flex-row items-start w-full">
                  <div className="w-full sm:w-6/12 flex flex-col items-start gap-5 pt-6 md:pt-0 pr-1 sm:pr-4">
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex relative">
                        <div className="bg-number"></div>
                        <div className="number-design-process">01</div>
                      </div>
                      <div className="title-desc-design-process">
                        MY DEVELOPER HAT
                      </div>
                    </div>
                    <div className="desc-design-process">
                      With my background as a front-end engineer, I speak the
                      language of the developers I work with. I think it is
                      important to understand and empathize not only with your
                      users but also with your team. Knowing how to code helps
                      me understand not only the problems the developers on my
                      team faces but I can also explain to them precisely what I
                      want in the design.
                    </div>
                  </div>

                  <div className="w-full sm:w-6/12 flex flex-col items-start gap-5 pt-6 md:pt-0 pl-1 sm:pl-4">
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex relative">
                        <div className="bg-number"></div>
                        <div className="number-design-process">02</div>
                      </div>
                      <div className="title-desc-design-process">
                        INVOLVE EVERYONE
                      </div>
                    </div>
                    <div className="desc-design-process">
                      Designers should never work in silos. I try to bring in
                      people who I think have the best insights. I talk to
                      developers, product support agents, stake holders, users
                      and user researchers and bring them into the project as
                      early and as often as I can. I enjoy being collaborative
                      and collecting insights from places one might not think to
                      look.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pt-10 pb-24 md:pb-32 px-10 justify-between items-center w-full bg-black mt-20">
          <div className="footer-logo">EGIGHANIYYU</div>
          <div className="flex items-center gap-8">
            <img
              src={DribbbleIcon}
              alt="dribbble"
              className="w-7 h-7 md:w-10 md:h-10"
            />
            <img
              src={MediumIcon}
              alt="medium"
              className="w-7 h-7 md:w-10 md:h-10"
            />
          </div>
        </div>
      </Mainlayouts>
    </>
  );
}
