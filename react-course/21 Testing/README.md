# Unit Testing with React and Vite

## Installation

Install [vitest](https://vitest.dev/), [jsdom](https://github.com/jsdom/jsdom) and the [react-testing-library](https://github.com/testing-library/react-testing-library).

```bash
npm install --save-dev \
  vitest \
  jsdom \
  @testing-library/react \
  @testing-library/dom \
  @testing-library/jest-dom \
  @testing-library/user-event
```

jsdom is a a JavaScript implementation of various web standards, for use with Node.js. In general, the goal of the
project is to emulate enough of a subset of a web browser to be useful for testing and scraping real-world web
applications.

The React Testing Library is a very lightweight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices.

Add this script to your `package.json` file:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

Copy this [vitest.config.ts](./vitest.config.ts) and this [vitest.setup.ts](./vitest.setup.ts) file into your project
root.

Extend your `tsconfig.node.json` file:

```jsonc
{
  "compilerOptions": {
    // Enable jsx in test folder
    "jsx": "react-jsx",

    // https://github.com/testing-library/jest-dom#with-vitest
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  },
  "include": ["vite.config.ts", "vitest.*.ts", "test"]
}
```

## Create and Run Tests

We assume that we have a Greeting component, which we want to test:

```tsx
// ./src/components/Greeting.tsx
export function Greeting({ name }: { name: string }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>It's good to see you!</p>
    </div>
  );
}
```

We create a test for this component:

```ts
// ./test/components/Greeting.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Greeting } from "../../src/components/Greeting";

describe("Greeting", () => {
  it("should render the correct greeting", () => {
    render(<Greeting name="John" />);

    expect(screen.getByRole("heading")).toHaveTextContent("Hello, John!");
    expect(screen.getByRole("paragraph")).toHaveTextContent("It's good to see you!");
  });
});
```

We execute `npm test` to run the test.

## More Information

* [React Testing Library Introduction](https://testing-library.com/docs/react-testing-library/example-intro)
* [React Testing Library screen queries](https://testing-library.com/docs/queries/about)
* [React Testing Library jest-dom matchers](https://testing-library.com/docs/ecosystem-jest-dom)
* [React Testing Library user-event](https://testing-library.com/docs/user-event/intro/#writing-tests-with-userevent)
