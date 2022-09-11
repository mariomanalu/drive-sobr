## Inspiration
Saint Louis has seen a sharp increase in the number of car accidents caused by drunk driving. People tend to disregard the dangers of driving under the influence, possibly because they are unaware of the extent of their impairment. Individuals who are unable to fully comprehend their current state of mind may endanger not only themselves but also others. Many lives have been lost to drunk driving. I believe these losses are preventable.

As a resident of the Greater Saint Louis area, my safety on the road at night depends largely on other drivers. I want to be safe, so I create this handy app to help drivers assess if the effect of intoxication has subsided and that they are fit to drive. 

## What it does
DriveSobr uses P5.js to present three games that measure a driver's accuracy and response time. The games will prompt the driver to solve puzzles as accurately and as quickly as possible. Based on the driver's answers, DriveSobr will be able to conclude if the driver is fit to drive or not. If DriveSobr concludes that a driver is not  fit, SobrBot will call the driver's emergency contacts to seek for immediate help -- thereby preventing the driver from driving while being intoxicated.

## How I built it
1. I brainstormed the idea.
2. I did research on how dangerous drunk driving is.
3. I started building the landing page. There is no functionality implemented at this point, only a landing page.
4. I deployed the site through Vercel early in the process to anticipate deployment issues.
5. I bought drivesoberwith.tech from Domain.com.
6. I configured the domain, so that it points to my GitHub repo.
7. I tested deployment successfully.
8. Then, I started to make the first game. This game tests the user's ability to align a line that is moving with a static line. This game tests accuracy and response time.
9. I continued to make the second game. This game tests the user's ability to get the largest circle by combining perfect accuracy and response time.
10. After that, I made the third game. This game blurs and focuses an image alternately and asks the user find the most focused version of the image. In addition to testing accuracy and response time, this game also tests the user's visibility.
11. I tested out the games to ensure that they work properly.
12. I started implementing the Twilio Calls API.
13. After I implemented the API, I test it out by making automated, programmatic voice calls.
14. I added a guide to safe driving on the site and a README file as the icing on top.

## Challenges I ran into
1. I have not coded for 5.5 months, so I had a rough start. I completely forgot how to set up environment for JS, deploying, domain configuration, and a few JS syntaxes.
2. I also could not remember how to make scene changes in P5.js. I spent about 2-3 hours reading the documentation and find useful examples.
3. I had a silly problem with Twilio. I forgot to include the + sign when it comes to phone numbers input. I kept trying to make programmatic voice calls, but the calls were not initialized because of the phone number does not have the correct extensions.

## Accomplishments that I am proud of
I am proud of being able to relearn how to build as well as creating a functioning JS app in less than 36 hours. Above all, I am also proud of the mission and the use cases of DriveSobr. I think that DriveSobr is solving a very specific problem in a very unique way. I believe that DriveSobr will help a lot of people in difficult situations.

## What I learned
1. I learned a lot about full-stack web dev after not coding for 5.5 months.
2. I learned about domain configuration.
3. I learned about deployment with Vercel.
4. I learned to be careful with my code because one silly typo can leave me stuck for hours.
5. I learned how to make programmatic voice calls with Twilio Cals API.

## What's next for DriveSobr
I started DriveSobr with a device-agnostic mindset. That means, I want DriveSobr to be accessible via PC, laptops, tablets, as well as mobile phones. When I started coding, I realized how hard this is without external libraries. I am sure there are libraries that can help with that, but I am not aware of any. In the future, I would like to make DriveSobr device-agnostic, so that people can access it on their mobile phones. This will be really handy!