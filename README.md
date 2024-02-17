# Orthodox Calendar KAOV

## Overview

Orthodox Calendar KAOV is a project that provides support for both the Julian Calendar (Old Calendar) and the Revised Julian Calendar (New Calendar) for the years 1925 to 2099. This project is built using Vite, TypeScript, and React, aiming to offer a modern and efficient solution for working with Orthodox calendar dates.

## Features

- **Highlight and Auto-Scrolling**: Highlights and automatically scrolls to the current day.
- **Fixed Feasts**: Displaying Orthodox feast days and holidays.
- **Movable Feasts**: Calculating dates and intervals.
- **Sunday Information**: Displays Tone, Matins, and Liturgy information for Sundays. _(Under Development)_
- **Paschalion**: Displays Paschalion for selected year. _(Under Development)_
- **Fasting Icon**: Indicate fasting status for every day. _(Under Development)_
- **Moon Phase Icon**: Provides the moon phase for every day. _(Under Development)_

## Getting Started

To get started with **orthcalkaov**, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/efraimkaov/orthcalkaov.git
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

## Translating to Another Language

The calendar interface is in Romanian, but it's designed to be easily translatable. All JSON files that need to be translated for another language are located in `/src/assets/lang`. Contributions for translations are welcome!

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Reporting Issues

If you encounter any issues or have suggestions for improvements, please [create an issue](https://github.com/efraimkaov/orthcalkaov/issues) on our issue tracker. We appreciate your feedback!
