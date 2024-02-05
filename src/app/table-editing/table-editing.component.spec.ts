import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEditingComponent } from './table-editing.component';

describe('TableEditingComponent', () => {
  let component: TableEditingComponent;
  let fixture: ComponentFixture<TableEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableEditingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
