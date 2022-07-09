# ESLint bug

Okay:

```
$ npm run tsc

> @ tsc ~/eslint-bug
> tsc --noEmit
```

Unexpected:

```
$ npm run lint

> @ lint ~/eslint-bug
> eslint src


~/eslint-bug/src/index.ts
  1:6  warning  'X' is defined but never used  @typescript-eslint/no-unused-vars

✖ 1 problem (0 errors, 1 warning)
```

Was expecting no warnings.
