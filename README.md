# Frequency calculator

This is a small, simple library to calculate the frequency of a music note.

To use this library, get the files with NPM or bower:
```
npm install frequency-calculator
```
or
```
bower install frequency-calculator
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

## TODO
- [ ] Write tests
- [ ] Create a demo

## The MIT License (MIT)
Copyright © 2016 Sam Bellen

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
