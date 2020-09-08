import { EventEmitter } from 'events';

class ModalStoreClass extends EventEmitter {
  constructor() {
    super();
  }
}

const ModalStore = new ModalStoreClass();

export default ModalStore;
