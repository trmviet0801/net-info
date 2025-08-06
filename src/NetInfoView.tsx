import { requireNativeView } from 'expo';
import * as React from 'react';

import { NetInfoViewProps } from './NetInfo.types';

const NativeView: React.ComponentType<NetInfoViewProps> =
  requireNativeView('NetInfo');

export default function NetInfoView(props: NetInfoViewProps) {
  return <NativeView {...props} />;
}
