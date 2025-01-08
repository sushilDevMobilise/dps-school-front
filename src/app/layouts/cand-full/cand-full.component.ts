import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandHeaderComponent } from '../../modules/shared/cand-header/cand-header.component';
import { CandSidebarComponent } from '../../modules/shared/cand-sidebar/cand-sidebar.component';
import { CandFooterComponent } from '../../modules/shared/cand-footer/cand-footer.component';

@Component({
  selector: 'app-cand-full',
  standalone: true,
  imports: [RouterOutlet,CandHeaderComponent,CandSidebarComponent,CandFooterComponent],
  templateUrl: './cand-full.component.html',
  styleUrl: './cand-full.component.css'
})
export class CandFullComponent {

}
