import React, { FC } from 'react';

import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const styles = {
  footer: {
    position: 'fixed',
    textAlign: 'center',
    width: '100%',
    bottom: '0',
    backgroundColor: 'transparent',
  },
} as const;

const CustomFooter: FC = () => {
  return (
    <Footer style={styles.footer}>
      <Typography>
        <Text>
          Please, check the electron-react-typescript
          <a
            href="https://github.com/aiden77mori/react-typescript-electron-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            boilerplate
          </a>{' '}
          if you like it!
        </Text>
      </Typography>
    </Footer>
  );
};

export default CustomFooter;
