## learings

- Install

```
npm i react-router-dom react-icons sass axios react-toastify @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

- first setup make assets, components, and styles:make app and colors and import it
- first we have the charkaprovider in main.jsx or index.js file ,wrap around app.jsx
- add colormodeswitcher , with this code

```
import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      pos={'fixed'}
      top={'4'}
      right={'4'}
      zIndex={'overlay'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
```
