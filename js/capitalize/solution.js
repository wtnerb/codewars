function capitalize(s){
    let out = ['','']
    for (let i = 0; i < s.length; i ++){
      out[i%2] += s[i].toUpperCase();
      out[1 - i%2] += s[i];
    }
    return out;
  };

// this is the excessively long one liner. It works, but I would not want to read this code.
  function capitalize(s){
    return [s.replace(/(\w)(\w)?/g, (m, s1, s2 = '') => s1.toUpperCase() + s2), s.replace(/(\w)(\w)/g, (m, s1, s2) => s1 + s2.toUpperCase())];
  };