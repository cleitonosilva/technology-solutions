import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CpfMaskDirective } from '../decorators/cpf-mask.directive';
import { PasswordStrengthDirective } from '../decorators/password-strength.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CpfMaskDirective,
    PasswordStrengthDirective,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  @ViewChild('successToast') toastEl!: ElementRef;
  private toast: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      cpf: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      if (this.toastEl) {
        const { Toast } = await import('bootstrap');
        this.toast = new Toast(this.toastEl.nativeElement, {
          animation: true,
          autohide: true,
          delay: 3000,
        });
      }
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.toast) {
        this.toast.dispose();
        this.toast = null;
      }
    }
  }


  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    if (isPlatformBrowser(this.platformId)) {
      if (this.toast) {
        this.toast.show();
      }
    }
  }
}
