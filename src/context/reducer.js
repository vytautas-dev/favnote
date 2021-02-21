import { ADD_ITEM, REMOVE_ITEM } from './actions';

export const initialState = {
  twitters: [
    {
      id: 1,
      title: 'Marian Paździoch',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
      twitterName: 'Marian+Pazdzioch',
    },
    {
      id: 2,
      title: 'Ferdynand Kiepski',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
      twitterName: 'Marian+Pazdzioch',
    },
    {
      id: 3,
      title: 'Arnold Boczek',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
      twitterName: 'Marian+Pazdzioch',
    },
    {
      id: 4,
      title: 'Halina Kiepska',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
      twitterName: 'Marian+Pazdzioch',
    },
    {
      id: 5,
      title: 'Edzio Listonosz',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
      twitterName: 'Marian+Pazdzioch',
    },
    {
      id: 6,
      title: 'Waldemar Kiepski',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
      twitterName: 'Marian+Pazdzioch',
    },
    {
      id: 7,
      title: 'Mariola Kiepska',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
      twitterName: 'Marian+Pazdzioch',
    },
  ],
  notes: [
    {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Como es An Gular?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: 3,
      title: 'Du bist Reactish',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
    },
    {
      id: 4,
      title: 'Reactuj się kto moze!',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10 days',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
    },
    {
      id: 2,
      title: 'You gave React a bad name',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
    },
    {
      id: 3,
      title: 'Nobis doloribus fuga',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
    },
    {
      id: 4,
      title: 'Voluptatibus, dolorum natus.',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
    },
    {
      id: 5,
      title: 'Sed itaque maxime reiciendis voluptatem!',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
    },
    {
      id: 7,
      title: 'ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis doloribus fuga perferendis modi praesentium sequi nesciunt aspernatur rem quibusdam numquam, quis vel! Voluptatibus, dolorum natus. Sed itaque maxime reiciendis voluptatem!',
      articleUrl: 'https://youtube.com/helloroman',
      created: '5 days',
    },
  ],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default appReducer;
