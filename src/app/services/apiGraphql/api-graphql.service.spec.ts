import { TestBed } from '@angular/core/testing';

import { ApiGraphqlService } from './api-graphql.service';

describe('ApiGraphqlService', () => {
  let service: ApiGraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGraphqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
