import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestContextService {
  public requestId: string = '';
  public userId: string = '';
  public userEmail: string = '';
  public userRole: string = '';
}
