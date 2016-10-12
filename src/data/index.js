
exports.events = {
  1: { id: 1, name: 'Developer meetup: iOS Brno', description: 'iOS is super hot and widely used among developers.', speaker: 1 },
  2: { id: 2, name: 'Backendisti #2', description: 'Developers will meet', speaker: 2 },
  3: { id: 3, name: 'Karierne podujatie - Night of chances', description: 'Backend Meetup - external', speaker: 2 },
  4: { id: 4, name: 'Reactive conf', description: 'Reactive conf in Bratislava', speaker: 3 },
}

exports.users = {
  1: { id: 1, firstName: 'John', lastName: 'Doe', events: [1] },
  2: { id: 2, firstName: 'Brian', lastName: 'Green', events: [2, 3] },
  3: { id: 3, firstName: 'Joe', lastName: 'Orange', events: [4] },
}
