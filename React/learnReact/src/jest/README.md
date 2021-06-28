## 使用Jest编写测试
我们对Hello组件有一些假设。 让我们在此重申一下：

当这样写`<Hello name="Daniel" enthusiasmLevel={3} />时，组件应被渲染成<div>Hello Daniel!!!</div>`。
若未指定enthusiasmLevel，组件应默认显示一个感叹号。
若enthusiasmLevel为0或负值，它应抛出一个错误。
我们将针对这些需求为组件写一些注释。

但首先，我们要安装Enzyme。 Enzyme是React生态系统里一个通用工具，它方便了针对组件的行为编写测试。 默认地，我们的应用包含了一个叫做jsdom的库，它允许我们模拟DOM以及在非浏览器的环境下测试运行时的行为。 Enzyme与此类似，但是是基于jsdom的，并且方便我们查询组件。

让我们把它安装为开发依赖项。
```bash
npm install -D enzyme @types/enzyme react-addons-test-utils
```
注意我们同时安装了enzyme和@types/enzyme。 enzyme包指的是包含了实际运行的JavaScript代码包，而@types/enzyme则包含了声明文件（.d.ts文件）的包，以便TypeScript能够了解该如何使用Enzyme。 你可以在这里了解更多关于@types包的信息。

我们还需要安装react-addons-test-utils。 它是使用enzyme所需要安装的包。

现在我们已经设置好了Enzyme，下面开始编写测试！ 先创建一个文件src/components/Hello.test.tsx，与先前的Hello.tsx文件放在一起。
```tsx
// src/components/Hello.test.tsx

import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1}/>);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
  }).toThrow();
});
```
这些测试都十分基础，但你可以从中得到启发。