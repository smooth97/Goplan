const initState = {
  projects: [
    { id: '1', title: 'learn redux', content: 'blah blah blah' },
    { id: '2', title: 'exercise', content: 'blah blah blah blah' },
    { id: '3', title: 'new project', content: 'blah blah blah' },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
