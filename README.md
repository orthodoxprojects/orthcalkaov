# Orthodox Calendar KAOV

## !!! ATTENTION !!!

This project will be moved to the [ocma](https://github.com/orthodoxprojects/ocma) repository and will be rewritten from scratch. Also, all the logic will be moved to the [ocma-data](https://github.com/orthodoxprojects/ocma-data) repository, a static API that can be used online or completely offline.

## Overview

OrthCalKAOV is an application that provides support for both the Old Calendar (Julian Calendar) and the New Calendar (Revised Julian Calendar) for the years 1925 to 2099. This application is built using Vite, TypeScript, and React, aiming to offer a modern and efficient solution for working with Orthodox calendar dates.

## Features

- **Fixed Feasts**: Displaying Saints and Feasts. _(Under Development)_
- **Movable Feasts**: Calculating and displaying Feasts. _(Under Development)_
- **Sunday Information**: Displays Gospel, Epistle, Mode and Eothinon information for Sundays. _(Under Development)_
- **Paschalion**: Displays Pascha date for selected year.
- **Fasting Icon**: Indicate fasting status for every day. _(Under Development)_
- **Moon Phase Icon**: Provides the moon phase for every day.
- **Highlight and Auto-Scrolling**: Highlights and automatically scrolls to the current day.

## Getting Started

To get started with **orthcalkaov**, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kolitsoy/orthcalkaov.git
   ```

2. **Install dependencies:**

   ```bash
   cd orthcalkaov
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the app.**

## Web Version

Access the web version of the application [here](https://orthodoxprojects.github.io/orthcalkaov/).

## Translating to Another Language

The calendar interface is in English, Romanian and Greek, but it's designed to be easily translatable. All JSON files that need to be translated for another language are located in `/src/assets/lang`. Contributions for translations are welcome!

## To-Do List

- Develop desktop and mobile applications for OrthCalKAOV.

## Contributing

Contributions are welcome! If you'd like to contribute to this application, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License

This application is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Reporting Issues

If you encounter any issues or have suggestions for improvements, please [create an issue](https://github.com/orthodoxprojects/orthcalkaov/issues) on our issue tracker. We appreciate your feedback!
