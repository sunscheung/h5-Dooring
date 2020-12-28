/*
 * @Author: Suns
 * @Date: 2020-11-04 11:30:41
 * @LastEditTime: 2020-12-15 14:12:32
 */
import BasicLayout from '..';
import renderer from 'react-test-renderer';

describe('Layout: BasicLayout', () => {
  it('Render correctly', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    const wrapper = renderer.create(<BasicLayout />);
    expect(wrapper.root.children.length).toBe(1);
    const outerLayer = wrapper.root.children[0];
    expect(outerLayer.type).toBe('div');
    const title = outerLayer.children[0];
    expect(title.type).toBe('h1');
    expect(title.children[0]).toBe('Yay! Welcome to umi!');
  });
});
