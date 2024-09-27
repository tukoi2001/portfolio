import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function useDarkMode() {
  const { theme } = useTheme();
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000');
  }, [theme]);

  return { color };
}
