import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  title = 'CALCULADORA';
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;
  resultadon: string| null = null;;

  
  sumar():void{

      this.resultado=this.numero1+this.numero2;

  }

  restar():void{

    this.resultado=this.numero1-this.numero2;

}
multiplicar():void{

  this.resultado=this.numero1*this.numero2;

}
dividir():void{

  this.resultado=this.numero1/this.numero2;

}
porcentaje():void{

  this.resultado=this.numero1*(this.numero2/100);

}
potencia():void{

  this.resultado=this.numero1**this.numero2;

}
logaritmo():void{

  this.resultado=Math.log(this.numero1)/Math.log(this.numero2);

}
seno() {
  const anguloEnRadianes = this.numero1 * (Math.PI / 180);
  this.resultado = Math.sin(anguloEnRadianes);
}
coseno() {
  const anguloEnRadianes = this.numero1 * (Math.PI / 180);
  this.resultado = Math.cos(anguloEnRadianes);
}
tangente() {
  const anguloEnRadianes = this.numero1 * (Math.PI / 180);
  this.resultado = Math.tan(anguloEnRadianes);
}
arcoseno() {
  this.resultado = Math.asin(this.numero1) * (180 / Math.PI)
}
arcocoseno() {
  this.resultado = Math.acos(this.numero1) * (180 / Math.PI);
}
arcotangente() {
  this.resultado = Math.atan(this.numero1) * (180 / Math.PI);
}
NC() {
  this.resultadon = this.numero1.toExponential();
}
raiz() {
  this.resultado = Math.sqrt(this.numero1);
}

Factorial() {
  this.resultado = this.factorial(this.numero1);
}
factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * this.factorial(n - 1);
  }
}
}