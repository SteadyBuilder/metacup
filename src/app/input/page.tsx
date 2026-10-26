'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InputRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/trials');
  }, [router]);

  return null;
}
