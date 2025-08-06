import { NativeModule, requireNativeModule } from 'expo';

import { NetInfoModuleEvents } from './NetInfo.types';

declare class NetInfoModule extends NativeModule<NetInfoModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<NetInfoModule>('NetInfo');
