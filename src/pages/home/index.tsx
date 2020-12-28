import React from 'react';
import { Tabs, message } from 'antd';
import { history } from 'umi';
import { MobileOutlined } from '@ant-design/icons';
import styles from './index.less';

const { TabPane } = Tabs;

const Home = () => {
  const handleGo = (type: string) => {
    if (type === 'H5') {
      history.push('/editor?tid=123456');
    } else if (type === 'PC') {
      message.error('该功能暂未开放, 敬请关注...');
    } else {
      history.push('/ide');
    }
  };
  return (
    <div className={styles.homeWrap}>
      <div className={styles.leftArea}>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <MobileOutlined />
                我的H5
              </span>
            }
            key="1"
          >
            正在开发...
          </TabPane>
        </Tabs>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.operation}>
          <div className={styles.card} onClick={() => handleGo('H5')}>
            <MobileOutlined />
            <div>制作H5页面</div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div>
            <p>
              footer
              <span role="img" aria-label="welcome">
                👋
              </span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
