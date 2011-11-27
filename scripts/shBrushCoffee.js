SyntaxHighlighter.brushes.Coffee = function()
{
  var statement = 'return break continue throw';
  var repeat = 'for while until loop';
  var conditional = 'if else unless switch when then';
  var exception = 'try catch finally';
  var keyword = 'new in of by and or not is isnt class extends super own do';
  var operator = 'instanceof typeof delete';
  var global = 'null undefined';
  var special = 'this prototype arguments';

  this.regexList = [
  { regex: /@\w+/gm, css: 'color3' },
  { regex: /\w+:/gm, css: 'preprocessor' },
  { regex: /\<\u\w*\>/gm, css: 'constants' },
  { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'string' },
  { regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString, css: 'string' },
  { regex: new RegExp(this.getKeywords(statement), 'gmi'), css: 'color3' },
  { regex: new RegExp(this.getKeywords(repeat), 'gmi'), css: 'keyword' },
  { regex: new RegExp(this.getKeywords(conditional), 'gmi'), css: 'keyword' },
  { regex: new RegExp(this.getKeywords(exception), 'gmi'), css: 'color3' },
  { regex: new RegExp(this.getKeywords(keyword), 'gmi'), css: 'keyword' },
  { regex: new RegExp(this.getKeywords(operator), 'gmi'), css: 'keyword' },
  { regex: new RegExp(this.getKeywords(global), 'gmi'), css: 'value' },
  { regex: new RegExp(this.getKeywords(special), 'gmi'), css: 'script' }
  ];
};
SyntaxHighlighter.brushes.Coffee.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Coffee.aliases  = ['coffee', 'coffee-script'];
