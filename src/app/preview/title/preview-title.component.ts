import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'preview-title',
  template: '<ng-content></ng-content>',
  styleUrls: ['./preview-title.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TuiPreviewTitleComponent {}
