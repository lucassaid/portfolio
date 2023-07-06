---
title: 'Personal project: Flash Meet'
date: '2020-09-05'
logo: '/images/project-logos/flash-meet.svg'
---

The motivation for this project was to make an easy to use video conference web app. My goal is to use all the advantages of the modern web to achieve that no one has to download anything. Just the Web.

There are a few other apps that achieve this if the user enters with a computer, but I couldn't find one that works on mobile without having to install an app. Anyways, nothing like struggle with the challenges, learn by suffering, and make it all by myself.

Here I show some of the features I wanted to add and how I did it:

<br>

## No login, but secure
<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/flash-meet.mp4" type="video/mp4">
  </video>
</figure>

My non-negotiable idea was "I want the user to create a room chat as soon as he enters, no login required". The solution was to [anonymously authenticate](https://firebase.google.com/docs/auth/web/anonymous-auth) the user with Firebase. For all the actions they want to perform, their firebase token is checked on the server for authentication.

<br>

## Video calls with WebRTC
<div style="display: flex; align-items:center;">
  <img src="/images/logos/webrtc.svg" style="width: 100px">
  <div style="margin: 0 20px; font-size: 2.5rem;">+</div>
  <img src="/images/logos/openvidu.png" style="width: 160px">
</div> 

This is probably the great challenge of the app. [WebRTC](https://webrtc.org/) is a project to provide web browsers real time communication. I didn't have the time to learn all about the framework, so I used a fantastic "wrapper" called [OpenVidu](https://openvidu.io/). Thanks to it I was able to make the app without the complications of using WebRTC on its own. OpenVidu also helps you to set up a media server where all the calls traffic is going to be processed.

<br>

## Custom server and security
<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/flash-meet-security.mp4" type="video/mp4">
  </video>
</figure>

While Kurento Server manages the calls, I had to make a custom server to manage the security, user roles, actions, and so on. I made it with Node.js. Every action a user wants to perform, is verified and authorized in the server. It also updates the database (Firestore) with the information about the room, its users and configuration.

All the connection with the frontend is made with Socket.io, making it easy to listen to changes and perform the subsequent store updates.

<br>

## More (was) coming soon

I was working to make the app more stable and compatible, to add features such as polls, screen sharing and file sharing. But, since apps like google meet already had everything I was trying to accomplish, I decided to abandon the project. So long Flash, you'll never get to beat Zoom 👊. (please ignore this bad joke and forgive me)
