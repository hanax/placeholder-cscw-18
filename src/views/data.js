var marked = require('marked');

var publications = [
  {
    title: 'Enabling Building Service Robots to Guide Blind People: A Participatory Design Approach',
    author: 'Shiri Azenkot, Catherine Feng, and Maya Cakmak​',
    conference: 'In Proceedings of the 11th Annual ACM/IEEE International Conference on Human-Robot Interaction 2016 (HRI \'16). To Appear.'
  },
  {
    title: 'How Blind People Interact with Visual Content on Social Networking Services',
    author: 'Violeta Voykinska, Shiri Azenkot, Shaomei Wu, and Gilly Leshed​',
    conference: 'Computer-Supported Cooperative Work and Social Computing (CSCW) 2016. To Appear.'
  }
];

var projects = [
  {
    title: 'Understanding Real World Challenges of People with Low Vision',
    image: '/assets/project/project-1.png',
    desc: 'Our goal is to understand the challenges that low vision people face in order  to design accessible technology solutions. We explore real world challenges such as  way-finding, purchasing a product or using the computer.'
  },
  {
    title: 'Augmented Reality for People with Low Vision',
    image: '/assets/project/project-2.png',
    desc: 'We use augmented reality technologies to provide low vision people equal access to information by leveraging their remaining functional vision. We aim to explore the potentials of vision enhancements on smart glasses for people with low vision and create AR applications on smart glasses to facilitate their daily living activities by providing direct visual feedback.'
  },
  {
    title: 'Always Accessible Interfaces',
    image: '/assets/project/project-3.png',
    desc: 'Mainstream interfaces like touch screens are not always available to people with disabilities, especially when they are traveling outdoors. We build novel Interfaces that enables users to access and input information on the go. We use different sensors and interaction techniques to connect users with up-to-date information.'
  },
  {
    title: 'Interactive Fabrication Tools',
    image: '/assets/project/project-4.png',
    desc: 'Rapidly prototyping technology is coming. We explore how can we use technology like 3D printing to enhance education for blind students. Especially, we design and build tools that can make 3D printed models more interactive and can explain themselves.'
  },
  {
    title: 'Speech with Text Entry and Text Editing',
    image: '/assets/project/project-5.png',
    desc: 'Since the Internet of Things is such a large and upcoming field, it is important to prepare for the emergence of devices of limited or no screens. Speech is a possible solution to compensate for lack of visible output. There is currently technology with speech supporting text entry, but very little supporting text editing. We aim to study how people use speech naturally and developing algorithms that would make text entry and editing more natural.'
  }
].map(function(p) {
  p.desc = marked(p.desc);
  return p;
});

var people = [
  {
    name: 'Shiri Azenkot',
    title: 'Associate Professor',
    link: 'http://www.shiriazenkot.com/',
    image: '/assets/people/people-1.png',
    email: '#',
    twitter: 'shiriazenkot'
  },
  {
    name: 'Sarit Szpiro',
    title: 'Post-doc',
    link: '#',
    image: '/assets/people/people-2.png',
    email: '#',
    twitter: 'rossdmcLachlan'
  },
  {
    name: 'Yuhang Zhao',
    title: 'PhD Student',
    link: 'http://www.yuhangz.com/',
    image: '/assets/people/people-3.jpg',
    email: '#',
    twitter: 'grinbergnir'
  },  
  {
    name: 'Jonathan Knighten',
    title: 'PhD Student',
    link: '#',
    image: '/assets/people/people-4.png',
    email: '#',
    twitter: 'infoxiao'
  },
  {
    name: 'Lei Shi',
    title: 'PhD Student',
    link: 'http://leiatlarge.com/',
    image: '/assets/people/people-5.png',
    email: '#',
    twitter: 'mansumansu'
  }
];

var other_people = [
  {
    name: 'Hannah Xue',
    title: 'MS Student, Connective Media, Cornell Tech',
    link: 'http://hanax.co/'
  },
  {
    name: 'Thomas Yang',
    title: 'MS Student, Connective Media, Cornell Tech',
    link: 'http://thomas-yang.me/'
  }
];

var news = [
  {
    title: 'Lei and Michele won **first prizes** in the **ASSETS 2015 Student**',
    date: '10/30/2015'
  },
  {
    title: 'Research Competition Enjoyed hosting a workshop at the **NYC Media Lab Summit**',
    date: '10/10/2015'
  },
  {
    title: '[Shiri Azenkot](http://www.shiriazenkot.com/) started her position as Assistant Professor at **Cornell Tech**',
    date: '8/18/2014'
  },
].map(function(n) {
  n.title = marked(n.title);
  return n;
});

module.exports = {
  publications: publications,
  projects: projects,
  people: people,
  other_people: other_people,
  news: news,
};
