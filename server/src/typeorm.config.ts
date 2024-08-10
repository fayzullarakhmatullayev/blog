import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from './user/user.entity'; // Adjust paths based on your project structure
import { Post } from './post/post.entity';
import { Category } from './category/category.entity';
import { Tag } from './tag/tag.entity';
import { Comment } from './comment/comment.entity';
import { Like } from './like/like.entity';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: parseInt(configService.get('DB_PORT')),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [User, Post, Category, Tag, Comment, Like],
  synchronize: true,
  logging: true,
});
