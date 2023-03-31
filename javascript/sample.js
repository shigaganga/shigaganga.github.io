/*document.write("Hello world");
alert("hello");
console.log("learn javascrpt");
document.write("<h1>Hello javascript</h1>");*/
//single line comment
/* muliline comment*/
//variables and datatypes
//string,number,boolean,undefined,null
let name1="shiga";
document.write(name1 +"<br>");
//document.write(typeof name1);
name1="shaju";
document.write(name1+"<br>"); 
//number
var num1=10;
var num2=10.5;
document.write(num1+"<br>");
document.write(num2+"<br>");
document.write(num1+num2+"=sum"+"<br>");
//boolean
let html=false;
var js=true;
document.write(js+"<br>");
document.write(html+"<br>");
//undefined
let data;
document.write(data+"<br>");
//null
let num=null;
document.write(num+"<br>");
console.log(25);
//arithematic operations
//addition(+)
var a=10;
var b=50;
document.write(a+b+"<br>");
document.write(b-a+"<br>");
document.write(a*b+"<br>");
document.write(a/b+"<br>");
//modulus operator% sishtam
document.write(10%3+"<br>");//quotient is 1
//increment operator(++)adding 1//decrement operator(a--)
a++;
document.write(a+"<br>");
a--;
document.write(a+"<br>");
//exponentiation oprtr(**)
document.write(a**2+"<br>");
document.write(10**3+"<br>");
//assignment operator(=)
var x=10;
document.write(x+"<br>");
//add and assign(++,-=,*=,/=,%=)
var s=x-=4;
document.write(s+"<br>");
//comparison operators(==,>=,<=,===,!=,>,<)
var c=30;
var d=50;
//equal to==
document.write(a==b);
document.write(b==d);
//identical
document.write(a===b);
var e="30";
var f="30";
document.write(e===f);
  var g=30;//not invertedcoma so type different
  document.write(e===g);   
document.write(d>=f);
document.write(e!=g);   
document.write(d>f);
//logical operator
//logical AND(&&),logical OR(||),not(!)
var no1=25;
var no2=5;
document.write(no1==2 ||no2==5);
document.write(!(no2==45));