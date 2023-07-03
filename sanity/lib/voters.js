// schema.js

const voters = {
    name: 'voters',
    type: 'document',
    title: 'Voters',
    fields: [
      {
        name: 'members',
        type: 'array',
        title: 'Members',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                type: 'image',
                title: 'Image'
              },
              {
                name: 'name',
                type: 'string',
                title: 'Name'
              },
              {
                name: 'votes',
                type: 'number',
                title: 'Votes',
                initialValue: 0
              }
            ]
          }
        ]
      }
    ]
  };
  
  export default voters;