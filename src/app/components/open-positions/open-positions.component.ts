import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Position } from '../../models/position';
import { OpenPositionsService } from '../../services/open-positions.service';

@Component({
  selector: 'app-open-positions',
  templateUrl: './open-positions.component.html',
  styleUrls: ['./open-positions.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

    this.positions.forEach((pos) => {
      if (!pos.requirements) {
        pos.requirements = this.extractRequirements(pos.description);
      }
      this.isCollapsed[pos.id] = false;
      this.showCandidateForm[pos.id] = false;
    });

    this.candidateForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      resume: [null],
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

  getPositionDescription(fullDescription: string): string {
    if (!fullDescription) return '';

    if (fullDescription.includes('Requisitos:')) {
      return fullDescription.split('Requisitos:')[0].trim();
    }

    const reqPatterns = [
      'requisitos:',
      'necessário:',
      'experiência em:',
      'conhecimento em:',
    ];

    for (const pattern of reqPatterns) {
      if (fullDescription.toLowerCase().includes(pattern)) {
        return fullDescription.split(new RegExp(pattern, 'i'))[0].trim();
      }
    }

    return fullDescription;
  }

  hasRequirements(position: Position): boolean {
    return (
      position.requirements !== undefined && position.requirements.length > 0
    );
  }

  private extractRequirements(description: string): string[] {
    if (!description) return [];

    let reqSection = '';

    if (description.includes('Requisitos:')) {
      reqSection = description.split('Requisitos:')[1].trim();
    } else {
      const reqPatterns = [
        'requisitos:',
        'necessário:',
        'experiência em:',
        'conhecimento em:',
      ];

      for (const pattern of reqPatterns) {
        if (description.toLowerCase().includes(pattern)) {
          reqSection = description.split(new RegExp(pattern, 'i'))[1].trim();
          break;
        }
      }
    }

    if (!reqSection) return [];
    let reqItems: string[] = [];
    if (reqSection.includes(',')) {
      reqItems = reqSection.split(',').map((item) => item.trim());
    } else if (reqSection.includes('.')) {
      reqItems = reqSection
        .split('.')
        .filter((item) => item.trim().length > 0)
        .map((item) => item.trim());
    } else if (reqSection.includes('-')) {
      reqItems = reqSection
        .split('-')
        .filter((item) => item.trim().length > 0)
        .map((item) => item.trim());
    } else {
      reqItems = reqSection
        .split(/[.;]/)
        .filter((item) => item.trim().length > 5)
        .map((item) => item.trim());
    }

    return reqItems.filter((item) => item.length > 0);
  }
}
