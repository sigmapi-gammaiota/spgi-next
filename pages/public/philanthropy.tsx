import { GetStaticProps } from "next";
import { getDefaultPublicProps } from "../../lib/NextProps";
import Image from 'next/image'
export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  p.title = "Philanthropy";
  return {
    props: p,
  };
};

export default function Page() {
  return (
  <div className="bg-base0 grid grid-cols-12 gap-4">
    <div className="col-span-12 justify-center items-center text-white bg-purp0 shadow-xl rounded-lg items-center text-base0 p-4">
      <h1 className="text-3xl">Philanthropy</h1>
    </div>
    <div className="col-span-12 bg-base1 shadow-xl rounded-lg text-justify p-4 align-middle">
      <h2 className="text-2xl">Overview</h2>
      <p>Our chapter's activities fall into five main categories:
        <ul className="list-disc ml-6">
          <li>Philanthropy and community service</li>
          <li>Events with other Greek organizations</li>
          <li>Social events</li>
          <li>Brotherhood and alumni events</li>
          <li>Rush (recruitment)</li>
        </ul>
      </p>
    </div>
    <div className="md:col-span-8 col-span-12 bg-base1 shadow-xl rounded-lg text-justify p-4">
        <h2 className="text-2xl">Philanthropy & Community Service</h2>
        <p>Our brotherhood considers community service with high importance, and we strive to give back to the Worcester and WPI community.
        Throughout the 2016/2017 academic year our brothers contributed over 1000 hours across 47 unique service events. Whether as mentors for FIRST Robotics teams or farmhands for local farmers,
        our chapter has made lasting contributions to the area.</p>
        <div className="m-1 p-0"></div>
          <p>The sections below outline the major recurring service events that our chapter participates in; however, they do not capture the entire picture of how Sigma Pi gives back to the community.</p>
            <div className="m-1 p-0"></div>
              <p>
                <span className="italic">To learn about the service and philanthropy efforts of our international organization, visit our Fraternity's <a className="text-blue-500 underline "href="//sigmapi.org">official webpage</a>.</span></p>
      </div>
    <img src="/parkcleanup.png" className="object-cover md:col-span-4 col-span-12 bg-base1 shadow-xl rounded-lg"/>
    <div className="md:col-span-4 col-span-12 bg-base1 shadow-xl rounded-lg p-2 align-center">
      <Image className="fill-purple-100"
        src="/The_Trevor_Project_Logo_(2022).svg"
        alt="TrevorProjectLogo"
        width={630}
        height={250}
        layout="intrinsic"
        objectFit="contain"
      />
    </div>
    <div className="md:col-span-8 col-span-12 bg-base1 shadow-xl rounded-lg text-justify p-4">
      <h2 className="text-2xl">The Trevor Project</h2>
      <p>We have proudly selected The Trevor Project to be our philanthropic partner. We made this decision based on a couple of factors. First and foremost, we fully support the mission of the organizaiton, which is to provide mental health and suicide prevention awareness resources to all, namely LGBTQ+ youth. We also took close note of the organization’s Charity Navigator Score, which is generated from financial transparency and accountability as compared to other charities. The Trevor Project received a 99.41/100 overall score, as well as it’s 82.1 program expense ratio, top in class, which is determined by program expenses divided by total expenses This cause hits close to home for Sigma Pi, as we endure the ongoing mourning of brother Jyn Godin. Jyn’s positive spirit lives on in our organization, and we proudly support relevant philanthropic efforts.</p>
      <button className="font-bold border rounded-lg align-center relative">
          Donate
      </button>
    </div>
    <div className="md:col-span-8 col-span-4 bg-base1 shadow-xl rounded-lg text-justify p-4">
      <h2 className="text-2xl">ACE Project</h2>
      <p>An Altruistic Campus Experience (ACE) is an annual project that each chapter of Sigma Pi completes in benefit of their host institution. For our chapter, this project serves to foster the unique and supportive community that WPI has to offer. Past ACE projects have included supporting the Amazing Day Foundation and promoting mental health.</p>
    </div>
    <div className="md:col-span-4 col-span-12 bg-base1 shadow-xl rounded-lg">
        <Image
          src="/ace-project.png"
          height="3024"
          width="4032"
          objectFit="contain"
        />
    </div>
    <img src="/move-in.jpg" className="object-cover md:col-span-4 col-span-12 bg-base1 shadow-xl rounded-lg"/>
    <div className="md:col-span-8 col-span-4 bg-base1 shadow-xl rounded-lg text-justify p-4">
      <h2 className="text-2xl">Freshman Move-In</h2>
      <p>At the beginning of each academic year, our chapter joins with other Greek chapters on campus, and helps incoming freshmen move into their dormitories. We welcome each student with cheers and help carry their belongings to their rooms. This effort not only allows incoming freshmen to move in smoothly and rapidly, but also serves as a welcoming gesture toward the new class from the fraternities and sororities on campus.</p>
    </div>
    <div className="md:col-span-8 col-span-4 bg-base1 shadow-xl rounded-lg text-justify p-4">
      <h2 className="text-2xl">Relay for Life</h2>
      <p>Each spring our chapter participates in the WPI Relay for Life put on by the American Cancer Society. Leading up to the event our brotherhood raises money for cancer research through fundraising and personal contributions. During the event our brothers walk in support of those who have battled cancer.</p>
    </div>
    <img src="/Relay-for-life-2022.jpg" className="object-cover md:col-span-4 col-span-12 bg-base1 shadow-xl rounded-lg"/>
    <img src="/Amazing-day-2022.jpg" className="object-cover md:col-span-4 col-span-12 bg-base1 shadow-xl rounded-lg"/>
    <div className="md:col-span-8 col-span-4 bg-base1 shadow-xl rounded-lg text-justify p-4">
      <h2 className="text-2xl">Amazing Day</h2>
      <p>
        The Amazing Day Foundation exists in support of suicide awareness and prevention. This topic is of extreme importance particularly on college campuses, where an estimated 1 in 12 students have strongly considered suicide.
        </p>
        <p>At WPI, our brotherhood is making efforts to support the Amazing Day Foundation and raise awareness. As our 2017 ACE project, our brothers educated members of the WPI community about the prevalence of suicide on college campuses and the resources that WPI offers through an event on the WPI Quad. In addition to this, we provided food and activities on the quad that allowed students to relax outdoors after completing their midterms.
        </p>
    </div>
  </div>
  );
}
