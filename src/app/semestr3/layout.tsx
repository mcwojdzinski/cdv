import React from 'react';

export default function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='prose mx-auto max-w-2xl pb-10'>{children}</div>;
}
