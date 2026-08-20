import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

function minLengthPersonalizada(longitud: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = control.value ?? '';

    return valor.length >= longitud
      ? null
      : {
          longitudPersonalizada: {
            requerida: longitud,
            actual: valor.length
          }
        };
  };
}

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class FormularioComponent {

  @Output() formularioEnviado = new EventEmitter<string>();

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          minLengthPersonalizada(3)
        ]
      ],
      comentario: [
        '',
        [
          Validators.required,
          minLengthPersonalizada(10)
        ]
      ]
    });
  }

  hasError(campo: string, error: string): boolean {
    const control = this.formulario.get(campo);

    return !!control &&
      control.touched &&
      control.hasError(error);
  }

  enviar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const nombre = this.formulario.get('nombre')?.value;

    this.formularioEnviado.emit(
      `Formulario enviado por ${nombre}`
    );

    this.formulario.reset();
  }
}