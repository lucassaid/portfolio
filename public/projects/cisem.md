---
title: 'S.O.S App'
date: '2020-09-06'
---

The government of San Juan, Argentina implemented in 2020 a security system called "Safe zones". These are "totems" that allow direct communication with the police, have relevant information for emergencies, and more. They placed these safe zones in different points of the city, and nearby roads. 

![cisem](/images/cisem_totem_2.jpeg)

<br>

## The S.O.S app

Each totem has a touchable screen with an "S.O.S App", which is a React app, connected vía socket.io to a raspberry inside the totem. Using the app, a user can call 911, see relevant information like nearby hospitals, and even request for a first aid box placed in the back of the totem.

This app is currently being used at the 150 totems placed in the province.

<figure class="video_container" style="width: 100%; max-width: 550px; margin: 20px 0;">
  <video muted="true" autoplay="true" loop style="width: 100%; border-radius: 5px;">
    <source src="/videos/cisem-demo.mp4" type="video/mp4">
  </video>
</figure>

<br>

## Tools used:

- [React router](https://reactrouter.com/web/guides/quick-start)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer motion](https://www.framer.com/motion/)
- [Socket.io](https://socket.io)
- [SWR](https://www.npmjs.com/package/swr)

