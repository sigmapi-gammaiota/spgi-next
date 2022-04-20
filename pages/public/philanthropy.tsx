import { GetStaticProps } from "next";
import { getDefaultPublicProps } from "../../lib/NextProps";

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  p.title = "Philanthropy";
  return {
    props: p,
  };
};

export default function Page() {
  return <div className="py-6 px-4">
    <div className="w-full h-28 flex flex-col justify-center items-center gap-6 bg-purple-900 text-white"><h1 className="text-5xl bold">Philanthropy</h1></div>
<div className="max-w-6xl mx-auto grid grid-cols-1">
  <h2 className="text-2xl mt-5">Overview</h2>

<p>Our chapter's activities fall into five main categories:

<ul className="list-disc ml-6">
<li>Philanthropy and community service</li>
<li>Events with other Greek organizations</li>
<li>Social events</li>
<li>Brotherhood and alumni events</li>
<li>Rush (recruitment)</li>
</ul>
</p>

<h2 className="text-2xl mt-5">Philanthropy & Community Service</h2>

<p>Our brotherhood considers community service with high importance, and we strive to give back to the Worcester and WPI community. 
  Throughout the 2016/2017 academic year our brothers contributed over 1000 hours across 47 unique service events. Whether as mentors for FIRST Robotics teams or farmhands for local farmers,
   our chapter has made lasting contributions to the area.</p>
<div className="m-1 p-0"></div>
<p>The sections below outline the major recurring service events that our chapter participates in; however, they do not capture the entire picture of how Sigma Pi gives back to the community.</p>
<div className="m-1 p-0"></div>
<p>
<span className="italic">To learn about the service and philanthropy efforts of our international organization, visit our Fraternity's <a className="text-blue-500 underline "href="//sigmapi.org">official webpage</a>.</span></p>


<h2 className="text-2xl mt-5">Freshman Move-In</h2>

<p>At the beginning of each academic year, our chapter joins with other Greek chapters on campus, and helps incoming freshmen move into their dormitories. We welcome each student with cheers and help carry their belongings to their rooms. This effort not only allows incoming freshmen to move in smoothly and rapidly, but also serves as a welcoming gesture toward the new class from the fraternities and sororities on campus.</p>


<h2 className="text-2xl mt-5">Relay for Life</h2>

<p>Each spring our chapter participates in the WPI Relay for Life put on by the American Cancer Society. Leading up to the event our brotherhood raises money for cancer research through fundraising and personal contributions. During the event our brothers walk in support of those who have battled cancer.</p>

<h2 className="text-2xl mt-5">ACE Project</h2>

<p>An Altruistic Campus Experience (ACE) is an annual project that each chapter of Sigma Pi completes in benefit of their host institution. For our chapter, this project serves to foster the unique and supportive community that WPI has to offer. Past ACE projects have included supporting the Amazing Day Foundation and promoting mental health.</p>

<h2 className="text-2xl mt-5">Amazing Day</h2>

<p>
The Amazing Day Foundation exists in support of suicide awareness and prevention. This topic is of extreme importance particularly on college campuses, where an estimated 1 in 12 students have strongly considered suicide.
</p><div className="m-1 p-0"></div>
<p>At WPI, our brotherhood is making efforts to support the Amazing Day Foundation and raise awareness. As our 2017 ACE project, our brothers educated members of the WPI community about the prevalence of suicide on college campuses and the resources that WPI offers through an event on the WPI Quad. In addition to this, we provided food and activities on the quad that allowed students to relax outdoors after completing their midterms.
</p>

<div className="m-0 p-50"></div>
</div>
  </div>;
}
