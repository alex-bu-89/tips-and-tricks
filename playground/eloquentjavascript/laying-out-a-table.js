"use strict";

/**
 * rowHeights
 * @param  {Array} rows
 * @return {int}
 */
let rowHeights = (rows) => {
  return rows.map((row) => {
    return row.reduce((max, cell) => {
      return Math.max(max, cell.minHeight());
    }, 0);
  })
};

/**
 * colWidths
 * @param  {Array} rows
 * @return {int}
 */
let colWidths = (rows) => {
  return rows[0].map((_, i) => {
    return rows.reduce((max, row) => {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
};

/**
 * drawTable
 * @param  {Array} rows
 * @return {Array}
 */
let drawTable = (rows) => {
  let heights = rowHeights(rows);
  let widths =  colWidths(rows);

  let drawLine = (blocks, lineNo) => {
    return blocks.map((block) => {
      return block[lineNo];
    }).join(' ');
  }

  let drawRow = (row, rowNum) => {
    let blocks = row.map((cell, colNum) => {
      return cell.draw(widths[colNum], heights[rowNum]);
    });

    return blocks[0].map((_, lineNo) => {
      return drawLine(blocks, lineNo);
    }).join('\n');
  }

  return rows.map(drawRow).join('\n');
};

let repeat = (string, times) => {
  var result = '';
  for(let i = 0; i < times; i++){
    result += string
  }
  return result;
};

function TextCell(text) {
  this.text = text.split('\n');
};

TextCell.prototype.minWidth = function() {
  return this.text.reduce((width, line) => {
    return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function() {
  return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
  let result = [];
  for (var i = 0; i < height; i++) {
    let line = this.text[i] || '';
    result.push(line + repeat(' ', width - line.length));
  }
  return result;
};

let rows = [];
for (var i = 0; i < 5; i++) {
  let row = [];
  for (var j = 0; j < 5; j++) {
    if((j+i) % 2 == 0){
      row.push(new TextCell('##'));
    } else {
      row.push(new TextCell(' '));
    }
  }
  rows.push(row)
}

console.log(drawTable(rows));
