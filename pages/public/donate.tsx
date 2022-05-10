import { GetStaticProps } from "next";
import { getDefaultPublicProps } from "../../lib/NextProps";
import Image from "next/image";

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  p.title = "Donate";
  return {
    props: p,
  };
};

export default function Page() {
  return (
    <div className="w-full md:w-auto md:rounded-3xl shadow-xl md:mx-12 mb-32">
        <div className="w-full h-28 bg-purp0 md:rounded-t-3xl flex flex-col justify-center items-center gap-6 text-white">
        <h1>Donate</h1>
      </div>
      <div className="py-16 px-8 md:px-32 bg-base0 md:rounded-b-3xl">
        <Image className="fill-purple-100"
          src="/The_Trevor_Project_Logo_(2022).svg"
          alt="TrevorProjectLogo"
          width={630}
          height={250}
          layout="intrinsic"
          objectFit="contain"
        />
        <button className="font-bold py-2 px-4 border rounded align-center relative">
            Donate
        </button>
        <p className="mt-5 text-justify">We have proudly selected The Trevor Project to be our philanthropic partner. We made this decision based on a couple of factors. First and foremost, we fully support the mission of the organizaiton, which is to provide mental health and suicide prevention awareness resources to all, namely LGBTQ+ youth. We also took close note of the organization’s Charity Navigator Score, which is generated from financial transparency and accountability as compared to other charities. The Trevor Project received a 99.41/100 overall score, as well as it’s 82.1 program expense ratio, top in class, which is determined by program expenses divided by total expenses This cause hits close to home for Sigma Pi, as we endure the ongoing mourning of brother Jyn Godin. Jyn’s positive spirit lives on in our organization, and we proudly support relevant philanthropic efforts.</p>
      </div>
    </div>
  );
}
