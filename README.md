# aws-vite-react-boilerplate

aws-vite-react-boilerplate is a modern boilerplate template code that combines React, AWS, and Vite to provide a streamlined development experience. It aims to accelerate the setup process and enable developers to quickly jumpstart their projects with an efficient and well-integrated stack.

# ✨ Features
- 🚀 **React**: Harness the power of React, a popular JavaScript library for building user interfaces, to create dynamic and interactive web applications.
- ☁️ **AWS**: Leverage AWS services and infrastructure through AWS Amplify to build scalable and secure applications in the cloud.
- 💪 **TypeScript**: Written using TypeScript, enjoy improved code quality, type-safety and a better developer experience.
- ⚡️ **Vite**: Utilize Vite, a fast and efficient build tool, to enhance development speed and optimize the performance of your application.
- 📦 **Test Using Cypress and Jest**: Deliver quality with boilerplate that includes some starter tests to get you started.
- 🎨 **Tailwind CSS Integration**: Develop a sleek and modern user interface design powered by a delightful developer experience.


# 🛠️ Setup and Usage

Follow the steps below to set up and use the **aws-vite-react-boilerplate** boilerplate:

1. Clone this repository to your local machine.

```shell
git clone https://github.com/your-username/project-name.git
```

2. Install the dependencies using your preferred package manager (npm or Yarn).

```shell
# Using npm
npm install

# Using Yarn
yarn install
```

3. Configure the AWS services by setting up the AWS Amplify CLI (See the [docs](https://docs.amplify.aws/cli/) for a full walkthrough.) Once the AWS Amplify CLI is installed, run

```shell
amplify init
```

⚠️ When configuring Amplify, mame sure your build folder is pointed towards dist

This will give you an <code> amplify </code> folder which is necessary to interact with AWS Amplify 

4. Set up Amplify Auth to allow your users to log in. This boilerplate was built using just the Username option, but this can be modified if you require more options such as social media providers.

```shell
amplify add auth
```

6. Start the development server.

```shell
# Using npm`
npm run dev

# Using Yarn
yarn dev
```

5. Open your browser to your running application to see the application running.

# Deploying your frontend 🚢

1. Set up Amplify Hosting. This can be done by running the command:

```shell
amplify hosting add
```

2. Deploy your frontend. 

```shell
amplify publish
```

3. If your app has multiple pages (like in this boilerplate), your users will get an Access Denied as they navigate through your app.

To fix this, go to the Amplify console where your project is maintained and go to **Rewrites and redirects** and add the following line: 

![image](https://github.com/vikadilly/aws-vite-react-boilerplate/assets/24465934/cbe7e8c5-0216-401b-89fb-3b8c1e605e80)

This should fix it! 

# Boilerplate Structure

```shell
├── public/              # Public assets
├── src/                 # Source code
│   ├── components/      # Reusable components
│   ├── pages/           # Application pages
│   ├── services/        # Backend services integration
│   ├── styles/          # CSS styles
│   ├── utils/           # Utility functions and helpers
│   └── App.js            # Application entry point
├── .env                 # Environment variables
└── ...

```

Feel free to adapt the structure based on your project's needs.

# 🤝 Contribution
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request. Together, we can make this project even better.

# 📝 License
This project is licensed under the MIT License.

Happy coding! If you have any questions or need assistance, feel free to reach out to our friendly community. Enjoy building awesome applications with this template! 😄🚀

