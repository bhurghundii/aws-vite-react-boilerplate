export const NavigationOptions = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export const ProfileNavigationOptions = [
  { name: "About Us", href: "#", id: "about_us_nav", current: false },
  { name: "Sign In", href: "login", id: "login_button", current: false },
];

export const ProtectedNavigationOptions = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ];
  
  export const ProtectedProfileNavigationOptions = [
    { name: "Your Profile", href: "#", id: "profile_nav", current: true },
    { name: "Sign out", href: "/aboutyou", id: "logout_button", current: false },
  ];
  