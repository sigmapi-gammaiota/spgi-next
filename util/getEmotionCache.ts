import { createEmotionCache, EmotionCache } from '@mantine/core';

let cache: EmotionCache | undefined;

export const getEmotionCache = (): EmotionCache => {
  if (!cache) {
    cache = createEmotionCache({
      key: 'mantine',
      prepend: false,
    });
  }
  return cache;
};
