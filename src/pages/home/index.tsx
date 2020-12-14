import React from 'react';
import { Tabs, message, Button } from 'antd';
import { history } from 'umi';
import {
  MobileOutlined,
  ConsoleSqlOutlined,
  GithubOutlined,
  CodeOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
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
          <TabPane
            tab={
              <span>
                <ConsoleSqlOutlined />
                我的大屏
              </span>
            }
            key="2"
          >
            正在开发...
          </TabPane>
          <TabPane
            tab={
              <span>
                <IdcardOutlined />
                我的可视化
              </span>
            }
            key="3"
          >
            正在开发...
          </TabPane>
        </Tabs>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.logoTip}>
          <div className={styles.logo}>
            <span className={styles.logoText} title="H5-Dooring可视化编辑器">
              low code
            </span>
          </div>
          <p style={{ display: 'inline-block', width: '520px', fontSize: '16px', lineHeight: '2' }}>
            致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。 技术栈以react为主，
            后台采用nodejs开发。
          </p>
        </div>
        <div className={styles.operation}>
          <div className={styles.card} onClick={() => handleGo('H5')}>
            <MobileOutlined />
            <div>制作H5页面</div>
          </div>
          <div className={styles.card} onClick={() => handleGo('online')}>
            <CodeOutlined />
            <div>在线编程</div>
          </div>
          <div className={styles.card} onClick={() => handleGo('PC')}>
            <ConsoleSqlOutlined />
            <div>制作可视化大屏</div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div>
            <a href="https://github.com/MrXujiang/h5-Dooring">
              <GithubOutlined />
            </a>
            <p>
              Welcome to dooring
              <span role="img" aria-label="welcome">
                👋
              </span>
            </p>
            <p>
              <Button type="primary">
                <a href="https://www.oschina.net/p/h5-dooring">为dooring投票</a>
              </Button>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
