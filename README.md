This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Run Fuzzy Search app

This is an exercise for a fuzzy search implemented with React.

#### Run the app

1. Clone this repository ```git clone git@github.com:edgarmerlo/fuzzy-search.git```
2. Navigate to the directory project and install dependencies ```cd fuzzy-search``` ```yarn install```
3. Execute ```yarn start``` to run the project

#### Testing

For test run the command ```yarn test``` a coverage report should be shown

#### Dependencies

To bring a better UX the app uses the library Material Ui https://material-ui.com/ 

## Improvements and caveats

#### Max safe integer
At this moment the search is performed matching regex with strings so that, the limit for the maximum ammount in the ammount column is the ```MAX_SAFE_INTEGER``` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER

#### Date search
With this algorithm the match for date is only in exact format, so it will match dates with the format ```DD-MM-YYYY HH:MM``` this could be improved to many levels like searching by text with day or month.
