import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
// create the database connection
  const dbComm = await openDB('jate', 1);
// create a new database transaction and define it's privileges
  const transact = dbComm.transaction('jate', 'readwrite');
// open the object store
  const store = transact.objectStore('jate');
// pass content into the store
  const req = store.put({ id: 1, value: content });
// confirm the request
  const result = await req;

  console.log('data has been stored', result);

};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  const dbComm = await openDB('jate', 1);

  const transact = dbComm.transaction('jate', 'readonly');  

  const store = transact.objectStore('jate');

  const req = store.getAll();

  const result = await req;

  console.log('result.value', result);
  return result?.value;
}

initdb();
