export const posts = [
  {
    id: 1,
    user: {
      name: 'Marina Valentine',
      badge: 24,
      profileImage: 'avatar/01.jpg'
    },
    createdDate: '2020-08-25 01:00:00',
    pinned: true,
    text: `Hi to all! Remember that today I'll be livestreaming along with <a href="profile-timeline.html">@NekoBebop</a> the new character of the brand new Xenowatch patch "Anya Darkness". See you there!`,
    video: {
      link: 'https://www.twitch.tv/',
      img: 'cover/06.jpg',
      title: `<span class="bold">GameHuntress</span> on <span class="highlighted">Twitch</span>`,
      text: 'Watch the GameHuntress play all the greatest games for both new and old consoles!. Join her in this epic quest!',
      meta: 'twitch.tv'
    },
    tags: [
      {
        name: 'Stream',
        tag: 'steam',
        link: '/newsfeed'
      },
      {
        name: 'Xenowatch',
        tag: 'xenowatch',
        link: '/newsfeed'
      },
      {
        name: 'Gaming',
        tag: 'gaming',
        link: '/newsfeed'
      },
      {
        name: 'Twitch',
        tag: 'twitch',
        link: '/newsfeed'
      }
    ],
    reactions: {
      'happy': ['Matt Parker','Destroy Dex', 'The Green Goo'],
      'love': ['Sandra Strange'],
      'like': ['Neko Bebop', 'Nick Grissom', 'Sarah Diamond', 'Jett Spiegel', 'Marcus Jhonson', 'Jane Rodgers', 'John Doe', 'Jack Randall']
    },
    participants: [
      {
        name: 'Matt Parker',
        img: 'avatar/09.jpg'
      },
      {
        name: 'Destroy Dex',
        img: 'avatar/08.jpg'
      },
      {
        name: 'The Green Goo',
        img: 'avatar/12.jpg'
      },
      {
        name: 'Sandra Strange',
        img: 'avatar/16.jpg'
      },
      {
        name: 'Nick Grissom',
        img: 'avatar/06.jpg'
      }
    ],
    comments: 3,
    shares: 0
  }
]