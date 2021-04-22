# Asymm Cafe

## A JS script that handles a cafe orders

Hey there! This is a quick Node js script that handles the input of coffee beverages and outputs their respective ticket orders. This project uses a FIFO philosophy to tackle the order problem (I mean how it handles the order of beverages).

To run this project, run the

> $ npm run start

command. The script will handle both the `case1.json` and `case2.json` files in the `files` folder. After that, it will log the respective answers of both files in the console.

This project contains a small testing suite made in Jest, so, to run the test cases it is necessary to install the Jest npm package; to do that, run the

> npm i

command and then the
npm run test
command to run the tests

I wanted to keep this project as simple as possible, that's why I stuck with the FIFO answer rather to try to find something fancier. Regardless, I think that's the best way of serving coffee in any coffee shop (the FIFO approach I mean :D).

The project is divided into 3 main files, the `cafe.js` where the main function is stored, the `getBeverageTime.js` in the `helpers` folder that serves as a fetcher of brew time of the offered beverages and, finally, a `index.js` file that workes as the script's entry point. `cafe.js` contains the necessary comments to make the file as understandable as possible, still, if there are any problems in terms of clearability I apologize.
