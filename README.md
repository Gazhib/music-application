<h1>About Project</h1>
This project is a music application using the Spotify API to search for albums, playlists, and tracks. It has features like:

- A News Page showcasing new albums.  

- A Search Page for finding albums, tracks, and exploring playlists and genres.
  
- Redirection from genres to playlists, and from playlists to tracks.

- A functionality to leave comments on tracks, with comments stored in the backend.
  
- Music previews (30 seconds clips provided by Spotify API).  

<h1>
Process and Challenges  
</h1> 

While developing this project, I had to quickly learn backend within a week, and at the same time creating the frontend logic. I had challenges like:
- Implementing basic backend functionalities without secure crypting or hashing the passwords and emails.
  
- The inability to create reusable page components due to slight variations among pages.
However:
- Utilizing Redux and Redux Toolkit to manage API tokens and eliminate prop drilling.
  
- The grid css structure helped me to avoid overlapping and creating dynamic content for any size of monitor



<h1>How to run? 1. Setting Up Spotify API Access</h1>
To use the Spotify API, you need to register your application. Follow these steps to get your clientId and clientSecret:

Or for nfactorial I left credentials for some time, then I will delete it
<h2>Step 1: Create a Spotify Developer Account</h2>
Navigate to: Spotify Developer Dashboard

Use your Spotify account credentials to log in.
<h2>Step 2: Register Your Application</h2>
Click on the profile button in the upper right corner and select Dashboard.

Click on Create App.

Provide an App Name and App Description.

<h2>Step 3: Configure Your Application</h2>
Set the Redirect URI to http://localhost:5173.

Ensure Web API is selected.

<h2>Step 4: Obtain Credentials</h2>
After app creation, go to Settings in your app dashboard.

Copy the Client ID.

Click View Client Secret and copy the Client Secret.

<h2>Step 5: Update Your Project</h2>
Locate the APIwork.js file in your project.

Assign your copied Client ID and Client Secret to the respective variables.

<h1>2. Node.js and installing dependencies</h1>
<h2>Install Node.js and npm</h2>
Ensure Node.js and npm are installed:

```
npm install -g npm
```

Then install or update it.
After installing nodejs. Install the npm and nvm:
npm update:

```
npm install -g npm
```

nvm:
```
Go to the nvm-windows GitHub repository: nvm-windows
Download the latest release. Look for nvm-setup.zip under the latest release.
Unzip the file and run the installer. This will set up nvm-windows on your machine.
```

Then as the project uses vite:
```
npm install -g vite
```

In VS code you should create 2 terminals. First is for backend second is for frontend(folder is also called music-application)
in first terminal run:
```
cd backend
node app.js
```

in second terminal run:

<h2>
  To install main dependencies, in terminal run
</h2>

```
npm install
```

<h2>Dependencies</h2>
In order to make project work, install these dependencies

```
npm install redux react-redux @reduxjs/toolkit
npm install react-awesome-reveal
npm install react-rating
```

<h2>Run localhost</h2>
In order to see the result of the project, run in terminal:

```
cd music application
npm run dev
```

It will show you a localhost link, which you should run on your browser.

<h1>Note</h1>
Please note that this project is currently not configured with secure handling of sensitive information like passwords. Do not use in production environments as is.
