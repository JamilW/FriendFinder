# FriendFinder

* Deployment Link: https://friendfinder1979.herokuapp.com/


### Home Page

![HOMEPAGE.PNG](/app/images/homepage.png)

### Survey Page

![SURVEY.PNG](/app/images/Untitled.png)

### Friends List Page

![FRIENDSLIST.PNG](/app/images/friendslist.png)

### Instructions

My survey has 10 questions of my choosing. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
My server.js file requires the basic npm packages: express and path.
My htmlRoutes.js file includes two routes:



A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page.



My apiRoutes.js file contains two routes:



A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.



The application's data is saved inside of app/data/friends.js as an array of objects. 

My app determines the user's most compatible friend using the following as a guide:



Converting each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, the app compares the difference between current user's scores against those from other users, question by question. The app then adds up the differences to calculate the totalDifference.


Example:


User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5





My app uses the absolute value of the differences. Put another way: no negative solutions! My app calculates both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.



Once my app has found the current user's most compatible friend, the result is displayed as a modal pop-up.


The modal displays both the name and picture of the closest match.