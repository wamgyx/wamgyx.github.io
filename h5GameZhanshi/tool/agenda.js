const fs = require('fs');

let data = {
  /**
   * agenda: {
   *  date: '2019-12-13',
   *  match: [
   *    [0, 0, 0],
   *  ],
   */
}

function transfer(fileName) {
  const content = fs.readFileSync(fileName, 'utf-8');
  const lines = content.split('\n');

  // 58组匹配, 共30行
  if (lines.length != 31) {
    return
  }

  lines.forEach(function(line, lineNum) {
    const segs = line.split(',');
    if (lineNum == 0) {
      // 处理第一行数据, 阶段, 时间
      for (let i = 0; i < segs.length; i += 3) {
        console.log(segs[i]);
        data[segs[i]] = {
          date: segs[i+1],
          match: [],
        };
      }
      return
    }

    // 非第一行, 处理对阵数据
    for (let i = 0; i < segs.length; i += 3) {
      const agenda = getAgenda(i);
      console.log(agenda);
      const match = data[agenda].match;
      match.push([+segs[i], +segs[i+1], +segs[i+2]]);
    }
  });
}

function getColRange(agenda) {
  switch (agenda) {
    case 'rank':
      return [0, 2];
    case 'top16':
      return [3, 5];
    case 'top8':
      return [6, 8];
    case 'top4':
      return [9, 11];
    case 'top2':
      return [12, 14];
    case 'top':
      return [15, 17];
  }
}

function getAgenda(col) {
  if (col <= 2) {
    return 'rank';
  } else if (col <= 5) {
    return 'top16'
  } else if (col <= 8) {
    return 'top8'
  } else if (col <= 11) {
    return 'top4'
  } else if (col <= 14) {
    return 'top2'
  } else {
    return 'top'
  }
}

function getMatchNum(agenda) {
  switch (agenda) {
    case 'rank':
      return 29;
    case 'top16':
      return 16;
    case 'top8':
    case 'top4':
      return 4;
    case 'top2':
      return 2;
    case 'top':
      return 1;
  }
}

transfer('agenda1.csv')
console.log(JSON.stringify(data));
data = {}
transfer('agenda2.csv')
console.log(JSON.stringify(data));
