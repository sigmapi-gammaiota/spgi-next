import Section from "@components/Section";
import { getDefaultPublicProps } from "@lib/NextProps";
import { Anchor, List, Text, Title } from "@mantine/core";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  p.title = "Service & Activities";
  return {
    props: p,
  };
};

export default function Page() {
  return (
    <Section>
      <Title order={1}>Overview</Title>
      <Text>Our chapter's activities fall into five main categories:</Text>
      <List>
        <List.Item>Philanthropy and community service</List.Item>
        <List.Item>Events with other Greek organizations</List.Item>
        <List.Item>Social events</List.Item>
        <List.Item>Brotherhood and alumni events</List.Item>
        <List.Item>Rush (recruitment)</List.Item>
      </List>

      <Title order={1}>Philanthropy & Community Service</Title>
      <Text>
        Our brotherhood considers community service with high importance, and we
        strive to give back to the Worcester and WPI community. Throughout the
        2016/2017 academic year our brothers contributed over 1000 hours across
        47 unique service events. Whether as mentors for FIRST Robotics teams or
        farmhands for local farmers, our chapter has made lasting contributions
        to the area.
      </Text>
      <Text>
        The sections below outline the major recurring service events that our
        chapter participates in; however, they do not capture the entire picture
        of how Sigma Pi gives back to the community.
      </Text>
      <Text fs="italic">
        To learn about the service and philanthropy efforts of our international
        organization, visit our Fraternity's{" "}
        <Anchor href="https://www.sigmapi.org/" target="_blank">
          official webpage
        </Anchor>
        .
      </Text>

      <Title order={1}>Freshman Move-In</Title>
      <Text>
        At the beginning of each academic year, our chapter joins with other
        Greek chapters on campus, and helps incoming freshmen move into their
        dormitories. We welcome each student with cheers and help carry their
        belongings to their rooms. This effort not only allows incoming freshmen
        to move in smoothly and rapidly, but also serves as a welcoming gesture
        toward the new class from the fraternities and sororities on campus.
      </Text>

      <Title order={1}>Relay For Life</Title>
      <Text>
        Each spring our chapter participates in the WPI Relay for Life put on by
        the American Cancer Society. Leading up to the event our brotherhood
        raises money for cancer research through fundraising and personal
        contributions. During the event our brothers walk in support of those
        who have battled cancer.
      </Text>

      <Title order={1}>ACE Project</Title>
      <Text>
        An Altruistic Campus Experience (ACE) is an annual project that each
        chapter of Sigma Pi completes in benefit of their host institution. For
        our chapter, this project serves to foster the unique and supportive
        community that WPI has to offer. Past ACE projects have included
        supporting the Amazing Day Foundation and promoting mental health.
      </Text>

      <Title order={1}>Amazing Day</Title>
      <Text>
        The Amazing Day Foundation exists in support of suicide awareness and
        prevention. This topic is of extreme importance particularly on college
        campuses, where an estimated 1 in 12 students have strongly considered
        suicide.
      </Text>
      <Text>
        At WPI, our brotherhood is making efforts to support the Amazing Day
        Foundation and raise awareness. As our 2017 ACE project, our brothers
        educated members of the WPI community about the prevalence of suicide on
        college campuses and the resources that WPI offers through an event on
        the WPI Quad. In addition to this, we provided food and activities on
        the quad that allowed students to relax outdoors after completing their
        midterms.
      </Text>
    </Section>
  );
}
