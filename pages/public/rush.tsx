import { getDefaultPublicProps } from "@lib/NextProps";
import { Anchor, List, Text, Title } from "@mantine/core";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  let p = getDefaultPublicProps();
  p.title = "Rush Sigma Pi!";
  return {
    props: p,
  };
};

export default function Page() {
  return (
    <>
      <Title order={1}>About Rush</Title>
      <Text>Hello and welcome to Rush 2022 for Sigma Pi Gamma Iota Chapter! We hope you enjoyed IFC Showcase and house tours and are excited to get to know you better throughout the rest of Rush.</Text>
      <Text>This page holds all content you need to find upcoming events! Please see the essential links section for access to our rush discord and other information.</Text>
      <Text>Come on down to lunches (11:30AM) and dinners (5:30PM) Monday through Friday! No commitment, we'd just love to chat with you and get you some free food!</Text>

      <Title order={1}>Upcoming Events</Title>
      <Anchor href="https://calendar.google.com/calendar/u/1?cid=Nzd2aG5jMHI1ZHZqcjdkNjlyZWE4aGpyNDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" target="_blank">Google Calendar</Anchor>
      <Text fs="italic">All events are at 7:00pm at the house unless stated otherwise</Text>
      <Text>START OF RUSH: Oct. 25</Text>
      <List>
        <List.Item>IFC Showcase - Oct. 25</List.Item>
        <List.Item>House Tours - Oct. 26-28</List.Item>
        <List.Item>BBQ - Oct. 29 - 12:00PM</List.Item>
        <List.Item>Destroy Build Destroy - Oct. 31 - 6:00PM</List.Item>
        <List.Item>Hot Ones (Invite Only) - Nov. 2 - 6:30PM</List.Item>
        <List.Item>Purgatory Chasm - Nov. 5 - 11:00AM</List.Item>
        <List.Item>Casino Night - Nov. 8 - 7:00PM</List.Item>
        <List.Item>Escape Rooms - Nov. 10 - 6:00PM</List.Item>
        <List.Item>Global Bonanza - Nov. 12 - 7:00PM</List.Item>
        <List.Item>Mystery Event - Nov. 14</List.Item>
        <List.Item>Bid Dinner - Nov. 17</List.Item>
        <List.Item>Bid Night - Nov. 18</List.Item>
      </List>
      <Text>END OF RUSH: Nov. 19</Text>

      <Title order={1}>Contact Us</Title>
      <Text>Rush Chairs:</Text>
      <List>
        <List.Item>Allie Rozear - aprozear@wpi.edu</List.Item>
        <List.Item>Luke Hoy - lahoy@wpi.edu</List.Item>
      </List>
      <Text>If you need accommodations, please contact Darren Kwee at (860)-952-4895</Text>

      <Title order={1}>Important Links</Title>
      <Anchor href="https://youtu.be/g0OaDbc-ThQ" target="_blank">House Tour Video</Anchor>
      <Anchor href="https://www.wpi.edu/student-experience/getting-involved/fraternities-sororities" target="_blank">WPI Rush Info Page</Anchor>
      <Anchor href="https://www.wpi.edu/student-experience/getting-involved/fraternities-sororities/joining" target="_blank">WPI Joining Greek Life Info Page</Anchor>
      <Anchor href="https://www.instagram.com/rushsigmapiwpi/" target="_blank">Instagram</Anchor>
      <Anchor href="https://www.wpiifc.org/recruitment" target="_blank">IFC Recruitment Page</Anchor>
      <Anchor href="https://www.facebook.com/SigmaPiWPI" target="_blank">Facebook</Anchor>

      <Title order={1}>FAQ</Title>
      <Title order={2} fs="italic">Do I need to have or know anything for the events?</Title>
      <Text>Not at all! Feel free to come by to any open event and have some fun! We'd love to meet you.</Text>
      <Title order={2} fs="italic">Is there any commitment if I go to an event?</Title>
      <Text>Nope!</Text>
      <Title order={2} fs="italic">What kind of fraternity is this?</Title>
      <Text>Sigma Pi is a fraternity of like-minded individuals at Worcester Polytechnic Institute. There is no category or classification for our fraternity, our interests and backgrounds span far and wide.</Text>

      <Title order={1}>Interest Form</Title>
    </>
  );
}
