import NextLink, { LinkProps } from 'next/link';
import React from 'react';

export default function Link(props: React.PropsWithChildren<LinkProps>) {
  return <NextLink {...props} />;
}
