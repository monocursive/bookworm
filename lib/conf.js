AccountsTemplates.configure({
  // Behaviour
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: true,
  overrideLoginErrors: true,
  sendVerificationEmail: false,

  // Appearance
  showAddRemoveServices: true,
  showForgotPasswordLink: true,
  showLabels: false,
  showPlaceholders: true,

  // Client-side Validation
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,

  // Privacy Policy and Terms of Use
  privacyUrl: 'privacy',
  termsUrl: 'terms-of-use',

  // Redirects
  homeRoutePath: '/',
  redirectTimeout: 4000
});


AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('changePwd');
