import { GetStaticProps } from "next";
import { getDefaultPublicProps } from "../../lib/NextProps";

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  return {
    props: p,
  };
};

/**
      TODO:
      Add all text to page
      */

export default function Page() {
  return <div>
      <div className="mt-10 ml-5 mr-5">
        <h2 className="text-2xl text-purple-900">Welcome to Sigma Pi</h2>
        <p className="text-justify">
          Gamma Iota chapter began in 1963 as Psi Theta Nu Fraternity, 
          a local fraternity comprised of like-minded individuals at 
          Worcester Polytechnic Institute. As a local fraternity, 
          "PTN" had no overarching organization to support it. After 
          vetting fraternities across the country for one year, PTN 
          decided to apply to become a chartered and recognized chapter 
          of Sigma Pi Fraternity. After another year, on May 1st, 1965, 
          Psi Theta Nu received its charter from Sigma Pi Fraternity.
        </p>
      </div>
      <div className="mt-10 ml-5 mr-5">
        <h2 className="text-2xl text-purple-900 mt-10">In Memory of Jyn Godin</h2>
        <p className="text-justify">
        Born on December 23rd, 2000, Jyn brought twenty years of joy to all those around them. They joined our chapter in the fall of 2019 as a member of Sigma class. Jyn was part of a group where they could freely learn and share their passions with others. Jyn embodied the culture and character of Sigma Pi; the absence of their enthusiasm and care is felt every day.
        Jyn is not just our friend, they are our brother, and they always will be.
        </p>
        <p>more content (update 2019 Greek Week)</p>
        </div>
  </div>;
}
