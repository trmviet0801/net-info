import * as React from 'react';

import { NetInfoViewProps } from './NetInfo.types';

export default function NetInfoView(props: NetInfoViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
