import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class ToDoList {
  readonly id: string;
  readonly todo?: string;
  constructor(init: ModelInit<ToDoList>);
  static copyOf(source: ToDoList, mutator: (draft: MutableModel<ToDoList>) => MutableModel<ToDoList> | void): ToDoList;
}