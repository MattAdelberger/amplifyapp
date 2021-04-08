// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ToDoList } = initSchema(schema);

export {
  ToDoList
};