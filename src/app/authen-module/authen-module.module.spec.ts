import { AuthenModuleModule } from './authen-module.module';

describe('AuthenModuleModule', () => {
  let authenModuleModule: AuthenModuleModule;

  beforeEach(() => {
    authenModuleModule = new AuthenModuleModule();
  });

  it('should create an instance', () => {
    expect(authenModuleModule).toBeTruthy();
  });
});
