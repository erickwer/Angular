import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
    primeiro_num :string;
    segundo_num :string;
    resultado: number;
    operacao: string;

    static readonly SOMA:string ='+';
    static readonly SUBTRACAO:string='-';
    static readonly DIVISAO:string='/';
    static readonly MULTIPLICACAO:string='*';

  constructor() {
   }

  ngOnInit() {
    this.limpar();
    
  }
  limpar():void{
    this.primeiro_num='0';
    this.segundo_num=null;
    this.resultado=null;
    this.operacao=null;
  }

  adicionarNumero(numero: string):void{
    if (this.operacao === null){
      this.primeiro_num = this.concatenaNum(this.primeiro_num,numero);
    }else{
      this.segundo_num = this.concatenaNum(this.segundo_num,numero);
    }
  }

  concatenaNum(numAtual:string, numConcat: string):string{
    //caso for 0 ou null, reinicia o valor
    if(numAtual ==="0"|| numAtual === null){
      numAtual = '';
    }
    // concatena 0 antes de . se o primeiro digito for .
    if (numConcat ==='.' && numAtual === ''){
      return '0.';
    }
    //caso '.' seja digitado novamente apenas retorna
    if(numConcat==='.' && numAtual.indexOf('.')>-1){
      return numAtual;
    }
    return numAtual+numConcat;
  }

  defOperacao(operacao:string):void{
      //se a operacão é vazia ela recebe ela mesma
      if(this.operacao ===null){
        this.operacao = operacao;
        return;
      }
      // se existir um segundo numero o calculo é chamado em cima da operação escolhida
      if (this.segundo_num !==null){
        this.resultado = this.resultadoOp(
          parseFloat(this.primeiro_num),
          parseFloat(this.segundo_num),
          this.operacao);
        this.operacao = operacao;
        this.primeiro_num = this.resultado.toString();
        this.segundo_num = null;
        this.resultado = null;
      }
    }

  
  resultadoOp(n1: number,n2: number, operacao: string): number {
    if (operacao=="SOMA"){
      this.resultado= n1+n2;
      this.primeiro_num = this.resultado.toString();
      this.segundo_num =null;
      this.operacao=null;
      return;
    }
    if (operacao=="SUBTRACAO"){
      this.resultado=  n1-n2;
      this.primeiro_num = this.resultado.toString();
      this.segundo_num =null;
      this.operacao=null;
      return;
    }
    if (operacao=="DIVISAO"){
      this.resultado=  n1/n2;
      this.primeiro_num = this.resultado.toString();
      this.segundo_num =null;
      this.operacao=null;
      return;
    }
    if (operacao=="MULTIPLICACAO"){
      this.resultado=  n1*n2;
      this.primeiro_num = this.resultado.toString();
      this.segundo_num =null;
      this.operacao=null;
      return;
    }
  }

  calcular():string {
    if (this.segundo_num== null){
      return;
    }

    this.resultadoOp( parseFloat(this.primeiro_num),
    parseFloat(this.segundo_num), this.operacao);
    

  } 

 get display(): string {
   if (this.resultado !== null){
     return this.resultado.toString();
   }
   if(this.segundo_num!==null){
     return this.segundo_num;
   } 
   return this.primeiro_num;
 }
}
