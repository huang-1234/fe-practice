# Redux

## state管理概述

React本身就是一个适合于创建可组合型视图的库。 但是，React并没有任何在应用间同步数据的功能。 就React组件而言，数据是通过每个元素上指定的props向子元素传递。

因为React本身并没有提供内置的state管理功能，React社区选择了Redux和MobX库。

[Redux](http://redux.js.org/)依靠一个统一且不可变的数据存储来同步数据，并且更新那里的数据时会触发应用的更新渲染。 state的更新是以一种不可变的方式进行，它会发布一条明确的action消息，这个消息必须被reducer函数处理。 由于使用了这样明确的方式，很容易弄清楚一个action是如何影响程序的state。

[MobX](https://mobx.js.org/)借助于函数式响应型模式，state被包装在了可观察对象里，并通过props传递。 通过将state标记为可观察的，即可在所有观察者之间保持state的同步性。 另一个好处是，这个库已经使用TypeScript实现了。

这两者各有优缺点。 但Redux使用得更广泛，因此在这篇教程里，我们主要看如何使用Redux； 但是也鼓励大家两者都去了解一下。

后面的小节学习曲线比较陡。 因此强烈建议大家先去[熟悉一下Redux](http://redux.js.org/)。

## 设置actions

只有当应用里的state会改变的时候，我们才需要去添加Redux。 我们需要一个action的来源，它将触发改变。 它可以是一个定时器或者UI上的一个按钮。

为此，我们将增加两个按钮来控制`Hello`组件的感叹级别。

## 安装Redux

安装`redux`和`react-redux`以及它们的类型文件做为依赖。

```
npm install -S redux react-redux @types/react-redux
```

这里我们不需要安装`@types/redux`，因为Redux已经自带了声明文件（`.d.ts`文件）。

## 定义应用的状态

我们需要定义Redux保存的state的结构。 创建`src/types/index.tsx`文件，它保存了类型的定义，我们在整个程序里都可能用到。

```
// src/types/index.tsx

export interface StoreState {
    languageName: string;
    enthusiasmLevel: number;
}
```

这里我们想让`languageName`表示应用使用的编程语言（例如，TypeScript或者JavaScript），`enthusiasmLevel`是可变的。 在写我们的第一个容器的时候，就会明白为什么要令state与props稍有不同。

## 添加actions

下面我们创建这个应用将要响应的消息类型，`src/constants/index.tsx`。

```
// src/constants/index.tsx

export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;


export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;
```

这里的`const`/`type`模式允许我们以容易访问和重构的方式使用TypeScript的字符串字面量类型。

接下来，我们创建一些actions以及创建这些actions的函数，`src/actions/index.tsx`。

```
import * as constants from '../constants'

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}
```

我们创建了两个类型，它们负责增加操作和减少操作的行为。 我们还定义了一个类型（`EnthusiasmAction`），它描述了哪些action是可以增加或减少的。 最后，我们定义了两个函数用来创建实际的actions。

这里有一些清晰的模版，你可以参考类似[redux-actions](https://www.npmjs.com/package/redux-actions)的库。

## 添加reducer

现在我们可以开始写第一个reducer了！ Reducers是函数，它们负责生成应用state的拷贝使之产生变化，但它并没有*副作用*。 它们是一种*[纯函数](https://en.wikipedia.org/wiki/Pure_function)*。

我们的reducer将放在`src/reducers/index.tsx`文件里。 它的功能是保证增加操作会让感叹级别加1，减少操作则要将感叹级别减1，但是这个级别永远不能小于1。

```
// src/reducers/index.tsx

import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}
```

注意我们使用了*对象展开*（`...state`），当替换`enthusiasmLevel`时，它可以对状态进行浅拷贝。 将`enthusiasmLevel`属性放在末尾是十分关键的，否则它将被旧的状态覆盖。

你可能想要对reducer写一些测试。 因为reducers是纯函数，它们可以传入任意的数据。 针对每个输入，可以测试reducers生成的新的状态。 可以考虑使用Jest的[toEqual](https://facebook.github.io/jest/docs/expect.html#toequalvalue)方法。

## 创建容器

在使用Redux时，我们常常要创建组件和容器。 组件是数据无关的，且工作在表现层。 *容器*通常包裹组件及其使用的数据，用以显示和修改状态。 你可以在这里阅读更多关于这个概念的细节：[Dan Abramov写的*表现层的容器组件*](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)。

现在我们修改`src/components/Hello.tsx`，让它可以修改状态。 我们将添加两个可选的回调属性到`Props`，它们分别是`onIncrement`和`onDecrement`：

```
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
```

然后将这两个回调绑定到两个新按钮上，将按钮添加到我们的组件里。

```
function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}
```

通常情况下，我们应该给`onIncrement`和`onDecrement`写一些测试，它们是在各自的按钮被点击时调用。 试一试以便掌握编写测试的窍门。

现在我们的组件更新好了，可以把它放在一个容器里了。 让我们来创建一个文件`src/containers/Hello.tsx`，在开始的地方使用下列导入语句。

```
import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
```

两个关键点是初始的`Hello`组件和react-redux的`connect`函数。 `connect`可以将我们的`Hello`组件转换成一个容器，通过以下两个函数：

- `mapStateToProps`将当前store里的数据以我们的组件需要的形式传递到组件。
- `mapDispatchToProps`利用`dispatch`函数，创建回调props将actions送到store。

回想一下，我们的应用包含两个属性：`languageName`和`enthusiasmLevel`。 我们的`Hello`组件，希望得到一个`name`和一个`enthusiasmLevel`。 `mapStateToProps`会从store得到相应的数据，如果需要的话将针对组件的props调整它。 下面让我们继续往下写。

```
export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}
```

注意`mapStateToProps`仅创建了`Hello`组件需要的四个属性中的两个。 我们还想要传入`onIncrement`和`onDecrement`回调函数。 `mapDispatchToProps`是一个函数，它需要传入一个调度函数。 这个调度函数可以将actions传入store来触发更新，因此我们可以创建一对回调函数，它们会在需要的时候调用调度函数。

```
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}
```

最后，我们可以调用`connect`了。 `connect`首先会接收`mapStateToProps`和`mapDispatchToProps`，然后返回另一个函数，我们用它来包裹我们的组件。 最终的容器是通过下面的代码定义的：

```
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
```

现在，我们的文件应该是下面这个样子：

```
// src/containers/Hello.tsx

import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
```

## 创建store

让我们回到`src/index.tsx`。 要把所有的东西合到一起，我们需要创建一个带初始状态的store，并用我们所有的reducers来设置它。

```
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});
```

`store`可能正如你想的那样，它是我们应用全局状态的核心store。

接下来，我们将要用`./src/containers/Hello`来包裹`./src/components/Hello`，然后使用react-redux的`Provider`将props与容器连通起来。 我们将导入它们：

```
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
```

将`store`以`Provider`的属性形式传入：

```
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
```

注意，`Hello`不再需要props了，因为我们使用了`connect`函数为包裹起来的`Hello`组件的props适配了应用的状态。