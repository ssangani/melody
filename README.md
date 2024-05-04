# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

## Development

### Run locally

Run the Vite dev server:

```shellscript
npm run dev
```

### Linting

Lint code using ESLint

```shellscript
npm run lint
```

### Formatting

Format code using [Prettier](https://prettier.io/)

```shellscript
npm run format
```

### Testing

Run unit tests:

```shellscript
npm run test
```

Highly recommend installing IDE plugin such as [VSCode Prettier Plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Code will automatically be formatted when committing code changes with help of [Husky](https://github.com/typicode/husky)

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
