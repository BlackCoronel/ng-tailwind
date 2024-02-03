import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTailwindcssComponent } from './ng-tailwindcss.component';

describe('NgTailwindcssComponent', () => {
  let component: NgTailwindcssComponent;
  let fixture: ComponentFixture<NgTailwindcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTailwindcssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgTailwindcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
