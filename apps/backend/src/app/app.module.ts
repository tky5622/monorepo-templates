import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'node:path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TodoModule } from '../components/todo/todo.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemeFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
