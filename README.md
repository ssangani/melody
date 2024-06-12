# template-spa-react

Stack

- Built on [Remix](https://remix.run/docs) stack. See [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for Vite speciifc config
- Styled with [Tailwind](https://tailwindcss.com/)
- Can code using [Typescript](https://typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/). Recommend installing prettier plugin such as [VSCode Prettier Plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Using [husky](https://github.com/typicode/husky) extensions to format code on commits
- Unit testing with [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/)
- CI/CD using [Github Actions](https://docs.github.com/en/actions) & [Architect](https://arc.codes/docs/en/get-started/quickstart)

## Development

### Run locally

Run the Vite dev server:

```shellscript
npm run dev
```

### Testing

Run unit tests

```shellscript
npm run test
```

### Linting

```shellscript
npm run lint
```

### Formatting

```shellscript
npm run format
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
