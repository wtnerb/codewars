const butane = 'CH3CH2CH2CH3';
const magnesiumPhosphate = 'Mg3(PO4)2';
const sodiumSulfate = 'Na2SO4';
const testString = 'K4[ON(SO3)2]2';
// // function parseMolecule(formula) {
//   let out = {};
//   let thing = testString.replace(/([A-Z][a-z]?)([^0-9])/g, '$1' + '1$2').replace(/([A-Z][a-z]?)([^0-9])/g, '$1' + '1$2');
//   let unWrapParen = str => str.replace(/\((\w+)\)(\d+)/, multInside)
//   let multInside = (match, inner, multiplier) => inner.replace(/(\d+)/g, parseInt($1) * parseInt(multiplier))
  
//   let addToObj = (obj, key, value) => {
//     obj[key] ? obj[key] += value : obj[key] = value;
//   }

//   let countAtoms = (match,ele,quant) => {
//     quant = quant? quant : quant = 1;
//     addToObj (out, ele, parseInt(quant));
//   }
  
//   const r = /\((\w+?)\)(\d*)/
//   let replacer = (match, inner, mult) => {
//     for (let key in out) out[key] *= mult;
//     innerObj = parseMolecule(inner, mult);
//     for (key in innerObj) addToObj (out, key, innerObj[key]);
//     return ''
//   }

//   const regex = /([A-Z][a-z]?)(\d*)([\)])*/g;
  // while (/\(/.test(formula)) {
  //   formula = formula.replace(r, replacer);
  //   }
  // formula = formula.replace(regex, countAtoms);
  //for (let key in out) out[key] *= multiplier;
  // return out;}

// console.log('sodiumSulfate', parseMolecule(sodiumSulfate))
// console.log('magnesiumPhosphate', parseMolecule(magnesiumPhosphate))
// console.log(testString, parseMolecule(testString))

// forumla = formula.replace(/([A-Z][a-z]?)(\D)/, '$1' + '1$2')

parseMolecule = (formula, mult = 1) => {
  formula.replace(/[[{]/g, '(').replace(/[\]}]/g, ')')
  let out = {};
  const partReg = /\((.+)\)(\d*)/ //$1 will be string, $2 will be multiplier. will be greedy
  const atomReg = /([A-Z][A-z]*)(\d*)/ //$1 will be atom, $2 will be multiplier

  formula.replace(partReg, (match, inner, quant) => {
    let temp = parseMolecule(inner, quant);
    for (let key in temp) (out[key])? out[key]+= temp[key] : out[key] = temp[key];
    return '';
  });

  formula.replace(atomReg, (match, atom, num = 1) =>{
    out[atom]? (out[atom] += num) : (out[atom] = num);
    return ''});

  return out
}

greedyFindParen = str => {
  
}
// A version that almost worked. Could not easily handle things like (C5H5)Fe(CO)2CH3
// function parseMolecule(formula, multiplier = 1) {
//   formula = formula.replace (/\[|\{/, '(');
//   formula = formula.replace (/\]|\}/, ')');
//   let out = {};

//   let addToObj = (obj, key, value) => {
//     obj[key] ? obj[key] += value : obj[key] = value;
//   }

//   let countAtoms = function (match,ele,quant) {
//     quant = quant? quant : quant = 1;
//     addToObj (out, ele, parseInt(quant));
//   }
  
//   const r = /\((\w+?)\)(\d*)/
//   let replacer = (match, inner, mult) => {
//     for (let key in out) out[key] *= mult;
//     let innerObj = parseMolecule(inner, mult);
//     innerObj = multiply (innerObj, multiplier)
//     for (key in innerObj) addToObj (out, key, innerObj[key]);
//     return ''
//   }

//   let multiply = (obj, multiplier) => {
//     for (let key in obj) obj[key] *= multiplier;
//     return obj;
//   }

//   const regex = /([A-Z][a-z]?)(\d*)([\)])*/g;
//   while (/\(/.test(formula)) {
//     formula = formula.replace(r, replacer);
//     }
//   formula = formula.replace(regex, countAtoms);
//   return out;
// }


const test = () => { 
  console.log('sodiumSulfate', parseMolecule(sodiumSulfate))
  console.log('magnesiumPhosphate', parseMolecule(magnesiumPhosphate))
  console.log(testString, parseMolecule(testString))
}