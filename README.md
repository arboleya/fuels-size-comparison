This is what each class compiles to in isolation.

```
.
├── README.md
├── package.json
├── rollup.config.mjs
├── src
│   ├── contract.ts
│   ├── predicate.ts
│   ├── provider.ts
│   ├── script.ts
│   └── wallet.ts
└── tsconfig.json
```

```console
$ pnpm build
> pnpm tsc && rollup -c rollup.config.mjs && du -sh dist/*
```

```
264K	dist/contract.js
 80K	dist/contract.js.gz
256K	dist/predicate.js
 76K	dist/predicate.js.gz
252K	dist/provider.js
 76K	dist/provider.js.gz
264K	dist/script.js
 80K	dist/script.js.gz
252K	dist/wallet.js
 76K	dist/wallet.js.gz
```
