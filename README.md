# Frequency calculator

This is a small, simple library to calculate the frequency of a music note.

To use this library, get the files with bower:
```
bower install
```

Once installed you can import the the library:
```javascript
import FrequencyCalculator from 'FrequencyCalculator'
```

Once imported you can calculate the frequency of a note by supplying the note name and octave:
```javascript
FrequencyCalculator.calculateFrequencyByNote('C', 0);
```

It is also possible to calculate the number of half steps between the base note (A4) and a given note:
```javascript
FrequencyCalculator.calculateSteps('C', 0);
```

If you know the number of half steps, you can also calculate the frequency based on these steps, this can be a negative number if the note is below the base note (A4):
```javascript
FrequencyCalculator.calculateFrequencyByStep(-12);
```
