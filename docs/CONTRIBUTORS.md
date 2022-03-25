# To Developers, From Developers

This message is aimed mostly to the Brothers of Sigma Pi in the Web-Tech committee. All contributions are still welcome, so we will refer generally to "developers" as a catch-all term.

This website aims to be much simpler for developers to implement new features and keep old ones up to date. The previous website used Django and was a challenge to maintain for a variety of reasons. Therefore, we (the current developers) have addressed 4 main principles we want everyone (new *and* current) to follow when contributing to this project.

## P1: Understand before Designing (RTFM)

The biggest challenge when maintaining the previous website was the startup time for new developers. Django is not the easiest framework to learn for new developers (to the project or to CS in general), so we switched to Next.js. This framework gives us more modern features to speed up development, as well as a larger full-stack community to draw upon. We want new developers to understand that we went through all this trouble of rewriting the website so you don't have the same struggle that we did starting out.

Please spend the time reading the documentation that's been painstakingly laid out for you. This doesn't just apply to this project, but includes the dependencies we listed in [our stack](#our-stack) as well. It takes a while to write extra sentences on top of the code that's already been written, but we're doing it to help you jump into this project quicker.

Understand how this website works **before** you continue with the next principles.

## P2: Design before Implementing

Once you know generally how this project works, you shouldn't just jump in and start making changes to things. Step back, get a whiteboard or pen & paper, and start writing down the idea you want to implement. Really flesh out the user experience, all the changes you'll need to make, what dependencies you might consider bringing in to the project, etc. Discuss this with your peers, your committee members (for the brothers on Web-Tech reading this), and the current developers (via GitHub issues in a feature request).

If you jump in to writing code, you'll come across an issue at some point and it'll make your job harder. After enough people make this mistake, everyone's job of maintaining and contributing is going to be a general pain in the ass. Please spend the time to design before implementing, and use group knowledge.

## P3: Extendable code before Optimal code

We care a lot about the developer experience and want all code to be extendable before it's optimal. Often times optimal code is extendable code, and that's a great scenario to be in. We're not perfect, so some code might not be perfect either. There are pros/cons to many approaches with varying opinons on what is "optimal" or "extendable". At some point you might think that the design you had was extendable but it turns out there was an even better way. We're realistic with the expectation that some level of refactoring will happen. Ideally we avoid it as much as possible so as to focus on writing new code instead of fixing old code.

We only ask that you try your best and communicate with us.

## P4: Document before Requesting

Any and all contributions should have appropriate documentation to support future work. When you make a pull request, it should have some level of documentation. Current developers also share the responsibility of holding new developers to account and denying pull requests without documentation. Please note that in all but a handful of cases, the developers of this project expect you to write this documentation **IN CODE**. When someone new reads your code, they should be able to figure out how it works at that moment without having to find a different file that explains how it works.

An example of when out-of-code documentation is useful is everything you've read so far. This document aims to provide a general understanding of the project contribution standards, without diving too deep into specifics line-by-line or concept-by-concept. If we all agree to follow this paradigm, it'll make our jobs easier and new people shouldn't get lost.

Documentation doesn't have to be super serious or intense, it just needs to get the point across. This isn't a corporate project; you can have fun with it.

## P5: Progress, man's distinctive mark alone

A sneaky 5th principle based on the motto of Sigma Pi:

Progress, man's distinctive mark alone,
Not God's, and not the beasts';
God is, they are.
Man partly is and wholly hopes to be.

It's a great motto which we believe applies to this project perfectly. Develop a full-stack skillset; invest in your own progress. Some of us have used working on this website for personal growth and resume boosting, leading to careers after college. Take the opportunity and put genuine effort into working on this project. Current developers can attest to the impact and payoff it's had on their lives, and we hope you find the same.
