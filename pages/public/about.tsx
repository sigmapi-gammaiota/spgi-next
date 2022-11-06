import { getDefaultPublicProps } from "@lib/NextProps";
import { Anchor, Text, Title } from "@mantine/core";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  p.title = "Our History";
  return {
    props: p,
  };
};

export default function Page() {
  return (
    <>
      <Title order={1}>Founding</Title>
      <Text>Gamma Iota chapter began in 1963 as Psi Theta Nu Fraternity, a local fraternity comprised of like-minded individuals at Worcester Polytechnic Institute.</Text>
      <Text>As a local fraternity, "PTN" had no overarching organization to support it. After vetting fraternities across the country for one year, PTN decided to apply to become a chartered and recognized chapter of Sigma Pi Fraternity. After another year, on May 1st, 1965, Psi Theta Nu received its charter from Sigma Pi Fraternity.</Text>
      <Text>Thus began the chapter's identity as Sigma Pi - Gamma Iota. Today, our alumni housing corporation still bears the name of our chapter's heritage: Psi Theta Nu.</Text>
      <Text>Before becoming home to Gamma Iota chapter, our historic chapter house had purportedly served as the WPI President's house and the campus police station. We believe the house to be over 110 years old -- needless to say, it has been renovated over the years! Our house is located at 34 Institute Rd. or 17 Dean St.</Text>

      <Title order={1}>Rebuilding Our Chapter</Title>
      <Text>In the summer of 2004, a fire on the third floor of the house drew the attention of our international organization to the chapter. Luckily, nobody suffered serious injuries and the structure incurred only moderate damage overall.</Text>
      <Text>This was a grave time for the chapter, and its future fell into uncertainty. After closer investigation, Sigma Pi officials intervened and introduced a "Renaissance program" that revitalized our membership and restarted the chapter on a clean slate, with a new Alpha class in the Fall of 2004. If not for the vision and cooperation of this intrepid class of 20 dedicated men, Gamma Iota may not still be here today.</Text>

      <Title order={1}>Growth and Success</Title>
      <Text>From 2004 to 2017, the Gamma Iota chapter grew and rebuilt its standing on campus. In the Spring of 2014, the chapter won, alongside several other honors, Worcester Polytechnic Institute's Chapter of the Year award. In Fall of 2015, the chapter held its 50th Anniversary celebration at the DCU Center in Worcester, welcoming back hundreds of alumni from throughout Gamma Iota's history. In the Fall of 2016, the chapter held its first annual Amazing Day with Sigma Pi, an event that brings fun activities to WPI's quad while raising awareness for mental health and suicide prevention. Finally, in the Spring of 2017, the chapter initiated thirty-three members of the Omicron class, the largest class since its inception.</Text>

      <Title order={1}>Present Day</Title>
      <Text>The Gamma Iota chapter of Sigma Pi continues to maintain an actively positive existence at Worcester Polytechnic Institute. True to our motto, which is based in the idea of perpetual progress, we strive to continuously improve our chapter while still holding true to our values and traditions.</Text>

      <Title order={1}>International History</Title>
      <Text>To learn about the rich history of our international organization, visit our Fraternity's <Anchor href="http://www.sigmapi.org/" target="_blank">official webpage</Anchor>.</Text>
    </>
  );
}
