# Planting Happiness
Planting Happiness: Stay connected, productive and motivated while giving back to the community!

## Created By

- [Megan Tran](https://github.com/meganjtran)
- [Reshmi Ranjith](https://github.com/ReshmiCode)
- [Saloni Shivdasani](https://github.com/SaloniSS)
- [Vincent Vu](https://github.com/vincent-vu280)

## Links

[Store Listing](https://play.google.com/store/apps/details?id=com.plantinghappiness.app)   
[Demo Video](https://www.youtube.com/watch?v=gtERz-YO9ps)  
[Devpost Submission](https://devpost.com/software/planting-happiness)  

## Submission
Submitted for EarthXHacks 2020

## Inspiration
During quarantine, many people find it hard to stay motivated. We wanted to create something to motivate users to continue being productive and we thought the best way to do this would be to garner a community and have some competition and reward elements. We aim to create a globally-accessible and user-centric application that uses gamification to interlink your wellness progress to give back to the community.

## What it does
Planting Happiness is a mobile application where users can share ways that they stay healthy and productive during quarantine while gaining points through daily goals they set for themselves. The user sets goals based on wellness and lifestyle categorized into self-care, community, fitness, and productivity among other features to earn virtual points. You can redeem your accumulated virtual points for personal and environmental perks such as tree plantations, donations to organizations, free workout classes, insurance discounts, and restaurant discounts.

## How I built it
React Native on Expo was used to build the front-end of our application while the back-end was built using Node.js and Express.js with MongoDB as our database.  For DevOps, we used Google App Engine to host our server, and Firebase Authentication to handle user login and authentication.

## How to Run
Download the repo on your system. Contact the repo owner to get the ClientID.js file and paste it in the client folder. On your terminal, go to the client folder. Run `npm install` followed by `expo start`. Scan the qr code in the expo phone app or enter the url in your browser to start the app.

## Challenges I ran into
It took us a bit to figure out how to have navigation stacks within each other. In the beginning, we wanted to only have the bottom navigation bar so we wouldn’t have to worry about this but it turned out nesting pages in each other would require a stack of its own so we ended up doing it eventually.

## Accomplishments that I'm proud of
This is the first app we have made in React Native. We have used React before but seeing how it translated to app components was interesting. We also felt proud of creating a social media app that benefits the community.

## What I learned
We learned how to build a mobile application in React Native. We also learned how to use Google technologies for DevOps.

## What's next for Planting Happiness
We plan on changing the activities view to list specific tasks you can do instead of having general categories. This will make it easier for users to see what activities can earn what amount of points. We also want to add a global leaderboard or even one against friends so you can see how many points they have.
