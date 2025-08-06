import { requireNativeModule } from 'expo';
import NetInfoType from './NetInfo.types';

export default requireNativeModule<NetInfoType>("NetInfo")
