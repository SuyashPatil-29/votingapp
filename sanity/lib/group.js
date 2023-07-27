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
            ]
        }
    ]
}
    ]
}

export default groups;