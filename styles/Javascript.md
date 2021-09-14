# theTribe's Javascript code style

theTribe's Javascript code style is base on the [airbnb code style](https://github.com/airbnb/javascript) which is an
already recognized standard with the following changes/additions:

## Indentation

Indentation is done with 4 spaces.

Good:
```
if (true) {
    // Indented
}
```

Bad:
```
if (true) {
  // Indented
}
```

**Why:** While indentation with 2 spaces is often used for javascript, most
other languages use 4 spaces for indentation.

## Functions

### Parenthesis

Always include parenthesis around arguments event when the function takes only
one argument.

Good:
```
[1, 2, 3].map((x) => x * x);
```

Bad:
```
[1, 2, 3].map(x => x * x);
```

**Why:** This is done to keep consistency between all types of functions.

### Return

Always include a new line before return statements except when the return
alone in the block.

Good:
```
function foo() {
    return 'foo';
}
```

Good:
```
function foo() {
    const bar = 'bar';

    return bar;
}
```

Bad:
```
function foo() {
    const bar = 'bar';
    return bar;
}
```

**Why:** this creates more spacing in the function and helps identifying the
return value of the function more easily
