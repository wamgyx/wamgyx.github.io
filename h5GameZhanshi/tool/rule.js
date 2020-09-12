const fs = require('fs');

const content = fs.readFileSync('rule.txt', 'utf-8');

const paragraghs = content.split('\n\n');

function indent(space) {
  let ret = ''
  while (--space) {
    ret += ' ';
  }
  return ret;
}

paragraghs.forEach(function (paragragh, idx) {
  console.log(indent(26) + '<p>');
  const lines = paragragh.split('\n');
  lines.forEach(function(line, lineNum) {
    if (lineNum) {
      console.log(indent(28) + '<br />' + line);
    } else {
      console.log(indent(28) + line);
    }
  })
  console.log(indent(26) + '</p>');
})
