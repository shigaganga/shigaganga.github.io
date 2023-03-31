
var animal=["cat","dog","monkey","lion","tiger"+"<br>"];
animal.push("fox","cheetah");
document.write(animal+"<br>");
document.write(animal[1]+"<br>");
animal[1]="donkey";
document.write(animal+"<br>");
document.write(animal[1]+"<br>");
var x=animal.length;
document.write(x+"<br>");
for(var i=0;i<5;i++)
{
    document.write(animal[i]+"<br>");
}
animal[7]="elephent";
document.write(animal+"<br>");
animal.shift();
document.write(animal+"<br>");
animal.pop();
document.write(animal+"<br>");
animal.splice(2 ,1);
document.write(animal+"<br>");
animal.splice(2,4);
document.write(animal+"<br>");
var num =[20,60,10,50,30];
num.sort();
document.write(num+"<br>");
document.write(num[1]+num[0]);