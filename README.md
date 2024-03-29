﻿# Taxi: A Blog Template 🚕

<img src="https://img.shields.io/website?up_message=online&amp;url=https%3A%2F%2Ftaxi-blog-template.netlify.app" alt="Website status"> <img src="https://img.shields.io/github/repo-size/carloswunsche/taxi-blog-template" alt="Repo size"> <img src="https://img.shields.io/github/languages/top/carloswunsche/taxi-blog-template" alt="Prominent language">


Taxi is a simplistic template aimed for blogging, made with the power of 11ty, Nunjucks and Netlify CMS.

## Live preview

Access the live preview [following this link.](https://taxi-blog-template.netlify.app)

## Features
* Content manager via Netlify CMS.
* Easy-to-work-with Markdown posts.
* Scalable thanks to Nunjucks templates.
* Responsive design

## Build script

Simply run `npx eleventy --serve` to get the output on the /_site directory.

## Usage

### Content Manager

Access the Content Manager via the /admin directory ~~to add or remove posts.~~
**Update:** This feature is no more for public use, so you'll have to authenticate using Netlify Identity or add the posts manually before building.

### About posts 

* Posts are written in Markdown and must be located under /src/blog/
* There are a lot of available variables to use, check provided posts as examples.
* You can mark a post as "top" and it will appear in the hero section by declaring `top` as `true`
* An horizontal rule (`---`) can be used in the post body to indicate where the post excerpt ends.


### Notes:
* Use the included config.yml and index.html inside the /admin directory to set up Netlify CMS properly with an Netlify Identity and Github Gateway. Start by reading [this](https://www.netlifycms.org/docs/backends-overview/).
* Don't delete the /admin directory, as the config files won't be created by the 11ty script.

## Screenshot
![Preview Image](preview.png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Credits
* Made by [Carlos Wunsche](https://carloswunsche.github.io) with the aid of:
  * [11ty / Eleventy](https://www.11ty.dev/)
  * [Nunjucks](https://mozilla.github.io/nunjucks/)
  * [Netlify CMS](https://www.netlifycms.org/)
  * [Unsplash](https://unsplash.com/)


## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
