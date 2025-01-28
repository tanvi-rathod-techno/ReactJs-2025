import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import './App.css'; // Make sure your CSS file is imported

// Atom with storage
const theme = atomWithStorage('theme', false);

export default function Page() {
  const [appTheme, setAppTheme] = useAtom(theme);

  const handleClick = () => {
    setAppTheme(!appTheme); // Toggle theme
    console.log('Theme switched:', !appTheme); // Debug state
  };

  return (
    <div className={appTheme ? 'dark' : 'light'}>
      <h1>This is a theme switcher</h1>
      <button onClick={handleClick}>{appTheme ? 'DARK' : 'LIGHT'}</button>
    </div>
  );
}
