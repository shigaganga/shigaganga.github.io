//inbuiltfunction(document.write,alerrt())
//userdefined function
/*function user(){
    document.write("goodmorning"+"<br>");
}
user();
user();*/
//argument and parameter(value)
function user(name){
    document.write("goodmorning"+name +"<br>");
}
user("shiga");
user("shaju");
function sum(num1,num2){
    document.write(num1+num2+"<br>");
}
sum(10 ,20);
sum(34.5,32.5);
//return value
function diff(num3,num4){
    return num3-num4;
}

var result=diff(40 ,20);
document.write(result);
var result=diff(140 ,20);
document.write(result);
function shiga(){
    console.log("hello world")
}
shiga();