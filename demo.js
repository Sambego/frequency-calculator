import FrequencyCalculator from './frequency-calculator'

// FrequencyCalculator.calculateSteps('G', 4) === -2
// FrequencyCalculator.calculateFrequencyByNote('C', 0) === '16.35Hz'
// FrequencyCalculator.calculateFrequencyByStep(-12) === '220.00Hz'
// FrequencyCalculator.calculateStepsFromFrequency(415.30) === -1
// FrequencyCalculator.calculateNoteBySteps(-12) === 'A'
// FrequencyCalculator.calculateOctaveBySteps(-12) === -1
// FrequencyCalculator.calculateNoteByFrequency(440) === 'A'
// FrequencyCalculator.calculateOctaveByFrequency(440, false) === 4

console.log(`FrequencyCalculator.calculateSteps('G', 4) === -2`,
  FrequencyCalculator.calculateSteps('G', 4))
console.assert(FrequencyCalculator.calculateSteps('G', 4) === -2, 'failed')

console.log(`FrequencyCalculator.calculateFrequencyByNote('C', 0) === '16.35Hz'`,
  FrequencyCalculator.calculateFrequencyByNote('C', 0))
console.assert(FrequencyCalculator.calculateFrequencyByNote('C', 0) === 16.35, 'failed')

console.log(`FrequencyCalculator.calculateFrequencyByStep(-12) === '220.00Hz'`,
  FrequencyCalculator.calculateFrequencyByStep(-12))
console.assert(FrequencyCalculator.calculateFrequencyByStep(-12) === '220.00Hz', 'failed')

console.log(`FrequencyCalculator.calculateStepsFromFrequency(415.30) === -1`,
  FrequencyCalculator.calculateStepsFromFrequency(415.30))
console.assert(FrequencyCalculator.calculateStepsFromFrequency(415.30) === -1, 'failed')

console.log(`FrequencyCalculator.calculateNoteBySteps(-12) === 'A'`,
  FrequencyCalculator.calculateNoteBySteps(-12))
console.assert(FrequencyCalculator.calculateNoteBySteps(-12) === 'A', 'failed')

console.log(`FrequencyCalculator.calculateOctaveBySteps(-12) === -1`,
  FrequencyCalculator.calculateOctaveBySteps(-12))
console.assert(FrequencyCalculator.calculateOctaveBySteps(-12) === -1, 'failed')

console.log(`FrequencyCalculator.calculateNoteByFrequency(440) === 'A'`,
  FrequencyCalculator.calculateNoteByFrequency(440))
console.assert(FrequencyCalculator.calculateNoteByFrequency(440) === 'A', 'failed')

console.log(`FrequencyCalculator.calculateOctaveByFrequency(440, false) === 4`,
  FrequencyCalculator.calculateOctaveByFrequency(440, false))
console.assert(FrequencyCalculator.calculateOctaveByFrequency(440, false) === 4, 'failed')
