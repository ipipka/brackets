module.exports = function check(str, bracketsConfig) {

  const bracketOpen = bracketsConfig.map(item => item[0]);
  const bracketClose = bracketsConfig.map(item => item[1]);

  if (str.length % 2) return false;

  const bracketType = bracket => {
    // 0 open // 1 close // -1 unknown
    const openIndex = bracketOpen.indexOf(bracket);

    if (openIndex == -1) return 1;
    if (bracket == bracketClose[openIndex]) return -1;
    return 0;
  };

  let strParsing = [str[0]];

  for (let i = 1; i < str.length; i++) {
    let iType = bracketType(str[i]);

    if (iType == 0) {
      strParsing.push(str[i]);
    }

    else  {
      if(bracketOpen.indexOf(strParsing[strParsing.length - 1]) == bracketClose.indexOf(str[i])) {
        strParsing.pop();
      }
      else {
        if (iType == -1) {
          strParsing.push(str[i]);
        }
        else {
          return false;
        }
      }
    }
  }

  if (strParsing.length == 0) return true;
  return false;
}
