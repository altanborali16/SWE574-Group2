* NB : name for the .md file in the reports folder: <GROUP_NO>Final-Project-Report.md (

# SWE 574.01 Autumn 2024,  Final Project Report, Group 2

**Submission date**: December 22, 2024  

**Course name**: Software Development as a Team, SWE 574.01  

**Project name**: Community Web Application

**Group 2 members**:     

ALİ ŞER GÖK    
ALTAN BORALI  
EFE GÖÇMEN  
FERİDUN BERK AKYOL  
İSMAİL ENES AKKAL  
YANA KRASOVSKA  

**Git repository**: https://github.com/altanborali16/SWE574-Group2  

**Git tag version**:  
On 16th of December we have created a [release](https://github.com/altanborali16/SWE574-Group2/releases/tag/customer-final-group2) but as it should be on main we have created a new tag from main, no code has been changed only merge has been applied.

**Deployment URL**: http://3.82.136.134:3000 

## Table of Contents
[Honor code](https://github.com/altanborali16/SWE574-Group2/wiki/Final-Project-Report#honor-code-declaration)  
[Overview](https://github.com/altanborali16/SWE574-Group2/wiki/Final-Project-Report#overview)  
[Deliverables](https://github.com/altanborali16/SWE574-Group2/wiki/Final-Project-Report#deliverables)  
[References](https://github.com/altanborali16/SWE574-Group2/wiki/Final-Project-Report#references)  
[Demo user information  ](https://github.com/altanborali16/SWE574-Group2/wiki/Final-Project-Report#demo-user-information)  
[Project Details  ](https://github.com/altanborali16/SWE574-Group2/wiki/Final-Project-Report#project-details)  
[Individual Contributions ](https://github.com/altanborali16/SWE574-Group2/wiki/Final-Project-Report#individual-contributions)  

## Honor code declaration:

Related to the submission of all the project deliverables for the Swe574 2024 Autumn semester project contained in this report, we the undersigned, declare that:
* Each of the undersigned is a student in the Software Engineering MS program at Bogazici University and registered for Swe574 course during the Autumn 2024 semester.
* All the material that each of the undersigned is submitting related to this project (including but not limited to the project repository, the final project report, and supplementary documents) have been exclusively prepared by the undersigned.
* Each of the undersigned prepared this material individually, without the assistance of anyone else with the exception of permitted peer assistance which is to be explicitly disclosed in this report.

Signed by:  
ALİ ŞER GÖK    
ALTAN BORALI  
EFE GÖÇMEN  
FERİDUN BERK AKYOL  
İSMAİL ENES AKKAL  
YANA KRASOVSKA  

## Overview

> The Community web application was created with a purpose to help people with similar interests find each other and communicate in a uniquely structured way.  In this application, a community is defined as a user-created, thematic space centered around a specific topic or interest.
> The objective of this student project was to develop the web application in line with the requirements and following good development, team work, and management practices.   
> The Community Website is a progressive web application (PWA) that can be installed on a mobile client as a standalone application and provides the user an experience optimized for mobile devices.  
> The technology stack of the developed application:  
> * Backend: Java, Spring Boot framework, Docker
> * Database Engine: PostgreSQL
> * Frontend: ReactJS, CSS, HTML

## Deliverables

The deliverables of this project include:  
* Project Final Report  
* Team Evaluation Reports (6 reports)  
* GitHub repository and its contents  
* Released software  
* Deployed web application  

## References
* Java naming conventions used in the project: https://github.com/naming-convention/naming-convention-guides/tree/master/java  
* Git branches naming conventions: https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534  

## Demo user information

Please only upload images up to 5 Mb.  A little patience is required while the pages load, please do not abuse the Refresh button.  

## Project Details

* **Status of deployment:** deployed at [AWS](http://3.82.136.134:3000 )
* **Dockerization status:** [ready](https://github.com/altanborali16/SWE574-Group2/blob/main/devcomReborn/docker-compose.yaml)
* **Project executive summary:**  

> This project provides a web-based and mobile-friendly community platform for creating and managing topic-focused communities in a uniquely structured way through customizable community post templates. Each community supports posts, comments, votes, and user interactions. The system supports a progressive web application model, ensuring seamless access via standard desktop and mobile browsers without additional installations.  
> User registration requires an email, name or nickname, and password. Users can create communities with special interest tags, set the appropriate level of privacy, and subscribe to communities. A recommendation system displays posts related to user interests and community tags. Owners and moderators can manage content, assign roles, and maintain standards. A reputation and badge system recognizes valuable contributions.  
> All posts must follow set templates, ensuring consistency. Users can perform both basic and advanced searches across public and private content. The platform supports text and multimedia content and allows archiving communities without deleting them. These features combine to create a space where users can find, join, and participate in communities aligned with their interests.
> The system encourages thoughtful use of its features by allowing users to create communities in desktop browser only.  
> The developed application meets the goals of the project the main goals of which were enabling structured communication of users; access from both desktop and mobile devices; gamified user experience; and a community/post recommendation system to break the information silos.  

* **Software Requirements Specification**: available [here](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification)
* **Status of Requirements**: completed (documented, tested, deployed), not completed

| Requirement Number | Status |
|--------------------|--------|
| [I.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#i-user-interface-in-the-system) | completed |
| [II.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ii-front-and-home-page-of-the-system) | completed |
| [II.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ii-front-and-home-page-of-the-system) | completed |
| [III.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iii-registration-in-the-system) | completed |
| [III.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iii-registration-in-the-system) | not completed |
| [III.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iii-registration-in-the-system) | completed |
| [IV.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iv-authentication-logging-in) | completed |
| [IV.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iv-authentication-logging-in) | not completed |
| [V.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed |
| [V.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed |
| [V.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed |
| [V.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed |
| [V.5.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed |
| [V.6.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed |
| [V.7.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed |
| [VI.A.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#via-user-communication-in-the-system) | completed |
| [VI.A.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#via-user-communication-in-the-system) | not completed |
| [VI.B.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | completed |
| [VI.B.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | completed |
| [VI.B.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | completed |
| [VI.B.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | completed |
| [VI.C.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed |
| [VI.C.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed |
| [VI.C.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed |
| [VI.C.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed |
| [VII.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vii-community-administration) | completed |
| [VII.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vii-community-administration) | not completed |
| [VII.A.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  |
| [VII.A.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  |
| [VII.A.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  |
| [VII.A.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  |
| [VII.A.5.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  |
| [VII.A.6.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  |
| [VII.A.7.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  |
| [VII.A.8.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  |
| [VII.B.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viib-editing-a-community) | not completed  |
| [VII.C.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  |
| [VII.C.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  |
| [VII.C.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  |
| [VII.C.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  |
| [VII.C.5.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  |
| [VII.C.6.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  |
| [VII.D.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viid-deleting-a-community) | completed |
| [VII.E.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viie-archiving-a-community) | not completed |
| [VII.E.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viie-archiving-a-community) | not completed |
| [VII.E.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viie-archiving-a-community) | not completed |
| [VII.E.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viie-archiving-a-community) | not completed |
| [VII.E.5.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viie-archiving-a-community) | not completed |
| [VII.E.6.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viie-archiving-a-community) | not completed |
| [VII.F.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viif-moderation-within-communities) | completed |
| [VII.F.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viif-moderation-within-communities) | not completed |
| [VII.F.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viif-moderation-within-communities) | completed |
| [VII.F.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viif-moderation-within-communities) | completed |
| [VIII.A.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiia-subscribing-to-communities) | completed |
| [VIII.A.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiia-subscribing-to-communities) | completed |
| [VIII.A.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiia-subscribing-to-communities) | not completed |
| [VIII.A.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiia-subscribing-to-communities) | not completed |
| [VIII.B.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiib-contributing-to-communities) | completed |
| [VIII.B.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiib-contributing-to-communities) | completed |
| [VIII.B.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiib-contributing-to-communities) | not completed |
| [VIII.C.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiic-interaction-within-communities) | completed |
| [VIII.C.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiic-interaction-within-communities) | not completed |
| [VIII.C.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiic-interaction-within-communities) | not completed |
| [VIII.C.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiic-interaction-within-communities) | completed |
| [VIII.C.5.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiic-interaction-within-communities) | not completed |
| [VIII.C.6.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiic-interaction-within-communities) | not completed |
| [IX.A.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ixa-tagging-content) | not completed |
| [IX.A.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ixa-tagging-content) | not completed |
| [IX.B.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ixb-searching-and-filtering-content) | completed |
| [IX.B.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ixb-searching-and-filtering-content) | completed |
| [IX.B.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ixb-searching-and-filtering-content) | completed |
| [IX.B.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ixb-searching-and-filtering-content) | completed |
| [IX.B.5.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ixb-searching-and-filtering-content) | completed |
| [IX.B.6.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ixb-searching-and-filtering-content) | completed |
| [X.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#x-types-of-data-in-the-system) | completed |
| [X.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#x-types-of-data-in-the-system) | completed |
| [X.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#x-types-of-data-in-the-system) | completed |
| [X.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#x-types-of-data-in-the-system) | completed |

* **Design**:  
[use-case diagrams](https://github.com/altanborali16/SWE574-Group2/wiki/Designs,-diagrams,-and-use-case-scenarios#high-level-system-design)  
[activity diagrams and use case scenarios](https://github.com/altanborali16/SWE574-Group2/wiki/Designs,-diagrams,-and-use-case-scenarios#use-case-scenarios-and-activity-diagrams)  
[event flow diagrams](https://github.com/altanborali16/SWE574-Group2/wiki/Designs,-diagrams,-and-use-case-scenarios#event-flow-diagrams)  
[recommendation service backend design](https://github.com/altanborali16/SWE574-Group2/wiki/Designs,-diagrams,-and-use-case-scenarios#recommendation-service-backend-design)  
[badge system backend design](https://github.com/altanborali16/SWE574-Group2/wiki/Designs,-diagrams,-and-use-case-scenarios#badge-system-backend-design)  
[UI mockup designs](https://github.com/altanborali16/SWE574-Group2/wiki/Designs,-diagrams,-and-use-case-scenarios#ui-mockup-designs)  

* **System manual**:  

**In-browser access**: the system can be accessed at http://3.82.136.134:3000/ in most modern desktop and mobile browsers.  

**Mobile client access**:  On both Android (using Chrome) and iOS (using Safari), users can add this PWA to their home screen. Once added, the PWA can be launched from an icon just like a native app, opening in a standalone window without the standard browser UI.  

**Running the system locally in Docker**:  

1. Install Docker Desktop  
Firstly, if you are on Windows install/update WSL 2 by typing the following command in a terminal  
C:\Users\YOURMACHINE> wsl --update  

2. Download the appropriate installation binary from https://docs.docker.com/desktop/ After the download is completed go on to install Docker Desktop. At the end of the installation, you will need to restart your system.  
Make sure to check that Docker Engine is running by opening the Docker Desktop application.  

 3.Go to frontend/src/Helpers/HttpeClient.js

 set the based url to your local host.
 baseURL: "http://localhost:3000", // Replace with your base URL if you have one .

4. Open a terminal in the source folder root, where docker-compose.yaml file resides. Run the following command in the terminal to start the database and the application:  
C:\Users\YOURMACHINE> docker-compose up --build
Wait for container images to be pulled from internet and the application to be built and started. This may take some time.  

5. Open http://localhost:3000/ in your browser to view the application.  

6. To stop the application use Ctrl+C to stop containers in the terminal.  

* **User manual:** 

Register in the system  
To start using the application, a user must first register and then log in, as most functions are available to registered users only. After providing name, username, and password the system checks that they are unique.

Logging in  
To log in, the user must enter the email and password they used to register. If the combination is wrong, the system will prompt the user to try to log in again.  

Create a community  
After logging in, the user can create a community. To do so, the user clicks Create new community on the home page. After entering community name, description, and choosing visibility, it is possible to create a custom post template which will be used by all members of this community. Currently it is not possible to modify or delete the post template once it is created. To set post field types, the user should use the available values - the system currently offers Text, Signed and Unsigned Numbers, Geolocation, Image, Time, Date. Automatically, the user who creates the community becomes its member and admin.  
Once a community with its respective template is created, the user is redirected to the community page.  

Manage the created Community  
Once the user created a community, he/she becomes the owner and gets administration rights. This means, the user can remove community members and assign administration rights to other community members. Administration rights allow users who become administrators to remove users, too. The owner of the community can assign multiple administrators but he/she cannot leave the community he/she created.  

View communities in the system  
By visiting Communities link in the upper section of the screen, the user can view communities in the system.  

Join a community
To be able to write to a community, the user must first subscribe to it by clicking the Subscribe button. Immediately after that a post form will become available based on the template(s) set for this community. The user can also see their username appear in the list of this community members by clicking the Subscribers link next to the community picture.   

Interact with content inside a community  
After subscribing to the community, the user can use the post form to contribute to the community, upvote other users' posts, and leave comments.  

Search inside a community   
Logged users can utilize the Search box at the top to search inside communities by keywords, numerical values or range of numerical values.  

* **Test results:**   

**Manual test results**

Prepared by: Group 2
Application under test URL: http://3.82.136.134:3000/
Date created: 15-Dec-24

| TEST CASE ID      | TEST CASE       | TEST CASE DESCRIPTION                          | PRECONDITION                                                                                                   | TEST DATA                                                                    | TEST STEPS                                                                                                                                                                                                        | EXPECTED RESULT                                                                                                                                                                                                                       | POSTCONDITION                                           | ACTUAL RESULT                                 | STATUS (pass/fail) | COMMENTS                                        |
|-------------------|-----------------|------------------------------------------------|---------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|-------------------------------------------------|---------------------|-------------------------------------------------|
| TC_login_001      | Verify login    | Enter valid email and valid password           | User not logged in                                                                                            | <email>: tester@test.me <br><password>: tester                               | 1. Goto: [http://3.82.136.134:3000](http://3.82.136.134:3000)<br>2. Enter test data<br>3. Click **Login** button                                                                                                    | 1. Redirected to [http://3.82.136.134:3000/feed](http://3.82.136.134:3000/feed)<br>2. User can see recommended posts and “Please subscribe communities so we can help you with your recommendations” message on the top of the page | User logged in. Feed page is shown                       | as expected                                     | pass                |                                                 |
| TC_login_002      | Verify login    | Enter invalid email and valid password         | User not logged in                                                                                            | <email>: tester@test.this <br><password>: tester                            | 1. Goto: [http://3.82.136.134:3000](http://3.82.136.134:3000)<br>2. Enter test data<br>3. Click **Login** button                                                                                                   | 1. Page remains [http://3.82.136.134:3000](http://3.82.136.134:3000)<br>2. “Wrong email or password. Please try again” message shown<br>3. User not logged in                                                          | User not logged in. Login page is shown                | as expected                                     | pass                |                                                 |
| TC_login_003      | Verify login    | Enter valid email and invalid password         | User not logged in                                                                                            | <email>: tester@test.me <br><password>: 123                                 | 1. Goto: [http://3.82.136.134:3000](http://3.82.136.134:3000)<br>2. Enter test data<br>3. Click **Login** button                                                                                                   | 1. Page remains [http://3.82.136.134:3000](http://3.82.136.134:3000)<br>2. “Wrong email or password. Please try again” message shown<br>3. User not logged in                                                           | User not logged in. Login page is shown                | as expected                                     | pass                |                                                 |
| TC_searchcom_001  | Search in community | Search in existing community                  | None                                                                                                          | <numerical range>                                                            | 1. Goto [http://3.82.136.134:3000/community/13](http://3.82.136.134:3000/community/13)<br>2. Click “Search” → tick **Posts** → select “Template for Celestial Objects” → Select “AND” operator → enter -100 in Minimum value, enter 1000 in Maximum value | 1. Page shows 3 Posts as result: Visitor from Deep Space, Neighbouring Marvel, Pillars of Creation                                                                                                                       | None                                                   | as expected                                     | pass                |                                                 |
| TC_subscribe_001  | Subscribe to a community | Subscribe to a community user is not member of | 1. User logged in with <email>: tester@test.me <br><password>: tester <br>2. User is not member of community “Cats are awesome” and cannot post to it | none                                                                         | 1. Goto community “Astronomy Enthusiasts” at [http://3.82.136.134:3000/community/7](http://3.82.136.134:3000/community/7)<br>2. Click **Follow** button                                                              | 1. Follow button turns into **UnFollow** <br>2. Create post block appears next to UnFollow button                                                                                                                                     | 1. User cannot subscribe to “Astronomy Enthusiasts” anymore <br>2. User can post to this community <br>3. User can see “Tester” in the list of subscribed members when clicking **Subscribers** link | As expected                                     | pass                | Post condition 1: true <br>Post condition 2: true <br>Post condition 3: false |
| TC_subscribe_002  | Subscribe to a community | Subscribe to a private community             | 1. User logged in with <email>: tester@test.me <br><password>: tester <br>2. User is not a member of community “Politics” | none                                                                         | 1. Goto community [http://3.82.136.134:3000/community/14](http://3.82.136.134:3000/community/14)<br>2. Confirm community posts are blurred<br>3. Click **Follow**                                                    | 1. Community Politics is opened <br>2. Community posts are blurred <br>3. Upon clicking Follow, community posts are revealed                                                                                                                            | User can see the posts and can post to community       | as expected                                     | pass                |                                                 |
| TC_recom_001      | Get recommendations | Get recommended communities                   | User logged in with <email>: tester@test.me <br><password>: tester <br>User is member of “PlayCat” community [http://3.82.136.134:3000/community/16](http://3.82.136.134:3000/community/16) | (none specified)                                                              | 1. Goto [http://3.82.136.134:3000/communities](http://3.82.136.134:3000/communities)<br>2. Goto [http://3.82.136.134:3000/feed](http://3.82.136.134:3000/feed)                                                         | 1. Recommended communities: Dialupa, Aşk-ı Memnu Discussion<br>2. Recommended posts: “Dua Lipa yılbaşına özel beşiktaş jolly jokere geliyor!!!” and “Dua lupa is coming to Istanbul!!!”                                                                       | None                                                   | As expected                                     | pass                |                                                 |
| TC_badge_001      | Reveal badges   | Reveal community badges by performing sought actions | User logged in with <email>: tester@test.me <br><password>: tester <br>User is member of “Politics” and “PlayCat” community [http://3.82.136.134:3000/community/16](http://3.82.136.134:3000/community/16) and [http://3.82.136.134:3000/community/14](http://3.82.136.134:3000/community/14) | <Comment text>: What is your party program?                                   | 1. Goto [http://3.82.136.134:3000/community/14](http://3.82.136.134:3000/community/14)<br>2. Leave a comment to post “New Party Ideas”                                                                                | Badge “First comment” revealed                                                                                                                                                                                           | Comment to the “New Party Ideas” visible                | as expected                                     | pass                | First comment badge is system-wide              |

* Frontend testing with selenium IDE :

![Tests Imange](https://github.com/user-attachments/assets/ebfc623b-fbc0-4b77-90ab-65d9e5ad6303)

* Short video of web and mobile interface: [Drive Link](https://drive.google.com/drive/folders/1d8c1TQrnBH4R_pldUoYUTND0GaoK4irD)

## Individual Contributions

### Individual Contribution: Altan Boralı

1. Summary of work performed: I am responsible on front-end team and communicator with backend team. From mvp to final I was also the project manager.
2. Requirement(s) worked on and brief description: 

| Requirement Number | Status | Brief Description |
|--------------------|--------| ----------------- |
| [I.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#i-user-interface-in-the-system) | completed | worked on front-end |
| [II.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ii-front-and-home-page-of-the-system) | completed | worked on front-end |
| [II.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ii-front-and-home-page-of-the-system) | completed | pair coding with Enes |
| [III.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iii-registration-in-the-system) | completed | pair coding with Enes (mostly done by Enes) |
| [III.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iii-registration-in-the-system) | not completed | changed the structure by following or created community tags |
| [III.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iii-registration-in-the-system) | completed | worked on front-end |
| [IV.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iv-authentication-logging-in) | completed |  pair coding with Enes |
| [V.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed | pair coding with Enes |
| [V.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed | worked on front-end |
| [V.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed | worked on front-end |
| [VI.B.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | completed | implemented on front-end without backend |
| [VI.B.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | completed | implemented on front-end without backend |
| [VI.B.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | completed | implemented on front-end without backend |
| [VI.B.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | completed | implemented on front-end without backend |
| [VI.C.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed | worked on basics and after Enes handover the topic |
| [VI.C.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed | worked on basics and after Enes handover the topic |
| [VI.C.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed | worked on basics and after Enes handover the topic |
| [VI.C.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed | worked on basics and after Enes handover the topic |
| [VII.A.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | worked on front-end |
| [VII.A.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | worked on front-end |
| [VII.A.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | worked on front-end |
| [VII.A.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | worked on front-end |
| [VII.A.5.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | worked on front-end |
| [VII.A.6.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | worked on front-end |
| [VII.A.7.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | worked on front-end |
| [VII.A.8.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | worked on front-end |
| [VII.C.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  | worked on front-end |
| [VII.C.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  | worked on front-end |
| [VII.C.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  | worked on front-end |
| [VII.C.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  | worked on front-end with Enes |
| [VII.C.5.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  | worked on front-end with Enes |
| [VII.C.6.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  | worked on front-end with Enes |
| [VIII.A.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiia-subscribing-to-communities) | completed | worked on front-end |
| [VIII.A.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiia-subscribing-to-communities) | completed | worked on front-end |
| [VIII.B.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiib-contributing-to-communities) | completed | worked on front-end |
| [VIII.B.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiib-contributing-to-communities) | completed | worked on front-end |
| [X.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#x-types-of-data-in-the-system) | completed | worked on front-end |
| [X.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#x-types-of-data-in-the-system) | completed | worked on front-end |
| [X.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#x-types-of-data-in-the-system) | completed | worked on front-end |
| [X.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#x-types-of-data-in-the-system) | completed | worked on front-end |

3. Related issue/pull request/documentation URL: Explained in the tables below.
4. Explanation of code written: As I have created lots of feature on frontend it will be hard for me the write down everything and I am not sure which one is the major, but one of the requirements from this semester is recommendation. Changes on the [commit](https://github.com/altanborali16/SWE574-Group2/pull/196/commits/f1e863305b2413d9f09daaf2b917bc074bd7a4e7) and related code is under PostList.jsx and PostListForFeed.jsx . For the feed page with the new name explore page, it is getting users subscribed or created communities tags and makes it an array, after that goes through the all communities which are public and finds the matched tag communities, gets the posts, order them by upvote count and date and show them to the user. If there are matching communities but no posts in those communities it runs through other communities and show posts with the same order as I explained. Also for the new user home page will be empty, so it navigates user to the explore page and from the all public communities and shows posts the same ordered logic. Also there is an idea on explore page, to push user to go to community page we are not allow user to comment and reply on explore page, it is not a should to subscribe a public community to create post, comment and reply but to do that user should go to community page and maybe it will let user to subscribe to the community. Also besides posts tag relation also created on communities page. If there are matching communities it will be under recommended communities section. Also it is also stated at [#164](https://github.com/altanborali16/SWE574-Group2/issues/164) why they are implemented on frontend. 
5. Documentation: For the documentations I was responsible to check them so I did not any documentation personally.
6. Screenshots: 
![image](https://github.com/user-attachments/assets/711298b8-69e2-4046-9ad9-3c945d84d080)
![image](https://github.com/user-attachments/assets/595535c7-49ab-4de4-b3c7-2a2abcb226b1)
![image](https://github.com/user-attachments/assets/b1f30a8c-6652-4252-abbe-2f68a10efc49)
7. Challenges: I was working as head of the frontend team, I always need to think about my code that if it is easy for other members to add or change things on what I did. Also Sometimes I did the base functionalities and other group members should add new implementations to the codes, so it should be clean, understandable and easy to improve, so besides myself I need to think others. 
8. Code review:  
Group member name whose code you reviewed:  Mostly Enes, Alişer and Yana.
Code reviewed (pull request, GitHub conversation):  I created the table "Pull Requests Reviewed by me"
Code review nature: (problems, status, how problems were addressed)  : Mostly we did meetings and check the code and functionality together after that everything looks okay I accept the pull requests.
Code review results: Most of the code review went fine and without any problems. For the frontend specific, to not have any merge conflicts we also try to separate issue distribution in that purpose.  Some of the pull requests and code review failed because of me, it's either lack of time or lack of knowledge.

My Pull requests :

| PR NUMBER | PR TITLE  | STATUS  | WORKING STATUS |
|-----------|---------- |---------| -------------- |
| [#200](https://github.com/altanborali16/SWE574-Group2/pull/200)  | selenium ide testing files  | MERGED | Working | 
| [#198](https://github.com/altanborali16/SWE574-Group2/pull/198)  | Feature/aliser 197 implement advanced search fe  | MERGED  | Working | 
| [#196](https://github.com/altanborali16/SWE574-Group2/pull/196)  | recommendations (posts and communities) & file size fix  | MERGED  | Working | 
| [#192](https://github.com/altanborali16/SWE574-Group2/pull/192)  | number fields added on advanced search  | MERGED  | Working | 
| [#188](https://github.com/altanborali16/SWE574-Group2/pull/188)  | signed and unsigned values  | MERGED  | Working | 
| [#185](https://github.com/altanborali16/SWE574-Group2/pull/185)  | private community fix on fe    | MERGED  | Working | 
| [#182](https://github.com/altanborali16/SWE574-Group2/pull/182)  | Feature/altan 178 frontend unfollow  | MERGED  | Working | 
| [#169](https://github.com/altanborali16/SWE574-Group2/pull/169)  | issue 163 and 152  | MERGED | Working | 
| [#150](https://github.com/altanborali16/SWE574-Group2/pull/150)  | Fix/altan lazy frontend authorname   | MERGED  | Working | 
| [#122](https://github.com/altanborali16/SWE574-Group2/pull/122)  | Feature/altan 88 implement landing page base features | MERGED | Working | 

Pull Requests Reviewed by me : 

| PR NUMBER | PR TITLE   | MERGE STATUS  |  WORKING STATUS |
|-----------|------------|---------------| --------------- |
| [#197](https://github.com/altanborali16/SWE574-Group2/pull/197)  | Feature/aliser 197 implement advanced search fe   | MERGED | Working | 
| [#195](https://github.com/altanborali16/SWE574-Group2/pull/195)  | Css improvement on post,community and search pages | MERGED | Working | 
| [#193](https://github.com/altanborali16/SWE574-Group2/pull/193)  | Removing Members from Community and Assign users as admin Functionalities Have Been Implemented | MERGED | Working | 
| [#181](https://github.com/altanborali16/SWE574-Group2/pull/181) | upload/show image improvement, createCommunity, communityPage,  | MERGED | Working | 
| [179#](https://github.com/altanborali16/SWE574-Group2/pull/179)  |  fix: add communityId as a getter of Post entity to return as part of | MERGED | Not Working | 
| [#177](https://github.com/altanborali16/SWE574-Group2/pull/177)  | Protecting private communities functionality has been implemented  | MERGED | Working |
| [#174](https://github.com/altanborali16/SWE574-Group2/pull/174) | Feature/yana 165 add remove members to community  | MERGED | Working |
| [#172](https://github.com/altanborali16/SWE574-Group2/pull/172)  | fix the issue with recommended posts regarding missing communityId  | MERGED | Not Working |
| [#159](https://github.com/altanborali16/SWE574-Group2/pull/159)  | add signed vs unsigned number checks and add text validations to the | MERGED | Working |
| [#157](https://github.com/altanborali16/SWE574-Group2/pull/157)  | Feature/yana 155 recommendations update  | MERGED | Not Working |

 Issues: 

| ISSUE NUMBER | ISSUE TITLE  | STATUS  |
|--------------|--------------|---------|
| [#199](https://github.com/altanborali16/SWE574-Group2/issues/199) | Create FE Testing on Selenium | CREATED & ASSIGNED  |
| [#190](https://github.com/altanborali16/SWE574-Group2/issues/190) | Add & Remove members from communiy| CREATED |
| [#189](https://github.com/altanborali16/SWE574-Group2/issues/189) | Implement number field to advanced search| CREATED & ASSIGNED  |
| [#187](https://github.com/altanborali16/SWE574-Group2/issues/187) | Implement NUMBER validation on frontend| CREATED & ASSIGNED |
| [#183](https://github.com/altanborali16/SWE574-Group2/issues/183) | Update frontend private community| CREATED & ASSIGNED|
| [#180](https://github.com/altanborali16/SWE574-Group2/issues/180) | Change Upvote Logic on Frontend| CREATED & ASSIGNED|
| [#178](https://github.com/altanborali16/SWE574-Group2/issues/178) | Update frontend for unfollow| CREATED & ASSIGNED|
| [#166](https://github.com/altanborali16/SWE574-Group2/issues/166) | Protect private communities for non subscribers| CREATED |
| [#165](https://github.com/altanborali16/SWE574-Group2/issues/165) | Add & Remove members to community| CREATED|
| [#164](https://github.com/altanborali16/SWE574-Group2/issues/164) | Implement Recommendations to frontend| CREATED & ASSIGNED|
| [#163](https://github.com/altanborali16/SWE574-Group2/issues/163) | Find solution for geolocation on frontend| CREATED & ASSIGNED|
| [#162](https://github.com/altanborali16/SWE574-Group2/issues/162) | Check frontend for app sizes and note them| CREATED|
| [#161](https://github.com/altanborali16/SWE574-Group2/issues/161) | View Communities with uploaded iamge| CREATED|
| [#160](https://github.com/altanborali16/SWE574-Group2/issues/160) | Create Community with Image| CREATED|
| [#156](https://github.com/altanborali16/SWE574-Group2/issues/156) | Populate badges and give info to user how to earn a new one| CREATED|
| [#154](https://github.com/altanborali16/SWE574-Group2/issues/154) |[BUG] Unfollow Community| CREATED|
| [#153](https://github.com/altanborali16/SWE574-Group2/issues/153) | [BUG] Community Create api isPrivate field is not working| CREATED|
| [#152](https://github.com/altanborali16/SWE574-Group2/issues/152) | [BUG] Create Post without selecting a Template| CREATED & ASSIGNED|
| [#151](https://github.com/altanborali16/SWE574-Group2/issues/151) | [BUG] Reply and comment difference on response| CREATED|
| [#146](https://github.com/altanborali16/SWE574-Group2/issues/146) | [BUG] Reselecting "Select a template"| CREATED & ASSIGNED|
| [#145](https://github.com/altanborali16/SWE574-Group2/issues/145) | Loading Screen implementation| CREATED & ASSIGNED|
| [#144](https://github.com/altanborali16/SWE574-Group2/issues/144) | [BUG] Community can created without tags| CREATED & ASSIGNED|
| [#127](https://github.com/altanborali16/SWE574-Group2/issues/124) | [BUG]: Unable to create community with long descriptions| ASSIGNED|
| [#100](https://github.com/altanborali16/SWE574-Group2/issues/100) | Implement create new post (subtask #56)| ASSIGNED|
| [#99](https://github.com/altanborali16/SWE574-Group2/issues/99) | Implement create template form (subtask #56)| CREATED & ASSIGNED|
| [#96](https://github.com/altanborali16/SWE574-Group2/issues/96) | Implement community page (subtask #56)| CREATED & ASSIGNED|
| [#95](https://github.com/altanborali16/SWE574-Group2/issues/95) | Implement cookies and local storage utilisation| CREATED & ASSIGNED|
| [#94](https://github.com/altanborali16/SWE574-Group2/issues/94) | Implement create new community action (subtask #56)| ASSIGNED|
| [#93](https://github.com/altanborali16/SWE574-Group2/issues/93) | Implement (list) communities page (subtask #56)| CREATED & ASSIGNED|
| [#92](https://github.com/altanborali16/SWE574-Group2/issues/92) | Implement "my communities" page (Subtask #56)| ASSIGNED|
| [#91](https://github.com/altanborali16/SWE574-Group2/issues/91) | Implement user profile page (subtask #56)| ASSIGNED|
| [#88](https://github.com/altanborali16/SWE574-Group2/issues/88) | Implement landing page base frontend features| ASSIGNED|
| [#56](https://github.com/altanborali16/SWE574-Group2/issues/56) | Finish previous term's must features (Frontend)| ASSIGNED|


### Individual Contribution: İsmail Enes Akkal

1. Summary of work performed: (in terms of requirements, design, management, just list the above requirements): 

I was responsible for creating the mockups and revising them if necessary. I took a role in the documentation of the Wiki as far as the UI designs and Team Composition pages are concerned. Moreover, I was responsible for frontend development of the project along with Altan and Alişer.

* UI Designs [You can see the UI designs here.](https://github.com/altanborali16/SWE574-Group2/wiki/Designs,-diagrams,-and-use-case-scenarios#ui-mockup-designs)

* Team Composition Page [You can see the Team Composition Page here.](https://github.com/altanborali16/SWE574-Group2/wiki/Team-Composition)


2. Requirement(s) worked on and brief description: 

| Requirement Number | Status | Brief Description |
|--------------------|--------| ----------------- |
| [II.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ii-front-and-home-page-of-the-system) | completed | worked on front-end |
| [II.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ii-front-and-home-page-of-the-system) | completed | pair coding with Altan |
| [III.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iii-registration-in-the-system) | completed | pair coding with Altan (most of the parts done by me) |
| [IV.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iv-authentication-logging-in) | completed |  pair coding with Altan |
| [IV.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iv-authentication-logging-in) | not completed | feature was implemented on frontend but it was not a priority requirement |
| [V.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed | pair coding with Altan |
| [V.5.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed | worked on front-end |
| [VI.C.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed | Altan worked on basics and then the feature implementation was handed over to me |
| [VI.C.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed | Altan worked on basics and then the feature implementation was handed over to me |
| [VI.C.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed | Altan worked on basics and then the feature implementation was handed over to me |
| [VI.C.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed | Altan worked on basics and then the feature implementation was handed over to me |
| [VII.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vii-community-administration) | completed  | worked on front-end |
| [VII.C.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  | worked on front-end with Altan |
| [VII.C.5.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  | worked on front-end with Altan |
| [VII.C.6.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  | worked on front-end with Altan |
| [VII.F.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viif-moderation-within-communities) | completed | worked on front-end |
| [VII.F.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viif-moderation-within-communities) | completed | worked on front-end |
| [VII.F.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viif-moderation-within-communities) | completed | worked on front-end |
| [VIII.C.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiic-interaction-within-communities) | completed | worked on front-end |
| [VIII.C.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiic-interaction-within-communities) | completed | worked on front-end |
| [VIII.C.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiic-interaction-within-communities) | completed | worked on front-end |

3. Related issue/pull request/documentation URL: Explained in the tables below and above.

4. Explanation of code written: (with relevant URLs)

| ISSUE | URL (COMMIT NUMBER) | CODE EXPLANATION |
|--------------------|--------| ----------------- |
| [#91](https://github.com/altanborali16/SWE574-Group2/issues/91) | [3836f8f](https://github.com/altanborali16/SWE574-Group2/commit/3836f8f990c8aa6a0c455174e9a061f817db7733) | This feature allows users to update their profile information, including bio and avatar URL, through a modal form. When the "Edit Profile" button is clicked, the handleEdit function sets the showModal state to true, displaying the modal with editable fields. Users can modify their bio and avatar URL, and upon clicking "Save Changes", the handleSaveChanges function sends a PUT request to the server with the updated profile data. If the update is successful, the user state is updated with the new information, and React automatically re-renders the UI to reflect the changes without requiring a page refresh |
| [#129](https://github.com/altanborali16/SWE574-Group2/issues/129) | [97c709b](https://github.com/altanborali16/SWE574-Group2/commit/97c709b58e67ab60961e2e34042b02cf9fabe694) | This feature implements a modal to display the list of subscribers (members) in a community.The handleShowSubscribers function is triggered when the subscriber count link is clicked. This function first calls fetchSubscribers to retrieve the list of members from the server using an HTTP GET request. The response data, which includes subscriber details such as usernames, is then stored in the subscribers state variable.|
| [#138](https://github.com/altanborali16/SWE574-Group2/issues/138) | [3b90c89](https://github.com/altanborali16/SWE574-Group2/commit/3b90c897739700f9d3bba03eb55fbe9f52639deb) | This feature focuses on enabling users to upvote posts and dynamically updating the vote counts.Each post is stored in the localPosts state, which includes properties such as upvotes and voters. These properties track the number of votes and the users who have already voted. When a user clicks the upvote button, the handleUpvote function is triggered.The function first validates whether the post ID is valid and checks if the user has already voted by examining the voters list. If the user has previously voted, an alert is displayed, and the process is stopped to prevent duplicate voting.If the user is eligible to vote, an API request is sent to update the vote count on the server. Once the request is successful, the local state is updated by incrementing the upvotes counter and adding the user’s ID to the voters list.|
| [#151](https://github.com/altanborali16/SWE574-Group2/issues/151) [#128](https://github.com/altanborali16/SWE574-Group2/issues/128) | [4acd5c0](https://github.com/altanborali16/SWE574-Group2/commit/4acd5c06598911841dfe9dd79d1ce323905e174b) [ba6bd01](https://github.com/altanborali16/SWE574-Group2/commit/ba6bd01cf82ce386646b70bd9b540ec1e3ccf0ba) | This feature focuses on enabling users to add comments and replies to comments. Each post can have multiple comments, and each comment can include nested replies. The implementation uses state variables, such as comments and newComment, to manage the list of comments and track input values. When a user submits a comment, the handleAddComment function is triggered, which sends a POST request to the server with the comment content, timestamp, author details, and post ID. Once the server responds with the new comment data, the comments state is updated locally to display the comment immediately without requiring a page refresh. For replies, a similar approach is used. The handleAddReply function handles reply submissions, sending a POST request to the server with the reply content and its associated comment ID. Replies are managed as nested structures within the comments state. Once a reply is added, the interface updates dynamically to show the new reply under the associated comment.|
| [#156](https://github.com/altanborali16/SWE574-Group2/issues/156) | [1cd80bd](https://github.com/altanborali16/SWE574-Group2/commit/1cd80bd8da9f786658c1acbab3b9f2607b3da38a#diff-a7c89311ed1166b157ad592f10f319b3c203a31befd9dc6d12f80c1eaa30d77b) [e6d7099](https://github.com/altanborali16/SWE574-Group2/commit/e6d7099e9f201e7b9b7326fbb2b191bdddeaf2b8)  | This feature was about earning a badge and give information to users on how to earn them. We have our badges defined as objects within array with properties such as; title,image,counter and so on. Both CommunityPage.jsx and ProfilePage.jsx pages have the endpoint for fetching comment and post counts. As our badges were counter based (e.g. To achieve X badge, you need to post 5 comments) there are variables to keep the count of comments and posts which are initialized to 0 at the beginning. Then the counter gets incrimented one by one as the user create posts or comments. Altan implemented the Endpoints for counters then I took over the feature implementation. |
| [#166](https://github.com/altanborali16/SWE574-Group2/issues/166) | [6d16c51](https://github.com/altanborali16/SWE574-Group2/commit/6d16c510496c4470803d6b87e2e1488ab0ab0bd0) | This feature focuses on restricting access to posts in private communities by applying a blur effect for non-members. The implementation dynamically checks user membership and applies conditional rendering based on the user's access status. The PostsView component receives a prop called isPrivate, which specifies whether the community is private. It also maintains a state variable called isMember to track whether the user is a member of the community. Membership status is verified using an API call to fetch the list of subscribers, and the user's ID is checked against this list. If the community is private and the user is not a member, the posts are rendered with a blurred view using CSS. A specific CSS class, post--blurred, applies a blur filter and disables interactions, ensuring that non-members cannot view or interact with the content.  |
| [#190](https://github.com/altanborali16/SWE574-Group2/issues/190) | [bcb3555](https://github.com/altanborali16/SWE574-Group2/commit/bcb35551f5790e9a7d709473273ba3c1275d1636#diff-a7c89311ed1166b157ad592f10f319b3c203a31befd9dc6d12f80c1eaa30d77bL1-R591) | This feature focuses on allowing community owners to remove members from their community through a Kick Member option. The functionality is designed with role-based access control, ensuring that only users with the CREATOR role can access and execute this action. The owner status is determined during the fetchCommunity function, where the system checks the user's role and sets the isUserOwner state accordingly. The list of community members is displayed in a modal, showing each member's username along with their role. For members who are not creators, a Kick Member button is provided next to their name. This button is conditionally rendered based on the user's ownership status, ensuring only authorized users see it. When the Kick Member button is clicked, it triggers the handleKickMember function. This function sends an HTTP DELETE request to the server, specifying the community ID and the user ID of the member to be removed. |

5. Documentation: I took a role in creating the "team composition" area in the wiki. Moreover, I also created the UI mockup designs sub-section under "Designs, diagrams, and use case scenarios" area. 

**Team Composition and Responsibilities**
This section provides an overview of the team composition and the distribution of responsibilities within Group 2. It outlines the roles assigned to each team member, highlighting their primary areas of contribution and involvement in the project.
A responsibilities matrix was included to visually represent the allocation of tasks. It categorizes key responsibilities, including architecture design, development, testing, deployment, and documentation, and assigns them to individual team members. The table also identifies optional contributors who can provide additional support if needed.

**UI Mockup Designs**
The UI Mockup Designs section presents visual representations of key user interfaces, providing a clear view of the design and functionality of the application. These mockups are intended to guide the development process by illustrating the layout, navigation of the platform.
 
6. Screenshots: (demonstrating the most complex functionality you personally implemented)

* **Comments and reply (comments to comments)**

<img width="740" alt="image" src="https://github.com/user-attachments/assets/0e07a8cb-a1a4-4e73-ac85-61f64f6645cd" />

* **Community and User Specific Badges**
<img width="938" alt="image" src="https://github.com/user-attachments/assets/824fd300-16ad-43c3-81e6-62c7e63ad130" />


7. Challenges: (in detail, explain the challenges you had when coding)

As far as the frontend development is concerned, I have faced some problems during the development phase. I will be talking about it briefly.

* The first challenge was related to CSS class naming conventions. At the beginning of the project, we did not establish any rules regarding CSS class names. It didn’t seem like an important point at the time. However, as we progressed through the development phase, we encountered multiple CSS classes with the same names but different attributes. For example, if we had two modals on two different pages with the same class name, their attributes would conflict with each other. This ultimately required me to rename the classes to ensure proper CSS attributes for each page.

* The second challenge was related to React's state management. Initially, I had a very limited understanding of how to use it effectively. For example, while working on the comment feature for our project, I had to refresh the page manually to see the comments I created under posts. This happened because I made some logical errors in the code and did not utilize React's state management properly. It took me a while to fully understand React's state management and implement it correctly.

* The last challenge that I have faced was the usage of props in React. Similar with React's state management, I had a very limited understanding of how to use the props and I had some difficulties implementing features when I had to use props for pass a data from parent to child object.For example, when I was implementing a feature called "Protecting Private Communities" I had to hide the posts from users who is not subscribed to that private community so I had to do configure PostsView component to conditionally rendered.However, this affected our feed page as well because we were also using the same component in our feed page (where users can see multiple posts from different communities). Therefore, I had to use another prop called isPrivate to apply the correct logic.

8. Code review: 

I have not reviewed any code in this project.

9. Pull requests (URLs to pull requests you created): The reason why I have a limited number of PR is that as we were the only team that start the project from the scratch, we decided to not use branches to speed up the development process of the project and the functionalities that we were working on different areas so there was very low possibility of conflict. After the second milestone, we decided to use the branches as we catched up with the other teams. 

| PR NUMBER | PR TITLE | STATUS |
|-----------| ---------|--------|
| [#195](https://github.com/altanborali16/SWE574-Group2/pull/195)  | CSS improvement on post, community, and search pages | MERGED |
| [#193](https://github.com/altanborali16/SWE574-Group2/pull/193)  | Removing Members from Community and Assign users as admin Functionalities Implemented | MERGED |
| [#177](https://github.com/altanborali16/SWE574-Group2/pull/177)  | Protecting private communities functionality implemented | MERGED |
| [#173](https://github.com/altanborali16/SWE574-Group2/pull/173)  | Badge Information has been added | MERGED |
| [#167](https://github.com/altanborali16/SWE574-Group2/pull/167)  | Bug on comment and reply has been fixed | MERGED |
10. Issues (URLs and titles of major issues you created or assigned to you, in tabular form): The team leaders (Efe and Altan) were responsible for creating and assigning tasks. They created the majority of the issues and allocated them to team members. Presented below is a summary of the issues that I created and those assigned to me.

| ISSUE NUMBER | ISSUE TITLE | STATUS |
|--------------|-------------|--------|
| [#9](https://github.com/altanborali16/SWE574-Group2/issues/9)     | Create Mockups  | ASSIGNED  |
| [#15](https://github.com/altanborali16/SWE574-Group2/issues/15)   | Badge Design | ASSIGNED  |
| [#16](https://github.com/altanborali16/SWE574-Group2/issues/16)   | Recommendation system: frontend design | ASSIGNED |
| [#20](https://github.com/altanborali16/SWE574-Group2/issues/20)   | Create login page on front end  | ASSIGNED |
| [#24](https://github.com/altanborali16/SWE574-Group2/issues/24)   | Create signup page on front end  | ASSIGNED  |
| [#60](https://github.com/altanborali16/SWE574-Group2/issues/60)   | Badge mechanism UI/UX design | ASSIGNED  |
| [#62](https://github.com/altanborali16/SWE574-Group2/issues/62)   | Scenarios and mockups, creation and organisation of existing ones | ASSIGNED  |
| [#91](https://github.com/altanborali16/SWE574-Group2/issues/91)   | Implement user profile page  | ASSIGNED  |
| [#119](https://github.com/altanborali16/SWE574-Group2/issues/119) | Add mockups for: like, commenting, numerically filtered advanced search, comments, comments on comments | ASSIGNED  |
| [#125](https://github.com/altanborali16/SWE574-Group2/issues/125) | Modify Advanced Search Mockup | ASSIGNED  |
| [#127](https://github.com/altanborali16/SWE574-Group2/issues/127) | Unable to create community with long descriptions | CREATED  |
| [#128](https://github.com/altanborali16/SWE574-Group2/issues/128) | Implement discussion under posts (aka comments to comments) | ASSIGNED  |
| [#129](https://github.com/altanborali16/SWE574-Group2/issues/129) | Create a modal to show members list  | ASSIGNED  |
| [#138](https://github.com/altanborali16/SWE574-Group2/issues/138) | Upvotes Frontend | ASSIGNED  |
| [#151](https://github.com/altanborali16/SWE574-Group2/issues/151) | [BUG] Reply and comment difference on response| ASSIGNED|
| [#156](https://github.com/altanborali16/SWE574-Group2/issues/156) | Populate badges and give info to user how to earn a new one  | ASSIGNED  |
| [#166](https://github.com/altanborali16/SWE574-Group2/issues/166) | Protect private communities for non-subscribers | ASSIGNED  |
| [#190](https://github.com/altanborali16/SWE574-Group2/issues/190) | Add & Remove members from community | ASSIGNED  |
| [#194](https://github.com/altanborali16/SWE574-Group2/issues/194) | CSS Improvement on Community and Posts Pages | CREATED & ASSIGNED |

### Individual Contribution: Ali Ser, Gok 3

1. Summary of work performed: I was responsible for creating use-case scenarios, activity diagrams, and event flow diagrams. I was in charge of the frontend side of the project.
1. Requirement(s) worked on and brief description: 

| Requirement Number | Status   | Brief Description                |
|--------------------|----------|----------------------------------|
| [IX.B.A.1](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ixb-searching-and-filtering-content) | completed | worked on front-end             |
| [IX.B.A.3](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#a-basic-search) | completed | worked on front-end             |
| [IX.B.B.1](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#b-advanced-search-in-communities) | completed | worked on front-end             |
| [IX.B.B.2](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#b-advanced-search-in-communities) | completed | worked on front-end             |
| [IX.B.B.3](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#b-advanced-search-in-communities) | completed | worked on front-end             |
| [IX.B.B.4](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#b-advanced-search-in-communities) | completed | worked on front-end             |






1. Related issue/pull request/documentation URL: Explained in the tables below and above.
1. Explanation of code written: 

| ISSUE | URL (COMMIT NUMBER) | CODE EXPLANATION |
|--------------------|--------| ----------------- |
| [#124](https://github.com/altanborali16/SWE574-Group2/issues/124) | [1319019](https://github.com/altanborali16/SWE574-Group2/commit/131901996f82250ee9616e307283bc33d1936bb3) | Basic search: Basic Search searches through all posts and user names in a community. It searches in post titles, field names, and within string fields, if present, in these fields.  |
| [#124](https://github.com/altanborali16/SWE574-Group2/issues/124) | [1319019](https://github.com/altanborali16/SWE574-Group2/commit/131901996f82250ee9616e307283bc33d1936bb3) | Post Fields Search: Search in post fields allows for searching individually through the default values that are assigned when each post is created. It enables searches based on the post's share date, share time, the username of the user who shared the post, the post title, and the post template. For fields such as time and date, there is an option to enter interval values. If only the template is selected and no filters are applied to the template field, it will filter posts written with that template (based solely on the template field). In addition, the inclusion of logical operators such as AND, OR, and NOT in the results shows how to integrate them into basic search, and it works successfully.  |
| [#124](https://github.com/altanborali16/SWE574-Group2/issues/124) | [1319019](https://github.com/altanborali16/SWE574-Group2/commit/131901996f82250ee9616e307283bc33d1936bb3) | Template Fields Search: Template search fields are highly dynamic. It displays the fields of the selected template and allows searching based on the value types of these fields (string, number, posNumber). For numerical fields, interval values can be entered, while for posNumber fields, only positive numbers can be entered.  |
| [#124](https://github.com/altanborali16/SWE574-Group2/issues/124) | [749f1ef](https://github.com/altanborali16/SWE574-Group2/commit/749f1efbb7c95a7af20f9bd0aeab65759824b9fb) | Comment Search: The comment search function allows searching within the comments made on posts and the replies to those comments. It combines the results found with the basic search results. In other words, the comment search function only works if the user clicks on the comment search option while performing a basic search. |
| [#124](https://github.com/altanborali16/SWE574-Group2/issues/124) | [749f1ef](https://github.com/altanborali16/SWE574-Group2/commit/749f1efbb7c95a7af20f9bd0aeab65759824b9fb) | User Search: The user search function operates separately from the basic search and searches through all members within a community. |
| [#124](https://github.com/altanborali16/SWE574-Group2/issues/124) | [ac9a344](https://github.com/altanborali16/SWE574-Group2/commit/ac9a344982ebd12948a5c016809a40b687d0d8d7) | Search Engine: The search engine function is where the results from all search functions are combined, taking operators into account. For example, if the NOT operator is used, it will exclude the posts found through post search from the posts found through basic search. Alternatively, it will filter the posts found through post search using the results from template search. |
| [#124](https://github.com/altanborali16/SWE574-Group2/issues/124) | [e006164](https://github.com/altanborali16/SWE574-Group2/commit/e00616414fc2b2226705197d87631f7d571a2aca) | Show Result Page: It is a page that lists the results. It displays the post results and the results from the user search separately.  |
| [#161](https://github.com/altanborali16/SWE574-Group2/issues/161) | [c76d4f3](https://github.com/altanborali16/SWE574-Group2/commit/c76d4f3a78656e40262b05ecec569dbfa6928a19) | upload/show image on createCommunity, communityPage, communityListOld: It is coded to allow image uploading when creating a community, and the uploaded community profile image is displayed on other pages as well. |

1. Documentation:

**Use-case scenarios and activity diagrams** [View the diagrams](https://github.com/altanborali16/SWE574-Group2/wiki/Designs,-diagrams,-and-use-case-scenarios#use-case-scenarios-and-activity-diagrams)

We worked with Yana on creating use-case scenarios and activity diagrams. The use-case scenarios document the user's role interacting with the system, the interaction they aim to perform, the preconditions for this interaction, the user's actions, the system's responses to these actions, and the acceptance criteria indicating that the user has achieved their goal. Additionally, the activity diagrams visually and sequentially present this interaction between the user and the system, transforming it into a very simple and easy-to-understand format.

**Event Flow Diagrams** [View the diagrams](https://github.com/altanborali16/SWE574-Group2/wiki/Designs,-diagrams,-and-use-case-scenarios#event-flow-diagrams)

Event flow diagrams are diagrams that show the relationships between events and the responses resulting from these relationships. These diagrams help developers understand the system by visually representing the sequence of events, the relationships between events, the transition and direction between events, and the conditions required for these events to occur.
1. Screenshots: 

Basic Search:

<img src="https://github.com/user-attachments/assets/5fbd179c-7f1d-4b61-9dfa-de3d10da43f9" width="800" height="300">

Post Search:

<img src="https://github.com/user-attachments/assets/f8a3e29d-ff10-426d-9b9a-4f7ad51697cb" width="700" height="300">

Template Search:

<img src="https://github.com/user-attachments/assets/7473d5b7-235e-4a9c-b345-85fbebae7aac" width="700" height="300">

Search Page:

<img src="https://github.com/user-attachments/assets/7d9fcd24-37a2-4d81-ab1d-dfec28d694b4" width="800" height="300">

1. Challenges: I focused on making the code as dynamic and modular as possible. I turned it into separate modules as much as I could, and while integrating them, many issues arose. For example, the useEffect inside the searchEngine was used as a hook on the community page (useSearchEngine), and this hook should have contained other methods as well. As a result, I encountered errors multiple times and had to change my approach many times while combining the search fields in Advanced Search. Another challenge could be my lack of knowledge in CSS. When creating a component, I had to experiment several times.

1. Code review:  Group member name whose code you reviewed: Mostly altan and Enes
Code review nature: I usually reviewed the code written by my teammates while adding another feature myself, and if I had any suggestions for changes, I would first share them with my teammates. Most of the time, I tested the application through different cases, and if I encountered an error, I would share it with my teammates, and we would discuss the appropriate solution 
Code review results: The solutions to the problems went smoothly. When a bug was found, it was either resolved at that moment, or an issue was created to address the bug and assigned to someone.

1. Pull requests: 

| PR NUMBER | PR TITLE | STATUS |
|-----------| ---------|--------|
| [#181](https://github.com/altanborali16/SWE574-Group2/pull/181)  | upload/show image improvement, createCommunity, communityPage, communityListOld | MERGED |
1. Issues: URLs and titles of major issues you created or assigned to you, in tabular form

| ISSUE NUMBER | ISSUE TITLE | STATUS           |
|--------------|-------------|------------------|
| [#9](https://github.com/altanborali16/SWE574-Group2/issues/9)     | Create Mockups  | ASSIGNED  |
| [#10](https://github.com/altanborali16/SWE574-Group2/issues/10)   | Recommendation mechanism: backend design | ASSIGNED  |
| [#12](https://github.com/altanborali16/SWE574-Group2/issues/12)   | Badge system: backend design | ASSIGNED |
| [#15](https://github.com/altanborali16/SWE574-Group2/issues/15)   | Badge system: frontend design  | ASSIGNED |
| [#16](https://github.com/altanborali16/SWE574-Group2/issues/16)   | Recommendation system: frontend design  | ASSIGNED  |
| [#25](https://github.com/altanborali16/SWE574-Group2/issues/25)   | Create use case scenarios and diagrams   | ASSIGNED  |
| [#47](https://github.com/altanborali16/SWE574-Group2/issues/47)   | Describe individual contribution | ASSIGNED  |
| [#59](https://github.com/altanborali16/SWE574-Group2/issues/59)   | Assist in frontend development  | ASSIGNED  |
| [#62](https://github.com/altanborali16/SWE574-Group2/issues/62)   | Scenarios and mockups, creation and organisation of existing ones | ASSIGNED  |
| [#63](https://github.com/altanborali16/SWE574-Group2/issues/63)   | Event flows and user actions diagrams for badge and recommendation mechanisms | ASSIGNED  |
| [#64](https://github.com/altanborali16/SWE574-Group2/issues/64)   | Update existing diagrams | ASSIGNED  |
| [#65](https://github.com/altanborali16/SWE574-Group2/issues/65)   | Repository maintance | ASSIGNED |
| [#76](https://github.com/altanborali16/SWE574-Group2/issues/76)   | Write a new milestone 1 report and present to customer  | ASSIGNED |
| [#104](https://github.com/altanborali16/SWE574-Group2/issues/104)   | Discussion  | ASSIGNED  |
| [#105](https://github.com/altanborali16/SWE574-Group2/issues/105)   | Discussion | ASSIGNED  |
| [#111](https://github.com/altanborali16/SWE574-Group2/issues/111)   | [BUG]: posts are listed in the feed/home but not listed under community | ASSIGNED  |
| [#113](https://github.com/altanborali16/SWE574-Group2/issues/113)   | [BUG]: create template button goes out of screen and disappears as we add more fields  | ASSIGNED  |
| [#118](https://github.com/altanborali16/SWE574-Group2/issues/118)   | Add action flows for: like, commenting, numerically filtered advanced search, comments, comments on comments | ASSIGNED  |
| [#124](https://github.com/altanborali16/SWE574-Group2/issues/124)   | Implement advanced search | ASSIGNED  |
| [#135](https://github.com/altanborali16/SWE574-Group2/issues/135)   | Functional tests of the advanced search | ASSIGNED  |
| [#160](https://github.com/altanborali16/SWE574-Group2/issues/160)   | Create Community with Image | ASSIGNED  |
| [#161](https://github.com/altanborali16/SWE574-Group2/issues/161)   | View Communities with uploaded iamge | ASSIGNED  |
| [#189](https://github.com/altanborali16/SWE574-Group2/issues/189)   | Implement number field to advanced search | ASSIGNED  |
| [#197](https://github.com/altanborali16/SWE574-Group2/issues/197)   | [BUG] There is a problem with the display of user search  | CREATED & ASSIGNED  |



### Individual Contribution: Feridun Berk Akyol.

### DevOps and Deployment of the Software Product

I was responsible for the deployments and related tasks such as dockerization (creating Dockerfiles for the backend and frontend, creating a Docker Compose file for dockerizing the application), preparing the deployment environment, preparing the virtual machine (VM), and initializing the necessary containers on the virtual machine to ensure our application was deployed as smoothly as possible. My platform of choice for deployment was **Amazon Web Services (AWS)**. I used EC2 instances and created security groups for secure connections.

### Related Issues

- [Issue #37](https://github.com/altanborali16/SWE574-Group2/issues/37)
- [Issue #38](https://github.com/altanborali16/SWE574-Group2/issues/38)
- [Issue #39](https://github.com/altanborali16/SWE574-Group2/issues/39)
- [Issue #43](https://github.com/altanborali16/SWE574-Group2/issues/43)
- [Issue #44](https://github.com/altanborali16/SWE574-Group2/issues/44)
- [Issue #54](https://github.com/altanborali16/SWE574-Group2/issues/54)

### Related Commits

- [Commit ae20d1f](https://github.com/altanborali16/SWE574-Group2/commit/ae20d1f386c1c07e9c8726115c42219c23af59dd)
- [Commit 2ba5cca](https://github.com/altanborali16/SWE574-Group2/commit/2ba5cca504b8c7292e7f93724d94bf7f0b4d3b32)

---
![image](https://github.com/user-attachments/assets/dd987075-8f81-4dd4-a78c-491f9746565c)

### Backend Features Implementation

### Comments Feature

I worked on secondary post features (e.g., comments and voting mechanisms). I created the **Comment** class and implemented the logic for creating comments under posts. Additionally, I implemented the ability to reply to comments in a nested structure.

This implementation presented technical challenges, such as resolving self-referencing problems in Spring Boot. I managed to solve these issues and successfully implemented the commenting feature. The commenting system in our application works as intended.
![image](https://github.com/user-attachments/assets/cf7a2986-bae1-4e2b-a16c-f0bd03dc5955)

### Voting Mechanism

I also created a voting mechanism for posts and implemented the necessary endpoints in the backend for handling user badges. In addition, I contributed to bug-fixing processes in the backend, which can be seen in the GitHub issues.

_I find it unnecessary to cite dozens of minor issues and bug fixes here since many were simple fixes or optimizations._

### Related Issues

- [Issue #117](https://github.com/altanborali16/SWE574-Group2/issues/117)

### Related Commits

- [Commit e179d7c2](https://github.com/altanborali16/SWE574-Group2/commit/e179d7c21bdd0e7eb173668d9cd504c62a05afc8)
- [Commit 33b418a2](https://github.com/altanborali16/SWE574-Group2/commit/33b418a2ce6f1ef50ca6de4875bf0dbe2b00fb7a)
- [Commit a6af048b](https://github.com/altanborali16/SWE574-Group2/commit/a6af048b595eee8f90471337f73f4db8bb061799)

---

### Challenges Met During Implementation

### Circular Reference Problem in the `Comment` Class

While implementing the comment functionality, one requirement was that users should be able to comment on posts and also reply to existing comments. For this, I designed the `Comment` class so that every comment object could optionally have a **parent comment** attribute.

However, this led to circular reference issues due to how Spring Boot handles self-referencing attributes. The solution was to override the `equals` method in the `Comment` class. Instead of comparing the entire object graph, the method now only uses the `id` field to determine equality. Since each comment has a unique ID, this solved the problem without altering the structure or attributes of the class.

---

### Code Implementations

### Comment Class

I created the `Comment` class to represent comments in the system. This class uses JPA annotations for database mapping (PostgreSQL in our case) and JSON annotations for serialization/deserialization.

- Examples of annotations:
  - `@Entity` marks the class as a JPA entity.
  - Lombok annotations like `@NoArgsConstructor` and `@AllArgsConstructor` automate the creation of constructors, getters, and setters.

**Related Code**: [Comment.java](https://github.com/altanborali16/SWE574-Group2/blob/main/devcomReborn/src/main/java/swe574/backend/devcomReborn/Comment/Comment.java)

### Comment Service Class

This class contains the logic for operations such as creating, replying to, and deleting comments. Since these operations involve other entities like `Post` and `User`, dependency injection is used to interact with the respective repositories.

**Related Code**: [CommentService.java](https://github.com/altanborali16/SWE574-Group2/blob/main/devcomReborn/src/main/java/swe574/backend/devcomReborn/Comment/CommentService.java)

### Comment Controller

The controller defines endpoints for comment-related actions, enabling the frontend team to interact with the backend. These endpoints also assist in testing JSON responses to ensure proper payload structure.

**Related Code**: [CommentController.java](https://github.com/altanborali16/SWE574-Group2/blob/main/devcomReborn/src/main/java/swe574/backend/devcomReborn/Comment/CommentController.java)

### Comment Repository

This repository provides JPA-based methods for querying the database. It extends the `JpaRepository` interface, allowing predefined queries as well as custom queries.

**Related Code**: [CommentRepository.java](https://github.com/altanborali16/SWE574-Group2/blob/main/devcomReborn/src/main/java/swe574/backend/devcomReborn/Comment/CommentRepository.java)

### Voting in the Post Class

The post class was initially implemented by another team member. I added attributes such as a **vote counter** and **voters list** to track who voted on a post. I also implemented logic for upvoting and downvoting posts in the `PostService` class.

The **toggle vote** function allows users to remove their votes. For example, if a user upvotes a post and votes again, their vote is toggled back to neutral. Although this feature was not implemented in the frontend, it remains available in the backend.

**Related Code**:
- [PostService.java](https://github.com/altanborali16/SWE574-Group2/blob/main/devcomReborn/src/main/java/swe574/backend/devcomReborn/post/PostService.java)
- [Post.java](https://github.com/altanborali16/SWE574-Group2/blob/main/devcomReborn/src/main/java/swe574/backend/devcomReborn/post/Post.java)

---

### Counters for Badge System

I added counters to various classes, such as:
- **User post count**
- **Community post count**
- **Post count under a community**

These counters are used by the badge system to check if users or communities have met thresholds to earn badges.

---

### Dockerization

I wrote **Dockerfiles** for both the backend and frontend. These files define the necessary dependencies and configurations for building Docker images of our application.

A **Docker Compose** file was also created to ensure the backend, frontend, and PostgreSQL database are correctly configured and can work together seamlessly. The Compose file also defines the network configurations, such as port mappings.

**Related Code**: [docker-compose.yaml](https://github.com/altanborali16/SWE574-Group2/blob/main/devcomReborn/docker-compose.yaml)

---

### Issues and Assignments

The creation and assignment of tasks were handled by the team leaders. They created most of the issues and distributed them among team members. The issues I created were related to bugs I encountered during development. Below is a summary of issues I created and was assigned to.

| ISSUE                                                | URL                                                                                  |
|------------------------------------------------------|--------------------------------------------------------------------------------------|
| [BUG] Unfollow Community                             | [Link](https://github.com/altanborali16/SWE574-Group2/issues/154)                    |
| [BUG] Community Create api isPrivate field not working | [Link](https://github.com/altanborali16/SWE574-Group2/issues/153)                    |
| [BUG] Reply and comment difference on response       | [Link](https://github.com/altanborali16/SWE574-Group2/issues/151)                    |
| [BUG] Delete post service uses wrong input as parameter | [Link](https://github.com/altanborali16/SWE574-Group2/issues/136)                    |
| Implement badge mechanism                            | [Link](https://github.com/altanborali16/SWE574-Group2/issues/131)                    |
| Implement secondary content features (like count, commenting) | [Link](https://github.com/altanborali16/SWE574-Group2/issues/117)                    |
| Study the backend and report to the team lead        | [Link](https://github.com/altanborali16/SWE574-Group2/issues/115)                    |
| [BUG] User profile is static and needs to be implemented | [Link](https://github.com/altanborali16/SWE574-Group2/issues/112)                    |
| [BUG] Posts are listed in the feed/home but not listed under community | [Link](https://github.com/altanborali16/SWE574-Group2/issues/111)                    |
| Implement advanced search                            | [Link](https://github.com/altanborali16/SWE574-Group2/issues/109), [Link](https://github.com/altanborali16/SWE574-Group2/issues/108) |
| Discussion: Give authority to @efestrikesback during reform period | [Link](https://github.com/altanborali16/SWE574-Group2/issues/105)                    |
| Discussion: Reduce resources for two backend development | [Link](https://github.com/altanborali16/SWE574-Group2/issues/104)                    |
| Implement create new post (subtask #56)              | [Link](https://github.com/altanborali16/SWE574-Group2/issues/100)                    |
| Implement community page (subtask #56)               | [Link](https://github.com/altanborali16/SWE574-Group2/issues/96)                     |
| Implement create new community action (subtask #56)  | [Link](https://github.com/altanborali16/SWE574-Group2/issues/94)                     |
| Write milestone 1 report and present to customer     | [Link](https://github.com/altanborali16/SWE574-Group2/issues/76)                     |
| Control & enforce pull request policy               | [Link](https://github.com/altanborali16/SWE574-Group2/issues/55)                     |
| Ensure the application is deployed and functioning properly | [Link](https://github.com/altanborali16/SWE574-Group2/issues/54)                     |
| Configure Docker for React project                  | [Link](https://github.com/altanborali16/SWE574-Group2/issues/44)                     |
| Configure Docker image for backend deployment       | [Link](https://github.com/altanborali16/SWE574-Group2/issues/43)                     |
| Combine and test backend and frontend projects      | [Link](https://github.com/altanborali16/SWE574-Group2/issues/42)                     |
| Finalize release on GitHub                          | [Link](https://github.com/altanborali16/SWE574-Group2/issues/41)                     |
| Configure security group for EC2                    | [Link](https://github.com/altanborali16/SWE574-Group2/issues/40)                     |
| Test deployment on Amazon EC2                       | [Link](https://github.com/altanborali16/SWE574-Group2/issues/39)                     |
| Configure Amazon EC2 for project deployment         | [Link](https://github.com/altanborali16/SWE574-Group2/issues/38)                     |
| Create EC2 on Amazon                                | [Link](https://github.com/altanborali16/SWE574-Group2/issues/37)                     |
| Build security configurations for backend project   | [Link](https://github.com/altanborali16/SWE574-Group2/issues/33)                     |
| Implement authentication system                     | [Link](https://github.com/altanborali16/SWE574-Group2/issues/26)                     |
| Create backend for login page with Spring Security  | [Link](https://github.com/altanborali16/SWE574-Group2/issues/17)                     |
| Set up DEV & PROD branches for backend              | [Link](https://github.com/altanborali16/SWE574-Group2/issues/13)                     |
| Badge system: backend design                        | [Link](https://github.com/altanborali16/SWE574-Group2/issues/12)                     |
[BUG]: User profile is static needs to be implemented | [Link](https://github.com/altanborali16/SWE574-Group2/issues/112)                    |
| [BUG]: Posts are listed in the feed/home but not listed under community | [Link](https://github.com/altanborali16/SWE574-Group2/issues/111)                    |
| Implement advanced search                           | [Link](https://github.com/altanborali16/SWE574-Group2/issues/109)                    |




### Individual Contribution: Efe Gocmen



1. Summary of work performed: (in terms of requirements, design, management, just list the above requirements)

Backend architecture, backend design for the new features, backend development, branch and pull request management, support cloud ops led by Feridun, support FE integration led by Altan.

Bug fixes, CICD management, task management, team management. Tag system, file upload feature, badge system w/ Feridun. Code reviews and bnackend support.

2. Requirement(s) worked on and brief description: 

| Requirement Number | Status | Brief Description |
|--------------------|--------| ----------------- | 
| [III.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iii-registration-in-the-system) | completed | implemented registeration @ backend |
| [III.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iii-registration-in-the-system) | partially completed | implemented community tags @ backend |
| [III.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iii-registration-in-the-system) | completed | implemented user profile @ backend  |
| [IV.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#iv-authentication-logging-in) | completed |  implemented auth @ backend  |
| [V.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed | implemented @ backend |
| [V.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed | implemented @ backend |
| [V.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#v-types-of-users-in-the-system) | completed | implemented @ backend |
| [VI.B.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | completed | worked on backend design |
| [VI.B.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | completed | worked on backend design |
| [VI.C.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed | designed and implemented @ backend with Feridun(pair)|
| [VI.C.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed | designed and implemented @ backend with Feridun(pair) |
| [VI.C.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed | designed and implemented @ backend with Feridun(pair)|
| [VI.C.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vic-reputation-mechanismgamification-source) | completed | designed and implemented @ backend with Feridun(pair) |
| [VII.A.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | implemented community creation @ backend |
| [VII.A.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | implemented community creation @ backend  |
| [VII.A.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | implemented community roles @ backend |
| [VII.A.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | implemented @ backend |
| [VII.A.5.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | implemented @ backend |
| [VII.A.6.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | implemented @ backend|
| [VII.A.7.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | implemented templates @ backend |
| [VII.A.8.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viia-creating-a-community) | completed  | implemented @ backend |
| [VII.C.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viic-community-visibility) | completed  | implemented @ backend |
| [VIII.A.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiia-subscribing-to-communities) | completed | implemented subscription @ backend  |
| [VIII.A.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiia-subscribing-to-communities) | completed | implemented unsubscription @ backend  |
| [VIII.B.1.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiib-contributing-to-communities) | completed | implemented template system @ backend  |
| [VIII.B.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiib-contributing-to-communities) | completed | implemented posting @ backend |
| [VIII.B.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiib-contributing-to-communities) | completed | implemented posting @ backend |
| [VIII.C.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiic-interaction-within-communities) | completed | implemented multimedia support (images) @ backend |
| [IX.A.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#ixa--tagging-content) | completed | implemented tag system @ backend |
| [IX.A.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#b-advanced-search-in-communities) | completed | small work on backend side  |
| [X.2.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#x-types-of-data-in-the-system) | completed |implemented multimedia support (images) @ backend  |
| [X.3.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#x-types-of-data-in-the-system) | completed |implemented user system @ backend |
| [X.4.](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#x-types-of-data-in-the-system) | completed | implemented community system @ backend|

3. Related issue/pull request/documentation URL:
4. Explanation of code written: (with relevant URLs):

The relevant links and their respective requirements are given in the table above.

 - [x] Coded the backend from scratch on my own. (Security,
       authentication, user mamagement, community management, posts and
       content, templates and fields etc.)
 - [x] Implemented community tags with Feridun's support.
 - [x] Implemented multimedia system.
 - [x] Pair coded badge system w/ Feridun
 - [x] Supported Feridun @ commenting system
 - [x] Supported Feridun @ upvoting.
 - [x] Worked on lazy loading issue w/ Altan and Feridun.
 
5. Documentation: describe the documentation you personally wrote

[Decisions-&-Policies](https://github.com/altanborali16/SWE574-Group2/wiki/Decisions-&-Policies)
[Elicitation-Notes](https://github.com/altanborali16/SWE574-Group2/wiki/Elicitation-Notes)
[Reforms](https://github.com/altanborali16/SWE574-Group2/wiki/Reforms)

**6. Screenshots:** (demonstrating the most complex functionality you personally implemented)

I worked specifically on back-end stuff, code rewievs and pipeline management so can not provide screenshots.

**7. Challenges:** 

 **Management-related Significant Issues**: After first deadline we decided to reform the team and I was given full control over team management. I carefully created and assigned tasks to the members whom claimed that they were confident about the given taks. Even though confirmation, we faced problems about deadline management, especially the backend team struggled with meeting deadlines which in return affected frontend team that are waiting services. Another problem we had was lack of communication, some members decleared that they are struggling with taks at the very last second. We managed to overcome these issues with harsher measures. Directly questioning about the progress of the tasks helped greatly. Another enchament was Altan's step up when it comes to coordination of the front end team.
    
 **Pull Requests**: We had multiple conflicts that took me hours to resolve. Especially after start of multiple people working on different features on backend at the same time. Even though the features were clearly distinct functionlaity wise they were overlapping at the entities and services used which led to conflicts. We also had couple of direct pushes to the main, revertring and creating a PR would be tideous so I carefully checked changeset, tested functionalities of the changes and then aproved the commit.



**8. Code review:**  
Group member name whose code you reviewed:  Yana and Feridun
Code reviewed (pull request, GitHub conversation):  I created the table "Pull Requests Reviewed by me"
Code review nature: (problems, status, how problems were addressed)  : I checked the code after that everything looks okay I accept the pull requests.
Code review results: Most of the code review went fine and without any problems. Refused PRs that override core functions (thus create new bugs), refused one line change PRs that has no real value.

**My Pull requests :**

| PR NUMBER | PR TITLE  | STATUS  | WORKING STATUS |
|-----------|---------- |---------| -------------- |
| [#141](https://github.com/altanborali16/SWE574-Group2/pull/141)  | tags, community images  | MERGED | Working | 
| [#122](https://github.com/altanborali16/SWE574-Group2/pull/122)  | Feature/altan 88 implement landing page base features  | MERGED  | Working | 
| [#110](https://github.com/altanborali16/SWE574-Group2/pull/110)  | feature/efe 96 implement community page  | MERGED  | Working | 
| [#103](https://github.com/altanborali16/SWE574-Group2/pull/103)  | Infra/efe 101 combine be and fe merged into dev-backend  | MERGED  | Working | 
| [#90](https://github.com/altanborali16/SWE574-Group2/pull/90)  | Feature/efe 87 implement content base features  | MERGED  | Working | 
| [#86](https://github.com/altanborali16/SWE574-Group2/pull/86)  | Feature/efe 82 implement community base features    | MERGED  | Working | 
| [#80](https://github.com/altanborali16/SWE574-Group2/pull/80)  | Feature/efe 78 implement user management  | MERGED  | Working | 
| [#77](https://github.com/altanborali16/SWE574-Group2/pull/77)  | update invidual contributions  | MERGED | Working | 
| [#46](https://github.com/altanborali16/SWE574-Group2/pull/46)  | Dev backend deployment merge   | MERGED  | Working | 
| [#36](https://github.com/altanborali16/SWE574-Group2/pull/36)  | Feature/efe 33 build security configuration 2 | MERGED | Working | 
| [#35](https://github.com/altanborali16/SWE574-Group2/pull/35)  | Feature/efe 33 build security configuration 1 | CLOSED | Working | 
| [#31](https://github.com/altanborali16/SWE574-Group2/pull/31)  | #27 initialize backend | MERGED | Working | 
| [#28](https://github.com/altanborali16/SWE574-Group2/pull/28)  | Development frontend | MERGED | Working | 

**Pull Requests Reviewed by me :** 

| PR NUMBER | PR TITLE   | MERGE STATUS  |  WORKING STATUS |
|-----------|------------|---------------| --------------- |
| [#201](https://github.com/altanborali16/SWE574-Group2/pull/201)  | Development final  #201   | MERGED | Working | 
| [#192](https://github.com/altanborali16/SWE574-Group2/pull/192)  | number fields added on advanced search | MERGED | Working | 
| [#176](https://github.com/altanborali16/SWE574-Group2/pull/176)  | #154 #153 fix community leave endpoint and add private archive functi… | MERGED | Working | 
| [#175](https://github.com/altanborali16/SWE574-Group2/pull/175) | Feature/feridun 153  | MERGED | Working | 
| [#150](https://github.com/altanborali16/SWE574-Group2/pull/150)  |  # Fix/altan lazy frontend authorname | MERGED | Not Working | 

 **Issues I created and gave other members => (CREATED) 
Issues I worked on my own or I was given the task => (ASSIGNED)**


| ISSUE NUMBER | ISSUE TITLE                                                                                                                                  | STATUS                   |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| [#191](https://github.com/altanborali16/SWE574-Group2/issues/191) | [BUG] Community count based badges do not work bug Component : api Component : backend enhancement                                               |CREATED & ASSIGNED      |
| [#154](https://github.com/altanborali16/SWE574-Group2/issues/154) | [BUG] Unfollow Community bug Component : api                                                                                                   | CREATED & ASSIGNED    |
| [#153](https://github.com/altanborali16/SWE574-Group2/issues/153) | [BUG] Community Create api isPrivate field is not working bug Component : api                                                                  | CREATED  & ASSIGNED  |
| [#140](https://github.com/altanborali16/SWE574-Group2/issues/140) | Community tags Component : api Component : backend                                                                                             | CREATED  & ASSIGNED      |
| [#139](https://github.com/altanborali16/SWE574-Group2/issues/139) | Community image endpoits, get, delete, upload Component : api Component : backend                                                              | CREATED & ASSIGNED       |
| [#136](https://github.com/altanborali16/SWE574-Group2/issues/136) | [BUG]: Delete post service uses wrong input as parameter bug Component : api Component : backend                                               | CREATED   |
| [#131](https://github.com/altanborali16/SWE574-Group2/issues/131) | Implement badge mechanism Component : api Component : backend enhancement                                                                      | CREATED & ASSIGNED  |
| [#130](https://github.com/altanborali16/SWE574-Group2/issues/130) | Add a new data type for numeric search Component : backend                                                                                     | CREATED  & ASSIGNED  |
| [#127](https://github.com/altanborali16/SWE574-Group2/issues/127) | [BUG]: Unable to create community with long descriptions bug Component : backend                                                               | CREATED  & ASSIGNED  |
| [#126](https://github.com/altanborali16/SWE574-Group2/issues/126) | Add community picture/logo properties to the community class Component : api Component : backend enhancement                                   | CREATED & ASSIGNED    |
| [#123](https://github.com/altanborali16/SWE574-Group2/issues/123) | Resolve (Feature/altan 88 implement landing page base features to main) conflicts CI/CD Component : infra & cloud                              | CREATED & ASSIGNED      |
| [#121](https://github.com/altanborali16/SWE574-Group2/issues/121) | Test and organize branches, resolve conflicts Component : infra & cloud                                                                        | CREATED         |
| [#117](https://github.com/altanborali16/SWE574-Group2/issues/117) | Implement secondary content features (on POST entity) : like count, commenting etc Component : api Component : backend Component : original backend | CREATED & ASSIGNED |
| [#116](https://github.com/altanborali16/SWE574-Group2/issues/116) | Add numeric filtering to advanced search Component : api Component : backend Component : original backend Improvement Status : needs review      | CREATED    |
| [#115](https://github.com/altanborali16/SWE574-Group2/issues/115) | Study the backend and report to the team lead management study & research                                                                      | CREATED       |
| [#114](https://github.com/altanborali16/SWE574-Group2/issues/114) | [BUG]: under community page, recently created post do not show up bug Component : frontend                                                      | CREATED      |
| [#113](https://github.com/altanborali16/SWE574-Group2/issues/113) | [BUG]: create template button goes out of screen and disappears as we add more fields bug Component : frontend                                 | CREATED      |
| [#109](https://github.com/altanborali16/SWE574-Group2/issues/109) | Implement advanced search Component : api Component : original backend Status : in progress                                                     | CREATED      & ASSIGNED     |
| [#108](https://github.com/altanborali16/SWE574-Group2/issues/108) | Implement advanced search Component : api Component : backend Component : original backend enhancement REFORM                                  | CREATED       & ASSIGNED    |
| [#107](https://github.com/altanborali16/SWE574-Group2/issues/107) | Create and implement "get post list by community id " endpoint Component : api enhancement                                                      | CREATED    & ASSIGNED     |
| [#106](https://github.com/altanborali16/SWE574-Group2/issues/106) | Create and implement "get member list by community id " endpoint Component : api Component : backend Component : original backend enhancement    | CREATED     & ASSIGNED    |
| [#105](https://github.com/altanborali16/SWE574-Group2/issues/105) | Discussion: "We have decided to give absolute authority to @efestrikesback ... centralized leadership or more democratic ways?"                 | CREATED         |
| [#104](https://github.com/altanborali16/SWE574-Group2/issues/104) | Discussion: "We are using too many resources developing two backends..." Component : backend Component : original backend discussion            | CREATED          |
| [#102](https://github.com/altanborali16/SWE574-Group2/issues/102) | Integrate and adapt endpoints Component : api Component : backend Component : frontend Component : original backend Priority : Critical REFORM  |CREATED     & ASSIGNED     |
| [#101](https://github.com/altanborali16/SWE574-Group2/issues/101) | Combine BE & FE branches into single "dev" branch pre-presentation Component : api Component : backend Component : frontend Component : original backend | CREATED  & ASSIGNED |
| [#100](https://github.com/altanborali16/SWE574-Group2/issues/100) | Implement create new post (subtask #56) Component : frontend enhancement REFORM                                                                 | CREATED          |
| [#97](https://github.com/altanborali16/SWE574-Group2/issues/97)   | Check the progress and readiness for the presentation. REFORM                                                                                  | CREATED      |
| [#96](https://github.com/altanborali16/SWE574-Group2/issues/96)   | Implement community page (subtask #56) Component : api Component : frontend enhancement REFORM                                                 | CREATED       |
| [#95](https://github.com/altanborali16/SWE574-Group2/issues/95)   | Implement cookies and local storage utilisation Component : api Component : frontend enhancement                                               | CREATED         |
| [#94](https://github.com/altanborali16/SWE574-Group2/issues/94)   | Implement create new community action (subtask #56) Component : api Component : frontend enhancement REFORM                                    | CREATED       & ASSIGNED   |
| [#93](https://github.com/altanborali16/SWE574-Group2/issues/93)   | Implement (list) communities page (subtask #56) Component : api Component : frontend enhancement REFORM                                        | CREATED   & ASSIGNED   |
| [#92](https://github.com/altanborali16/SWE574-Group2/issues/92)   | Implement "my communities" page (Subtask #56) Component : api Component : frontend enhancement REFORM                                          |CREATED        |
| [#91](https://github.com/altanborali16/SWE574-Group2/issues/91)   | Implement user profile page (subtask #56) Component : api Component : frontend enhancement REFORM                                              | CREATED    & ASSIGNED     |
| [#89](https://github.com/altanborali16/SWE574-Group2/issues/89)   | Implement validation for post creation Component : api Component : backend Component : original backend enhancement Improvement                 | CLOSED (last month)      |
| [#87](https://github.com/altanborali16/SWE574-Group2/issues/87)   | Implement content base featues: custom templates, posts Component : api Component : backend Component : original backend enhancement            | CREATED  & ASSIGNED      |
| [#85](https://github.com/altanborali16/SWE574-Group2/issues/85)   | Implement content base features: custom post templates, posting, advanced search Component : api Component : backend Component : original backend | CREATED  & ASSIGNED      |
| [#84](https://github.com/altanborali16/SWE574-Group2/issues/84)   | Remove unnecessary back references from get communities list endpoint bug Component : api Component : backend Component : original backend      | CREATED   & ASSIGNED  |
| [#83](https://github.com/altanborali16/SWE574-Group2/issues/83)   | Implement community roles Component : api Component : backend Component : original backend enhancement                                         | CREATED    & ASSIGNED    |
| [#82](https://github.com/altanborali16/SWE574-Group2/issues/82)   | Implement community base features, creation, membership, ownership Component : backend Component : original backend enhancement                 |CREATED     & ASSIGNED    |
| [#81](https://github.com/altanborali16/SWE574-Group2/issues/81)   | Clean up branches, fix conflicts and upstream errors bug Component : infra & cloud                                                              |CREATED    & ASSIGNED    |
| [#79](https://github.com/altanborali16/SWE574-Group2/issues/79)   | Implement basic role-based authorization Component : api Component : backend Component : original backend                                      | CREATED     |
| [#78](https://github.com/altanborali16/SWE574-Group2/issues/78)   | Implement user management and user profile Component : api Component : backend Component : original backend enhancement                         |CREATED   & ASSIGNED   |
| [#76](https://github.com/altanborali16/SWE574-Group2/issues/76)   | Write a new milestone 1 report and present to customer documentation                                                                           | CREATED        |
| [#70](https://github.com/altanborali16/SWE574-Group2/issues/70)   | Migrate legacy code to repo Priority : High                                                                                                    | CREATED      & ASSIGNED    |
| [#68](https://github.com/altanborali16/SWE574-Group2/issues/68)   | Prepare for the presentation [will be divided into issues with asssignemnent & more tasks] management                                          | CREATED           |
| [#66](https://github.com/altanborali16/SWE574-Group2/issues/66)   | Oversee the creation and updating of project documentation [will be assigned later]                                                            | CREATED           |
| [#53](https://github.com/altanborali16/SWE574-Group2/issues/53)   | Ensure every work has related issue discussion REFORM                                                                                          | CREATED   & ASSIGNED      |
| [#52](https://github.com/altanborali16/SWE574-Group2/issues/52)   | Set up code review process discussion REFORM                                                                                                   | CREATED     & ASSIGNED     |
| [#51](https://github.com/altanborali16/SWE574-Group2/issues/51)   | Communicate new practices with team members documentation REFORM                                                                               | CREATED      & ASSIGNED     |
| [#50](https://github.com/altanborali16/SWE574-Group2/issues/50)   | Add new mandotory practices to wiki REFORM                                                                                                     | CREATED     & ASSIGNED    |
| [#49](https://github.com/altanborali16/SWE574-Group2/issues/49)   | Update commit naming guideline on wiki documentation REFORM                                                                                     | CREATED    & ASSIGNED     |
| [#48](https://github.com/altanborali16/SWE574-Group2/issues/48)   | Update branch naming guidelines on wiki documentation Improvement REFORM                                                                       |CREATED    & ASSIGNED     |
| [#47](https://github.com/altanborali16/SWE574-Group2/issues/47)   | Describe individual contribution documentation Priority : Critical                                                                             | CREATED        |
| [#45](https://github.com/altanborali16/SWE574-Group2/issues/45)   | Create first release package Component : api Component : backend Component : frontend enhancement                                              | CREATED   & ASSIGNED      |
| [#44](https://github.com/altanborali16/SWE574-Group2/issues/44)   | Configure docker for the react project configuration                                                                                           | CREATED   & ASSIGNED    |
| [#43](https://github.com/altanborali16/SWE574-Group2/issues/43)   | Configure docker image for backend deployment Component : backend Component : frontend enhancement                                             | CREATED   & ASSIGNED     |
| [#42](https://github.com/altanborali16/SWE574-Group2/issues/42)   | Combine and test backend and frontend projects Component : api Component : backend Component : frontend enhancement Priority : Critical         | CREATED     & ASSIGNED   |
| [#41](https://github.com/altanborali16/SWE574-Group2/issues/41)   | Finalize release on Github configuration test                                                                                                  | CREATED         |
| [#39](https://github.com/altanborali16/SWE574-Group2/issues/39)   | Test deployment on Amazon EC2 Component : api Component : backend Component : frontend enhancement                                             | CREATED    & ASSIGNED    |
| [#33](https://github.com/altanborali16/SWE574-Group2/issues/33)   | Build security configurations of the backend project Component : backend enhancement Priority : Critical                                       | CREATED     & ASSIGNED    |
| [#32](https://github.com/altanborali16/SWE574-Group2/issues/32)   | Upgrade backend JDK from 17 to 21 Component : backend enhancement Improvement                                                                  | CREATED   & ASSIGNED     |
| [#29](https://github.com/altanborali16/SWE574-Group2/issues/29)   | Create seperate branches for frontend and backend discussion enhancement Improvement refactor                                                   | CREATED     & ASSIGNED    |
| [#27](https://github.com/altanborali16/SWE574-Group2/issues/27)   | Initialize backend project & update spring boot Component : backend enhancement Improvement Priority : Critical                                 |CREATED    & ASSIGNED      |
| [#26](https://github.com/altanborali16/SWE574-Group2/issues/26)   | Implement authentication system Component : api Component : backend enhancement Priority : Critical                                            | CREATED     & ASSIGNED     |
| [#14](https://github.com/altanborali16/SWE574-Group2/issues/14)   | Documenting meeting notes, October 1, 2024 discussion documentation help wanted Status : done                                                  | CREATED       & ASSIGNED   |
| [#12](https://github.com/altanborali16/SWE574-Group2/issues/12)   | Badge system: backend design Component : backend discussion enhancement Priority : Critical                                                     | CREATED    & ASSIGNED      |
| [#11](https://github.com/altanborali16/SWE574-Group2/issues/11)   | Create a wiki page for weekly elicitation notes documentation                                                                                  | CREATED          |
| [#9](https://github.com/altanborali16/SWE574-Group2/issues/9)     | Create mockups documentation Priority : High Status : done                                                                                     | CREATED          |
| [#6](https://github.com/altanborali16/SWE574-Group2/issues/6)     | Create a new diagram for CI/CD operation flow documentation                                                                                     | CREATED          |
| [#5](https://github.com/altanborali16/SWE574-Group2/issues/5)     | Establish workflows and team roles discussion Priority : High Status : done                                                                    | CREATED         |
| [#4](https://github.com/altanborali16/SWE574-Group2/issues/4)     | Create a wiki page for decisions made documentation Priority : Critical Status : done                                                          | CREATED          |
| [#3](https://github.com/altanborali16/SWE574-Group2/issues/3)     | Set issue, commit, and branch naming standards Priority : High Status : done                                                                   | CREATED      & ASSIGNED    |
| [#1](https://github.com/altanborali16/SWE574-Group2/issues/1)     | Repo Review discussion Priority : High Status : done                                                                                           | CREATED           |






### Individual Contribution: Yana Krasovska

**1. Summary of work performed:** 

In terms of documentation, I organized the Requirements Specification, meeting meetings, and the general part of milestone reports, including this one.  
In terms of design, I prepared [activity diagrams and use-cases](https://github.com/altanborali16/SWE574-Group2/wiki/Designs,-diagrams,-and-use-case-scenarios#use-case-scenarios-and-activity-diagrams), together with Aliser; suggested a concept for a [recommendation service backend design](https://github.com/altanborali16/SWE574-Group2/wiki/Designs,-diagrams,-and-use-case-scenarios#recommendation-service-backend-design); and [badge system backend design.](https://github.com/altanborali16/SWE574-Group2/wiki/Designs,-diagrams,-and-use-case-scenarios#badge-system-backend-design)
In terms of requirements coverage, I worked on recommendations; assigning community administration roles to community members; and several fixes.

**2. Requirement(s) worked on and brief description:**  
[VI.B. Content recommendation](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source)  
Recommendations based on user post upvotes, community tags overlap, and recommendations based on recent activity in communities were introduced in the backend. In the system, the recommendations based on community tags overlap endpoint is used to recommend communities whose tags are similar to those communities that the user created and/or followed.  

[VII. Community Administration](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vii-community-administration)  
The role of community Creator was given the opportunity to assign Admin role to community members. The Creator role received the same permission set as Admins who can remove subscribers from communities.  

**3. Related issue/pull request/documentation URL:**

| Requirement                                                                                                                      | Issue                                                                                                  |
|----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [VI.B. Content recommendation](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | [Issue 133](https://github.com/altanborali16/SWE574-Group2/issues/133)                                  |
| [VI.B. Content recommendation](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | [Issue 155](https://github.com/altanborali16/SWE574-Group2/issues/155)                                  |
| [VI.B. Content recommendation](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vib-system-content-recommendation-system-source) | [Issue 170](https://github.com/altanborali16/SWE574-Group2/issues/170)                                  |
| [VII. Community Administration](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#vii-community-administration)                      | [Issue 165](https://github.com/altanborali16/SWE574-Group2/issues/165)                                  |
| [VIII.B.1 Contributing to Communities](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiib-contributing-to-communities)        | [Issue 158](https://github.com/altanborali16/SWE574-Group2/issues/158)                                  |
| [VIII.B.1 Contributing to Communities](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification#viiib-contributing-to-communities)        | [Issue 184](https://github.com/altanborali16/SWE574-Group2/issues/184)                                  |


**4. Documentation:**  

In terms of documentation, I organized the [Requirements Specification](https://github.com/altanborali16/SWE574-Group2/wiki/Requirements-Specification), [meeting minutes, ](https://github.com/altanborali16/SWE574-Group2/wiki/Meeting-notes), and the general part of milestone reports ([1](https://github.com/altanborali16/SWE574-Group2/wiki/Milestone-1-Report), [1.1](https://github.com/altanborali16/SWE574-Group2/wiki/Milestone-1.1-Report) and [2](https://github.com/altanborali16/SWE574-Group2/wiki/Milestone-2-report)), including [this final report.](https://github.com/altanborali16/SWE574-Group2/wiki/Final-Project-Report). 

**5. Code review:**  

I did not perform any code reviews in this project.  
 
**6. Pull requests:**  

| PR Number | PR Title                           | PR Status  |
|-----------|-------------------------------------|------------|
| [#18](https://github.com/altanborali16/SWE574-Group2/pull/18)      | Feature/yana 17 login signup | Closed     |
| [#142](https://github.com/altanborali16/SWE574-Group2/pull/142)      | Feature/yana 133 recommendation | Merged     |
| [#157](https://github.com/altanborali16/SWE574-Group2/pull/157)      | Feature/yana 155 recommendations update          | Merged     |
| [#159](https://github.com/altanborali16/SWE574-Group2/pull/159)       | add signed vs unsigned number checks and add text validations to template                               | Merged |
| [#172](https://github.com/altanborali16/SWE574-Group2/pull/172)   | fix the issue with recommended posts regarding missing communityId | Merged|
| [#174](https://github.com/altanborali16/SWE574-Group2/pull/174) | Feature/yana 165 add remove members to community                                 | Merged |
| [#179](https://github.com/altanborali16/SWE574-Group2/pull/179)      | fix: add communityId as a getter of Post entity to return as part of Json                                 | Merged |
| [#186](https://github.com/altanborali16/SWE574-Group2/pull/186)      | introduce new enum type and new column for keeping JSON data  | Closed |


**7. Issues:**  

| Issue  | Issue Title                                                                                                             | Status                       |
|--------|-------------------------------------------------------------------------------------------------------------------------|------------------------------|
| [#170](https://github.com/altanborali16/SWE574-Group2/issues/170)   | [BUG] recommended posts are without communityId and not a correct json structure bug Component : api Priority : Critical | done, needs review (open)    |
| [#155](https://github.com/altanborali16/SWE574-Group2/issues/155)   | Recommendations update bug Component : api Component : backend enhancement help wanted                                  | open (help wanted)           
| [#184](https://github.com/altanborali16/SWE574-Group2/issues/184)   | introduce-custom-enum-field-type Component : backend enhancement                                                        | in progress, needs review (closed) |
| [#165](https://github.com/altanborali16/SWE574-Group2/issues/165)   | Add & Remove members to community Component : api enhancement                                                           | done (closed)                
| [#158](https://github.com/altanborali16/SWE574-Group2/issues/158)   | Implement NUMBER validation Component : backend Improvement                                                             | done (closed)                
| [#133](https://github.com/altanborali16/SWE574-Group2/issues/133)   | Implement recommendation system Component : backend Component : frontend enhancement Priority : Critical                | closed                       
| [#120](https://github.com/altanborali16/SWE574-Group2/issues/120)   | Documentation & wiki maintenance (till MVP) documentation                                                               | closed                       | [#116](https://github.com/altanborali16/SWE574-Group2/issues/116)   | Add numeric filtering to advanced search Component : api Component : backend Component : original backend Improvement   | needs review (closed)        |                
| [#25](https://github.com/altanborali16/SWE574-Group2/issues/25)    | Create use case scenarios and diagrams documentation Status : in progress                                               | in progress (closed)         
| [#12](https://github.com/altanborali16/SWE574-Group2/issues/12)    | Badge system: backend design Component : backend discussion enhancement Priority : Critical                             | closed                                   
| [#7](https://github.com/altanborali16/SWE574-Group2/issues/7)     | Supplement the requirements discussion documentation Priority : High Status : done                                      | done (closed)                
| [#5](https://github.com/altanborali16/SWE574-Group2/issues/5)     | Establish workflows and team roles discussion Priority : High Status : done                                            | done (closed)                

**8. Explanation of code written:**   

| **PR Number**                                                                          | **Explanation**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [#142](https://github.com/altanborali16/SWE574-Group2/pull/142)                        | This includes 3 JPQL queries in **CommunityRepository**:<br><br>**1. findRecommendedCommunitiesBasedOnLikes(User user)**<br>&nbsp;&nbsp;&nbsp;• Fetches public communities sharing tags with those liked by the user (based on posts the user voted on).<br>&nbsp;&nbsp;&nbsp;• Excludes any community the user already belongs to.<br><br>**2. findRecommendedCommunitiesBasedOnMembership(User user)**<br>&nbsp;&nbsp;&nbsp;• Selects public communities sharing tags with those the user already joined.<br>&nbsp;&nbsp;&nbsp;• Excludes communities the user is a member of and private communities.<br><br>**3. findPublicCommunitiesWhereNoMembershipExistsFor(User user)**<br>&nbsp;&nbsp;&nbsp;• Returns public communities not associated with the user.<br>&nbsp;&nbsp;&nbsp;• Filters out private communities and those the user already belongs to. |
| [#157](https://github.com/altanborali16/SWE574-Group2/pull/157)                        | Includes 3 new methods in **PostService.java**:<br><br>**1. getRecommendedPostsBasedOnLikes**<br>&nbsp;&nbsp;&nbsp;• Fetches a list of communities recommended to the user based on their likes and, if none are found, defaults to public communities.<br>&nbsp;&nbsp;&nbsp;• Gathers the top 10 posts by votes and the newest 10 posts from those communities, combines them, and returns a distinct list.<br><br>**2. getRecommendedPostsBasedOnMembership**<br>&nbsp;&nbsp;&nbsp;• Retrieves a list of recommended communities for the user based on their memberships and defaults to public communities if none are found.<br>&nbsp;&nbsp;&nbsp;• Fetches the top 10 posts by votes and the newest 10 posts, merges them, and returns a unique set of posts.<br><br>**3. get10PostsFromAllCommunities**<br>&nbsp;&nbsp;&nbsp;• Streams through all posts in the given communities, filtering out any posts the user has already voted on.<br>&nbsp;&nbsp;&nbsp;• Sorts the remaining posts with the provided comparator and returns only the first 10.                                              |
| [#159](https://github.com/altanborali16/SWE574-Group2/pull/159)                        | Updates **FieldDatatype** class to add validation methods on data types and corresponding exceptions using the **Consumer** interface and lambdas on enums.<br>Also updates **PostService** class to add **CheckFieldDataType** method, which retrieves the data types in the template field and runs the appropriate validation methods.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [#174](https://github.com/altanborali16/SWE574-Group2/pull/174)                        | Introduces **MemberRoleAssignmentDTO** to assist with assigning admin roles to community members.<br><br>Updates **CommunityService** and **CommunityController** where:<br><br>**assignMemberRole**<br>&nbsp;&nbsp;&nbsp;• Assigns a new role to an existing community member if the requester has CREATOR or ADMIN privileges.<br><br>**removeMember**<br>&nbsp;&nbsp;&nbsp;• Removes a member from the community if the requester has CREATOR or ADMIN privileges and the target user is not the community creator.<br><br>The **CommunityController** exposes two endpoints to call these methods.                                                                                                                                                                                                                                     |

**9. Challenges:**  

The biggest challenge of this project for me was working with the code base that was not developed by me and making sense of it. 
I also did not have any previous experience with writing JPQL queries which i needed for the recommendation system; nesting the queries in the right order was also hard to figure out. 
Also, I could not implement the advanced search functionality properly using the Specification interface provided by Spring as using this pattern combined with the Predicate interface required more studying and time than I had. This functionality had to be implemented on the frontend by JavaScript means. 

**10. Screenshots:**  

Recommended posts (backend)
![image](https://github.com/user-attachments/assets/9e1b2950-ec78-4fe5-8e15-3287db26e8d9)

Community administration rights: remove members and assign as community administrator (backend)
![image](https://github.com/user-attachments/assets/12b81426-5f95-4ff8-b66d-6ccefe6fb467)
