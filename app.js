var a = 2, b = 1;
var result = --a - --b+ ++b + b--;
/* Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; */
document.write("a is " + a);
document.write("<br>b is " + b);
document.write("<br>result is " + result);