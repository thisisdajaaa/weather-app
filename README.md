# weather-app

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Recommended Workflow](#recommended-workflow)
- [Naming Convention](#naming-convention)

## Prerequisites

- [NodeJS](https://nodejs.org/)
- React Native
- TypeScript
- Expo
- Expo app (iOs or Android)

## Getting Started

```bash
# Install dependencies for the host
yarn

# Start the application
yarn dev
```

## Commit Changes

```add
# Identify changes you want to commit
git add .

```commit
# Commit changes you want to commit
git commit

```push
# Push changes to remote branch if changes has been finalized
git push origin ${branchName}
```

This page should automatically open in your browser. You can choose to run it in your preferred platform by selecting the options on the left. You can also scan the QR code using the Expo app on iOS and android to execute it on your mobile device.
![image](https://user-images.githubusercontent.com/9653764/97178203-236f4d80-17d2-11eb-9b85-c6feb0b505ec.png)

## Project Structure

| Name                          | Description                                                  |
| ----------------------------- | ------------------------------------------------------------ |
| **assets**/\*                 | All the static assets needed for the application.            |
| **src/api**/\*                | Axios instances for the weather and location API's           |
| **src/components**/\*         | All app wise common components                               |
| **src/hooks**/\*              | Custom react hooks                                           |
| **src/navigation**/\*         | Define your navigation and routings here                     |
| **src/redux**/\*              | Redux store that stores all global state of the app          |
| **src/screens**/\*            | Screens made out of components                               |
| **src/types**/\*              | Common and global types                                      |
| **src/styles**/\*             | Common styles                                                |
| **src/utils**/\*              | Utility functions                                            |
| .env.sample                   | Project environment variables                                |
| .eslintignore                 | Folder and files ignored by eslint                           |
| .gitignore                    | Folder and files ignored by git.                             |
| app.json                      | App configurations by expo                                   |
| App.tsx                       | Entry point for the applicatinon                             |
| babel.config.js               | Babel configuration                                          |
| package.json                  | NPM dependencies.                                            |
| package-lock.json             | Contains exact versions of NPM dependencies in package.json. |
| tsconfig.json                 | Contains typescript configuration for this project.          |

## Core File Changes

Every time you have changes in the core files e.g. env, app.json, package.json etc. just restart and run expo r -c to reset cache in order to reflect changes

## Recommended Workflow

1. Create the common component inside the components directory ( if needed )
2. Create the screen
3. Add redux configuration ( if needed )
4. Add the screen in navigation
5. Check if screen is working as expected

## Sample Environment File

This project contains a `.env.sample` file that you can use. Rename it to `.env` and modify the contents to your needs. After modifying dotenv values always perform expo r -c to clear cache and pick up core file changes. Also update the values in *.d.ts.

```dotenv
OPEN_WEATHER_MAP_API=value
AUTH0_CLIENT_ID=value
```

```*.d.ts
declare module "@env" {
  export const OPEN_WEATHER_MAP_API: string;
  export const AUTH0_CLIENT_ID: string;
}
```

```usage
import { OPEN_WEATHER_MAP_API, AUTH0_CLIENT_ID } from "@env";
```

### Navigation

The navigation defines the routing/relationship between the screens. For more info, refer to this [documentation.](https://reactnavigation.org/docs/navigating)

## Naming Convention

### For files and folders

Use `kebab-case` for folders that are not components or screens and `camelCase` for variables within files and for files and folders that are components or screens. The only exception would be the component/screen names which should be `PascalCase`.

```
// File name is EditProfile.tsx

const EditProfileScreen: React.FC = () => {
  const propName = 'Sample'
  return <EditProfile name={propName} />;
};
```

For example:

- user`-service`.ts
- user`-model`.ts
- bcrypt`-util`.ts

For example:

- Home
- Landing
- Weather
