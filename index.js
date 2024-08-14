const { createCanvas } = require('canvas');
const fs = require('fs');
const prompt = require('prompt-sync')();
const colorGroups = require('./colors');

console.log(`
██╗    ██╗██╗ ██████╗██╗  ██╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
██║    ██║██║██╔════╝██║ ██╔╝    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
██║ █╗ ██║██║██║     █████╔╝     ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
██║███╗██║██║██║     ██╔═██╗     ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
╚███╔███╔╝██║╚██████╗██║  ██╗    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
 ╚══╝╚══╝ ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ 
 discord.gg/wicks
`);
console.log('Color Palette Image Generator');

let exitTool = false;

while (!exitTool) {
    try {
        console.log('Main Menu :');
        console.log('1: Basic Colors');
        console.log('2: Specialized Colors');
        console.log('0: Exit the tool');

        const mainMenuOption = prompt('Please select an option (0 to exit) : ');

        if (mainMenuOption === '0') {
            console.log('Exiting the tool...');
            exitTool = true;
            continue;
        }

        let selectedGroup;
        
        if (mainMenuOption === '1') {
            console.log('Basic Colors :');
            console.log('1: Blues');
            console.log('2: Reds');
            console.log('3: Greens');
            console.log('4: Purples');
            console.log('0: Go back to Main Menu');

            const basicColorsOption = prompt('Please select a color group (0 to go back): ');

            if (basicColorsOption === '0') {
                continue;
            }

            selectedGroup = colorGroups[basicColorsOption];

        } else if (mainMenuOption === '2') {
            console.log('Specialized Colors :');
            let specializedOptions = [];
            let count = 1;

            for (let [key, group] of Object.entries(colorGroups)) {
                if (key > 4) {
                    console.log(`${count}: ${group.name}`);
                    specializedOptions.push({ key, name: group.name });
                    count++;
                }
            }
            console.log('0: Go back to Main Menu');

            const specializedColorsOption = prompt('Please select a color group (0 to go back) : ');

            if (specializedColorsOption === '0') {
                continue;
            }

            selectedGroup = colorGroups[specializedOptions[specializedColorsOption - 1].key];
        }

        if (!selectedGroup) {
            console.log('Invalid selection. Please try again.');
            continue;
        }

        const copyrightName = prompt('Please enter the copyright name to display : ');

        const colors = selectedGroup.colors;
        const width = 1100;
        const height = 1100;
        const rows = 10;
        const cols = 11;
        const circleRadius = 40;
        const padding = 10;

        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, width, height);

        colors.forEach((color, index) => {
            const x = (index % cols) * (circleRadius * 2 + padding) + circleRadius + padding;
            const y = Math.floor(index / cols) * (circleRadius * 2 + padding) + circleRadius + padding;

            ctx.beginPath();
            ctx.arc(x, y, circleRadius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();

            ctx.font = '32px Arial';
            ctx.fillStyle = '#000';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(index + 1, x, y);
        });

        ctx.font = '100px Arial';
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
        ctx.shadowBlur = 10;
        ctx.textAlign = 'center';
        ctx.fillText(copyrightName, width / 2, height - 120);

        const outputFileName = `Wick_${selectedGroup.name.toLowerCase().replace(' ', '_')}_colors.png`;
        const out = fs.createWriteStream(__dirname + '/' + outputFileName);
        const stream = canvas.createPNGStream();

        stream.pipe(out);
        out.on('finish', () => console.log(`The image "${outputFileName}" was created successfully.`));
    } catch (error) {
        console.log('Error:', error.message);
    }
}
