import firebase from 'firebase/app';

export const createProject = project => {
  return (dispatch, getState) => {
    // async call to database
    firebase
      .firestore()
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Dan',
        authorLastName: 'Jooo',
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        // callback 위 작업이 실행되면 어떤 작업을 할 것인지
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT', err });
      });
  };
};
