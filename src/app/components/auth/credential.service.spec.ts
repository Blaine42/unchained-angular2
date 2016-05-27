import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CredentialService } from './credential.service';

describe('Session Service', () => {
  beforeEachProviders(() => [CredentialService]);

  it('should ...',
      inject([CredentialService], (service: CredentialService) => {
    expect(service).toBeTruthy();
  }));
});
