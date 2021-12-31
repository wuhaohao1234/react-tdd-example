# 使用 React test Library 和 Jest 进行测试驱动开发 (TDD)

> 如果我们使用create-react-app启动我们的应用程序，我们不需要添加任何包安装。

## 参考教程

1. https://www.robinwieruch.de/react-testing-library/

2. https://testing-library.com/docs/react-testing-library/intro/

3. https://medium.com/make-it-heady/test-driven-development-tdd-with-react-testing-library-jest-906085418f

## 开始测试之前

1. it or test: 这基本上描述了测试。它需要两个参数，例如测试名称和保存整个测试的函数。

2. expect: 通过测试所需的条件。预期条件会将接收到的参数与匹配器进行比较。

3. matcher: 与您期望的情况相对应的功能。

4. render：渲染给定组件的函数，该组件返回一个 React 元素

## 核心

```jsx
import React from 'react';

function App() {
  const [search, setSearch] = React.useState('');

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
}

function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
```

上述react组件到文档中

```html
<body>
  <div>
    <div>
      <div>
        <label
          for="search"
        >
          Search:
        </label>
        <input
          id="search"
          type="text"
          value=""
        />
      </div>
      <p>
        Searches for
        ...
      </p>
    </div>
  </div>
</body>
```

## 选择elements

```js
import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    expect(screen.getByText('Search:')).toBeInTheDocument();
  });
});
```

## 搜索类型

```js
import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
```

```js
LabelText的： getByLabelText：<label for="search" />
占位符文本：getByPlaceholderText：<input placeholder="Search" />
AltText： getByAltText：<img alt="profile" />
显示值： getByDisplayValue：<input value="JavaScript" />
```

