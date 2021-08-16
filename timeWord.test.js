
const {tConvert, convertHourToName, convertNumberToName} = require('./timeWord');

describe('#timeword', () => {
  test('tconvert changes to 12 hour time from 24 hour time', () => {
    expect(tConvert('18:00')).toBe('6:00PM');
  });
  test('convertsHourToName', () =>{
    expect(convertHourToName(6)).toBe('six')
  })
  test('convertsNumberToName', () =>{
    expect(convertNumberToName(30)).toBe("thirty")
  })

});