#  🚀 Fundación Esplai Hackathon
 Reto Drop Zone (Frontend)⭐
## Responsive Drop-Zone
In this challenge we seek to create a drop zone, generating a comfortable visual environment for the user, improving the experience when uploading files to a web site, as a result we obtain a responsive environment, with functions to change the theme according to the schedule that facilitates reading depending on the user's taste and / or time.
## FRAMEWORKS & LIBRARYS 
The project uses Bootstrap for a improvement of responsive. It's necesary to configure the environment of Node JS in the console 1.npm init -y 2.npm install express multer 3. node server.js
### COLORS🔴🟡🔵
Colors were selected by HSL Color  creating a new variable that allows with only modifying a parameter it'll create complementary colors.
hsl(231, 0%, 0%)
Firts parameter rest always the same,the other change.
### PRIMARY
  --hue-color: 231;
    --first-color: hsl(var(--hue-color), 86%, 57%);
### SECONDARY
  --first-color-second: hsl(var(--hue-color), 59%, 16%);
### WHITE (CONTAINERS)
  --white-smoke: hsl(15, 29%, 95%);

### TYPOGRAPHY✒️
#### HEADINGS,HEADER NAVIGATION,BODY
-Family [Caveat] https://fonts.google.com/specimen/Montserrat
-Weigths medium 500

### ICONS
Used:    
[FontAwesome] https://fontawesome.com/icons

## BLACK MODE⬛🌙
  --first-color-second: hsl(var(--hue-color), 59%, 76%);
  --first-color: hsl(var(--hue-color), 59%, 17%);
  --text-color: hsl(var(--hue-color), 20%, 5%);
  --white-smoke: hsl(15, 29%, 95%);
## LIGHT MODE ⬜☀️
  --first-color: hsl(var(--hue-color), 86%, 57%);
  --first-color-second: hsl(var(--hue-color), 59%, 16%);
  --text-color: hsl(var(--hue-color), 20%, 5%);
  --white-smoke: hsl(15, 29%, 95%);
