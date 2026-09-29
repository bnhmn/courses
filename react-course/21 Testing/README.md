# Unit Testing with React and Vite

## Setup

### Requirements

Install [vitest](https://vitest.dev/), [jsdom](https://github.com/jsdom/jsdom) and the
[react-testing-library](https://github.com/testing-library/react-testing-library):

```bash
npm install --save-dev vitest jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event
```

jsdom is a a JavaScript implementation of various web standards, for use with Node.js. In general,
the goal of the project is to emulate enough of a subset of a web browser to be useful for testing
and scraping real-world web applications.

The React Testing Library is a very lightweight solution for testing React components. It provides
light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages
better testing practices.

### package.json

Add this script to your `package.json` file:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

### tsconfig.node.json

Extend your `tsconfig.node.json` file:

```jsonc
{
  "compilerOptions": {
    // Enable jsx in test folder
    "jsx": "react-jsx",

    // https://github.com/testing-library/jest-dom#with-vitest
    "types": ["vitest/globals", "@testing-library/jest-dom"],
  },
  "include": ["vite.config.ts", "vitest.*.ts", "test"],
}
```

### vite.config.ts

Save this [vite.config.ts](./vite.config.ts) file in your project root:

```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
```

### vitest.setup.ts

Save this [vitest.setup.ts](./vitest.setup.ts) file in your project root.

```ts
// https://github.com/testing-library/jest-dom#with-vitest
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// https://testing-library.com/docs/react-testing-library/setup/#auto-cleanup-in-vitest
afterEach(() => {
  cleanup();
});
```

## Create and Run Tests

### Simple test

We assume that we have a Greeting component, which we want to test:

```tsx
// src/components/Greeting.tsx
export function Greeting({ name }: { name: string }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>It's good to see you!</p>
    </div>
  );
}
```

Create a test for this component:

```tsx
// test/components/Greeting.test.tsx
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

and execute `npm test` to run the test.

### Test with user interaction

```tsx
// test/App.test.tsx
import { describe, expect, it } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import App from "../src/App.tsx";

describe("App", () => {
  it("should render the app", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button"));

    expect(screen.queryAllByRole("heading")[0]).toHaveTextContent("Get started");
  });
});
```

## More Information

- [React Testing Library Introduction](https://testing-library.com/docs/react-testing-library/example-intro)
- [React Testing Library screen queries](https://testing-library.com/docs/queries/about)
- [React Testing Library jest-dom matchers](https://testing-library.com/docs/ecosystem-jest-dom)
- [React Testing Library user-event](https://testing-library.com/docs/user-event/intro/#writing-tests-with-userevent)
