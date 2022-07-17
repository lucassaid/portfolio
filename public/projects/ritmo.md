---
title: 'My work at Ritmo'
date: '2022-07-10'
logo: '/images/project-logos/ritmo.svg'
---

Ritmo is a sound branding startup from Argentina focused on improve the consumer experience at each point of sale of our clients. We carefully choose the music that best represent a brand, and provide them with the necessary hardware and software to play it.

[Ritmo homepage →](http://ritmostudio.com/)

We started maintaining a Vue app with a backend in node.js. We successfully released it to production, but then we decided to separate the frontend app in two, using React. This way we can have a smaller and maintainable app for the player and one for the dashboard. I also moved the entire backend to Typescript in one night and I don't have any regrets.

<br>

## Player

<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/ritmo_player.mp4" type="video/mp4">
  </video>
</figure>

This is the app that our clients have running in their branches. It downloads the music assigned to the client, synchronizes the playlists, ads, schedules, and all it needs to work. 

The goal here was to craft beautiful components, trying to make them as composable as possible. I took in mind that the app was going to be running for lots of hours nonstop, so it had to handle the changes from the backend in realtime and without the intervention of a human.

I created this app using Typescript, CRA, React Router, Tailwind, Storybook, Recoil (basically my dream stack), and Pouchdb for offline features.

Probably the most complex part regarding this app is that it has to handle scheduled events that can change over time. For example, an administrator (from the dashboard) can schedule the start of some playlists at a certain time, and the end of that "block" some hours later. The player listens to these changes with PouchDB and sets cron functions accordingly. This allows the app to work in "automatic mode" even if it lost connection, using the last schedule received.

<br>

## Dashboard

<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/ritmo_dashboard.mp4" type="video/mp4">
  </video>
</figure>

This is where the administrators can manage clients, branches, scheduling, and more. Also the managers can login here to check the monitoring of the branches and upload their ads.

We created this app using Typescript, CRA, React Router, Tailwind, Recoil, and vercel's SWR library (my nirvana-level stack, because now it also has SWR).

This app was really fun to make. Each of those libraries make the frontend development really easy, resulting in a great user experience, and a code that is actually maintainable and nice to read. You can see how navigation works blazing fast after SWR caches the requests.

<br>

### Scheduler

<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/ritmo_dashboard_schedule.mp4" type="video/mp4">
  </video>
</figure>

One of the fun parts of the dashboard is the scheduler. Here you can schedule the music that will play for a specific client. I created a component for this, called [Headless Agenda](https://github.com/lucassaid/react-headless-agenda), which I made open source later. I also enjoyed (no ironically) validating these schedule on the backend side: It creates fakes dates and checks all the other blocks to prevent overlaps, using date-fns.