import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicListItemComponent } from './music-list-item.component';

describe('MusicListItemComponent', () => {
  let component: MusicListItemComponent;
  let fixture: ComponentFixture<MusicListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
