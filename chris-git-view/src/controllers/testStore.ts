import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface TestObj {
  test: string;
  setTest: (test: string) => void;
}

const testObj: TestObj = {
  test: 'initialTestString',
  setTest: (test: string) => {
    testObj.test = test;
  }
};

const useTestStore = create<{
  obj: TestObj;
  unrelated: string;
  setObj: (obj: TestObj) => void;
  setUnrelated: () => void;
}>((set) => ({
  obj: testObj,

  unrelated: 'unrelated',

  setObj: (obj: TestObj) => {
    set({ obj });
  },

  setUnrelated: () => {
    set({ unrelated: 'un not related' });
  }
}));

export default useTestStore;

mountStoreDevtool('TestStore', useTestStore);
