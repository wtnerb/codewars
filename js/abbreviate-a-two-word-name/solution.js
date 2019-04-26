'use strict'
function abbrevName(name){
    return name.replace(/^(\w)\w*\s(\w)\w*$/, '$1.$2').toUpperCase();
  }