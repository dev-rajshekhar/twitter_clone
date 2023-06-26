interface Tweet {
  id: number;
  username: string;
  content: string;
  media?: string;
  profileImage: string;
  timestamp: Date;
  likes: number;
  retweets: number;
  userProfile: UserProfile;
  comments: Comment[];
  hashtags: Hashtag[];
}
interface Hashtag {
  id: number;
  tag: string;
}

interface Comment {
  id: number;
  username: string;
  content: string;
  timestamp: Date;
}

interface UserProfile {
  id: number;
  name: string;
  bio: string;
  profileImage: string;
}

export const tweets: Tweet[] = [
  {
    id: 1,
    username: 'JohnDoe',
    content: 'This is the first tweet',
    media:
      'https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    profileImage:
      'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=912&q=80',
    timestamp: new Date(),
    likes: 10,
    retweets: 5,
    userProfile: {
      id: 1,
      name: 'John Doe',
      bio: 'Software Engineer',
      profileImage:
        'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=912&q=80',
    },
    comments: [
      {
        id: 1,
        username: 'JaneDoe',
        content: 'Great tweet!',
        timestamp: new Date(),
      },
      {
        id: 2,
        username: 'Alice',
        content: 'Nice post!',
        timestamp: new Date(),
      },
    ],
    hashtags: [
      {
        id: 2,
        tag: 'funny',
      },
      {
        id: 2,
        tag: 'enjoyed',
      },
    ],
  },
  {
    id: 2,
    username: 'JaneDoe',
    content: 'Check out this cool article',
    media:
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    profileImage:
      'https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    timestamp: new Date(),
    likes: 15,
    retweets: 3,
    userProfile: {
      id: 2,
      name: 'Jane Doe',
      bio: 'Web Developer',
      profileImage:
        'https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    },
    comments: [
      {
        id: 1,
        username: 'JohnDoe',
        content: 'Interesting read!',
        timestamp: new Date(),
      },
      {
        id: 2,
        username: 'Bob',
        content: 'Thanks for sharing!',
        timestamp: new Date(),
      },
    ],
    hashtags: [],
  },
  {
    id: 3,
    username: 'Alice',
    content: 'Hello Twitter!',
    profileImage:
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    timestamp: new Date(),
    likes: 7,
    retweets: 2,
    userProfile: {
      id: 3,
      name: 'Alice',
      bio: 'Designer',
      profileImage:
        'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    },
    comments: [],
    hashtags: [],
  },
  {
    id: 4,
    username: 'Bob',
    content: 'Tweeting from my phone',
    media:
      'https://images.pexels.com/photos/12334692/pexels-photo-12334692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    profileImage:
      'https://images.unsplash.com/photo-1608889468310-1e84217c0f8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    timestamp: new Date(),
    likes: 12,
    retweets: 4,
    userProfile: {
      id: 4,
      name: 'Bob',
      bio: 'Photographer',
      profileImage:
        'https://images.unsplash.com/photo-1608889468310-1e84217c0f8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    },
    comments: [
      {
        id: 1,
        username: 'Alice',
        content: 'Nice photo!',
        timestamp: new Date(),
      },
    ],
    hashtags: [],
  },
  {
    id: 5,
    username: 'Eve',
    content: 'Just joined Twitter!',
    profileImage: 'https://example.com/profile5.jpg',
    timestamp: new Date(),
    likes: 2,
    retweets: 1,
    userProfile: {
      id: 5,
      name: 'Eve',
      bio: 'Student',
      profileImage: 'https://example.com/profile5.jpg',
    },
    comments: [],
    hashtags: [],
  },
  {
    id: 6,
    username: 'Charlie',
    content: 'Working on a new project',
    media:
      'https://images.pexels.com/photos/15434151/pexels-photo-15434151/free-photo-of-light-city-sky-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    profileImage:
      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    timestamp: new Date(),
    likes: 9,
    retweets: 3,
    userProfile: {
      id: 6,
      name: 'Charlie',
      bio: 'Developer',
      profileImage:
        'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    },
    comments: [],
    hashtags: [],
  },
  {
    id: 7,
    username: 'Grace',
    content: 'Feeling inspired today',
    profileImage:
      'https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    timestamp: new Date(),
    likes: 5,
    retweets: 2,
    userProfile: {
      id: 7,
      name: 'Grace',
      bio: 'Writer',
      profileImage:
        'https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    },
    comments: [],
    hashtags: [],
  },
  {
    id: 8,
    username: 'David',
    content: 'Just finished a great book',
    profileImage:
      'https://images.unsplash.com/photo-1608889468310-1e84217c0f8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    timestamp: new Date(),
    likes: 6,
    retweets: 1,
    userProfile: {
      id: 8,
      name: 'David',
      bio: 'Book Lover',
      profileImage:
        'https://images.unsplash.com/photo-1608889468310-1e84217c0f8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    },
    comments: [],
    hashtags: [],
  },
  {
    id: 9,
    username: 'Sarah',
    content: 'Excited for the weekend!',
    profileImage:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    timestamp: new Date(),
    likes: 3,
    retweets: 1,
    userProfile: {
      id: 9,
      name: 'Sarah',
      bio: 'Travel Enthusiast',
      profileImage:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    comments: [],
    hashtags: [],
  },
  {
    id: 10,
    username: 'Michael',
    content: 'Celebrating a milestone today',
    media:
      'https://images.pexels.com/photos/7210692/pexels-photo-7210692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    profileImage:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    timestamp: new Date(),
    likes: 11,
    retweets: 6,
    userProfile: {
      id: 10,
      name: 'Michael',
      bio: 'Entrepreneur',
      profileImage:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    comments: [
      {
        id: 1,
        username: 'JaneDoe',
        content: 'Congratulations!',
        timestamp: new Date(),
      },
    ],
    hashtags: [],
  },
];
