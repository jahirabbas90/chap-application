import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnNewIndividualChatPage } from './en-new-individual-chat.page';

describe('EnNewIndividualChatPage', () => {
  let component: EnNewIndividualChatPage;
  let fixture: ComponentFixture<EnNewIndividualChatPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnNewIndividualChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnNewIndividualChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
