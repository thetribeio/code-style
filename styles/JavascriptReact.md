# theTribe's Javascript with React code style

theTribe's Javascript with React code style is base on our [javascript code style](./Javascript.md) and the
[airbnb code style](https://github.com/airbnb/javascript) with the following changes/additions:

## Function components

Function components should be declared as arrow functions.

Good:
```
import React from 'react';

const Component = (props) => (
    <div />
);
```

Bad:
```
import React from 'react';

function Component (props) {
    return <div />;
}
```

**Why:** This is enforced for consistency in all components declarations.
