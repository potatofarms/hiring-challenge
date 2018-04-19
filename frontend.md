# Frontend Challenge
## Overview
You are developing an example application to demonstrate uses of key technologies to be successful as a Maestro engineer. The project will require you to develop an application architecture, construct and design user interfaces and solve user story requirements.

### Required Technologies
- Ionic (Angular)
- Angular
- TypeScript

### Optional Technologies
- SASS
- Animations
- Realtime Database (i.e. Firebase) / Local Storage / Session Storage
- Unit Testing/Integration Testing

### Submissions
- Fork this repository
- Create a new git branch
- Commit your code as you work through this assessment
- Send the link to your fork to your main contact with Hive/Maestro OR jobs@meetmaestro.com


---

## User Stories

### Application Purpose

You are responsible for developing an application to store and manage a local media collection. Users should be able to see their stored media, review a detail view of the record as well as create and edit media records.

1. As a user, I need to be able to create a new media record.

Users will see a form to enter the information around creating a media record. The form will contain _at least_ the following properties:

- Title (required)
- Description (optional)
- Link/URL (required)
- Image thumbnail URL (required)

The form should have basic form validation to allow users to see which fields are required and have not been filled out.

**Bonus**: Prompt users that their form is not saved, when they attempt to exit the screen without submitting.

2. As a user, I need to see a list or grid of my saved media records.

Display the saved media records in a table, list or grid so a user can easily see and access their own media collection. Each individual item should link the user to a detail screen for that record.

Display at least the following properties:
- Title
- Image Thumbnail (if entered, otherwise use a default icon)

3. As a user, I need to see a detail view of a media record

The detail view should display a read-only output of the media record. Include either a button to view the link/url or embed the content directly in the view.

4. As a user, I need to be able to delete media records.

Allow users to delete their own media records by selecting a delete option on the detail view of the media record. Confirm with the user, prior to removing the record.

5. As a user, I need to be able to edit existing media records.

Allow users to access an edit view of the media record to make changes to all the fields mentioned for creating a new media record. Saving the record should update the existing record and not create a new record.

Users should be able to access the edit screen from the detail view.
