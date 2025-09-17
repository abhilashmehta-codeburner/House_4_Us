'use client';
import { useEffect, useState } from 'react';

export const useIncrementalLoad = (items, batchSize = 6, delay = 1500) => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    let index = 0;

    const loadBatch = () => {
      setVisibleItems((prev) => [
        ...prev,
        ...items.slice(index, index + batchSize),
      ]);
      index += batchSize;

      if (index < items.length) {
        setTimeout(loadBatch, delay);
      }
    };

    loadBatch();
  }, [items, batchSize, delay]);

  return visibleItems;
};
