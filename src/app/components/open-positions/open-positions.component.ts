import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Position } from '../../models/position';
import { OpenPositionsService } from '../../services/open-positions.service';

@Component({
  selector: 'app-open-positions',
  templateUrl: './open-positions.component.html',
  styleUrls: ['./open-positions.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class OpenPositionsComponent implements OnInit {
  positions: Position[] = [];
  isCollapsed: { [id: number]: boolean } = {};
  showCandidateForm: { [id: number]: boolean } = {};
  candidateForm!: FormGroup;

  constructor(
    private positionsService: OpenPositionsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.positions = this.positionsService.getPositions();

    this.positions.forEach(pos => {
      this.isCollapsed[pos.id] = false;
      this.showCandidateForm[pos.id] = false;
    });

    this.candidateForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      resume: [null]
    });
  }

  toggleCollapse(positionId: number): void {
    this.isCollapsed[positionId] = !this.isCollapsed[positionId];
  }

  toggleCandidateForm(positionId: number): void {
    this.showCandidateForm[positionId] = !this.showCandidateForm[positionId];
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.candidateForm.patchValue({ resume: file });
  }

  submitForm(positionId: number): void {
    if (this.candidateForm.valid) {
      console.log('Vaga ID:', positionId);
      console.log('Dados do formulário:', this.candidateForm.value);

      this.candidateForm.reset();
      this.showCandidateForm[positionId] = false;
      alert('Candidatura enviada com sucesso!');
    }
  }
}
