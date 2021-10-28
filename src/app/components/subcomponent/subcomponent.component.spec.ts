import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcomponentComponent } from './subcomponent.component';
import {AppComponent} from "../app/app.component";

describe('SubcomponentComponent', () => {
  let component: SubcomponentComponent;
  let fixture: ComponentFixture<SubcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render subscomponent', () => {
    const fixture = TestBed.createComponent(SubcomponentComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1.sub')?.textContent).toContain("subcomponent works!");
  });
});
