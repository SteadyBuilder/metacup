'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ResultRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/chronicle');
  }, [router]);

  return null;
}
