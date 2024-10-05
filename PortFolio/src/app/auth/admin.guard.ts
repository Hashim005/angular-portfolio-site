import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router)

  const user = userService.getCurrentUser();
  if(user && user.role === 'admin'){
    // console.log("admin auth work");

    return true;
  }
  else{
    // console.log("admin auth not work");

    router.navigate(['/login']);
    return false;
  }

};
