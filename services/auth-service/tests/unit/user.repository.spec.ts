import { UserRepository } from '../../src/modules/user/user.repository';
import { PrismaService } from '../../src/database/prisma.service';
import { RedisService } from '../../src/database/redis.service';

describe('UserRepository with Redis', () => {
  let repository: UserRepository;
  let prismaService: PrismaService;
  let redisService: RedisService;

  beforeEach(() => {
    prismaService = {
      user: {
        create: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    } as unknown as PrismaService;

    redisService = {
      getJson: jest.fn(),
      setJson: jest.fn(),
      del: jest.fn(),
    } as unknown as RedisService;

    repository = new UserRepository(prismaService, redisService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should fetch user from cache if available', async () => {
    const email = 'cached@example.com';
    const cachedUser = { id: '123', email, firstName: 'Cached' };
    (redisService.getJson as jest.Mock).mockResolvedValue(cachedUser);

    const result = await repository.findByEmail(email);

    expect(result).toEqual(cachedUser);
    expect(redisService.getJson).toHaveBeenCalledWith(`user:email:${email}`);
    expect(prismaService.user.findUnique).not.toHaveBeenCalled();
  });
});
