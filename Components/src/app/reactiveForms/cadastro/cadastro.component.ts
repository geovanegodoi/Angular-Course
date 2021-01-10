import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { fromEvent, merge, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-forms-validaton';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ]
})

export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuarioModel: Usuario;
  formResult: string = "";  
  MASKS = MASKS;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage;

  constructor(private formBuilder: FormBuilder) { 
    this.criarMensagensDeValidacao();
  }

  ngOnInit(): void {
     this.criarFormGroup();  
  }

  ngAfterViewInit(): void {
    this.criarObservablesFormGroup();    
  }

  private criarMensagensDeValidacao() {
    this.validationMessages = {
      nome: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    }
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  private criarFormGroup() {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', MinhasValidacoes.Requerido()],
      cpf: ['', MinhasValidacoes.RequeridoComCpf()],
      email: ['', MinhasValidacoes.RequeridoComEmail()],
      senha: ['', MinhasValidacoes.RequeridoComRange(5, 10)],
      senhaConfirmacao: ['', MinhasValidacoes.RequeridoComRange(5, 10)]
    });
  }

  private criarObservablesFormGroup() {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
    
    merge(...controlBlurs).subscribe(()=>{
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    })
  }

  campoFalhouValidacao(nomeCampo: string) : boolean {
    let firstCondition  = this.cadastroForm.get(nomeCampo)?.errors != null;
    let secondCondition = this.cadastroForm.get(nomeCampo)?.touched == true;
    let thirdCondition  = this.cadastroForm.get(nomeCampo)?.dirty == true;

    return  firstCondition && (secondCondition || thirdCondition);
  }

  adicionarUsuario() {
    if (this.cadastroForm.valid) {
      this.usuarioModel = Object.assign({}, this.usuarioModel, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
      console.log(this.formResult);    
    }
    else {
      this.formResult = "Formulario invalido!!";
    }    
  }
}

export class MinhasValidacoes {
  static Requerido() : Validators[] { return [Validators.required]; }
  static RequeridoComTamanhoMinimo(minimo: number) : Validators[] { return [Validators.required, Validators.minLength(minimo)]; }
  static RequeridoComTamanhoMaximo(maximo: number) : Validators[] { return [Validators.required, Validators.maxLength(maximo)]; }
  static RequeridoComRange(minimo: number, maximo: number) : Validators[] { return [Validators.required, Validators.minLength(minimo), Validators.maxLength(maximo)]; }
  static RequeridoComCpf() : Validators[] { return [Validators.required, NgBrazilValidators.cpf]; }
  static RequeridoComEmail() : Validators[] { return [Validators.required, Validators.email]; }
}