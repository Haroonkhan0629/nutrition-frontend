import React, { useEffect } from 'react';

function Layout({ theme, setTheme }) {

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <label class="switch">
        <input type="checkbox"/>
          <span class="slider round" onClick={toggleTheme}></span>
      </label>
    </div>
  );
}

export default Layout;