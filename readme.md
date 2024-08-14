# Color Palette Image Generator

Color Palette Image Generator is a Node.js-based tool developed by **Wick Studio** that allows users to create visually appealing color palette images from predefined groups of colors. This tool is perfect for designers, developers, or anyone who needs to generate color palettes quickly and easily.

## Features

- **Predefined Color Groups**: Choose from various color groups like Greens, Purples, and more.
- **Customizable**: Add your own color groups or modify existing ones in the `colors.js` file.
- **Automatic Node.js Installation**: The `install.bat` script checks for Node.js and installs it if not found.
- **Easy-to-Use Interface**: Simple terminal-based interface for selecting color groups and adding a custom copyright name.
- **High-Resolution Output**: Generates high-resolution images with the selected color palette.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/wickstudio/color-palette-image-generator.git
    cd color-palette-image-generator
    ```

2. **Run the install script**:

    - On Windows:
        ```bash
        install.bat
        ```

    This script will check if Node.js is installed, install it if necessary, and then install all required npm packages.

## Usage

1. **Start the tool**:

    - On Windows:
        ```bash
        start.bat
        ```

2. **Follow the on-screen instructions**:

    - Choose a color group from the list.
    - Enter a custom copyright name that will appear at the bottom of the generated image.
    - The tool will generate the image and save it in the root directory as `wick.png`.

## Customization

### Adding New Color Groups

You can easily add new color groups by editing the `colors.js` file. Each color group is defined as an object with a `name` and `colors` array. Simply add your new group and save the file.

Example:

```javascript
const colorGroups = {
  3: {
    name: "My Custom Colors",
    colors: [
      '#FF5733', '#33FF57', '#3357FF', // Add your colors here
      // ... more colors
    ]
  }
};
```

### Modifying the Tool

The main logic of the tool is in `index.js`. You can modify the script to fit your needs, whether it's adjusting the canvas size, changing the font style, or adding new features.

## Requirements

- **Node.js**: The tool requires Node.js to run. The `install.bat` script will install it for you if it's not already installed.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **[Canvas](https://github.com/Automattic/node-canvas)**: A powerful library used for rendering 2D graphics in Node.js.

## Connect with Wick Studio

- **Discord**: [discord.gg/wicks](https://discord.gg/wicks)
- **YouTube**: [Wick Studio](https://www.youtube.com/@wick_studio)

© 2024 Wick Studio. All rights reserved.