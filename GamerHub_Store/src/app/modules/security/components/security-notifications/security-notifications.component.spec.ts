import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityNotificationsComponent } from './security-notifications.component';

describe('SecurityNotificationsComponent', () => {
  let component: SecurityNotificationsComponent;
  let fixture: ComponentFixture<SecurityNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecurityNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
