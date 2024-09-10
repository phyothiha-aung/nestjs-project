import { Module } from '@nestjs/common';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],
  providers: [PrismaService],
})
export class AppModule {}
