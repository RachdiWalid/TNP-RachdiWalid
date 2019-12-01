import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheProduitComponent } from './recherche-produit.component';

describe('RechercheProduitComponent', () => {
  let component: RechercheProduitComponent;
  let fixture: ComponentFixture<RechercheProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
