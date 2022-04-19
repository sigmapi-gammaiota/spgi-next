import { GetStaticProps } from "next";
import { getDefaultPublicProps } from "../../lib/NextProps";
import { FaDiscord, FaInstagram } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  p.title = "Rush";
  return {
    props: p,
  };
};

export default function Page() {
  return (
    <div>
      <div className="w-full h-96 flex flex-col justify-center items-center gap-6 bg-purple-900 text-white">
        <h1 className="text-5xl">Rush Sigma Pi</h1>
        <div className="flex gap-4">
          <button className="p-4 bg-green-500 rounded-3xl">Interest Form</button>
          <button className="text-4xl"><FaInstagram /></button>
          <button className="text-4xl"><FaDiscord /></button>
        </div>
      </div>

      <div className="py-16 px-32">
        <h2 className="text-3xl">About Rush</h2>
        <p>Hello and welcome to Rush 2021 for Sigma Pi Gamma Iota Chapter! We hope you enjoyed IFC Showcase and house tours and are excited to get to know you better throughout the rest of Rush.</p>
        <br/>
        <p>This page holds all content you need to find upcoming events! Please see the essential links section for access to our rush discord and other information.</p>
        <br/>
        <p>Come on down to lunches (11:30AM) and dinners (5:30PM) Monday through Friday! No commitment, we'd just love to chat with you and get you some free food!</p>
      </div>

      <div className="py-16 px-32 bg-neutral-200 flex flex-wrap gap-6">
        <div className="grow">
          <h2 className="text-3xl">Events</h2>
          <ul className="list-disc pl-6">
            <li>IFC Showcase - Oct. 25</li>
            <li>House Tours - Oct. 26-27</li>
            <li>BBQ - Oct. 28 - 6:00PM</li>
            <li>Trip to Purgatory - Oct. 30 - 11:30AM</li>
            <li>Game Night - Nov. 1</li>
            <li>Mental Health Day - Nov. 2</li>
            <li>Casino Night - Nov. 3</li>
            <li>Car Smash - Nov. 6 - 12:00PM</li>
            <li>Global Bonanza - Nov. 9 - 8:00PM</li>
            <li>Hot Ones (Invite Only) - Nov. 11</li>
            <li>Slideshow Showdown - Nov. 13</li>
            <li>Mystery Event - Nov. 15-16</li>
            <li>Bid Dinner - Nov. 18</li>
            <li>Bid Night - Nov. 19</li>
          </ul>
        </div>
        <div className="flex grow justify-center items-center">
          <Calendar />
        </div>
      </div>

      <div className="py-16 px-32">
        <div className="flex justify-around items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/g0OaDbc-ThQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.272756878377!2d-71.80692968425359!3d42.27270064860615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e406594c0632c5%3A0xcdce60e428959b!2sSigma%20Pi%2C%20Gamma%20Iota%20Chapter!5e0!3m2!1sen!2sus!4v1650316311465!5m2!1sen!2sus" width="560" height="315" className="border-none" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className="py-16 px-32 bg-neutral-200">
        <h2 className="text-3xl">FAQ</h2>

        <i>Do I need to have or know anything for the events?</i>
        <p>Not at all! Feel free to come by to any open event and have some fun! We'd love to meet you.</p>
        <br/>
        <i>Is there any commitment if I go to an event?</i>
        <p>Nope!</p>
        <br/>
        <i>What kind of fraternity is this?</i>
        <p>Sigma Pi is a fraternity of like-minded individuals at Worcester Polytechnic Institute. There is no category or classification for our fraternity, our interests and backgrounds span far and wide.</p>
      </div>

      <div className="py-16 px-32">
        <h2 className="text-3xl">Contact Us</h2>
        <h3>Rush Chairs:</h3>
        <ul className="list-disc pl-6">
          <li>Sam Losh: stlosh@wpi.edu</li>
          <li>Luke Hoy: lahoy@wpi.edu</li>
        </ul>
      </div>
    </div>
  );
}
