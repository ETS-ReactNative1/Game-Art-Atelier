# Game-Art-Atelier
A Video Game Art Gallery: My Final Project in the Course "Mobile Programming" of Haaga-Helia UAS

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://img.shields.io/github/stars/hffriman/Game-Art-Atelier">
    <img src="images/GameArtAtelier.png" alt="Logo" width="300" height="300">
  </a>
 </div>

<h3 align="center">Game Art Atelier</h3>

  <p align="center">
    A Gallery Dedicated to Visual Arts in Video Games
    <br />
    <a href="https://github.com/hffriman/Game-Art-Atelier"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://expo.dev/@hffriman/Game-Art-Atelier">View Demo</a>
    ·
    <a href="https://github.com/hffriman/Game-Art-Atelier/issues">Report Bug</a>
    ·
    <a href="https://github.com/hffriman/Game-Art-Atelier/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#screenshots">Screenshots</a></li>
        <ul>
          <li><a href="#android-version">Android Version</a></li>
          <li><a href="#apple-ios-version">Apple iOS Version</a></li>
        </ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center"> 
  <b>Try the App Here (with Expo Mobile App):</b>
  <p>https://expo.dev/@hffriman/Game-Art-Atelier</p>
</div>

### Introduction

"Game Art Atelier" is dedicated to people who appreciate the visual part of video games.

With this application, you can search for production artworks, game covers and character designs, as well as save them to three Favourites lists (Favourite Artworks, Favourite Covers, Favourite Covers). 

You can always delete things you have saved from the Favourites lists. After deletion of each object, you will be automatically sent back to the front page in order to update the changes.

You can also use this app to send feedback to me (the developer) by using the Feedback screen. With this function, you can write the subject and the content of your feedback in the text boxes -- after pressing the Send button, you will be redirected to your own mail application, where you have to only finish the sending of the email. Please make sure you have a mail application in your phone if you want to use the feedback function.


### Screenshots

#### Android Version
<div align="center">
   <img src="images/android-screenshot-1.jpg" width="23%" height="23%">
   <img src="images/android-screenshot-2.jpg" width="23%" height="23%">
   <img src="images/android-screenshot-3.jpg" width="23%" height="23%">   
   <img src="images/android-screenshot-4.jpg" width="23%" height="23%">
 </div>
 <br>
 <br>
 <div align="center">
   <img src="images/android-screenshot-5.jpg" width="23%" height="23%">
   <img src="images/android-screenshot-6.jpg" width="23%" height="23%">
   <img src="images/android-screenshot-7.jpg" width="23%" height="23%">
   <img src="images/android-screenshot-8.jpg" width="23%" height="23%">
</div>
<br>
<br>

#### Apple iOS Version
<div align="center">
   <img src="images/ios-screenshot-1.jpg" width="23%" height="23%">
   <img src="images/ios-screenshot-2.jpg" width="23%" height="23%">
   <img src="images/ios-screenshot-3.jpg" width="23%" height="23%">   
   <img src="images/ios-screenshot-4.jpg" width="23%" height="23%">
 </div>
 <br>
 <br>
 <div align="center">
   <img src="images/ios-screenshot-5.jpg" width="23%" height="23%">
   <img src="images/ios-screenshot-6.jpg" width="23%" height="23%">
   <img src="images/ios-screenshot-7.jpg" width="23%" height="23%">
    <img src="images/ios-screenshot-8.jpg" width="23%" height="23%">
 </div>
<br>
<br>
<br>

   
### Built With

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [IGDB](https://api-docs.igdb.com/#about)
* [SQLite](https://www.sqlite.org/index.html)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

If you want to run this project in your app, there are things you have to do first:

**1. IGDB API (for API fetching):**
  - You must create a Twitch account and register your own app in order to get your own **Client ID** and **Client Secret**
  - With Cliend ID and Client Secret, you will get your own **Access Token** and **Token Type**
  - All the necessary instructions are here: https://api-docs.igdb.com/#account-creation

**2. Expo app (for using the app in your phone)**
  - Install the Expo app to your phone
  - Google Play (Android) and App Store (iOS)   

**3. Expo Cli (for making the app usable from your phone)**
  - Install the Expo Cli in your computer from the command line <br> <br>
     ```sh
     npm install –g expo-cli
     ```
### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/hffriman/Game-Art-Atelier.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a file .env in the root of your project and add these inside of it:
    ```
    TWITCH_CLIENT_ID = YOUR CLIENT ID
    TWITCH_AUTHORIZATION = YOUR TOKEN TYPE YOUR CLIENT SECRET
    ```
4. Replace YOUR CLIENT ID, YOUR TOKEN TYPE and YOUR CLIENT SECRET with the values you are granted: <br>
   * **Tip 1: The Token Type's First Letter Must Be In Capital (example: bearer -> Bearer)** <br>
   * **Tip 2: There Must Be Space Between Token Type and the Client Secret (only one space)** <br>

5. Launch the app when you are ready:
    ```sh
    npm start
    ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

Please see [open issues](https://github.com/hffriman/Game-Art-Atelier/issues) to find out the latest functionality wishes and issue reports.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

If you have any interests of making enhancements to this project, feel free to fork the repository and create a pull request.
If you have only ideas, don't worry: you can always share them by opening an issue with the tag "enhancement".
Your contribution, in any shape or form, will always be appreciated!

Please consider giving this project a star, as well. Thank you very much!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Henry Friman
  * Twitter: [@hffriman](https://twitter.com/@hfffennec)
  * Mail Adddress: henfriman.second@gmail.com
  * Link to My Profile: [https://github.com/hffriman](https://github.com/hffriman)
  * Link to this project: [https://github.com/hffriman/Game-Art-Atelier](https://github.com/hffriman/Game-Art-Atelier)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* The structure of this documentation is based on the Best-README-Template:
  * https://github.com/othneildrew/Best-README-Template

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/hffriman/Game-Art-Atelier.svg?style=for-the-badge
[contributors-url]: https://github.com/hffriman/Game-Art-Atelier/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hffriman/Game-Art-Atelier.svg?style=for-the-badge
[forks-url]: https://github.com/hffriman/Game-Art-Atelier/network/members
[stars-shield]: https://img.shields.io/github/stars/hffriman/Game-Art-Atelier.svg?style=for-the-badge
[stars-url]: https://github.com/hffriman/Game-Art-Atelier/stargazers
[issues-shield]: https://img.shields.io/github/issues/hffriman/Game-Art-Atelier.svg?style=for-the-badge
[issues-url]: https://github.com/hffriman/Game-Art-Atelier/issues
[license-shield]: https://img.shields.io/github/license/hffriman/Game-Art-Atelier.svg?style=for-the-badge
[license-url]: https://github.com/hffriman/Game-Art-Atelier/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
