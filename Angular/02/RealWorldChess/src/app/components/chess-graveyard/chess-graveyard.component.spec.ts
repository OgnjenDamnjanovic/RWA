import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessGraveyardComponent } from './chess-graveyard.component';

describe('ChessGraveyardComponent', () => {
  let component: ChessGraveyardComponent;
  let fixture: ComponentFixture<ChessGraveyardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessGraveyardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessGraveyardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
