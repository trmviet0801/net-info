import { registerWebModule, NativeModule } from 'expo';

import { NetInfoModuleEvents } from './NetInfo.types';

class NetInfoModule extends NativeModule<NetInfoModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(NetInfoModule, 'NetInfoModule');
