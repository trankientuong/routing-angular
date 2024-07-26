import { Component, computed, inject, Input, input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  // userId = input.required<string>();
  @Input({ required: true }) userId?: string;
  // @Input() 
  // set userId(uid: string) {
  //   console.log(uid);
  // }
  private usersService = inject(UsersService);

  get userName() {
    return this.usersService.users.find(u => u.id === this.userId)?.name;
  }

  // userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);
}
