/*
 * @Author: Suns
 * @Date: 2020-11-04 11:30:41
 * @LastEditTime: 2020-11-04 14:32:19
 */
import React from 'react';
/**
 * HTML5Backend  这个库是必须的，类似于React的合成事件
 * 解决浏览器差异，抽象事件操作为可以处理的state
 **/
import { HTML5Backend } from 'react-dnd-html5-backend';
/**
 * react-dnd 需要react版本 > 16.6
 * React DnD 是一组 React 高阶组件，使用的时候只需要使用对应的 API 将目标组件进行包裹，即可实现拖动或接受拖动元素的功能。
 * 将拖动的事件转换成对象中对应状态的形式，不需要开发者自己判断拖动状态，只需要在传入的 spec 对象中各个状态属性中做对应处理即可。
 **/
import { DndProvider } from 'react-dnd';
// 容器组件
import Container from './Container';
// 容器基本样式
import styles from './index.less';

function BasicLayout(props) {
  return (
    <div className={styles.layout}>
      <DndProvider backend={HTML5Backend}>
        <Container {...props} />
      </DndProvider>
    </div>
  );
}

export default BasicLayout;
