import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineComponentComponent } from './combine-component.component';

describe('CombineComponentComponent', () => {
  let component: CombineComponentComponent;
  let fixture: ComponentFixture<CombineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
