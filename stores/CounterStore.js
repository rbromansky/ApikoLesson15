import { types as t } from 'mobx-state-tree';

const CounterStore = t
  .model('CounterStore', {
    count: t.optional(t.integer, 0),
  })
  .actions((store) => ({
    increment() {
      store.count += 1;
    },
    decrement() {
      store.count -= 1;
    }  
  }));

const counterStore = CounterStore.create({});

export default counterStore;