const groups = {
    name: 'groups',
    type: 'document',
    title: 'Groups',
    fields: [
      {
        name: 'leaders',
        type: 'array',
        title: 'Leaders',
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
}

export default groups;