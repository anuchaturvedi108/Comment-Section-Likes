const commentsData = [
  {
    id: 0,
    comment: 'Lorem Ipsum 1',
    likes: 0,
    subComments: [
      {
        id: 1,
        comment: 'Lorem Ipsum 2',
        likes: 1,
        subComments: [
          {
            id: 89,
            comment: 'Lorem Ipsum 89',
            likes: 0,
            subComments: [],
          },
        ],
      },
      {
        id: 2,
        comment: 'Lorem Ipsum 3',
        likes: 0,
        subComments: [],
      },
      {
        id: 3,
        comment: 'Lorem Ipsum 4',
        likes: 0,
        subComments: [
          {
            id: 4,
            comment: 'Lorem Ipsum 5',
            likes: 0,
            subComments: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    comment: 'Lorem ipsum 6',
    likes: 0,
    subComments: [],
  },
];

export default commentsData;
