# SWE574 Customer Milestone 2 Deliverables

## Date
- **Pre-release of the software:** 24.11.2024, 22:00
- **Report date:** 28.12.2024, 23:59

## Report Name
- customer_m2_group2.md

## Submission
- Report is committed to the group’s repository under the `reports` folder.
- A cover letter on Moodle is submitted (summary and link to the report on the repository).

---

## Deliverables
- **Milestone Review**
- **Individual Contributions**
- **Pre-release of software**:
  - Presentation of the app demo in its `0.2.0-alpha` version.
  - The demo includes functional frontend and mobile apps.
  - Live link : http://44.207.1.210:3000/

---

## Milestone Review

### Report Outline
1. **Requirements Addressed**:
   - Search, advanced search, post upvote/downvote, commenting on posts and commenting on comments, files upload, community and posts tags, recommendation mechanism, badge mechanism.
   - **Actions taken based on feedback:**  
the team re-organized to work faster and with more coordination; numerical values were introduced in field values to allow within-range search;  uploading pictures for the community logo is now possible; recommendation mechanism implemented using system internal information only.
   - Specific task details are provided in the individual contributions section.

2. **List and status of deliverables (not started, in progress, or completed):** 
   - **Requirements addressed:** 
   - Search, advanced search: completed
   - Post upvote/downvote: completed
   - Commenting on posts: completed
   - Commenting on comments: in progress
   - Files upload: completed on backend, in progress in frontend
   - Community and post tags: completed
   - Recommendation mechanism: in progress
   - Badge mechanism: completed

    Note: "Completed" means implemented, tested, documented, and deployed.

3. **Testing**:
   - **General test plan:**  
the team did not have a dedicated QA role, but QA was the responsibility of each developer. Due to constrained timing, developers mostly performed exploratory testing and manual tests. Functional manual testing was performed after all features planned for the stage were implemented and integrated, before and after the deployment.  
All APIs were tested by developers and documented in a Postman collection.
   - **Generated unit test reports (for backend, frontend, and mobile):**  
none for this stage. 

4. **Planning and Team Process**:
   - **Changes made since Milestone 1 or planned for the future to improve the development process:**  
Since Milestone 1, every team member including the team lead assumed a development role; the team lead (Efe) was assigning tasks, doing code reviews, tracking progress, and merging pull requests. For the remaining time, the team will revert to having a full-time team lead who will be in charge of project management but will not participate in the development. Since the team will mostly be doing fixes and scaling of features in the remaining time, coordination will be of higher priority to deliver the project by the deadline.
   - **Explain the impact of these changes:**  
Having a team lead who assigned tasks and tracked progress worked better compared with the previous approach where the team discussions often left it unclear who was responsible for what. 
   - **Project completion plan:** 

| **Date**                 | **Tasks**                                                                 |
|--------------------------|---------------------------------------------------------------------------|
| November 26 - December 1 | Refinements of features, follow up on customer feedback |
| December 3 - December 8  | Follow up on customer feedback, testing, bug fixes  |
| December 10 - December 15| Deployment, acceptance testing, product release, report preparation          |


5. **Evaluation**:
   - Summary of customer feedback and reflections related to the second customer presentation: to be filled after November 25
   - Evaluate the status of deliverables and their impact on your project plan:  
Requirements planned for Milestone 2 are implemented in essence, although further refinement of advanced search, recommendation mechanism, and badges is possible and will be attempted based on the customer's feedback. 
   - Evaluate tools and processes used to manage the team project.

---

## Individual Contributions

### Section Requirements
- **Include personal contributions** between Customer Milestone 1 and Customer Milestone 2.
- **Itemize relevant references** (links to pull requests, issues, etc.) on your git repository.
- Each team member should create a subsection using the following format:

#### Member: Altan Boralı
- **Responsibilities**: Management of Frontend Team, Frontend Development. Communication with backend team. 
- **Main Contributions**: Management of frontend tasks, reviewing, pair coding and also coding for frontend tasks. Checking backend responses and communication with backend team.
- **Code-related Significant Issues**: 

During the fronted development we have also discovered several bugs that needs to fixed. A list of bugs resolved by me can be seen below.
1. Re-selecting "Select a template" on post creation gives error  has been resolved by commit number [fb15197](https://github.com/altanborali16/SWE574-Group2/commit/fb15197ae844b402e39273ac76b8a5ac776a57cf)
2. Community can created without tags  has been resolved by commit number [885dbad](https://github.com/altanborali16/SWE574-Group2/commit/885dbadd427fa12c35734e950a1156191cd34e93)
3. Unable to create community with long descriptions has been resolved by commit number [4256f46](https://github.com/altanborali16/SWE574-Group2/commit/4256f465cbb3b749c416e270363aa790a25f22de)
4. Username fix on posts has been resolved by commit number [d60d1c5](https://github.com/altanborali16/SWE574-Group2/commit/d60d1c552f8fbd607651c82eb6409c19ab2b6385)
5. Small view updates such as logo and loading screen has been resolved by commit numbers [0a6abcd](https://github.com/altanborali16/SWE574-Group2/commit/0a6abcdda6b22bc8e664133a5f589eabf8ea6618) [21ebadd](https://github.com/altanborali16/SWE574-Group2/commit/21ebaddfb6e68c029ff90ed3af2707af65624ac9)

Also the I have responsibilities on issues. A list of issues has been closed by me can be seen below.
1. Badges on community and profile page has been resolved by commits [94170e2](https://github.com/altanborali16/SWE574-Group2/commit/94170e21a411444a31448b68c4b451d05f5f6de4) and [9969627](https://github.com/altanborali16/SWE574-Group2/commit/9969627d36a32eaa5a97bbb93095cec110d52d93)
2. Code refactoring [ca246c0](https://github.com/altanborali16/SWE574-Group2/commit/ca246c01d2ad56adc987a0fbed21eaa4d0873385)



- **Management-related Significant Issues**: Efe managed the most of the management issues such as opening the issues (which are perfect) assigning tasks to the members, reviewing pull requests. I helped him assigning frontend tasks to the members, testing both frontend and backend tasks and communicate Efe about backend tasks when there is need for update or upgrade. As also Efe mentioned frontend team had a short time for implementing features, so I prioritized frontend tasks for the MVP. 
- **Pull Requests**: [Fix/altan lazy frontend authorname #150](https://github.com/altanborali16/SWE574-Group2/pull/150) which includes small fixes on frontend and backend(discussed with Efe and Feridun). 
[Feature/aliser 124 implement advanced search fe #147](https://github.com/altanborali16/SWE574-Group2/pull/147) which includes almost all frontend tasks for MVP, in the MVP frontend team needed to work on same page(CommunityPage.jsx) so for not having or having as less as possible we worked on same branch. So that pull request includes Alişer's and Enes' work.
- **Additional Information**: In frontend development we are working on the same page so for the sake of minimum merge conflicts we need to work on same branch which concluded 0 conflict. As I am working on my work pc, because of the .config file on my local some of the commits made by me is not named by my github name, but it is still named as Altan Boralı. Giving instructions to frontend team how to run backend, tips and tricks on MySQL, branch controlling.

#### Member: İsmail Enes Akkal
- **Responsibilities**: Frontend Development and UI Design.
- **Main Contributions**: After the first milestone, the customer asked for additional mockup screens such as advanced search, feed screen with posts, comments and likes and users who liked a post. Customer requests also involved the revision of current UI designs so I revised it according to the requirements. I also took a part of the frontend development. 
- **Code-related Significant Issues**: As far as the frontend development is concerned, I implemented features such as commenting, upvote, and profile information update parts. There are also other small features on the frontend side implemented by me. You can see the full list below.
1. Show member list feature has been implemented by commit number [97c709b](https://github.com/altanborali16/SWE574-Group2/commit/97c709b58e67ab60961e2e34042b02cf9fabe694)
2. Comment feature has been implemented by commit number [ba6bd01](https://github.com/altanborali16/SWE574-Group2/commit/ba6bd01cf82ce386646b70bd9b540ec1e3ccf0ba) and [4d3541e](https://github.com/altanborali16/SWE574-Group2/commit/4d3541ec76ddb9beb9747aa1b7ab72a2511f3c70)
3. Upvote feature has been implemented by commit number [3b90c89](https://github.com/altanborali16/SWE574-Group2/commit/3b90c897739700f9d3bba03eb55fbe9f52639deb)
4. User Profile Page Update feature has been implemented by commit number [3836f8f](https://github.com/altanborali16/SWE574-Group2/commit/3836f8f990c8aa6a0c455174e9a061f817db7733)
5. Image Rendering for the posts has been implemented by commit number [97c709b](https://github.com/altanborali16/SWE574-Group2/commit/97c709b58e67ab60961e2e34042b02cf9fabe694)

- **Management-related Significant Issues**: N/A as project management is handled by Efe.
- **Pull Requests**: I have not take any role regarding pull requests since I am not responsible for reviewing Pull requests.
- **Additional Information**: As mentioned before, customer asked for more UI designs and I've created new ones and revised some of the existing ones. I'll share a list of issues done by me related to UI designs.

1. [Issue #125 - Modify Advanced Search Mockup](https://github.com/altanborali16/SWE574-Group2/issues/125)
2. [Issue #119 - Add mockups for: like, commenting, numerically filtered advanced search, comments, comments on comments](https://github.com/altanborali16/SWE574-Group2/issues/119)




#### Member: Ali Ser Gok
- **Responsibilities**: Frontend development, code revision, design and documentation
- **Main Contributions**: I designed and developed the basic search and advanced search features. Taking into account the changing needs of the application, I created new designs. The features developed under the scope of search enhancements are as follows:

1. Basic Search Form, commit number: [1319019](https://github.com/altanborali16/SWE574-Group2/commit/131901996f82250ee9616e307283bc33d1936bb3)
2. Advanced Search Form, commit number: [1319019](https://github.com/altanborali16/SWE574-Group2/commit/131901996f82250ee9616e307283bc33d1936bb3)
3. Basic Search Functionality, commit number: [ea57701](https://github.com/altanborali16/SWE574-Group2/commit/ea577018e27aa5155ccddc421b8d49943b3df6ba)
4. Post Search Functionality, commit number: [ac9a344](https://github.com/altanborali16/SWE574-Group2/commit/ac9a344982ebd12948a5c016809a40b687d0d8d7)
5. Template Search Functionality, commit number: [ac9a344](https://github.com/altanborali16/SWE574-Group2/commit/ac9a344982ebd12948a5c016809a40b687d0d8d7)
6. Comment Search Functionality, commit number: [749f1ef](https://github.com/altanborali16/SWE574-Group2/commit/749f1efbb7c95a7af20f9bd0aeab65759824b9fb)
7. User Search Functionality, commit number: [749f1ef](https://github.com/altanborali16/SWE574-Group2/commit/749f1efbb7c95a7af20f9bd0aeab65759824b9fb)
8. SearchEngine Functionality (a function that combines all searches based on the search form and operators), commit number: [ea57701](https://github.com/altanborali16/SWE574-Group2/commit/ea577018e27aa5155ccddc421b8d49943b3df6ba)
9. Result Listing Page, commit number: [e006164](https://github.com/altanborali16/SWE574-Group2/commit/e00616414fc2b2226705197d87631f7d571a2aca)

- **Code-related Significant Issues**: I tackled challenges such as testing numerous search scenarios to validate the accuracy of search results, as well as designing and implementing the correct algorithms. Beyond these, there were no significant technical obstacles preventing further development. I identified errors and bugs, shared them with my team, and collaboratively resolved them.
- **Management-related Significant Issues**: I worked in coordination with the frontend and backend teams.
- **Pull Requests**: I performed many pull and push operations, and there were no significant issues in this regard
- **Additional Information**: -

### Member: Efe
- **Responsibilities:** Architecture, Backend development, code revision, DevOps (CI/CD), task management (creation, work plan and assignment), team management.
- **Main Contributions**: Backend architecture, backend design for the new features, backend development, bug fixes, branch and pull request management, CICD management, task management, team management. Tag system, file upload feature, badge system w/ Feridun. 


All CLOSED issues I was part of: [Efe's closed issues](https://github.com/altanborali16/SWE574-Group2/issues?q=is%3Aissue+is%3Aclosed+assignee%3Aefestrikesback) 


- **Code-related significant issues:** 
[Commit c0d1fb7](https://github.com/altanborali16/SWE574-Group2/commit/c0d1fb7d5f6214b7243ff45ad534e4f16bb8870c)
[Commit 035514d
](https://github.com/altanborali16/SWE574-Group2/commit/035514d4652aa565fe2351f9bac41bf1c490d27d)
[Commit f3bdf71
](https://github.com/altanborali16/SWE574-Group2/commit/f3bdf71a299ad71d06f76f8ca1702114d3f77a14)
[Commit 816d2d6
](https://github.com/altanborali16/SWE574-Group2/commit/816d2d687f488cc386bcc2d4964508366de7db20)
[Commit cf283b0
](https://github.com/altanborali16/SWE574-Group2/commit/cf283b03d4fe558328c6f2695d259f8a7bd2cca6)
[Commit c1789f4
](https://github.com/altanborali16/SWE574-Group2/commit/c1789f4dab2bcbd6629bac5073c53e218eef72d5)

[Community tags Commit 7a4520e4ee2d3213634c81412b75770e85211908](https://github.com/altanborali16/SWE574-Group2/pull/141/commits/4677fe148c25efbaa11a06205874052e680f7369)

[File upload system Commit 4677fe148c25efbaa11a06205874052e680f7369](https://github.com/altanborali16/SWE574-Group2/pull/141/commits)

[Badge system backend design and implementation pair coded w/ Feridun Commit 33b418a2ce6f1ef50ca6de4875bf0dbe2b00fb7a](https://github.com/altanborali16/SWE574-Group2/pull/143/commits/33b418a2ce6f1ef50ca6de4875bf0dbe2b00fb7a)

++ more commits under feature branches 
[feature/efe-33-build-security-configuration-2](https://github.com/altanborali16/SWE574-Group2/commits/feature/efe-33-build-security-configuration-2)
[efe-27-initialize-backend](https://github.com/altanborali16/SWE574-Group2/commits/feature/efe-27-initialize-backend)
[dev-backend](https://github.com/altanborali16/SWE574-Group2/commits/dev-backend)
[dev-backend-deployment](https://github.com/altanborali16/SWE574-Group2/commits/dev-backend-deployment)


- **Management-related Significant Issues**: After first deadline we decided to reform the team and I was given full control over team management. I carefully created and assigned tasks to the members whom claimed that they were confident about the given taks. Even though confirmation, we faced problems about deadline management, especially the backend team struggled with meeting deadlines which in return affected frontend team that are waiting services. 
Another problem we had was lack of communication, some members decleared that they are struggling with taks at the very last second.
We managed to overcome these issues with harsher measures. Directly questioning about the progress of the tasks helped greatly. Another enchament was Altan's step up when it comes to coordination of the front end team.

- **Pull Requests**: We had multiple conflicts that took me hours to resolve. Especially after start of multiple people working on different features on backend at the same time. Even though the features were clearly distinct functionlaity wise they were overlapping at the entities and services used which led to conflicts. We also had couple of direct pushes to the main, revertring and creating a PR would be tideous so I carefully checked changeset, tested functionalities of the changes and then aproved the commit.

[My pull requests "click to see":](https://github.com/altanborali16/SWE574-Group2/pulls?q=is%3Apr+is%3Aclosed+assignee%3Aefestrikesback)

I reviewed all of the pull requests by other members as in my role as team lead.


- **Additional Information**: Mentioned almost every.

#### Member: Feridun Berk Akyol
- **Responsibilities**: DevOps, Dockerizing, and deployment operations, Backend Development.
- **Main Contributions**: Developed a voting system with toggle functionality, and comment system with reply to comment function. Badge system with counters.
- **Code-related Significant Issues**:Refined the backend to handle user interaction with posts and comments, including filtering posts by community and author. Resolved issues with handling self-referencing comments and ensuring that replies could be nested correctly without causing infinite recursion or database errors. Toggle function on voting, Fixing the refreshing problem with the nginx server on deployment. Created the requests for badge system to work properly. 
- **Management-related Significant Issues**: Worked on refining the communication between the backend team and others, helping resolve issues related to incomplete or incorrect API requests (e.g., handling missing community field in comment queries).
- **Pull Requests**: [Comment, Voting and Badge feature, no merge conflicts](https://github.com/altanborali16/SWE574-Group2/pull/143)
- **Additional Information**: Not needed. 

#### Member: Yana
- **Responsibilities**: Backend development, documentation (meeting notes, requirements, reports).
- **Main Contributions**: see below
- **Code-related Significant Issues**: In the run-up to Milestone 2, I implemented the [recommendations, ](https://github.com/altanborali16/SWE574-Group2/issues/133) and [started implementing advanced search before it was decided to handle it on the frontend.](https://github.com/altanborali16/SWE574-Group2/issues/116).
- **Management-related Significant Issues**: Coordinated with frontend development on the implementation of the recommendations.
- **Pull Requests**: [recommendation feature, no merge conflicts](https://github.com/altanborali16/SWE574-Group2/pull/142)
- **Additional Information**: -
---

## The Software

### Requirements
1. **Good Practices**:
   - Proper documentation and tests.
   - Appropriate commits (merged with pull requests, reviewed, and containing good commit messages).

2. **Core Community Features**:
   - Sample API calls and responses.

3. **Dockerization and Deployment**:
   - The software must be dockerized and deployed.
   - Provide detailed instructions for building and running the software (including Docker build instructions and environment variables, if any).
   - Ensure deployment can be achieved by someone fluent with tools but unfamiliar with Docker or your project.

4. **Pre-release Version**:
   - **Release Name**: `0.2.0-alpha` (pre-release option)
   - **Release Description**: Brief description of requirements covered.
   - **Tag Name**: `customer-milestone-2`
   - **Mobile App**:
     - Provide Android installation instructions.

## Milestone MVP - Customer recommendations

   - Weblinks need to be active(done)

   - Images should be rendered in browser 

   - Geolocation API to be integrated for geolocation fields

   - New data type - currency to be introduced; especially important for search use cases

   - Uniformly handling date format in the posts; especially important for search use cases

   - Enumerated types to be set at the time of community creation by the user, eg list of dog breeds in a Dog Lo ers community

   - Tips for users about what to do to get the next badge.

   - Add dates of when badges were earned.

   - Specialized user experience for the mobile app

   - Consider converting home or feed page into a “discovery page” (rename) for posts from recommended communities.

   - Bug: Community picture on the home page & inside the community is not the same

   - Add validation for positive numbers only (general recommendation)
