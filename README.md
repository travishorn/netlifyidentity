# Netlify Identity

Just playing with Netlify's Identity feature.

## Installation

Clone the repository

```
git clone https://github.com/travishorn/netlifyidentity.git
```

Change into the directory

```
cd netlifyidentity
```

Install dependencies (npm required)

```
npm install
```

## Development

You'll need this site to be connected to a Netlify site.

1. Push your repository to BitBucket, GitHub, or GitLab.
2. Create a new site on Netlify
3. Connect the remote repository to the site

Once it's connected, run the development environment locally

```
npm run dev
```

A hot-reloading development server will be listening at http://localhost:1234

When you first attempt to sign up or log in, you'll be asked to enter the
Netlify URL at which your site is hosted.

## Deploy

After connecting your remote repository to Netlify, your site will be
automatically deployed and all pushes to master will continuously deploy.

## Usage

Either in the development environment (local) or on the public Netlify URL,
visit the site and click **Sign up**. Create an account and verify your email
address. Once you are signed up, you can **Log in**. While logged in, the
**Check Identity** button will display the details of your identity.

## License

MIT License

Copyright (c) 2019 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
