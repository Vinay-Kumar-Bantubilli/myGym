import { CanActivateFn } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  var isUserOrAdmin = localStorage.getItem('isUserOrAdmin')
  if (isUserOrAdmin === 'admin'){
    return true;
  }
  alert("Sorry...! \nOnly admins can use this")
  return false;
};
