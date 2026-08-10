import { UserRepository } from '../../src/modules/user/user.repository';
import { PrismaService } from '../../src/database/prisma.service';

describe('UserRepository', () => {
  let repository: UserRepository;
  let prismaService: PrismaService;

  beforeEach(() => {
    prismaService = {
      user: {
        create: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
        findMany: jest.fn(),
      },
    } as unknown as PrismaService;

    repository = new UserRepository(prismaService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userData = {
        email: 'test@example.com',
        passwordHash: 'hashedpassword',
        firstName: 'Test',
        lastName: 'User',
      };

      const expectedUser = { id: '123', ...userData };
      (prismaService.user.create as jest.Mock).mockResolvedValue(expectedUser);

      const result = await repository.createUser(userData as any);
      expect(result).toEqual(expectedUser);
      expect(prismaService.user.create).toHaveBeenCalledWith({ data: userData });
    });
  });

  describe('findByEmail', () => {
    it('should find a user by email', async () => {
      const email = 'test@example.com';
      const expectedUser = { id: '123', email, firstName: 'Test' };

      (prismaService.user.findUnique as jest.Mock).mockResolvedValue(expectedUser);

      const result = await repository.findByEmail(email);
      expect(result).toEqual(expectedUser);
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { email },
        include: { refreshTokens: true },
      });
    });
  });
});
